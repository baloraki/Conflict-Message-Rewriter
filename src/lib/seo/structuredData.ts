const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://burnafterchat.app";

export function getWebAppStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Burn After Chat",
    alternateName: "Burn Chat",
    url: SITE_URL,
    description:
      "A private fake chat to vent before you react. Write the angry text, the drunk reply, the emotional draft, then delete it. Local-only, no account, no AI.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript and a modern browser.",
    isAccessibleForFree: true,
    image: `${SITE_URL}/opengraph-image`,
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Private fake chat that never leaves your browser",
      "Local-only — no account, no server, no AI",
      "One-tap permanent delete",
      "Calm Reply Composer with pre-written templates",
      "Crisis safety detection with offline keyword check",
    ],
    publisher: {
      "@type": "Organization",
      name: "Burn After Chat",
      url: SITE_URL,
    },
  };
}

export function getFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Burn After Chat",
    url: SITE_URL,
    logo: `${SITE_URL}/icons/icon-512x512.png`,
  };
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Burn After Chat",
    url: SITE_URL,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Burn After Chat",
    },
  };
}
