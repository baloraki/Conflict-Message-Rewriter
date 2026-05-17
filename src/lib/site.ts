import { LOCALES, DEFAULT_LOCALE } from "@/i18n/config";

export function normalizeSiteUrl(url: string): string {
  const parsed = new URL(url);
  parsed.hash = "";
  parsed.search = "";
  return parsed.origin;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://dontsend.org"
);

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function localizedAlternates() {
  const languages = Object.fromEntries(
    LOCALES.map((locale) => [locale, absoluteUrl(`/${locale}`)])
  ) as Record<(typeof LOCALES)[number], string>;

  return {
    ...languages,
    "x-default": absoluteUrl(`/${DEFAULT_LOCALE}`),
  };
}
