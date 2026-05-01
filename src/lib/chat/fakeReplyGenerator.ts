import { FAKE_REPLIES } from "./fakeReplies";

// Returns a random fake reply from the predefined local list.
// No AI. No network request. Pure local selection only.
export function getRandomFakeReply(): string {
  const index = Math.floor(Math.random() * FAKE_REPLIES.length);
  return FAKE_REPLIES[index];
}

// Returns a simulated typing delay in milliseconds.
// Between 1200ms and 3000ms to feel like a real person typing.
export function getFakeReplyDelay(): number {
  return Math.floor(Math.random() * 1800) + 1200;
}
