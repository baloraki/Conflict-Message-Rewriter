import Link from "next/link";
import { cn } from "@/lib/utils";

interface DisclaimerBoxProps {
  className?: string;
  compact?: boolean;
}

export default function DisclaimerBox({
  className,
  compact = false,
}: DisclaimerBoxProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-700 bg-zinc-900/60 text-zinc-400",
        compact ? "p-3 text-xs" : "p-4 text-sm",
        className
      )}
    >
      {compact ? (
        <p>
          Not therapy or crisis support.{" "}
          <Link href="/disclaimer" className="text-orange-400 hover:underline">
            If you feel unsafe, get help now.
          </Link>
        </p>
      ) : (
        <p className="leading-relaxed">
          This app is not therapy, crisis support, legal advice, or professional
          mediation. If you feel unsafe, threatened, at risk of harming yourself
          or someone else, or trapped in abuse, contact local emergency services
          or a trusted professional.{" "}
          <Link href="/disclaimer" className="text-orange-400 hover:underline">
            Read full disclaimer.
          </Link>
        </p>
      )}
    </div>
  );
}
