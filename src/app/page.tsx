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
  getWebsiteStructuredData,
} from "@/lib/seo/structuredData";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Burn After Chat — Write the message you shouldn't send",
  description:
    "Private fake chat to vent before you react. Write the angry text, the drunk reply, the emotional draft — then burn it. Local-only, no account, no AI.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Burn After Chat — Write the message you shouldn't send",
    description:
      "Private fake chat to vent before you react. Local-only, no account, no AI. Burn it when you're done.",
    url: "/",
    type: "website",
  },
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open a private chat",
    desc: "One tap. No sign-up. A fake chat opens, just for you.",
  },
  {
    step: "02",
    title: "Write the raw version",
    desc: "Say everything you'd regret saying out loud. Void listens and replies calmly. No AI. No human.",
  },
  {
    step: "03",
    title: "Burn it",
    desc: "Tap delete. The chat is gone — permanently. Then decide what (if anything) to actually send.",
  },
];

const USE_CASES = [
  {
    icon: "😤",
    title: "Before texting an ex",
    desc: "Write the 2 a.m. message here first. Then let it disappear.",
  },
  {
    icon: "💼",
    title: "Before emailing your boss",
    desc: "Get the rant out. Then write the version that keeps your job.",
  },
  {
    icon: "🏠",
    title: "After a family argument",
    desc: "Say what you couldn't say out loud. Then let it go.",
  },
  {
    icon: "📱",
    title: "Before replying online",
    desc: "Draft the comment you should never post. Burn it.",
  },
  {
    icon: "💔",
    title: "After a breakup",
    desc: "Write what you wish you could say. Then decide if you really should.",
  },
  {
    icon: "🍷",
    title: "Before drunk-texting",
    desc: "Pour it into the void instead of into someone's inbox.",
  },
];

export default function HomePage() {
  const webAppData = getWebAppStructuredData();
  const faqData = getFAQStructuredData(FAQ_ITEMS);
  const websiteData = getWebsiteStructuredData();

  return (
    <>
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/30 via-zinc-950 to-zinc-950 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 pt-12 sm:pt-16 pb-16 sm:pb-20 text-center">
          <Badge variant="orange" className="mb-6">
            🔥 Private · Local · No AI
          </Badge>
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl sm:leading-tight font-extrabold text-zinc-100 mb-6 tracking-tight text-balance">
            Write the message
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              you shouldn&apos;t send.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mb-9 sm:mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
            A private fake chat for the message you&apos;d regret. Vent the
            angry text, the drunk reply, the 2 a.m. monologue — then burn it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/chat" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8">
                🔥 Start a private dump
              </Button>
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto">
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
            No account. No server. No AI. Delete = gone.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14 text-center">
        <p className="text-2xl sm:text-3xl font-bold text-zinc-200 leading-snug mb-4 text-balance">
          You don&apos;t always need to send the message.
          <br />
          <span className="text-zinc-400 font-normal">
            You just need somewhere to put the first version.
          </span>
        </p>
        <p className="text-zinc-500 text-base max-w-lg mx-auto leading-relaxed text-pretty">
          Most regrettable texts get sent in the first 60 seconds. Burn After
          Chat is the pause between feeling something and doing something about
          it.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-8 sm:mb-10 text-balance">
          How it works
        </h2>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
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

      {/* Use cases */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-3 text-balance">
          For the text you&apos;d regret tomorrow
        </h2>
        <p className="text-zinc-500 text-center text-sm sm:text-base mb-8 sm:mb-10 max-w-md mx-auto">
          Six things people use Burn After Chat for. The list is not exhaustive.
        </p>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <Card key={uc.title} className="flex gap-4 p-4 items-start">
              <span className="text-2xl flex-shrink-0">{uc.icon}</span>
              <div>
                <h3 className="font-medium text-zinc-200 mb-1">{uc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pause CTA */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14 text-center">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 sm:mb-4 text-balance">
            A pause between emotion and action.
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto mb-7 sm:mb-8 leading-relaxed text-pretty">
            Write the raw version first. Burn it before it becomes damage.
            Decide later — clear-headed, not heated.
          </p>
          <Link href="/chat">
            <Button size="lg">🔥 Start a private dump</Button>
          </Link>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <Card glass className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 text-balance">
            Local by design. Private by default.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6 text-pretty">
            Your chat lives in your browser only. No account, no server, no AI
            on the other end. Delete the chat — or close the tab — and it&apos;s
            gone.
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
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-6 sm:mb-8 text-balance">
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
