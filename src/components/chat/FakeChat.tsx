"use client";

// PRIVACY NOTE: Chat messages are stored only in the browser's localStorage so
// the conversation survives page reloads. They are never sent to any server,
// backend service, or third party. When the user burns / deletes the chat the
// localStorage entry is cleared and all messages are permanently gone.

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import DeleteChatDialog from "./DeleteChatDialog";
import BurnAnimation from "./BurnAnimation";
import SafetyBanner from "./SafetyBanner";
import PrivacyPill from "@/components/product/PrivacyPill";
import Button from "@/components/ui/Button";
import { ChatMessage } from "@/lib/chat/types";
import {
  getRandomFakeReply,
  getFakeReplyDelay,
} from "@/lib/chat/fakeReplyGenerator";
import { containsSafetyKeyword } from "@/lib/chat/safetyKeywords";
import { generateId } from "@/lib/utils";

type ChatState = "chat" | "burning" | "after";

const STORAGE_KEY = "chat_messages";

function loadMessages(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Array<
      Omit<ChatMessage, "timestamp"> & { timestamp: string }
    >;
    return parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp) }));
  } catch {
    return [];
  }
}

export default function FakeChat() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window === "undefined") return [];
    return loadMessages();
  });
  const [isTyping, setIsTyping] = useState(false);
  const [chatState, setChatState] = useState<ChatState>("chat");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showSafetyBanner, setShowSafetyBanner] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // localStorage may be unavailable or full; silently ignore
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const handleSend = useCallback((text: string) => {
    const userMessage: ChatMessage = {
      id: generateId(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Safety check — client-side only, no data leaves the browser
    if (containsSafetyKeyword(text)) {
      setShowSafetyBanner(true);
    }

    const delay = getFakeReplyDelay();
    setIsTyping(true);

    typingTimeoutRef.current = setTimeout(() => {
      const replyMessage: ChatMessage = {
        id: generateId(),
        text: getRandomFakeReply(),
        sender: "void",
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, replyMessage]);
    }, delay);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    setShowDeleteDialog(false);
    setChatState("burning");
  }, []);

  const handleBurnComplete = useCallback(() => {
    // Clear all messages from React state and localStorage — they are permanently gone
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    setIsTyping(false);
    setShowSafetyBanner(false);
    setChatState("after");
  }, []);

  const handleStartAgain = useCallback(() => {
    setChatState("chat");
  }, []);

  if (chatState === "burning") {
    return <BurnAnimation onComplete={handleBurnComplete} />;
  }

  if (chatState === "after") {
    return (
      <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center px-6 pt-safe pb-safe text-center">
        <div className="text-6xl mb-6" aria-hidden="true">
          ✦
        </div>
        <h1 className="text-4xl font-bold text-zinc-100 mb-3">Gone.</h1>
        <p className="text-zinc-400 text-lg mb-2">
          You wrote it here. You didn&apos;t send it.
        </p>
        <p className="text-zinc-500 text-sm mb-10 max-w-xs leading-relaxed">
          Take 10 seconds before deciding what to do next. You can write a
          calmer version, walk away, or do nothing.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button onClick={handleStartAgain} size="lg" className="w-full">
            Start another private dump
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => router.push("/calm-reply")}
          >
            Write a calmer version
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="w-full text-zinc-500"
            onClick={() => router.push("/")}
          >
            Leave it deleted
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-zinc-950 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 pt-safe py-3 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
        <button
          onClick={() => router.push("/")}
          aria-label="Back to home"
          className="flex items-center justify-center -ml-1 w-10 h-10 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors flex-shrink-0"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center text-sm font-bold text-zinc-200 flex-shrink-0"
            aria-hidden="true"
          >
            V
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-zinc-100 text-sm truncate">Void</p>
            <p className="text-xs text-green-400">● Private</p>
          </div>
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => setShowDeleteDialog(true)}
          disabled={messages.length === 0}
          aria-label="Delete chat"
          className="flex-shrink-0"
        >
          🔥 Delete
        </Button>
      </div>

      {/* Safety Banner */}
      <SafetyBanner
        visible={showSafetyBanner}
        onDismiss={() => setShowSafetyBanner(false)}
      />

      {/* Privacy Pill */}
      <div className="px-4 pt-3 flex justify-center">
        <PrivacyPill />
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 space-y-1"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="text-4xl mb-4" aria-hidden="true">
              🕳️
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Write anything here. The Void is listening. Nothing leaves this
              screen.
            </p>
          </div>
        )}
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isTyping} />

      {/* Delete Dialog */}
      <DeleteChatDialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
