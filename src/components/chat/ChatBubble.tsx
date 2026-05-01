import { ChatMessage } from "@/lib/chat/types";
import { cn, formatTime } from "@/lib/utils";

interface ChatBubbleProps {
  message: ChatMessage;
  animating?: boolean;
}

export default function ChatBubble({
  message,
  animating = false,
}: ChatBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div
      className={cn(
        "flex w-full mb-2 transition-all duration-500",
        isUser ? "justify-end" : "justify-start",
        animating && "opacity-0 scale-95"
      )}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center mr-2 mt-1 flex-shrink-0 text-xs text-zinc-300 font-bold">
          V
        </div>
      )}
      <div
        className={cn(
          "max-w-[78%] flex flex-col",
          isUser ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
            isUser
              ? "bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-tr-sm"
              : "bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-tl-sm"
          )}
        >
          {message.text}
        </div>
        <span className="text-xs text-zinc-600 mt-1 px-1">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
