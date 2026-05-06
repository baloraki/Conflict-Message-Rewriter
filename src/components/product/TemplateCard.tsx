"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  text: string;
  className?: string;
  copyLabel?: string;
  copiedLabel?: string;
}

export default function TemplateCard({
  text,
  className,
  copyLabel = "Copy",
  copiedLabel = "✓ Copied",
}: TemplateCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      className={cn(
        "flex items-start justify-between gap-3 p-4 hover:border-zinc-600 transition-colors",
        className
      )}
    >
      <p className="text-zinc-200 text-sm leading-relaxed flex-1">{text}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className={cn(
          "flex-shrink-0 text-xs",
          copied ? "text-green-400" : "text-zinc-500 hover:text-zinc-300"
        )}
      >
        {copied ? copiedLabel : copyLabel}
      </Button>
    </Card>
  );
}
