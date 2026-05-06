import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
          variant === "primary" &&
            "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400 focus:ring-orange-500 shadow-lg shadow-orange-500/20",
          variant === "secondary" &&
            "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus:ring-zinc-500 border border-zinc-700",
          variant === "ghost" &&
            "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 focus:ring-zinc-500",
          variant === "danger" &&
            "bg-red-900/40 text-red-300 hover:bg-red-900/60 border border-red-800 focus:ring-red-500",
          variant === "outline" &&
            "bg-transparent border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 focus:ring-zinc-500",
          size === "sm" && "px-3 py-1.5 text-sm min-h-9",
          size === "md" && "px-5 py-2.5 text-base min-h-11",
          size === "lg" && "px-7 py-3.5 text-lg min-h-12",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
