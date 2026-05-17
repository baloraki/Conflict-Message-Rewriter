import { SITE_URL, absoluteUrl } from "@/lib/site";

export function getWebAppStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Burn After Chat",
    alternateName: ["Burn Chat", "BurnAfterChat", "Burn After Writing"],
    url: SITE_URL,
    description:
      "A private fake chat to vent anger, frustration, stress and rage before you react. Write the angry text to your ex, boss, partner, parents or anyone — then burn it. 100% local in your browser, no account, no AI, no tracking, no trace.",
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Mental Wellbeing",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript and a modern browser.",
    isAccessibleForFree: true,
    image: absoluteUrl("/opengraph-image"),
    inLanguage: ["en", "de", "es", "fr", "it", "pt"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Private fake chat that never leaves your browser",
      "Anonymous venting with no account or sign-up",
      "Local-only by design — no server, no database, no AI",
      "One-tap permanent delete to burn the chat",
      "Calm Reply Composer with pre-written templates for hard messages",
      "Drunk-text and rage-text prevention through friction",
      "Offline crisis-keyword safety check with hotline resources",
      "Works on any phone, tablet or computer",
      "Installable as a Progressive Web App",
    ],
    keywords:
      "vent anger, vent frustration, vent stress, anonymous venting, anger release, drunk text prevention, fake chat, private chat, burn chat, write the message you shouldn't send",
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
    logo: absoluteUrl("/icons/icon-512x512.png"),
  };
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Burn After Chat",
    alternateName: "Vent Anonymously, Then Burn It",
    url: SITE_URL,
    inLanguage: "en",
    description:
      "Free private space to vent anger, frustration and stress in a fake chat that lives only in your browser. No account, no AI, no trace.",
    publisher: {
      "@type": "Organization",
      name: "Burn After Chat",
    },
  };
}

export function getHowToStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to vent anger without sending a message you'll regret",
    description:
      "A three-step process for letting out anger, frustration or stress safely — without damaging a relationship, your job, or your reputation.",
    totalTime: "PT3M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [
      { "@type": "HowToSupply", name: "Any device with a web browser" },
      { "@type": "HowToSupply", name: "Three minutes of privacy" },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Burn After Chat private fake chat",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open a private chat to vent",
        text: "Open Burn After Chat in your browser. No sign-up, no email, no account. A fake chat opens instantly, just for you.",
        url: absoluteUrl("/en/chat"),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Write the raw, unfiltered version",
        text: "Type the angriest, pettiest, most honest version of what you want to say — to your ex, boss, partner, parent, friend, or anyone. Void replies calmly. No AI, no human is reading.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Burn the chat and let it go",
        text: "Tap delete. The chat is gone permanently. Then decide, with a calmer head, whether anything actually needs to be sent in real life.",
      },
    ],
  };
}

export function getSoftwareAppStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Burn After Chat",
    operatingSystem: "Web, iOS (PWA), Android (PWA)",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: undefined,
    description:
      "Private, anonymous, browser-only space to vent anger and frustration before sending a message you'd regret.",
  };
}
