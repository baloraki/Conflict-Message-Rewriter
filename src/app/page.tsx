import Link from "next/link";
import type { Metadata } from "next";
import { LOCALES, LOCALE_FLAGS, LOCALE_LABELS } from "@/i18n/config";
import { absoluteUrl, localizedAlternates } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl("/"),
    languages: localizedAlternates(),
  },
  openGraph: {
    url: absoluteUrl("/"),
  },
};

export default function RootPage() {
  return (
    <main className="min-h-dvh-screen flex items-center justify-center px-4">
      <nav aria-label="Language selector">
        <ul className="grid gap-3">
          {LOCALES.map((locale) => (
            <li key={locale}>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2 text-zinc-100 hover:bg-zinc-900"
              >
                <span aria-hidden="true">{LOCALE_FLAGS[locale]}</span>
                <span>{LOCALE_LABELS[locale]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
