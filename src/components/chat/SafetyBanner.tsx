"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

interface SafetyBannerProps {
  visible: boolean;
  onDismiss: () => void;
  locale: Locale;
  translations: {
    title: string;
    body: string;
    learnMore: string;
    dismiss: string;
  };
}

export default function SafetyBanner({
  visible,
  onDismiss,
  locale,
  translations,
}: SafetyBannerProps) {
  if (!visible) return null;

  return (
    <div
      className={cn(
        "mx-3 mt-2 p-3 rounded-xl bg-red-950/60 border border-red-800 text-sm text-red-200",
        "transition-all duration-300"
      )}
    >
      <div className="flex items-start gap-2">
        <span className="text-red-400 mt-0.5">⚠</span>
        <div className="flex-1">
          <p className="font-medium text-red-300 mb-1">{translations.title}</p>
          <p className="text-red-200 text-xs leading-relaxed">
            {translations.body}{" "}
            <Link href={`/${locale}/disclaimer`} className="underline hover:text-white">
              {translations.learnMore}
            </Link>
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="text-red-400 hover:text-red-200 text-lg leading-none ml-1"
          aria-label={translations.dismiss}
        >
          ×
        </button>
      </div>
    </div>
  );
}
