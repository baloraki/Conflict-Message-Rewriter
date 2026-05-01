import { CALM_TEMPLATES } from "./calmTemplates";
import { CalmSituation } from "./types";

export function getCalmTemplates(situation: CalmSituation): string[] {
  const found = CALM_TEMPLATES.find((t) => t.situation === situation);
  return found ? found.templates : [];
}

export function getAllSituations() {
  return CALM_TEMPLATES.map((t) => ({
    value: t.situation,
    label: t.label,
  }));
}
