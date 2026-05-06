import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ShareSheet from "@/components/ui/ShareSheet";
import FAQ from "@/components/product/FAQ";
import DisclaimerBox from "@/components/product/DisclaimerBox";
import {
  getWebAppStructuredData,
  getFAQStructuredData,
  getWebsiteStructuredData,
  getHowToStructuredData,
} from "@/lib/seo/structuredData";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata: Metadata = {
  title:
    "Burn After Chat — Vent Anger, Frustration & Stress in a Private Fake Chat",
  description:
    "Free private space to vent anger, frustration, rage and stress. Write the angry text, drunk reply, or 2 a.m. monologue to anyone — your ex, boss, partner, parents, friends — then burn it. 100% local, no account, no AI, no tracking.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Burn After Chat — Vent Anger, Frustration & Stress in a Private Fake Chat",
    description:
      "Free, anonymous, browser-only space to let out anger and frustration without sending the message. No account, no AI, no trace. Burn it when you're done.",
    url: "/",
    type: "website",
  },
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open a private chat to vent",
    desc: "One tap. No sign-up, no email, no app to install. A fake chat opens in your browser, just for you.",
  },
  {
    step: "02",
    title: "Write the raw, unfiltered version",
    desc: "Say everything you'd regret saying out loud — to your ex, boss, parents, partner, anyone. Void listens and replies calmly. No AI. No human reading.",
  },
  {
    step: "03",
    title: "Burn it and let it go",
    desc: "Tap delete. The chat is gone — permanently and forever. Then decide what (if anything) to actually send in real life.",
  },
];

const USE_CASES = [
  {
    icon: "😤",
    title: "Before texting an ex",
    desc: "Write the 2 a.m. message you'd regret tomorrow. Pour it out here, then let it disappear. Don't be that person at sunrise.",
  },
  {
    icon: "💼",
    title: "Before emailing your boss",
    desc: "Get the workplace rant out of your system. Then write the version that keeps your job and your reputation.",
  },
  {
    icon: "🏠",
    title: "After a family argument",
    desc: "Say what you couldn't say to your parents, siblings, in-laws or kids. Then let the heat cool before anyone hears it.",
  },
  {
    icon: "📱",
    title: "Before replying online",
    desc: "Draft the comment, tweet or DM you should never post. Burn it before it lives forever in someone's screenshot.",
  },
  {
    icon: "💔",
    title: "After a breakup or fight",
    desc: "Write what you wish you could say to them. Get the heartbreak, anger and bargaining out — then decide if you really should send anything.",
  },
  {
    icon: "🍷",
    title: "Before drunk-texting",
    desc: "Pour it into the void instead of into their inbox. Your drunk thoughts deserve a safer landing pad than someone else's phone.",
  },
  {
    icon: "🤬",
    title: "After a customer service nightmare",
    desc: "Vent at the airline, the bank, the support agent who ruined your day — without your name attached to a complaint that goes nowhere.",
  },
  {
    icon: "🚗",
    title: "After a road-rage moment",
    desc: "Write the unhinged speech to the driver who cut you off. Burn it before it ruins the rest of your day.",
  },
  {
    icon: "🛏️",
    title: "When you can't sleep at 3 a.m.",
    desc: "Spiraling thoughts, replays of an old argument, things you wish you'd said — get them out of your head and into the void.",
  },
  {
    icon: "👯",
    title: "After friend-group drama",
    desc: "The group chat ruined your week? Draft the message you'd never actually send. Get it out, then move on with your life.",
  },
  {
    icon: "🏘️",
    title: "About your roommate or neighbor",
    desc: "The dishes, the noise, the parking spot. Vent it all here instead of starting a war you have to live next to.",
  },
  {
    icon: "🧠",
    title: "When you just need to vent",
    desc: "No specific person, no specific event. Just a brain dump of stress, anxiety, frustration. Write it out. Burn it. Breathe.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "People who text first and regret it later",
    desc: "If your phone has a 'sent message I'd take back' graveyard, this is the pause button you've been missing.",
  },
  {
    title: "Anyone with a difficult ex, boss, or family member",
    desc: "When the person who triggers you is also the person you can't fully cut off, you need somewhere to put the words you can't say.",
  },
  {
    title: "Overthinkers and late-night spiralers",
    desc: "If your brain rehearses arguments at 2 a.m., write them out instead of looping. Then burn them.",
  },
  {
    title: "People in therapy — between sessions",
    desc: "A no-cost, no-judgement, anytime place to put the thought you'll bring up next week. (This is not therapy itself.)",
  },
  {
    title: "Anyone who refuses to journal in the cloud",
    desc: "Notes apps sync. Diaries can be found. This lives in your browser tab and dies when you close it.",
  },
];

