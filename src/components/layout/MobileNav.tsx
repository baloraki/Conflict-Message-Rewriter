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
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
      <div className="flex items-center justify-around py-2">
        {NAV_ITEMS.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-xs transition-colors",
              pathname === href
                ? "text-orange-400"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
