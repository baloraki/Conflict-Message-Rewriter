import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

interface DisclaimerBoxProps {
  className?: string;
  compact?: boolean;
  locale: Locale;
  translations: {
    full: string;
    fullLink: string;
    compact: string;
    compactLink: string;
  };
}

export default function DisclaimerBox({
  className,
  compact = false,
  locale,
  translations,
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
          {translations.compact}{" "}
          <Link href={`/${locale}/disclaimer`} className="text-orange-400 hover:underline">
            {translations.compactLink}
          </Link>
        </p>
      ) : (
        <p className="leading-relaxed">
          {translations.full}{" "}
          <Link href={`/${locale}/disclaimer`} className="text-orange-400 hover:underline">
            {translations.fullLink}
          </Link>
        </p>
      )}
    </div>
  );
}
