const TASKS_GENAI_CDN_URL =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest";
const TASKS_GENAI_WASM_PATH =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm";

const SYSTEM_PROMPT =
  "You are the Void in a private venting chat. Reply in 1 short sentence, calm and non-judgmental.";

type LlmResponse = { responseText?: string };

type LlmInferenceInstance = {
  generateResponse: (
    input: string,
    callback?: (partialResult: string, done: boolean) => void,
  ) => Promise<LlmResponse> | void;
  close?: () => void;
};

type GenAiModule = {
  FilesetResolver?: {
    forGenAiTasks: (basePath?: string) => Promise<unknown>;
  };
  LlmInference?: {
    createFromOptions: (
      fileset: unknown,
      options: Record<string, unknown>,
    ) => Promise<LlmInferenceInstance>;
  };
};

let modelPromise: Promise<LlmInferenceInstance | null> | null = null;

async function loadModule(): Promise<GenAiModule | null> {
  if (typeof window === "undefined") return null;

  try {
    const genAiLib = (await import(
      /* webpackIgnore: true */ TASKS_GENAI_CDN_URL
    )) as GenAiModule;
    return genAiLib;
  } catch (error) {
    console.warn("[genai] Could not load @mediapipe/tasks-genai", error);
    return null;
  }
}

async function getModel() {
  if (!modelPromise) {
    modelPromise = (async () => {
      const genAiLib = await loadModule();
      if (!genAiLib?.FilesetResolver || !genAiLib?.LlmInference) return null;

      try {
        const fileset = await genAiLib.FilesetResolver.forGenAiTasks(
          TASKS_GENAI_WASM_PATH,
        );

        return await genAiLib.LlmInference.createFromOptions(fileset, {
          baseOptions: {
            modelAssetPath: "/models/gemma-2b-it.task",
          },
          maxTokens: 60,
          topK: 20,
          temperature: 0.8,
          randomSeed: 42,
        });
      } catch (error) {
        console.warn("[genai] Could not initialize LLM inference", error);
        return null;
      }
    })();
  }

  return modelPromise;
}

async function generateWithCallbackApi(
  model: LlmInferenceInstance,
  prompt: string,
): Promise<string | null> {
  return new Promise((resolve) => {
    let text = "";

    try {
      model.generateResponse(prompt, (partialResult, done) => {
        text += partialResult;
        if (done) resolve(text.trim() || null);
      });
    } catch {
      resolve(null);
    }

    setTimeout(() => resolve(text.trim() || null), 8_000);
  });
}

export async function generateGenAiReply(userText: string): Promise<string | null> {
  const model = await getModel();
  if (!model) return null;

  const prompt = `${SYSTEM_PROMPT}\n\nUser: ${userText}\nVoid:`;

  try {
    const maybePromise = model.generateResponse(prompt);
    if (maybePromise && typeof (maybePromise as Promise<LlmResponse>).then === "function") {
      const result = await (maybePromise as Promise<LlmResponse>);
      const text = result.responseText?.trim();
      return text || null;
    }
  } catch {
    // try callback style API next
  }

  return generateWithCallbackApi(model, prompt);
}
