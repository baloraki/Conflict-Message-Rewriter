"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/chat", label: "Chat", icon: "🔥" },
  { href: "/calm-reply", label: "Calm", icon: "✉️" },
  { href: "/about", label: "About", icon: "ℹ️" },
];

export default function MobileNav() {
  const pathname = usePathname();
  if (pathname === "/chat") return null;

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-sm pb-safe"
      aria-label="Primary"
    >
      <div className="flex items-stretch justify-around pt-1.5">
        {NAV_ITEMS.map(({ href, label, icon }) => {
          const active = pathname === href;
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
