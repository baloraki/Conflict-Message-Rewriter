"use client";

import { useEffect, useState } from "react";

interface BurnAnimationProps {
  onComplete: () => void;
}

export default function BurnAnimation({ onComplete }: BurnAnimationProps) {
  const [stage, setStage] = useState<"burning" | "done">("burning");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("done");
      setTimeout(onComplete, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950">
      <div className="relative flex items-center justify-center">
        {stage === "burning" && (
          <>
            <div className="absolute inset-0 animate-ping rounded-full bg-orange-500/20 scale-150" />
            <div className="text-8xl">🔥</div>
          </>
        )}
        {stage === "done" && (
          <div className="text-8xl opacity-30">✦</div>
        )}
      </div>
      <p className="mt-8 text-zinc-400 text-lg font-medium animate-pulse">
        {stage === "burning" ? "Erasing…" : "Gone."}
      </p>
    </div>
  );
}
