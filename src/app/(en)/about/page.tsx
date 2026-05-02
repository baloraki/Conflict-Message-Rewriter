import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import AboutPageContent from "@/components/product/AboutPageContent";

export const metadata: Metadata = buildMetadata({
  title: "About – Burn After Chat",
  description:
    "Why Burn After Chat exists, why it is fake by design, and why deletion is the core feature.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
