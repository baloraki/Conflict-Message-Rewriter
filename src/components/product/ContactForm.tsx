"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";

interface ContactFormProps {
  translations: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    notConfigured: string;
  };
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accessKey) return;
    setStatus("sending");
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", accessKey);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const accessKeyPresent = Boolean(accessKey);

  if (!accessKeyPresent) {
    return (
      <div className="p-5 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-400 text-sm">
        {translations.notConfigured}
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="p-5 rounded-xl border border-green-800 bg-green-950/40 text-green-300">
        {translations.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">
          {translations.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          placeholder={translations.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">
          {translations.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          placeholder={translations.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">
          {translations.message}
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={translations.messagePlaceholder}
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm">{translations.error}</p>
      )}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full"
        size="lg"
      >
        {status === "sending" ? translations.sending : translations.submit}
      </Button>
    </form>
  );
}
