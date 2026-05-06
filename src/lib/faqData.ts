export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Burn After Chat used for?",
    answer:
      "Burn After Chat is a private fake chat where you vent anger, frustration, stress or any feeling you don't want to send to a real person. People use it before texting an ex, replying to a boss, posting online, drunk-texting, or after an argument with a partner, parent or friend. You write the raw, unfiltered version, then delete the chat. Nothing is sent, nothing is saved.",
  },
  {
    question: "How do I stop myself from sending an angry text?",
    answer:
      "Open Burn After Chat instead of your messaging app. Type the angriest version of what you want to say into the fake chat. Read it back. Most of the time, seeing your own words is enough to know you don't actually want to send them. Delete the chat and decide later, calmly, whether anything needs to be said at all.",
  },
  {
    question: "Where can I vent online anonymously?",
    answer:
      "Burn After Chat lets you vent anonymously without an account, login, email or any data leaving your browser. There is no profile, no history, no audience. Your words live only in your browser tab and disappear when you delete the chat or close the page.",
  },
  {
    question: "Is this a real chatbot or AI?",
    answer:
      "No. Void is a fake recipient. The replies are short, pre-written local templates, not AI, not a language model, and not a real person. Nothing you type is analyzed, processed, sent anywhere, or used to train anything.",
  },
  {
    question: "Is my text saved anywhere?",
    answer:
      "No. Your messages exist only in your browser memory while the chat is open. They are never written to localStorage, sessionStorage, cookies, IndexedDB, a database, or any server. Reloading the page or deleting the chat removes them permanently.",
  },
  {
    question: "Does this use AI?",
    answer:
      "No. There is no AI, no machine learning model, no LLM, and no external API call. Fake replies are selected from a fixed local list bundled with the page. This is a deliberate design choice — using AI would require sending your messages to a server, which would break the privacy promise.",
  },
  {
    question: "Can anyone read my messages?",
    answer:
      "No. Your messages never leave your device. They aren't sent to a server, they don't appear in analytics, and they disappear when you delete the chat, reload the page, or close the tab. There is no admin, no moderator, no log file.",
  },
  {
    question: "Is venting in writing actually helpful?",
    answer:
      "Putting strong emotions into words — without an audience and without an algorithm — can create a small pause between feeling and acting. That pause is where regret stops being inevitable. Burn After Chat is not therapy and makes no clinical claims, but the simple act of writing the message you'd otherwise send can help you avoid sending it.",
  },
  {
    question: "Is this therapy or mental health support?",
    answer:
      "No. This app is not therapy, counseling, crisis support, or any kind of mental health service. It is a private writing space. If you need professional support, please reach out to a qualified professional. If you are in crisis, see our disclaimer page for hotlines and resources.",
  },
  {
    question: "What happens when I delete the chat?",
    answer:
      "The messages are cleared from React state and are gone. They were never stored anywhere, so there is nothing to recover and nothing to undo. The deletion is permanent — that is the whole point of the app.",
  },
  {
    question: "Can I use this before replying to someone?",
    answer:
      "Yes — that is the main use case. Write the raw version here first: the angry text, the petty reply, the long monologue you'd never actually send. See how it reads. Then decide whether to send something different, wait, or say nothing at all.",
  },
  {
    question: "Can I use it to vent about my ex, boss, partner or family?",
    answer:
      "Yes. Burn After Chat is built for exactly those moments — when the person you most want to scream at is the one person you absolutely should not text right now. Write to them in the fake chat instead. Your real relationships stay intact.",
  },
  {
    question: "Will this stop me from drunk-texting?",
    answer:
      "It can help. The act of opening Burn After Chat instead of your messaging app adds friction. Writing the message into the void instead of sending it gives the impulse somewhere to go. Whether you actually keep your phone away from your ex is still up to you.",
  },
  {
    question: "Is this a journal app?",
    answer:
      "Not really. Most journal apps are built to keep what you write. Burn After Chat is built to throw it away. There is no archive, no streak, no tags, no export. The deletion is the feature.",
  },
  {
    question: "Does it cost anything?",
    answer:
      "No. Burn After Chat is free. There is no paid tier, no account, no subscription, no in-app purchase. The site is supported by optional ads and affiliate links on non-chat pages — never inside the chat itself.",
  },
  {
    question: "Do I need to install an app?",
    answer:
      "No. It runs in any modern browser on phone, tablet or computer. You can also add it to your home screen as a Progressive Web App if you want a one-tap shortcut, but you don't have to.",
  },
  {
    question: "What should I do if I feel unsafe?",
    answer:
      "Stop using this app and contact emergency services or a trusted professional immediately. This app is not crisis support and cannot help in emergencies. See our disclaimer page for crisis hotlines including 988 (US Suicide and Crisis Lifeline), 741741 (US Crisis Text Line), and the National Domestic Violence Hotline.",
  },
  {
    question: "Does this app track me?",
    answer:
      "No analytics or tracking scripts read the contents of your chat — those messages never leave your browser. The site uses minimal performance and visit analytics on the marketing pages, but the chat itself is sealed off. See the privacy policy for full details.",
  },
  {
    question: "What is the Calm Reply Composer?",
    answer:
      "After (or instead of) burning a chat, you can open the Calm Reply Composer. It offers pre-written templates for common hard messages — saying no, setting a boundary, asking for space, declining an invite, apologising. No AI involved. Just practical phrasing you can copy and adapt.",
  },
  {
    question: "How is this different from screaming into a pillow?",
    answer:
      "It's faster, quieter, and you can read what you wrote afterwards. A pillow doesn't give you the chance to look at your own words and choose not to send them. Burn After Chat does.",
  },
];
