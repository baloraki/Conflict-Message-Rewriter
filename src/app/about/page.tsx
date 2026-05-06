import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Why Burn After Chat is fake by design",
  description:
    "Why this app exists, why the recipient is fake, why no AI is used, and why deletion is the whole point.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Why Burn After Chat is fake by design",
    description:
      "Fake recipient. No AI. Deletion is the feature. Here's why we built it that way.",
    url: "/about",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">About</h1>
      <p className="text-zinc-400 mb-10 text-lg">
        Why this app exists, and why it works the way it does.
      </p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-3">
            Why this app exists
          </h2>
          <p>
            Most regrettable messages are sent in the heat of the moment. The
            message you send at 2am, the reply you type when you&apos;re
            furious, the text you send before thinking — these are often
            messages you wish you could take back.
          </p>
          <p className="mt-3">
            Burn After Chat gives you a place to write the first version. The
            raw one. The one you&apos;d regret. Write it here instead. Then
            decide what, if anything, to actually send.
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