export default function HomePage() {
  const webAppData = getWebAppStructuredData();
  const faqData = getFAQStructuredData(FAQ_ITEMS);
  const websiteData = getWebsiteStructuredData();
  const howToData = getHowToStructuredData();

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
        id="structured-data-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
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
            A private fake chat to vent anger, frustration and stress before you
            react. Get the angry text, the drunk reply, the late-night
            monologue, the rant about your boss, ex, or family out of your
            system — then burn it.
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
            <ShareSheet size="lg" className="w-full sm:w-auto" />
          </div>
          <p className="mt-6 text-xs text-zinc-600">
            No account. No server. No AI. Delete = gone.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 leading-snug mb-4 text-balance">
          You don&apos;t always need to send the message.
          <br />
          <span className="text-zinc-400 font-normal">
            You just need somewhere to put the first version.
          </span>
        </h2>
        <p className="text-zinc-500 text-base max-w-lg mx-auto leading-relaxed text-pretty">
          Most regrettable texts get sent in the first 60 seconds of feeling
          angry, hurt or frustrated. Burn After Chat is the pause between
          feeling something and doing something about it — a private place to
          let out frustration without losing a friend, a job, or your
          self-respect.
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
      <section
        id="use-cases"
        className="max-w-3xl mx-auto px-4 py-12 sm:py-14"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-3 text-balance">
          When to use Burn After Chat to vent
        </h2>
        <p className="text-zinc-500 text-center text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          Twelve real situations where people open this app to let out anger,
          frustration or stress instead of sending the message. The list is not
          exhaustive — anywhere you feel the urge to react, this works.
        </p>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <Card key={uc.title} className="flex gap-4 p-4 items-start">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">
                {uc.icon}
              </span>
              <div>
                <h3 className="font-medium text-zinc-200 mb-1">{uc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section
        id="who-its-for"
        className="max-w-3xl mx-auto px-4 py-12 sm:py-14"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-3 text-balance">
          Who Burn After Chat is for
        </h2>
        <p className="text-zinc-500 text-center text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          If you&apos;ve ever wished for a place to scream into the void, write
          an unsent letter, or rehearse the conversation you&apos;ll never have
          — you&apos;re in the right tab.
        </p>
        <div className="grid gap-3 sm:gap-4">
          {WHO_ITS_FOR.map((row) => (
            <Card key={row.title} className="p-5">
              <h3 className="font-semibold text-zinc-100 mb-2">{row.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{row.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="max-w-3xl mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-6 sm:mb-8 text-balance">
          Why writing it out — then deleting it — actually helps
        </h2>
        <div className="text-zinc-300 leading-relaxed space-y-4">
          <p>
            The urge to send a message in the heat of the moment isn&apos;t
            weakness — it&apos;s how human emotion is wired. Anger, hurt and
            frustration all push you toward action: <em>say it now, fix it
            now</em>. The problem is that &quot;now&quot; is almost never the
            version of you that should be writing.
          </p>
          <p>
            Putting the raw thoughts into words — without anyone reading,
            without an algorithm interpreting, without a screenshot risk —
            creates a tiny gap between feeling and doing. That gap is where
            regret stops being inevitable. You see what you almost sent. You
            decide whether the calmer version is enough. Most of the time, it
            is.
          </p>
          <p>
            Then you{" "}
            <Link href="/chat" className="text-orange-400 hover:underline">
              burn the chat
            </Link>
            . The point isn&apos;t to keep a record of every angry thought.
            The point is to release it somewhere that isn&apos;t a real
            person&apos;s inbox. If you want a calmer version to actually send,
            our{" "}
            <Link
              href="/calm-reply"
              className="text-orange-400 hover:underline"
            >
              Calm Reply Composer
            </Link>{" "}
            offers pre-written templates for saying no, setting a boundary, or
            asking for space — without AI.
          </p>
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
