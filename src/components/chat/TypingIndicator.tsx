export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 px-2 mb-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center text-xs text-zinc-300 font-bold flex-shrink-0">
        V
      </div>
      <div className="bg-zinc-800 border border-zinc-700 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
        <span
          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
          style={{ animationDelay: "-0.3s" }}
        />
        <span
          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
          style={{ animationDelay: "-0.15s" }}
        />
        <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
