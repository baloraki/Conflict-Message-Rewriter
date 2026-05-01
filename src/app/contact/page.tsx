import type { Metadata } from "next";
import ContactForm from "@/components/product/ContactForm";

export const metadata: Metadata = {
  title: "Contact – Burn After Chat",
  description: "Get in touch with the Burn After Chat team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">Contact</h1>
      <p className="text-zinc-400 mb-8">
        Have a question, feedback, or concern? Send us a message.
      </p>
      <ContactForm />
    </div>
  );
}
