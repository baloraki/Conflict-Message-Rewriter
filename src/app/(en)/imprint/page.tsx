import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import ImprintPageContent from "@/components/product/ImprintPageContent";
import { getImprintContactData } from "@/lib/imprint";

export const metadata: Metadata = buildMetadata({
  title: "Imprint – Burn After Chat",
  description: "Legal information and imprint for Burn After Chat.",
  index: false,
  canonicalPath: "/en/imprint",
  openGraphType: "article",
});

export default function ImprintPage() {
  const contact = getImprintContactData();
  return <ImprintPageContent contact={contact} />;
}
