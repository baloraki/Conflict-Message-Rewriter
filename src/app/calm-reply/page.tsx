import type { Metadata } from "next";
import Link from "next/link";
import CalmReplyComposer from "@/components/product/CalmReplyComposer";
import DisclaimerBox from "@/components/product/DisclaimerBox";

export const metadata: Metadata = {
  title: "Calm Reply Composer — Write a calmer version",
  description:
    "Pick a situation. Get a calm, clear message template you can copy. Say no, set a boundary, ask for space, or apologise — without AI.",
  alternates: { canonical: "/calm-reply" },
  openGraph: {
    title: "Calm Reply Composer — Write a calmer version",
    description:
      "Pre-written calm templates for hard messages. No AI. No backend. Just practical phrasing.",
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
          Write a calmer version
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Choose what you need to communicate. We&apos;ll suggest a few calm,
          clear templates you can copy and adapt. No AI. No backend. Just
          practical phrasing.
        </p>
      </div>
      <CalmReplyComposer />
      <div className="mt-10">
        <DisclaimerBox compact />
      </div>
    </div>
  );
}
