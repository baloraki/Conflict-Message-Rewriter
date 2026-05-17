import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import ContactPageContent from "@/components/product/ContactPageContent";

export const metadata: Metadata = buildMetadata({
  title: "Contact – Burn After Chat",
  description: "Get in touch with the Burn After Chat team.",
  canonicalPath: "/en/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
