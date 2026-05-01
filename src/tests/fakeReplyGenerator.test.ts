import { describe, it, expect } from "vitest";
import { getRandomFakeReply, getFakeReplyDelay } from "@/lib/chat/fakeReplyGenerator";
import { FAKE_REPLIES } from "@/lib/chat/fakeReplies";

describe("fakeReplyGenerator", () => {
  it("returns a non-empty string", () => {
    const reply = getRandomFakeReply();
    expect(reply).toBeTruthy();
    expect(typeof reply).toBe("string");
    expect(reply.length).toBeGreaterThan(0);
  });

  it("returns a reply from the predefined list", () => {
    for (let i = 0; i < 20; i++) {
      const reply = getRandomFakeReply();
      expect(FAKE_REPLIES).toContain(reply);
    }
  });

  it("has at least 50 fake replies", () => {
    expect(FAKE_REPLIES.length).toBeGreaterThanOrEqual(50);
  });

  it("returns a delay between 1200 and 3000ms", () => {
    for (let i = 0; i < 20; i++) {
      const delay = getFakeReplyDelay();
      expect(delay).toBeGreaterThanOrEqual(1200);
      expect(delay).toBeLessThanOrEqual(3000);
    }
  });

  it("replies do not contain threatening language", () => {
    const dangerousPatterns = [
      /\bkill\b/i,
      /\bhurt\b/i,
      /\bstab\b/i,
      /\bshoot\b/i,
      /\bviolen/i,
      /\bthreat/i,
      /\bsuicid/i,
    ];
    FAKE_REPLIES.forEach((reply) => {
      dangerousPatterns.forEach((pattern) => {
        expect(reply).not.toMatch(pattern);
      });
    });
  });
});
