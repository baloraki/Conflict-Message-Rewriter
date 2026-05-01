"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isChatPage = pathname === "/chat";

  if (isChatPage) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🔥</span>
          <span className="font-bold text-zinc-100 text-lg">
            Burn After Chat
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          <Link
            href="/about"
            className={cn(
              "px-3 py-1.5 text-sm rounded-lg transition-colors",
              pathname === "/about"
                ? "text-zinc-100 bg-zinc-800"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            About
          </Link>
          <Link
            href="/privacy"
            className={cn(
              "px-3 py-1.5 text-sm rounded-lg transition-colors",
              pathname === "/privacy"
                ? "text-zinc-100 bg-zinc-800"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            Privacy
          </Link>
        </nav>
        <Link href="/chat">
          <Button size="sm">Start a private dump</Button>
        </Link>
      </div>
    </header>
  );
}
