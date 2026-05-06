import type { Metadata } from "next";
import FakeChat from "@/components/chat/FakeChat";

export const metadata: Metadata = {
  title: "Private Chat",
  description:
    "Your private chat space. Write anything. Nothing is sent. Delete it when you're done.",
  alternates: { canonical: "/chat" },
  robots: { index: false, follow: false },
};

export default function ChatPage() {
  return <FakeChat />;
}
