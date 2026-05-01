import type { Metadata } from "next";
import FakeChat from "@/components/chat/FakeChat";

export const metadata: Metadata = {
  title: "Private Chat – Burn After Chat",
  description: "Your private chat space. Write anything. Nothing is saved or sent.",
  robots: { index: false, follow: false },
};

export default function ChatPage() {
  return <FakeChat />;
}
