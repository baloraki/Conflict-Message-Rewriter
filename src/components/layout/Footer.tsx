import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔥</span>
              <span className="font-bold text-zinc-200">Burn After Chat</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              A private fake chat to vent anger, frustration and stress —
              before you send the message you&apos;d regret.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              About
            </Link>
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-zinc-300 transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/imprint"
              className="hover:text-zinc-300 transition-colors"
            >
              Imprint
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-600 leading-relaxed">
          <p>
            This app is not therapy, crisis support, legal advice, or
            professional mediation. If you feel unsafe, threatened, at risk of
            harming yourself or someone else, or trapped in abuse, contact local
            emergency services or a trusted professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
