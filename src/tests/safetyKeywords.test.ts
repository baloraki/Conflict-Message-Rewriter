import { describe, it, expect } from "vitest";
import {
  containsSafetyKeyword,
  SAFETY_KEYWORDS,
} from "@/lib/chat/safetyKeywords";

describe("safetyKeywords", () => {
  it("detects 'kill myself' in a message", () => {
    expect(containsSafetyKeyword("I want to kill myself")).toBe(true);
  });

  it("detects 'hurt myself' in a message", () => {
    expect(containsSafetyKeyword("I want to hurt myself")).toBe(true);
  });

  it("detects 'suicide' in a message", () => {
    expect(containsSafetyKeyword("thinking about suicide")).toBe(true);
  });

  it("is case-insensitive", () => {
    expect(containsSafetyKeyword("SUICIDE IS NOT THE ANSWER")).toBe(true);
    expect(containsSafetyKeyword("I want to HURT MYSELF")).toBe(true);
  });

  it("does not flag normal frustrated messages", () => {
    expect(containsSafetyKeyword("I'm so angry right now")).toBe(false);
    expect(containsSafetyKeyword("This is so frustrating")).toBe(false);
    expect(containsSafetyKeyword("I can't believe they did that")).toBe(false);
    expect(containsSafetyKeyword("You're unbelievable")).toBe(false);
    expect(containsSafetyKeyword("I hate this situation")).toBe(false);
  });

  it("has a non-empty list of keywords", () => {
    expect(SAFETY_KEYWORDS.length).toBeGreaterThan(0);
  });
});
