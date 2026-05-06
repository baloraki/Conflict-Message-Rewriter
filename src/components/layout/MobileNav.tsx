"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/config";

interface MobileNavProps {
  translations: {
    home: string;
    chat: string;
    calm: string;
    about: string;
  };
}

export default function MobileNav({ translations }: MobileNavProps) {
  const pathname = usePathname();

  const segments = pathname.split("/");
  const localeFromPath = segments[1];
  const currentLocale = isLocale(localeFromPath) ? localeFromPath : DEFAULT_LOCALE;
  const pathWithoutLocale = isLocale(localeFromPath)
    ? "/" + segments.slice(2).join("/")
    : pathname;

  if (pathWithoutLocale === "/chat") return null;

  const navItems = [
    { href: `/${currentLocale}`, pathMatch: "/", label: translations.home, icon: "🏠" },
    { href: `/${currentLocale}/chat`, pathMatch: "/chat", label: translations.chat, icon: "🔥" },
    { href: `/${currentLocale}/calm-reply`, pathMatch: "/calm-reply", label: translations.calm, icon: "✉️" },
    { href: `/${currentLocale}/about`, pathMatch: "/about", label: translations.about, icon: "ℹ️" },
  ];

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-sm pb-safe"
      aria-label="Primary"
    >
      <div className="flex items-stretch justify-around pt-1.5">
        {navItems.map(({ href, pathMatch, label, icon }) => {
          const active =
            pathMatch === "/"
              ? pathWithoutLocale === "/" || pathWithoutLocale === ""
              : pathWithoutLocale === pathMatch;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 min-h-12 px-2 rounded-lg text-[11px] font-medium transition-colors",
                active
                  ? "text-orange-400"
                  : "text-zinc-500 hover:text-zinc-300 active:text-zinc-200"
              )}
            >
              <span className="text-lg leading-none" aria-hidden="true">
                {icon}
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
