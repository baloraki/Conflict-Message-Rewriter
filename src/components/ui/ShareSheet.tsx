"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ShareSheetProps {
  url?: string;
  title?: string;
  text?: string;
  className?: string;
  /** Size preset for the trigger button */
  size?: "sm" | "md" | "lg";
  /** Whether the popover opens above or below the trigger (default: above) */
  popoverPosition?: "above" | "below";
}

const PLATFORMS = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    emoji: "💬",
    color: "hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:text-emerald-300",
    href: (url: string, text: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    key: "x",
    label: "X / Twitter",
    emoji: "𝕏",
    color: "hover:bg-sky-500/15 hover:border-sky-500/40 hover:text-sky-300",
    href: (url: string, text: string) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    key: "telegram",
    label: "Telegram",
    emoji: "✈️",
    color: "hover:bg-blue-500/15 hover:border-blue-500/40 hover:text-blue-300",
    href: (url: string, text: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    key: "reddit",
    label: "Reddit",
    emoji: "🤖",
    color: "hover:bg-orange-500/15 hover:border-orange-500/40 hover:text-orange-300",
    href: (url: string, text: string) =>
      `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
  },
  {
    key: "mail",
    label: "E-Mail",
    emoji: "📧",
    color: "hover:bg-zinc-500/15 hover:border-zinc-500/40 hover:text-zinc-200",
    href: (url: string, text: string) =>
      `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`,
  },
];

export default function ShareSheet({
  url,
  title = "Burn After Chat",
  text = "Write the angry text, drunk reply, or 2 a.m. rant — then burn it. 100% private, no AI, no tracking.",
  className,
  size = "md",
  popoverPosition = "above",
}: ShareSheetProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const shareUrl =
    url ?? (typeof window !== "undefined" ? window.location.href : "https://burnafterchat.com");

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
      } catch {
        // user cancelled — no-op
      }
    } else {
      setOpen((v) => !v);
    }
  }, [title, text, shareUrl]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for non-secure contexts or older browsers
      try {
        const el = document.createElement("textarea");
        el.value = shareUrl;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.focus();
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // copy not available — silently fail
      }
    }
  }, [shareUrl]);

  return (
    <div ref={ref} className={cn("relative inline-flex", className)}>
      {/* Trigger button */}
      <button
        onClick={handleShare}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
          "bg-zinc-800 border border-zinc-700 text-zinc-300",
          "hover:bg-zinc-700 hover:border-zinc-500 hover:text-zinc-100",
          "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-950",
          "active:scale-95",
          size === "sm" && "px-3 py-1.5 text-sm min-h-9",
          size === "md" && "px-5 py-2.5 text-base min-h-11",
          size === "lg" && "px-7 py-3.5 text-lg min-h-12",
          open && "bg-zinc-700 border-zinc-500 text-zinc-100"
        )}
      >
        <ShareIcon />
        <span>Share</span>
      </button>

      {/* Popover panel */}
      <div
        role="dialog"
        aria-label="Share options"
        aria-modal="false"
        className={cn(
          "absolute left-1/2 -translate-x-1/2 w-72 z-50",
          popoverPosition === "above" ? "bottom-full mb-3" : "top-full mt-3",
          "bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl shadow-black/60 p-4",
          "transition-all duration-200 origin-bottom",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Arrow */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-900 border-zinc-700 rotate-45",
            popoverPosition === "above"
              ? "-bottom-[7px] border-r border-b"
              : "-top-[7px] border-l border-t"
          )}
        />

        <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-3 text-center">
          Share this app
        </p>

        {/* Copy link row */}
        <button
          onClick={handleCopy}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-2",
            "border transition-all duration-150",
            copied
              ? "bg-orange-500/15 border-orange-500/40 text-orange-300"
              : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-500 hover:text-zinc-100"
          )}
        >
          <span className="text-base flex-shrink-0">{copied ? "✅" : "🔗"}</span>
          <span className="truncate">{copied ? "Link copied!" : shareUrl}</span>
        </button>

        {/* Platform grid */}
        <div className="grid grid-cols-5 gap-1.5">
          {PLATFORMS.map((p) => (
            <a
              key={p.key}
              href={p.href(shareUrl, text)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${p.label}`}
              onClick={() => setOpen(false)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 rounded-xl text-xs border border-zinc-700 text-zinc-400",
                "transition-all duration-150 active:scale-90",
                p.color
              )}
            >
              <span className="text-lg leading-none">{p.emoji}</span>
              <span className="leading-none text-[10px]">{p.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
