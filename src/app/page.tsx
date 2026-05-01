import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/product/FAQ";
import DisclaimerBox from "@/components/product/DisclaimerBox";
import {
  getWebAppStructuredData,
  getFAQStructuredData,
} from "@/lib/seo/structuredData";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Burn After Chat – Write the message you should not send",
  description:
    "A private fake chat for frustration, anger, and emotional drafts. Write it locally, don't send it, then delete it.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open a private chat",
    desc: 'Tap "Start a private dump". A fake chat opens. No account needed.',
  },
  {
    step: "02",
    title: "Write the raw version",
    desc: "Say everything you want to say. The raw, unfiltered version. Void listens and responds calmly.",
  },
  {
    step: "03",
    title: "Delete it when ready",
    desc: 'Tap "Delete chat". Messages are gone. They were never stored anywhere. Then decide what to actually do.',
  },
];

const USE_CASES = [
  {
    icon: "😤",
    title: "Before texting an ex",
    desc: "Write the message here first. Then delete it.",
  },
  {
    icon: "💼",
    title: "Before emailing your boss",
    desc: "Get the emotion out. Then write the professional version.",
  },
  {
    icon: "🏠",
    title: "After a family argument",
    desc: "Say what you couldn't say out loud. Then let it go.",
  },
  {
    icon: "📱",
    title: "Before replying on social media",
    desc: "Draft the response you should never post. Burn it.",
  },
  {
    icon: "💔",
    title: "After a breakup",
    desc: "Write what you wish you could say. Then decide if you should.",
  },
  {
    icon: "😰",
    title: "Before a stressful meeting",
    desc: "Put the anxiety into words. Clear your head first.",
  },
];

export default function HomePage() {
  const webAppData = getWebAppStructuredData();
  const faqData = getFAQStructuredData(FAQ_ITEMS);

  return (
    <>
      <Script
        id="structured-data-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-zinc-950 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 pt-16 pb-20 text-center">
          <Badge variant="orange" className="mb-6">
            �� Private. Local. No AI.
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-100 leading-tight mb-6 tracking-tight">
            Write the message
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              you should not send.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
            A private fake chat for anger, frustration, and emotional drafts.
            Nothing is sent. Nothing is saved. Delete it when you&apos;re done.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/chat">
              <Button size="lg" className="w-full sm:w-auto px-8">
                🔥 Start a private dump
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8"
              >
                How it works ↓
              </Button>
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600">
            No account. No server. No AI. Messages disappear on delete.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="max-w-3xl mx-auto px-4 py-14 text-center">
        <p className="text-2xl sm:text-3xl font-bold text-zinc-200 leading-snug mb-4">
          Sometimes you don&apos;t need to send the message.
          <br />
          <span className="text-zinc-400 font-normal">
            You just need somewhere to put the first version.
          </span>
        </p>
        <p className="text-zinc-500 text-base max-w-lg mx-auto leading-relaxed">
          Writing things down can help you pause before reacting. Burn After
          Chat gives you a private space to put your feelings into words, then
          delete them.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-100 text-center mb-10">
          How it works
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <Card key={item.step} className="text-center">
              <div className="text-orange-400 font-mono text-sm mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pause CTA */}
      <section className="max-w-3xl mx-auto px-4 py-14 text-center">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">
            A pause between emotion and action.
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto mb-8 leading-relaxed">
            Burn After Chat gives you a private place to write the raw version
            first, then delete it before it becomes damage. Designed to create
            space between what you feel and what you send.
          </p>
          <Link href="/chat">
            <Button size="lg">Start a private dump</Button>
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-100 text-center mb-10">
          For the message you&apos;ll regret later
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <Card key={uc.title} className="flex gap-4 p-4 items-start">
              <span className="text-2xl flex-shrink-0">{uc.icon}</span>
              <div>
                <h3 className="font-medium text-zinc-200 mb-1">{uc.title}</h3>
                <p className="text-zinc-400 text-sm">{uc.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <Card glass className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-3">
            Local by design
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed mb-6">
            Your messages stay in your browser memory only. No account. No
            server. No AI. No message history. Reloading or deleting the chat
            removes everything permanently.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "No account",
              "No server",
              "No AI",
              "No history",
              "No tracking",
            ].map((item) => (
              <Badge key={item} variant="zinc">
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-zinc-100 text-center mb-8">
          Frequently asked questions
        </h2>
        <FAQ />
      </section>

      {/* Disclaimer */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <DisclaimerBox />
      </section>
    </>
  );
}
