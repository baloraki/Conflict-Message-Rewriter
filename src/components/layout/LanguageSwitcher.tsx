"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_FLAGS,
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  isLocale,
  type Locale,
} from "@/i18n/config";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const segments = pathname.split("/");
    const localeFromPath = segments[1];
    if (isLocale(localeFromPath)) {
      setCurrentLocale(localeFromPath);
    }
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    // Save to localStorage
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch {
      // localStorage might be unavailable
    }

    // Save to cookie for SSR detection
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=${oneYear}; SameSite=Lax`;

    // Navigate to the same path in the new locale
    const segments = pathname.split("/");
    if (isLocale(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join("/") || `/${newLocale}`;

    setIsOpen(false);
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-base" aria-hidden="true">
          {LOCALE_FLAGS[currentLocale]}
        </span>
        <span className="hidden sm:inline">
          {LOCALE_LABELS[currentLocale]}
        </span>
        <svg
          className={cn(
            "w-3 h-3 transition-transform",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full mt-1 min-w-[140px] bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden z-50"
        >
          {LOCALES.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                role="option"
                aria-selected={locale === currentLocale}
                onClick={() => switchLocale(locale)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors",
                  locale === currentLocale
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                )}
              >
                <span className="text-base" aria-hidden="true">
                  {LOCALE_FLAGS[locale]}
                </span>
                <span>{LOCALE_LABELS[locale]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
