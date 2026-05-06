const TASKS_GENAI_CDN_URL =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest";

const SYSTEM_PROMPT =
  "You are the Void in a private venting chat. Reply in 1 short sentence, calm and non-judgmental.";

type GenAiModule = {
  FilesetResolver?: {
    forGenAiTasks: (basePath?: string) => Promise<unknown>;
  };
  LlmInference?: {
    createFromOptions: (
      fileset: unknown,
      options: Record<string, unknown>,
    ) => Promise<{
      generateResponse: (input: string) => Promise<{ responseText?: string }>;
      close?: () => void;
    }>;
  };
};

let modelPromise: Promise<{
  generateResponse: (input: string) => Promise<{ responseText?: string }>;
  close?: () => void;
} | null> | null = null;

async function loadModule(): Promise<GenAiModule | null> {
  if (typeof window === "undefined") return null;

  try {
    const genAiLib = (await import(
      /* webpackIgnore: true */ TASKS_GENAI_CDN_URL
    )) as GenAiModule;
    return genAiLib;
  } catch {
    return null;
  }
}

async function getModel() {
  if (!modelPromise) {
    modelPromise = (async () => {
      const genAiLib = await loadModule();
      if (!genAiLib?.FilesetResolver || !genAiLib?.LlmInference) return null;

      try {
        const fileset = await genAiLib.FilesetResolver.forGenAiTasks();

        return await genAiLib.LlmInference.createFromOptions(fileset, {
          baseOptions: {
            modelAssetPath: "/models/gemma-2b-it.task",
          },
          maxTokens: 60,
          topK: 20,
          temperature: 0.8,
        });
      } catch {
        return null;
      }
    })();
  }

  return modelPromise;
}

export async function generateGenAiReply(userText: string): Promise<string | null> {
  const model = await getModel();
  if (!model) return null;

  try {
    const result = await model.generateResponse(
      `${SYSTEM_PROMPT}\n\nUser: ${userText}\nVoid:`,
    );

    const text = result.responseText?.trim();
    return text || null;
  } catch {
    return null;
  }
}
