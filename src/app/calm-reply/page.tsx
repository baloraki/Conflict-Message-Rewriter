import type { Metadata } from "next";
import Link from "next/link";
import CalmReplyComposer from "@/components/product/CalmReplyComposer";
import DisclaimerBox from "@/components/product/DisclaimerBox";

export const metadata: Metadata = {
  title:
    "Calm Reply Composer — Rewrite an Angry Message Into a Calm One (No AI)",
  description:
    "Free templates to rewrite an angry text into a calmer version. Pick a situation — saying no, setting a boundary, asking for space, declining an invite, apologising, replying to a rude email — and copy a clear, professional, calm message. No AI, no backend, no account.",
  alternates: { canonical: "/calm-reply" },
  openGraph: {
    title:
      "Calm Reply Composer — Rewrite an Angry Message Into a Calm One (No AI)",
    description:
      "Pre-written calm reply templates for hard messages: boundaries, refusals, apologies, replies to rude emails. No AI. No backend. Just practical phrasing you can copy.",
    url: "/calm-reply",
    type: "website",
  },
};

export default function CalmReplyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link
          href="/chat"
          className="text-zinc-500 text-sm hover:text-zinc-300 mb-4 inline-block"
        >
          ← Back to chat
        </Link>
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">
          Rewrite an angry message into a calm one
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Choose what you need to communicate — saying no, setting a boundary,
          asking for space, declining politely, apologising, or replying to a
          rude email. We&apos;ll suggest a few calm, clear templates you can
          copy and adapt to your situation. No AI. No backend. Just practical
          phrasing that keeps the relationship — and your reputation — intact.
        </p>
      </div>
      <CalmReplyComposer />
      <div className="mt-10">
        <DisclaimerBox compact />
      </div>
    </div>
  );
}
