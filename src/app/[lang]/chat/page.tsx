import FakeChat from "@/components/chat/FakeChat";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

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
    title: dictionary.meta.chat.title,
    description: dictionary.meta.chat.description,
    alternates: { canonical: `/${locale}/chat` },
    robots: { index: false, follow: false },
  };
}

export default async function ChatPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <FakeChat
      locale={locale}
      translations={dictionary.chat}
      fakeReplies={dictionary.fakeReplies}
      safetyKeywords={dictionary.safetyKeywords}
    />
  );
}
