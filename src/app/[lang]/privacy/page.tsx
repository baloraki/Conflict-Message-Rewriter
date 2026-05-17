import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
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
    title: dictionary.meta.privacy.title,
    description: dictionary.meta.privacy.description,
    alternates: { canonical: absoluteUrl(`/${locale}/privacy`) },
    openGraph: {
      title: dictionary.meta.privacy.title,
      description: dictionary.meta.privacy.description,
      url: absoluteUrl(`/${locale}/privacy`),
      type: "article",
    },
  };
}

export default async function PrivacyPage({
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
  const { privacyPage } = dictionary;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        {privacyPage.title}
      </h1>
      <p className="text-zinc-500 text-sm mb-8">{privacyPage.lastUpdated}</p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        {privacyPage.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              {section.title}
            </h2>
            <p className="whitespace-pre-wrap">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
