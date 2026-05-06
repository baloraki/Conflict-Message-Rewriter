import ContactForm from "@/components/product/ContactForm";
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
    title: dictionary.meta.contact.title,
    description: dictionary.meta.contact.description,
    alternates: { canonical: `/${locale}/contact` },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        {dictionary.contactPage.title}
      </h1>
      <p className="text-zinc-400 mb-8">{dictionary.contactPage.intro}</p>
      <ContactForm translations={dictionary.contactForm} />
    </div>
  );
}
