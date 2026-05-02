"use client";

import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import {
  validateContactForm,
  isValid,
  type ContactFormFields,
  type ContactFormErrors,
} from "@/lib/validation";

const INPUT_CLASS =
  "w-full rounded-xl bg-zinc-800 border text-zinc-100 placeholder-zinc-500 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all";

const EMPTY: ContactFormFields = { name: "", email: "", subject: "", message: "" };

type TouchedFields = Partial<Record<keyof ContactFormFields, boolean>>;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-400">{msg}</p>;
}

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);
    if (touched[name as keyof ContactFormFields]) {
      setErrors(validateContactForm(updated));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof ContactFormFields;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validateContactForm({ ...fields, [name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const validationErrors = validateContactForm(fields);
    setErrors(validationErrors);
    if (!isValid(validationErrors) || !accessKey) return;

    setStatus("sending");
    try {
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", fields.name.trim());
      formData.append("email", fields.email.trim());
      formData.append("subject", fields.subject.trim());
      formData.append("message", fields.message.trim());
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (!accessKey) {
    return (
      <div className="p-5 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-400 text-sm">
        Contact form is not configured yet.
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="p-5 rounded-xl border border-green-800 bg-green-950/40 text-green-300 space-y-1">
        <p className="font-semibold">Message sent ✓</p>
        <p className="text-sm text-green-400">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* honeypot – hidden from real users, catches bots */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${INPUT_CLASS} ${errors.name && touched.name ? "border-red-500" : "border-zinc-700"}`}
          placeholder="Your name"
        />
        <FieldError msg={touched.name ? errors.name : undefined} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${INPUT_CLASS} ${errors.email && touched.email ? "border-red-500" : "border-zinc-700"}`}
          placeholder="your@email.com"
        />
        <FieldError msg={touched.email ? errors.email : undefined} />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-zinc-400 mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={fields.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${INPUT_CLASS} ${errors.subject && touched.subject ? "border-red-500" : "border-zinc-700"}`}
          placeholder="What's this about?"
        />
        <FieldError msg={touched.subject ? errors.subject : undefined} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.message && touched.message ? "border-red-500" : undefined}
          placeholder="Your message…"
        />
        <FieldError msg={touched.message ? errors.message : undefined} />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full"
        size="lg"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      <p className="text-xs text-zinc-500 text-center leading-relaxed">
        Your message is submitted via{" "}
        <a
          href="https://web3forms.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-300 transition-colors"
        >
          Web3Forms
        </a>
        . See our{" "}
        <Link href="/privacy" className="underline hover:text-zinc-300 transition-colors">
          Privacy Policy
        </Link>{" "}
        for details on how your data is handled.
      </p>
    </form>
  );
}
