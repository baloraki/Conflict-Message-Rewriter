import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title:
    "About Burn After Chat — Why a Fake Chat Is the Safest Place to Vent",
  description:
    "Why Burn After Chat exists: a private fake chat for venting anger and frustration without sending. Why the recipient is fake, why we use no AI, and why permanent deletion is the whole point of the app.",
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Burn After Chat — Why a Fake Chat Is the Safest Place to Vent",
    description:
      "Fake recipient. No AI. Deletion is the feature. Here's why a private vent space without an audience or algorithm beats screaming into a real inbox.",
    url: "/about",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        About Burn After Chat
      </h1>
      <p className="text-zinc-400 mb-10 text-lg">
        A private space to vent anger, frustration and stress — and why a fake
        chat with no audience and no AI is the safest version of that.
      </p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Why this app exists
          </h2>
          <p>
            Most regrettable messages are sent in the heat of the moment. The
            text you send at 2 a.m. to your ex, the reply you fire off at your
            boss when you&apos;re furious, the comment you post about a friend,
            the rant you send to the family group chat — these are almost
            always messages you wish you could take back.
          </p>
          <p className="mt-3">
            Burn After Chat gives you a place to write the first version. The
            raw, ugly, honest one. The one you&apos;d absolutely regret in the
            morning. You write it here instead of there. Then you decide, with a
            calmer head, what — if anything — to actually send.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Why it&apos;s fake by design
          </h2>
          <p>
            The recipient — Void — is not real. There is no AI on the other
            end, no chatbot, no person. This is intentional. A real recipient
            would change what you write. Knowing no one is reading gives you
            permission to write the unfiltered version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Why no AI is used
          </h2>
          <p>
            AI would require your messages to be sent to a server. That would
            immediately compromise the core privacy promise. Nothing you type
            here leaves your device. The fake replies are pre-written, local,
            and deliberately simple — calm acknowledgment without pretending to
            understand you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Why deletion is the core feature
          </h2>
          <p>
            The point is not to archive your emotions. The point is to put them
            somewhere that isn&apos;t a real person&apos;s inbox, then let them
            go. The delete moment is designed to feel like a release, not just a
            technical action.
          </p>
        </section>

        <Card className="text-center">
          <p className="text-zinc-400 text-sm mb-4">
            &ldquo;A private space to put your feelings into words.&rdquo;
          </p>
          <Link href="/chat">
            <Button>Try it now</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
