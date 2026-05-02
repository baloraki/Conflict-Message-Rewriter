"use client";

import ContactForm from "@/components/product/ContactForm";

export default function ContactPageContent() {
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
