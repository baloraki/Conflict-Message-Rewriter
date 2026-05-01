export function getWebAppStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Burn After Chat",
    description:
      "A private fake chat for frustration, anger, and emotional drafts. Write it locally, don't send it, then delete it.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
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
