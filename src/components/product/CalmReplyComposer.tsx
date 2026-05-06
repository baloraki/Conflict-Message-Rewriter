"use client";

import { useState } from "react";
import { CalmSituation } from "@/lib/calm/types";
import TemplateCard from "./TemplateCard";
import Button from "@/components/ui/Button";
import type { CalmTemplatesByKey } from "@/i18n/types";

interface CalmReplyComposerProps {
  templates: CalmTemplatesByKey;
  translations: {
    promptText: string;
    chooseTemplate: string;
    differentSituation: string;
    copy: string;
    copied: string;
  };
}

export default function CalmReplyComposer({ templates, translations }: CalmReplyComposerProps) {
  const [selected, setSelected] = useState<CalmSituation | null>(null);
  const situations = (Object.keys(templates) as CalmSituation[]).map((key) => ({
    value: key,
    label: templates[key].label,
  }));
  const selectedTemplates = selected ? templates[selected].templates : [];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-zinc-400 text-sm mb-4">
          {translations.promptText}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {situations.map((s) => (
            <button
              key={s.value}
              onClick={() => setSelected(s.value)}
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

      {selectedTemplates.length > 0 && (
        <div className="space-y-3">
          <p className="text-zinc-400 text-sm">{translations.chooseTemplate}</p>
          {selectedTemplates.map((template, i) => (
            <TemplateCard
              key={i}
              text={template}
              copyLabel={translations.copy}
              copiedLabel={translations.copied}
            />
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelected(null)}
            className="text-zinc-500 w-full"
          >
            {translations.differentSituation}
          </Button>
        </div>
      )}
    </div>
  );
}
