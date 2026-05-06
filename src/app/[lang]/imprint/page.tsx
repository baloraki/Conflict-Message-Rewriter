import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { ObfuscatedEmail } from "@/components/ui/ObfuscatedEmail";

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
    title: dictionary.meta.imprint.title,
    description: dictionary.meta.imprint.description,
    alternates: { canonical: `/${locale}/imprint` },
    robots: { index: false, follow: true },
    openGraph: {
      title: dictionary.meta.imprint.title,
      description: dictionary.meta.imprint.description,
      url: `/${locale}/imprint`,
      type: "article",
    },
  };
}

export default async function ImprintPage({
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
  const { imprintPage } = dictionary;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        {imprintPage.title}
      </h1>
      <p className="text-zinc-500 text-sm mb-8">{imprintPage.subtitle}</p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        {imprintPage.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-semibold text-zinc-100 mb-3">
              {section.title}
            </h2>
            {section.body && (
              <p className="whitespace-pre-wrap">{section.body}</p>
            )}
            {section.address && (
              <address className="not-italic text-zinc-300 space-y-1 mt-2">
                <p>{section.address.name}</p>
                <p>{section.address.street}</p>
                <p>{section.address.city}</p>
                <p>{section.address.country}</p>
              </address>
            )}
            {section.emailLabel && (
              <p>
                {section.emailLabel}{" "}
                <ObfuscatedEmail
                  encoded={imprintPage.emailEncoded}
                  className="text-orange-400 hover:underline"
                />
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
