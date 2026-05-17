import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.meta.about.title,
    description: dictionary.meta.about.description,
    alternates: { canonical: absoluteUrl(`/${locale}/about`) },
    openGraph: {
      title: dictionary.meta.about.title,
      description: dictionary.meta.about.description,
      url: absoluteUrl(`/${locale}/about`),
      type: "article",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return null;
  }

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  const { about } = dictionary;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        {about.title}
      </h1>
      <p className="text-zinc-400 mb-10 text-lg">
        {about.intro}
      </p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        {about.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              {section.title}
            </h2>
            <div className="space-y-3 whitespace-pre-wrap">
              {section.body}
            </div>
          </section>
        ))}

        <Card className="text-center">
          <p className="text-zinc-400 text-sm mb-4">
            {about.cardQuote}
          </p>
          <Link href={`/${locale}/chat`}>
            <Button>{about.cardCta}</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
