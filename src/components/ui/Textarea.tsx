import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500",
        "px-4 py-3 text-base resize-none",
        "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
        "transition-all duration-200",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
export default Textarea;
