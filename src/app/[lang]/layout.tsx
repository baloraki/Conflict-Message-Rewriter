import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, LOCALES, LOCALE_LABELS, OG_LOCALE, HTML_LANG } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burnafterchat.app";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    lang: locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: {
      default: dictionary.meta.layoutTitle,
      template: dictionary.meta.titleTemplate,
    },
    description: dictionary.meta.layoutDescription,
    applicationName: dictionary.meta.siteName,
    generator: "Next.js",
    referrer: "strict-origin-when-cross-origin",
    category: "lifestyle",
    keywords: dictionary.meta.keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        tr: `${siteUrl}/tr`,
        es: `${siteUrl}/es`,
      },
    },
    authors: [{ name: dictionary.meta.siteName }],
    creator: dictionary.meta.siteName,
    publisher: dictionary.meta.siteName,
    openGraph: {
      title: dictionary.meta.layoutTitle,
      description: dictionary.meta.layoutDescription,
      type: "website",
      url: `${siteUrl}/${locale}`,
      siteName: dictionary.meta.siteName,
      locale: OG_LOCALE[locale],
      alternateLocale: Object.values(OG_LOCALE),
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.layoutTitle,
      description: dictionary.meta.layoutDescription,
      creator: "@burnafterchat",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      title: dictionary.meta.siteName,
      statusBarStyle: "black-translucent",
    },
    icons: {
      icon: [
        { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/icons/apple-touch-icon.png",
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return children;
}
