import type { Metadata } from "next";
import FakeChat from "@/components/chat/FakeChat";

export const metadata: Metadata = {
  title: "Private Chat — Vent Here, Burn It After",
  description:
    "Your private fake chat to vent. Write anything to anyone. Nothing is sent. Nothing is saved. Delete it when you're done — it's gone forever.",
  alternates: { canonical: "/chat" },
  robots: { index: false, follow: false },
};

export default function ChatPage() {
  return <FakeChat />;
}
