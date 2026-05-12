# Burn After Chat

Write the message you should not send.

Burn After Chat is an open-source, privacy-focused Next.js app for private emotional drafting: users vent in a fake chat, reframe, then burn/delete the chat when done.

## Why this exists

This project gives people a safer “pause” before sending emotional messages. It is designed for de-escalation, not for real-time communication.

## Core features

- Fake chat interface with "Void" as recipient
- Burn flow that clears chat history
- Optional AI-generated one-sentence reply using **on-device** Transformers.js (when enabled)
- Local predefined fallback replies when AI is unavailable
- Calm Reply composer templates
- Locale-aware routing and translations (`en`, `de`, `tr`, `es`)
- PWA metadata and icons

## Privacy and data handling (important)

This project is privacy-focused, but not “zero local storage.”

- **Chat messages** are stored in browser `localStorage` under `chat_messages` to persist across reloads until the user burns/deletes them.
- **Language preference** is stored in `localStorage` (`preferred_locale`) and synchronized to a `NEXT_LOCALE` cookie for routing.
- **No app backend database** stores chat messages.
- **Chat messages are never sent** to analytics, Web3Forms, or third-party AI APIs.
- **Contact form** (if configured) sends only contact submission data directly to Web3Forms.
- **Optional AI replies** use on-device/local model inference via Transformers.js when enabled.
- **Analytics scripts are present** (`@vercel/analytics`, `@vercel/speed-insights`, and Simple Analytics script in layout) and must not include chat content.

If you open source this publicly, keep privacy copy consistent with real behavior.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Vitest + React Testing Library
- ESLint

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint (src)
npm run typecheck  # TypeScript checks
npm run test       # Run unit tests once
npm run test:watch # Run tests in watch mode
```

## Environment variables

Create `.env.local` in the project root and set values as needed:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Public base URL used in metadata/sitemap |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Optional | Enables contact form submission via Web3Forms |
| `NEXT_PUBLIC_MODEL_ID` | Optional | Enables on-device Transformers.js generation with the given model |

If `NEXT_PUBLIC_MODEL_ID` is not set, chat replies fall back to local predefined messages.

## Project structure

```text
src/
  app/              # App routes, layouts, metadata, locale pages
  components/       # UI, chat, layout, and product components
  i18n/             # Locale config and dictionaries
  lib/              # Chat/calm generators, validation, SEO helpers
  tests/            # Vitest tests
```

## Safety note

This app is not therapy, crisis support, legal advice, or professional mediation. It is suitable as a learning/open-source emotional drafting project, not as a clinical product.

## Public repository readiness (recommended)

- **Suggested GitHub description:** `Open-source privacy-focused emotional drafting app for writing, reframing, and burning messages you should not send.`
- **Suggested topics:** `nextjs`, `typescript`, `pwa`, `privacy`, `mental-health-adjacent`, `emotional-regulation`, `local-first`, `tailwindcss`, `react`
- Before making the repository public, verify:
  - privacy and legal pages match real behavior
  - analytics disclosures are accurate
  - no chat content is sent to third parties
  - `.env` files and commit history contain no secrets
- Run a secret scan before public release.

## Contributing

Issues and pull requests are welcome. Please run lint, typecheck, tests, and build before submitting.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
