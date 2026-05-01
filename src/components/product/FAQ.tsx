"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS, type FAQItem } from "@/lib/faqData";

export type { FAQItem };
export { FAQ_ITEMS };

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left text-zinc-200 hover:text-zinc-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium pr-4">{item.question}</span>
        <span
          className={cn(
            "text-zinc-500 transition-transform duration-200 flex-shrink-0",
            open && "rotate-180"
          )}
        >
          ▾
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-60 pb-4" : "max-h-0"
        )}
      >
        <p className="text-zinc-400 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ({ items = FAQ_ITEMS }: { items?: FAQItem[] }) {
  return (
    <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-2xl bg-zinc-900 px-5">
      {items.map((item, i) => (
        <FAQItemComponent key={i} item={item} />
      ))}
    </div>
  );
}
