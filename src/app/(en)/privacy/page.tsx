import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import PrivacyPageContent from "@/components/product/PrivacyPageContent";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy – Burn After Chat",
  description:
    "How Burn After Chat handles your data. Spoiler: it does not collect any.",
});

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
