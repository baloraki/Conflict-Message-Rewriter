"use client";

import { useState } from "react";
import { getCalmTemplates, getAllSituations } from "@/lib/calm/calmReplyGenerator";
import { CalmSituation } from "@/lib/calm/types";
import TemplateCard from "./TemplateCard";
import Button from "@/components/ui/Button";

export default function CalmReplyComposer() {
  const [selected, setSelected] = useState<CalmSituation | null>(null);
  const situations = getAllSituations();
  const templates = selected ? getCalmTemplates(selected) : [];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-zinc-400 text-sm mb-4">
          What do you need to communicate?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {situations.map((s) => (
            <button
              key={s.value}
              onClick={() => setSelected(s.value as CalmSituation)}
              className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                selected === s.value
                  ? "border-orange-500 bg-orange-500/10 text-orange-300"
                  : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {templates.length > 0 && (
        <div className="space-y-3">
          <p className="text-zinc-400 text-sm">Choose a template to copy:</p>
          {templates.map((template, i) => (
            <TemplateCard key={i} text={template} />
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelected(null)}
            className="text-zinc-500 w-full"
          >
            ← Choose a different situation
          </Button>
        </div>
      )}
    </div>
  );
}
