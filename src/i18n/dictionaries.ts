import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./locales/en").then((m) => m.dictionary),
  de: () => import("./locales/de").then((m) => m.dictionary),
  tr: () => import("./locales/tr").then((m) => m.dictionary),
  es: () => import("./locales/es").then((m) => m.dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
