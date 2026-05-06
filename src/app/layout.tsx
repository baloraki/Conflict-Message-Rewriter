import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burnafterchat.app";

const TITLE =
  "Burn After Chat — Vent Anger, Frustration & Stress Privately | No AI, No Account";
const DESCRIPTION =
  "Free private space to vent anger, frustration, stress and rage in a fake chat. Write the angry text to your ex, boss, partner, parents or that one coworker — then burn it. 100% local in your browser, no account, no AI, no tracking. Your unsent message dies when you tap delete.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s · Burn After Chat",
  },
  description: DESCRIPTION,
  applicationName: "Burn After Chat",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  category: "lifestyle",
  keywords: [
    // Brand
    "burn after chat",
    "burn chat",
    "burn after writing",
    // Core promise
    "write the message you shouldn't send",
    "vent before you text",
    "vent before you send",
    "vent before you react",
    "private venting app",
    "anonymous venting online",
    "anonymous vent space",
    "place to vent online",
    "where to vent anonymously",
    "online venting tool",
    "safe place to vent",
    "free venting app",
    "vent without judgement",
    // Anger / frustration / rage
    "anger release tool",
    "anger management app",
    "let out anger online",
    "release frustration online",
    "how to release pent up anger",
    "rage release app",
    "scream into the void",
    "shout into the void online",
    "rant anonymously",
    "online rant app",
    "let off steam online",
    "blow off steam app",
    "stress relief app",
    "emotional release tool",
    // Specific contexts (text someone)
    "fake chat to vent",
    "fake text app for venting",
    "fake messenger to vent",
    "pretend chat for feelings",
    "anger chat journal",
    "emotional draft message",
    "stop yourself from sending a text",
    "how to not send an angry text",
    "how to stop drunk texting",
    "drunk text prevention",
    "drunk texting alternative",
    "rage text simulator",
    "don't send that text",
    "unsent message journal",
    "draft messages you shouldn't send",
    "write angry message safely",
    "calm down before replying",
    "calm down before texting",
    // Relationship & life situations
    "vent about ex",
    "vent about boyfriend",
    "vent about girlfriend",
    "vent about husband",
    "vent about wife",
    "vent about partner",
    "vent about boss",
    "vent about coworker",
    "vent about your job",
    "vent about parents",
    "vent about family",
    "vent about friends",
    "vent about roommate",
    "vent after argument",
    "vent after breakup",
    "vent after fight",
    "vent after work",
    "vent late at night",
    // Workplace
    "calm reply to angry email",
    "draft a calm email",
    "rewrite angry message",
    "professional reply to rude email",
    // Online conflict
    "before posting on social media",
    "draft before tweeting",
    "comment you should not post",
    "stop yourself from posting",
    // Mental wellbeing
    "mental decluttering",
    "brain dump app",
    "thought dump online",
    "private digital journal",
    "anonymous diary online",
    "journal alternative",
    "emotional regulation tool",
    "pause before reacting",
    "cool off app",
    "cooling off period for messages",
    // Privacy
    "no account journal",
    "no sign up vent app",
    "no AI chat",
    "private writing tool",
    "local only writing app",
    "browser only vent app",
    // Multilingual reach (common venting queries)
    "wut rauslassen",
    "frust ablassen online",
    "anonym frust ablassen",
    "fake chat zum dampf ablassen",
    "wütende nachricht entwurf",
    "desahogarse online",
    "déverser sa colère",
    "sfogarsi online",
    "怒りを発散",
    "выпустить злость",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Burn After Chat" }],
  creator: "Burn After Chat",
  publisher: "Burn After Chat",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: siteUrl,
    siteName: "Burn After Chat",
    locale: "en_US",
    alternateLocale: ["en_GB", "de_DE", "es_ES", "fr_FR", "it_IT", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
    title: "Burn After Chat",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-950 text-zinc-100 min-h-dvh-screen font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-zinc-900 focus:text-zinc-100 focus:rounded-md focus:ring-2 focus:ring-orange-500"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-20 sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <Analytics />
        <SpeedInsights />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const LOCALES = ['en', 'de', 'tr', 'es'];
                const path = window.location.pathname;
                const lang = path.split('/')[1];

                // Update HTML lang and dir based on URL
                if (lang && LOCALES.includes(lang)) {
                  document.documentElement.lang = lang;
                  document.documentElement.dir = 'ltr';
                }

                // Sync localStorage preference to cookie if missing
                try {
                  const stored = localStorage.getItem('preferred_locale');
                  const cookieMatch = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
                  const cookieValue = cookieMatch ? cookieMatch[1] : null;

                  if (stored && LOCALES.includes(stored) && stored !== cookieValue) {
                    const oneYear = 60 * 60 * 24 * 365;
                    document.cookie = 'NEXT_LOCALE=' + stored + '; path=/; max-age=' + oneYear + '; SameSite=Lax';
                  }

                  // Save current URL locale to localStorage
                  if (lang && LOCALES.includes(lang)) {
                    localStorage.setItem('preferred_locale', lang);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
