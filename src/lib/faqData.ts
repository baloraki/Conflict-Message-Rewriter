export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is this a real chatbot?",
    answer:
      "No. Void is a fake recipient. The replies are pre-written local templates, not AI or a real person. Nothing you type is analyzed, processed, or sent anywhere.",
  },
  {
    question: "Is my text saved anywhere?",
    answer:
      "No. Your messages exist only in your browser memory while the chat is open. They are never written to localStorage, a database, or any server. Reloading the page or deleting the chat removes them permanently.",
  },
  {
    question: "Does this use AI?",
    answer:
      "No. There is no AI involved. Fake replies are selected from a fixed local list. No machine learning, no language model, no API calls.",
  },
  {
    question: "Can anyone read my messages?",
    answer:
      "No. Your messages never leave your device. They aren't sent to a server, they don't appear in analytics, and they disappear when you delete or close the chat.",
  },
  {
    question: "Is this therapy?",
    answer:
      "No. This app is not therapy, counseling, or a mental health service. It's a simple private writing space. If you need professional support, please reach out to a qualified professional.",
  },
  {
    question: "What happens when I delete the chat?",
    answer:
      "The messages are cleared from React state and are gone. They were never stored anywhere, so there's nothing to recover. The deletion is permanent.",
  },
  {
    question: "Can I use this before replying to someone?",
    answer:
      "Yes, that's the main use case. Write the raw version here first. See how it looks. Then decide whether to send something different, wait, or say nothing at all.",
  },
  {
    question: "What should I do if I feel unsafe?",
    answer:
      "Stop using this app and contact emergency services or a trusted professional immediately. This app is not crisis support and cannot help in emergencies. See our full disclaimer for resources.",
  },
  {
    question: "Does this app track me?",
    answer:
      "No analytics or tracking is enabled by default. The app is designed to be as private as possible. See the privacy policy for full details.",
  },
  {
    question: "What is the Calm Reply feature?",
    answer:
      "After deleting a chat, you can optionally open the Calm Reply composer. It shows pre-written templates for common situations like saying no, setting a boundary, or asking for space. No AI is involved.",
  },
];
