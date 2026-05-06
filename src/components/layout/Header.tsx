"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/config";

export default function Header() {
  const pathname = usePathname();

  // Extract current locale from pathname
  const segments = pathname.split("/");
  const localeFromPath = segments[1];
  const currentLocale = isLocale(localeFromPath) ? localeFromPath : DEFAULT_LOCALE;

  // Build the rest of the path after the locale
  const pathWithoutLocale = isLocale(localeFromPath)
    ? "/" + segments.slice(2).join("/")
    : pathname;

  const isChatPage = pathWithoutLocale === "/chat" || pathWithoutLocale === "/chat/";

  if (isChatPage) return null;

  const aboutHref = `/${currentLocale}/about`;
  const privacyHref = `/${currentLocale}/privacy`;
  const homeHref = `/${currentLocale}`;
  const chatHref = `/${currentLocale}/chat`;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm pt-safe">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        <Link
          href={homeHref}
          className="flex items-center gap-2 min-w-0"
          aria-label="Burn After Chat — Home"
        >
          <span className="text-xl flex-shrink-0" aria-hidden="true">
            🔥
          </span>
          <span className="font-bold text-zinc-100 text-base sm:text-lg truncate">
            Burn After Chat
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1" aria-label="Primary">
          <Link
            href={aboutHref}
            aria-current={pathWithoutLocale === "/about" ? "page" : undefined}
            className={cn(
              "px-3 py-1.5 text-sm rounded-lg transition-colors",
              pathWithoutLocale === "/about"
                ? "text-zinc-100 bg-zinc-800"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            About
          </Link>
          <Link
            href={privacyHref}
            aria-current={pathWithoutLocale === "/privacy" ? "page" : undefined}
            className={cn(
              "px-3 py-1.5 text-sm rounded-lg transition-colors",
              pathWithoutLocale === "/privacy"
                ? "text-zinc-100 bg-zinc-800"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            Privacy
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link href={chatHref} className="flex-shrink-0">
            <Button size="sm">
              <span className="hidden sm:inline">Start a private dump</span>
              <span className="sm:hidden">🔥 Start</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
