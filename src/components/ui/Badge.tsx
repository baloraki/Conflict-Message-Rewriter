import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "orange" | "red" | "green" | "zinc";
}

export default function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-zinc-800 text-zinc-300",
        variant === "orange" &&
          "bg-orange-900/40 text-orange-300 border border-orange-800",
        variant === "red" && "bg-red-900/40 text-red-300 border border-red-800",
        variant === "green" &&
          "bg-green-900/40 text-green-300 border border-green-800",
        variant === "zinc" &&
          "bg-zinc-800/60 text-zinc-400 border border-zinc-700",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
