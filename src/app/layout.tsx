import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://burnafterchat.app";

export const metadata: Metadata = {
  title: {
    default: "Burn After Chat – Write the message you should not send",
    template: "%s | Burn After Chat",
  },
  description:
    "A private fake chat for frustration, anger, and emotional drafts. Write it locally, don't send it, then delete it.",
  keywords: [
    "write message you should not send",
    "anger chat",
    "private venting app",
    "fake chat to vent",
    "emotional draft",
    "don't send angry text",
    "calm down before replying",
    "private frustration journal",
    "burn after writing",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Burn After Chat – Write the message you should not send",
    description:
      "A private fake chat for frustration, anger, and emotional drafts. Write it locally, don't send it, then delete it.",
    type: "website",
    url: siteUrl,
    siteName: "Burn After Chat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burn After Chat – Write the message you should not send",
    description:
      "A private fake chat for frustration, anger, and emotional drafts. Write it locally, don't send it, then delete it.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased">
        <Header />
        <main className="pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <Analytics />
      </body>
    </html>
  );
}
