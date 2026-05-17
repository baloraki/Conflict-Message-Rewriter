import Link from "next/link";
import CalmReplyComposer from "@/components/product/CalmReplyComposer";
import DisclaimerBox from "@/components/product/DisclaimerBox";
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
  if (!isLocale(lang)) return {};

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.meta.calmReply.title,
    description: dictionary.meta.calmReply.description,
    alternates: { canonical: absoluteUrl(`/${locale}/calm-reply`) },
    openGraph: {
      title: dictionary.meta.calmReply.title,
      description: dictionary.meta.calmReply.description,
      url: absoluteUrl(`/${locale}/calm-reply`),
      type: "website",
    },
  };
}

export default async function CalmReplyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link
          href={`/${locale}/chat`}
          className="text-zinc-500 text-sm hover:text-zinc-300 mb-4 inline-block"
        >
          {dictionary.calmReplyPage.backLink}
        </Link>
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">
          {dictionary.calmReplyPage.title}
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          {dictionary.calmReplyPage.intro}
        </p>
      </div>
      <CalmReplyComposer
        templates={dictionary.calmTemplates}
        translations={dictionary.calmReplyComposer}
      />
      <div className="mt-10">
        <DisclaimerBox
          compact
          locale={locale}
          translations={dictionary.disclaimerBox}
        />
      </div>
    </div>
  );
}
