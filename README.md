# 🔥 Burn After Chat

> Write the message you should not send.

A private fake chat for anger, frustration, and emotional drafts. Nothing is sent. Nothing is saved. Delete it when you're done.

---

## What it is

Burn After Chat is a local-only emotional pressure-release space. Users write whatever they feel into a fake chat. Simple, pre-written supportive responses appear. When the chat is deleted, the messages are gone permanently.

**The product metaphor:** "Let the message out here, not on someone else."

---

## Core concept

- The chat is fake. The recipient ("Void") is not real.
- There is no AI. Replies are selected from a local predefined list.
- Nothing you type leaves your browser. No server, no database, no API.
- Messages live only in React component state. They disappear on reload, close, or delete.
- The deletion is the feature.

---

## Privacy model

- **Chat messages:** React state only. Never written to localStorage, sessionStorage, IndexedDB, cookies, URL params, or any backend.
- **No accounts:** No login, no user data collected.
- **No analytics:** No tracking scripts by default.
- **No AI:** No external API calls. All replies are local.
- **Local preferences:** localStorage may be used only for non-sensitive app preferences (e.g. theme).

---

## Why no AI is used

AI requires messages to be sent to an external server, which would immediately break the privacy promise. All replies are pre-written, calm, and deliberately simple.

---

## Tech stack

- [Next.js](https://nextjs.org/) 16+ (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint
- Vitest + React Testing Library
- PWA (manifest + icons)
- No backend, no database, no auth, no AI

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Full base URL for SEO metadata (e.g. `https://burnafterchat.app`) |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Optional | Access key for Web3Forms contact form. If missing, form shows disabled state. |

---

## Deployment

Deploy directly to [Vercel](https://vercel.com):

```bash
vercel deploy
```

Or connect the GitHub repo to Vercel for automatic deployments.

The app requires no backend setup. It is a fully static Next.js application.

---

## PWA notes

The app includes a `public/manifest.json` and placeholder icons. For production, replace the placeholder icons in `public/icons/` with proper branded icons (192×192 and 512×512 PNG).

---

## Testing

```bash
npm run test         # Run all tests once
npm run test:watch   # Watch mode
```

Tests cover:
- Fake reply generator returns non-empty, safe replies
- Safety keyword detection
- Calm reply templates (all 8 situations, 40+ templates total)
- No messages written to localStorage

---

## Project structure

```
src/
  app/                     # Next.js App Router pages
    page.tsx               # Homepage / landing
    chat/page.tsx          # Fake chat
    calm-reply/page.tsx    # Calm reply composer
    privacy/page.tsx       # Privacy policy
    terms/page.tsx         # Terms of use
    disclaimer/page.tsx    # Safety disclaimer
    about/page.tsx         # About
    contact/page.tsx       # Contact
    layout.tsx             # Root layout
    globals.css            # Global styles

  components/
    layout/                # Header, Footer, MobileNav
    ui/                    # Button, Card, Badge, Dialog, Toast, Textarea
    chat/                  # FakeChat, ChatBubble, ChatInput, TypingIndicator, etc.
    product/               # CalmReplyComposer, FAQ, PrivacyPill, DisclaimerBox, etc.

  lib/
    chat/                  # fakeReplies, safetyKeywords, fakeReplyGenerator, types
    calm/                  # calmTemplates, calmReplyGenerator, types
    seo/                   # structuredData
    utils.ts               # cn, generateId, formatTime

  tests/                   # Vitest unit tests
```

---

## Safety disclaimer

This app is not therapy, crisis support, legal advice, or professional mediation. If you feel unsafe, threatened, at risk of harming yourself or someone else, or trapped in abuse, contact local emergency services or a trusted professional.

- 🇺🇸 National Suicide Prevention Lifeline: **988**
- 🇺🇸 Crisis Text Line: **HOME to 741741**
- 🇺🇸 National Domestic Violence Hotline: **1-800-799-7233**
