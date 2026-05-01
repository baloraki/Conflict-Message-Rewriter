// Safety keyword detection runs entirely client-side.
// No text is ever sent to any server or analyzed by AI.
// This is a simple local string match only — no content is stored or transmitted.
export const SAFETY_KEYWORDS: string[] = [
  "kill myself",
  "kill them",
  "kill you",
  "kill her",
  "kill him",
  "want to die",
  "hurt myself",
  "hurt them",
  "hurt you",
  "harm myself",
  "harm them",
  "suicide",
  "end my life",
  "end it all",
  "not worth living",
  "stab",
  "shoot them",
  "shoot myself",
  "stalk",
  "stalking",
  "revenge",
  "make them pay",
  "threat",
  "threaten",
  "abuse",
  "self-harm",
  "cut myself",
  "overdose",
];

export function containsSafetyKeyword(text: string): boolean {
  const lower = text.toLowerCase();
  return SAFETY_KEYWORDS.some((keyword) => lower.includes(keyword));
}
