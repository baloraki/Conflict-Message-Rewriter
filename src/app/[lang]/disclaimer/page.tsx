import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import Card from "@/components/ui/Card";

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
    title: dictionary.meta.disclaimer.title,
    description: dictionary.meta.disclaimer.description,
    alternates: { canonical: `/${locale}/disclaimer` },
    openGraph: {
      title: dictionary.meta.disclaimer.title,
      description: dictionary.meta.disclaimer.description,
      url: `/${locale}/disclaimer`,
      type: "article",
    },
  };
}

export default async function DisclaimerPage({
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
  const { disclaimerPage } = dictionary;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        {disclaimerPage.title}
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        {disclaimerPage.intro}
      </p>

      <div className="space-y-8">
        {/* Danger Section */}
        <Card className="border-red-900/50 bg-red-950/20 p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-3">
            {disclaimerPage.danger.title}
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            {disclaimerPage.danger.body}
          </p>
        </Card>

        {/* Harm Section */}
        <Card className="border-orange-900/50 bg-orange-950/20 p-6">
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            {disclaimerPage.harm.title}
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            {disclaimerPage.harm.body}
          </p>
          <ul className="space-y-2">
            {disclaimerPage.harm.hotlines.map((hotline, idx) => (
              <li key={idx} className="text-zinc-300 text-sm">
                {hotline}
              </li>
            ))}
          </ul>
        </Card>

        {/* Abuse Section */}
        <Card className="border-red-900/50 bg-red-950/20 p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-3">
            {disclaimerPage.abuse.title}
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            {disclaimerPage.abuse.body}
          </p>
          <ul className="space-y-2">
            {disclaimerPage.abuse.hotlines.map((hotline, idx) => (
              <li key={idx} className="text-zinc-300 text-sm">
                {hotline}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
