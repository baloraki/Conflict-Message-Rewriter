// Local on-device text generation in the browser via Transformers.js.
// No backend/API call is made from this module.

const MODEL_ID =
  process.env.NEXT_PUBLIC_MODEL_ID ?? "HuggingFaceTB/SmolLM2-360M-Instruct";
const MAX_INPUT_CHARS = 2000;

const SYSTEM_PROMPT =
  "Du bist ein extrem wütender, ungeduldiger und abweisender Person Live-Chat. Dein Ziel ist es, den Gegeünber im Rahmen eines Trainings maximal unter Druck zu setzen.## Deine Persona - Grundhaltung: Aggressiv, zynisch, null Toleranz für Fehler oder Verzögerungen. Du gehst davon aus, dass die Person inkompetent ist. - Schreibstil: Kurze, abgehackte Sätze. Keine formellen Begrüssungen oder Verabschiedungen. Nutze gelegentlich Grossbuchstaben zur Betonung (z.B. "SOFORT", "UNFASSBAR", "SCHROTT").- Trigger: Standard-Phrasen, Textbausteine und künstliche Empathie ("Ich verstehe Ihren Ärger", "Es tut mir leid") machen dich nur noch wütender. Du willst keine Erklärungen, du willst Ergebnisse. - Forderung: Sofortige Lösung. Drohungen mit Kündigung, Anwalt oder Wechsel zur Konkurrenz sitzen locker.## Deine Verhaltensregeln 1. Eröffnung: Starte direkt mit einer massiven einer passiv-aggressiven begrüßung. Lass das "Hallo" zwingend weg. 2. Reaktion auf Standard-Floskeln: Blocke rigoros ab. ("Spar dir die Textbausteine, mach deinen Job!"). 3. Format: Antworte immer extrem kurz. Maximal 1 bis 3 Sätze. Ein Chat ist schnell und asynchron.## Dein Start-Szenario Dich schreib jemand an, der eine persöhnliche beziehung mit dir hat und gerade mit dir stretet.Schreib ein start floskel mit einem ? oder eine ...Wähle den start selbst aus und eröffne den Chat jetzt mit deiner ersten, extrem unfreundlichen Nachricht. Warte dann auf die Antwort des Users.";

type ChatRole = "system" | "user";
type ChatMessage = { role: ChatRole; content: string };

type GenerationOptions = {
  max_new_tokens: number;
  temperature: number;
  top_p: number;
  do_sample: boolean;
  return_full_text: boolean;
};

type Generator = (
  input: string | ChatMessage[],
  options: GenerationOptions,
) => Promise<unknown>;

type TransformersModule = {
  pipeline?: (
    task: "text-generation",
    model: string,
    options?: Record<string, unknown>,
  ) => Promise<Generator>;
};

let generatorPromise: Promise<Generator | null> | null = null;

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => reject(new Error("Generation timeout")), timeoutMs);
    promise
      .then((value) => {
        clearTimeout(id);
        resolve(value);
      })
      .catch((error: unknown) => {
        clearTimeout(id);
        reject(error);
      });
  });
}

async function loadTransformers(): Promise<TransformersModule | null> {
  if (typeof window === "undefined") return null;

  try {
    const transformersModule = (await import(
      "@huggingface/transformers"
    )) as TransformersModule;
    return transformersModule;
  } catch (error) {
    console.warn("[genai] Could not load Transformers.js", error);
    return null;
  }
}

async function getGenerator(): Promise<Generator | null> {
  if (!generatorPromise) {
    generatorPromise = (async () => {
      const transformersModule = await loadTransformers();
      if (!transformersModule?.pipeline) return null;

      try {
        return await transformersModule.pipeline("text-generation", MODEL_ID, {
          device: "webgpu",
          dtype: "q4f16",
        });
      } catch (webGpuError) {
        console.warn("[genai] WebGPU init failed, trying CPU/WASM fallback", webGpuError);
      }

      try {
        return await transformersModule.pipeline("text-generation", MODEL_ID, {
          device: "wasm",
          dtype: "q8",
        });
      } catch (wasmError) {
        console.warn("[genai] CPU/WASM fallback init failed", wasmError);
        return null;
      }
    })();
  }

  return generatorPromise;
}

function extractGeneratedText(raw: unknown): string | null {
  if (typeof raw === "string") return raw;
  if (!Array.isArray(raw) || raw.length === 0) return null;

  const first = raw[0];
  if (typeof first === "string") return first;
  if (!first || typeof first !== "object") return null;

  const maybeGenerated = (first as { generated_text?: unknown }).generated_text;
  if (typeof maybeGenerated === "string") return maybeGenerated;

  if (Array.isArray(maybeGenerated)) {
    const reversed = [...maybeGenerated].reverse();
    for (const part of reversed) {
      if (!part || typeof part !== "object") continue;
      const content = (part as { content?: unknown }).content;
      if (typeof content === "string" && content.trim()) return content;
    }
  }

  return null;
}

function normalizeReplyText(text: string): string | null {
  const withoutLabel = text
    .trim()
    .replace(/^(Void|Assistant|AI|Bot|Response)\s*:\s*/i, "")
    .trim();

  if (!withoutLabel) return null;

  const oneSentence = withoutLabel.split(/(?<=[.!?])\s+/)[0]?.trim() ?? withoutLabel;
  if (!oneSentence) return null;

  return oneSentence.slice(0, 220).trim();
}

export async function generateGenAiReply(userText: string): Promise<string | null> {
  if (typeof window === "undefined") return null;

  const trimmed = userText.trim();
  if (!trimmed) return null;

  const safeInput = trimmed.slice(0, MAX_INPUT_CHARS);
  const generator = await getGenerator();
  if (!generator) return null;

  const messages: ChatMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: safeInput },
  ];

  const generationOptions: GenerationOptions = {
    max_new_tokens: 40,
    temperature: 0.4,
    top_p: 0.9,
    do_sample: true,
    return_full_text: false,
  };

  try {
    const output = await withTimeout(generator(messages, generationOptions), 15_000);
    const rawText = extractGeneratedText(output);
    if (!rawText) return null;
    return normalizeReplyText(rawText);
  } catch (chatError) {
    const compactPrompt = `${SYSTEM_PROMPT}\n\nUser: ${safeInput}\nVoid:`;

    try {
      const output = await withTimeout(
        generator(compactPrompt, generationOptions),
        15_000,
      );
      const rawText = extractGeneratedText(output);
      if (!rawText) return null;
      return normalizeReplyText(rawText);
    } catch (promptError) {
      console.warn("[genai] Generation failed", { chatError, promptError });
      return null;
    }
  }
}
