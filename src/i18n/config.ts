export const LOCALES = ["en", "de", "tr", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  tr: "Türkçe",
  es: "Español",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  tr: "🇹🇷",
  es: "🇪🇸",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  tr: "tr_TR",
  es: "es_ES",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  de: "de",
  tr: "tr",
  es: "es",
};

export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_STORAGE_KEY = "preferred_locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
