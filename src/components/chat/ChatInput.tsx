"use client";

import { KeyboardEvent, useRef, useState } from "react";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  sendAria?: string;
  inputAria?: string;
}

export default function ChatInput({
  onSend,
  disabled = false,
  placeholder = "Write anything. It stays here.",
  sendAria = "Send message",
  inputAria = "Message input",
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  };

  return (
    <div className="flex items-end gap-2 px-3 pt-3 pb-3 border-t border-zinc-800 bg-zinc-950 pb-safe">
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        placeholder={placeholder}
        rows={1}
        disabled={disabled}
        className="min-h-[44px] max-h-[150px] py-3"
        aria-label={inputAria}
        autoCapitalize="sentences"
        autoComplete="off"
        spellCheck="true"
      />
      <Button
        onClick={handleSend}
        disabled={!value.trim() || disabled}
        className="flex-shrink-0 h-11 w-11 p-0 rounded-xl"
        aria-label={sendAria}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </Button>
    </div>
  );
}
