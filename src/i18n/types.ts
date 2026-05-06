import type { CalmSituation } from "@/lib/calm/types";

export interface PageMeta {
  title: string;
  description: string;
}

export interface UseCaseItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CardItem {
  title: string;
  desc: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface AboutSection {
  title: string;
  body: string;
}

export interface SimpleSection {
  title: string;
  body: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export type CalmTemplatesByKey = Record<
  CalmSituation,
  { label: string; templates: string[] }
>;

export interface ImprintAddressBlock {
  name: string;
  street: string;
  city: string;
  country: string;
}

export interface ImprintSection {
  title: string;
  body?: string;
  address?: ImprintAddressBlock;
  emailLabel?: string;
}

export interface ImprintPage {
  title: string;
  subtitle: string;
  emailEncoded: string;
  sections: ImprintSection[];
}

export interface Dictionary {
  meta: {
    home: PageMeta;
    about: PageMeta;
    chat: PageMeta;
    calmReply: PageMeta;
    contact: PageMeta;
    disclaimer: PageMeta;
    privacy: PageMeta;
    terms: PageMeta;
    imprint: PageMeta;
    titleTemplate: string;
    siteName: string;
    keywords: string[];
    keywordsHome: string;
    layoutTitle: string;
    layoutDescription: string;
  };
  layout: {
    skipToContent: string;
    htmlDirection: "ltr" | "rtl";
  };
  header: {
    homeAria: string;
    nav: { about: string; privacy: string };
    ctaFull: string;
    ctaShort: string;
  };
  footer: {
    tagline: string;
    links: {
      about: string;
      privacy: string;
      terms: string;
      disclaimer: string;
      contact: string;
      imprint: string;
    };
    disclaimer: string;
  };
  mobileNav: {
    home: string;
    chat: string;
    calm: string;
    about: string;
  };
  languageSwitcher: {
    label: string;
  };
  home: {
    hero: {
      badge: string;
      headline1: string;
      headline2: string;
      subhead: string;
      ctaPrimary: string;
      ctaSecondary: string;
      smallPrint: string;
    };
    intro: {
      headlineMain: string;
      headlineSub: string;
      body: string;
    };
    howItWorks: {
      title: string;
      steps: HowItWorksStep[];
    };
    useCases: {
      title: string;
      intro: string;
      items: UseCaseItem[];
    };
    whoItsFor: {
      title: string;
      intro: string;
      items: CardItem[];
    };
    whyItWorks: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3Pre: string;
      paragraph3LinkBurn: string;
      paragraph3Mid: string;
      paragraph3LinkCalm: string;
      paragraph3Post: string;
    };
    pauseCta: {
      title: string;
      body: string;
      cta: string;
    };
    privacy: {
      title: string;
      body: string;
      badges: string[];
    };
    faq: { title: string };
  };
  about: {
    title: string;
    intro: string;
    sections: AboutSection[];
    cardQuote: string;
    cardCta: string;
  };
  calmReplyPage: {
    backLink: string;
    title: string;
    intro: string;
  };
  contactPage: {
    title: string;
    intro: string;
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    notConfigured: string;
  };
  privacyPage: {
    title: string;
    lastUpdated: string;
    sections: SimpleSection[];
  };
  imprintPage: ImprintPage;
  termsPage: {
    title: string;
    lastUpdated: string;
    sections: SimpleSection[];
  };
  disclaimerPage: {
    title: string;
    intro: string;
    danger: { title: string; body: string };
    harm: {
      title: string;
      body: string;
      hotlines: string[];
    };
    abuse: {
      title: string;
      body: string;
      hotlines: string[];
    };
  };
  disclaimerBox: {
    full: string;
    fullLink: string;
    compact: string;
    compactLink: string;
  };
  chat: {
    voidName: string;
    statusPrivate: string;
    placeholder: string;
    sendAria: string;
    deleteBtn: string;
    deleteAria: string;
    backAria: string;
    messagesAria: string;
    inputAria: string;
    emptyState: string;
    privacyPill: string;
    safety: {
      title: string;
      body: string;
      learnMore: string;
      dismiss: string;
    };
    deleteDialog: {
      title: string;
      body: string;
      keep: string;
      burn: string;
      closeAria: string;
    };
    burning: string;
    gone: string;
    after: {
      headline: string;
      subheadline: string;
      body: string;
      again: string;
      calmer: string;
      leave: string;
    };
    typingAria: string;
  };
  calmReplyComposer: {
    promptText: string;
    chooseTemplate: string;
    differentSituation: string;
    copy: string;
    copied: string;
  };
  calmTemplates: CalmTemplatesByKey;
  fakeReplies: string[];
  safetyKeywords: string[];
  faq: FaqEntry[];
}
