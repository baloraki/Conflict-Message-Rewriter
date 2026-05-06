import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface FooterProps {
  locale: Locale;
  translations: {
    tagline: string;
    links: {
      about: string;
      privacy: string;
      terms: string;
      disclaimer: string;
      contact: string;
      imprint: string;
    };
    disclaimer: string;
  };
}

export default function Footer({ locale, translations }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔥</span>
              <span className="font-bold text-zinc-200">Burn After Chat</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              {translations.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
            <Link href={`/${locale}/about`} className="hover:text-zinc-300 transition-colors">
              {translations.links.about}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-zinc-300 transition-colors"
            >
              {translations.links.privacy}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="hover:text-zinc-300 transition-colors"
            >
              {translations.links.terms}
            </Link>
            <Link
              href={`/${locale}/disclaimer`}
              className="hover:text-zinc-300 transition-colors"
            >
              {translations.links.disclaimer}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hover:text-zinc-300 transition-colors"
            >
              {translations.links.contact}
            </Link>
            <Link
              href={`/${locale}/imprint`}
              className="hover:text-zinc-300 transition-colors"
            >
              {translations.links.imprint}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-600 leading-relaxed">
          <p>{translations.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
