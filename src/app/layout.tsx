import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burnafterchat.app";

const TITLE = "Burn After Chat — Write the message you shouldn't send";
const DESCRIPTION =
  "A private fake chat to vent before you react. Get the angry text, drunk reply, or emotional draft out of your system. Local-only, no account, no AI, deleted forever in one tap.";

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
    "burn after chat",
    "write the message you shouldn't send",
    "vent before you text",
    "private venting app",
    "fake chat to vent",
    "anger chat journal",
    "calm down before replying",
    "emotional draft message",
    "stop yourself from sending",
    "drunk text prevention",
    "rage text",
    "don't send that text",
    "burn after writing",
    "mental decluttering",
    "write angry message safely",
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
    <html lang="en">
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
      </body>
    </html>
  );
}
