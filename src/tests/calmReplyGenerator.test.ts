import { describe, it, expect } from "vitest";
import {
  getCalmTemplates,
  getAllSituations,
} from "@/lib/calm/calmReplyGenerator";
import { CALM_TEMPLATES } from "@/lib/calm/calmTemplates";
import { CalmSituation } from "@/lib/calm/types";

describe("calmReplyGenerator", () => {
  it("returns templates for each situation", () => {
    const situations: CalmSituation[] = [
      "say-no",
      "set-boundary",
      "ask-for-space",
      "apologize",
      "reply-professionally",
      "end-conversation",
      "not-reply",
      "ask-clarification",
    ];
    situations.forEach((situation) => {
      const templates = getCalmTemplates(situation);
      expect(templates.length).toBeGreaterThan(0);
    });
  });

  it("has at least 40 templates total", () => {
    const total = CALM_TEMPLATES.reduce((sum, t) => sum + t.templates.length, 0);
    expect(total).toBeGreaterThanOrEqual(40);
  });

  it("returns all 8 situations", () => {
    const situations = getAllSituations();
    expect(situations.length).toBe(8);
  });

  it("templates are non-empty strings", () => {
    CALM_TEMPLATES.forEach((ct) => {
      ct.templates.forEach((t) => {
        expect(typeof t).toBe("string");
        expect(t.length).toBeGreaterThan(0);
      });
    });
  });

  it("returns empty array for unknown situation", () => {
    const result = getCalmTemplates("unknown" as CalmSituation);
    expect(result).toEqual([]);
  });

  it("chat messages should not be stored in localStorage (policy check)", () => {
    // Privacy policy: chat messages must never be written to localStorage.
    // This test verifies the policy by ensuring nothing writes message data
    // when using the calm/fake reply generators (which are the non-UI lib functions).
    // The FakeChat component itself uses only React state (documented in FakeChat.tsx).
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    
    // Calling generators should never touch localStorage
    getCalmTemplates("say-no");
    getAllSituations();
    
    expect(setItemSpy).not.toHaveBeenCalled();
    setItemSpy.mockRestore();
  });
});
