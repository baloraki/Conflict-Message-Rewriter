import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export default function Card({
  className,
  glass = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800 p-6",
        glass ? "bg-white/5 backdrop-blur-sm" : "bg-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
