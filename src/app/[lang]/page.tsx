import Link from "next/link";
import Script from "next/script";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/product/FAQ";
import DisclaimerBox from "@/components/product/DisclaimerBox";
import {
  getWebAppStructuredData,
  getFAQStructuredData,
  getWebsiteStructuredData,
  getHowToStructuredData,
} from "@/lib/seo/structuredData";
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
    title: dictionary.meta.home.title,
    description: dictionary.meta.home.description,
    alternates: { canonical: `/${locale}` },
    openGraph: {
      title: dictionary.meta.home.title,
      description: dictionary.meta.home.description,
      url: `/${locale}`,
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  const { home, faq } = dictionary;

  const webAppData = getWebAppStructuredData();
  const faqData = getFAQStructuredData(
    faq.map((item) => ({
      question: item.question,
      answer: item.answer,
    }))
  );
  const websiteData = getWebsiteStructuredData();
  const howToData = getHowToStructuredData();

  return (
    <>
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <Script
        id="structured-data-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }}
      />
      <Script
        id="structured-data-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/30 via-zinc-950 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 pt-12 sm:pt-16 pb-16 sm:pb-20 text-center">
          <Badge variant="orange" className="mb-6">
            {home.hero.badge}
          </Badge>
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl sm:leading-tight font-extrabold text-zinc-100 mb-6 tracking-tight text-balance">
            {home.hero.headline1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              {home.hero.headline2}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mb-9 sm:mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
            {home.hero.subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`/${locale}/chat`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8">
                {home.hero.ctaPrimary}
              </Button>
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8"
              >
                {home.hero.ctaSecondary}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600">
            {home.hero.smallPrint}
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 leading-snug mb-4 text-balance">
          {home.intro.headlineMain}
          <br />
          <span className="text-zinc-400 font-normal">
            {home.intro.headlineSub}
          </span>
        </h2>
        <p className="text-zinc-500 text-base max-w-lg mx-auto leading-relaxed text-pretty">
          {home.intro.body}
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-8 sm:mb-10 text-balance">
          {home.howItWorks.title}
        </h2>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          {home.howItWorks.steps.map((item) => (
            <Card key={item.step} className="text-center">
              <div className="text-orange-400 font-mono text-sm mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section
        id="use-cases"
        className="max-w-3xl mx-auto px-4 py-12 sm:py-14"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-3 text-balance">
          {home.useCases.title}
        </h2>
        <p className="text-zinc-500 text-center text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          {home.useCases.intro}
        </p>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {home.useCases.items.map((uc) => (
            <Card key={uc.title} className="flex gap-4 p-4 items-start">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">
                {uc.icon}
              </span>
              <div>
                <h3 className="font-medium text-zinc-200 mb-1">{uc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="who-its-for"
        className="max-w-3xl mx-auto px-4 py-12 sm:py-14"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-3 text-balance">
          {home.whoItsFor.title}
        </h2>
        <p className="text-zinc-500 text-center text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          {home.whoItsFor.intro}
        </p>
        <div className="grid gap-3 sm:gap-4">
          {home.whoItsFor.items.map((row) => (
            <Card key={row.title} className="p-5">
              <h3 className="font-semibold text-zinc-100 mb-2">{row.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{row.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-6 sm:mb-8 text-balance">
          {home.whyItWorks.title}
        </h2>
        <div className="text-zinc-300 leading-relaxed space-y-4">
          <p>{home.whyItWorks.paragraph1}</p>
          <p>{home.whyItWorks.paragraph2}</p>
          <p>
            {home.whyItWorks.paragraph3Pre}
            <Link href={`/${locale}/chat`} className="text-orange-400 hover:underline">
              {home.whyItWorks.paragraph3LinkBurn}
            </Link>
            {home.whyItWorks.paragraph3Mid}
            <Link
              href={`/${locale}/calm-reply`}
              className="text-orange-400 hover:underline"
            >
              {home.whyItWorks.paragraph3LinkCalm}
            </Link>
            {home.whyItWorks.paragraph3Post}
          </p>
        </div>
      </section>

      {/* Pause CTA */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14 text-center">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 sm:mb-4 text-balance">
            {home.pauseCta.title}
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto mb-7 sm:mb-8 leading-relaxed text-pretty">
            {home.pauseCta.body}
          </p>
          <Link href={`/${locale}/chat`}>
            <Button size="lg">{home.pauseCta.cta}</Button>
          </Link>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <Card glass className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 text-balance">
            {home.privacy.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6 text-pretty">
            {home.privacy.body}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {home.privacy.badges.map((item) => (
              <Badge key={item} variant="zinc">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-6 sm:mb-8 text-balance">
          {home.faq.title}
        </h2>
        <FAQ items={faq} />
      </section>

      {/* Disclaimer */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <DisclaimerBox translations={dictionary.disclaimerBox} locale={locale} />
      </section>
    </>
  );
}
