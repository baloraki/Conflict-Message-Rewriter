import { cn } from "@/lib/utils";

interface PrivacyPillProps {
  className?: string;
}

export default function PrivacyPill({ className }: PrivacyPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full",
        "bg-zinc-900 border border-zinc-700 text-xs text-zinc-400",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Local only. Nothing is saved. Nothing is sent.
    </div>
  );
}
