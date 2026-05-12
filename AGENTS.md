# Burn After Chat – Agent Instructions (Canonical)

This is the canonical instruction file for AI coding agents working in this repository.

<!-- BEGIN:nextjs-agent-rules -->
## Next.js version note

This is NOT legacy Next.js. This project uses Next.js 16 and may differ from older conventions. Read relevant docs in `node_modules/next/dist/docs/` before changing framework behavior.
<!-- END:nextjs-agent-rules -->

## Project identity

- Burn After Chat is a privacy-focused emotional drafting app.
- It helps users pause before sending emotional or conflict-heavy messages.
- It is not therapy, crisis support, legal advice, professional mediation, or emergency support.
- Product direction should reduce escalation, not intensify conflict.
- UI copy should remain calm, non-judgmental, and de-escalating.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS 4
- Vitest + React Testing Library
- ESLint
- PWA metadata/icons
- `localStorage` for chat and settings
- Optional on-device AI via `@huggingface/transformers`
- Optional Web3Forms contact form
- Vercel Analytics, Vercel Speed Insights, and Simple Analytics (if present in layout)

## Non-negotiable product rules

- Do not turn the app into real-time messaging.
- Do not add user accounts unless explicitly requested.
- Do not add a backend database for chat messages unless explicitly requested.
- Do not send chat messages to external APIs.
- Do not send chat messages to OpenAI, Anthropic, Hugging Face hosted APIs, Web3Forms, analytics, logs, or any third party.
- Optional AI generation must remain on-device/local unless explicitly requested otherwise.
- The burn/delete flow must actually clear stored chat state.
- Do not weaken privacy copy.
- Do not add dark patterns that encourage users to keep writing angry messages.
- Avoid manipulative, shaming, therapeutic, legal, or diagnostic language.
- Do not claim the app provides therapy, crisis intervention, mediation, or professional advice.
- Do not add features that encourage harassment, stalking, coercion, threats, or abuse.

## Privacy rules

- Chat messages are sensitive emotional data.
- Chat messages must remain local in browser storage unless a future change explicitly states otherwise and updates privacy documentation.
- `localStorage` usage must be documented accurately.
- Cookie usage must be documented accurately, especially `NEXT_LOCALE` if used.
- Analytics must never include chat message content.
- If analytics scripts are present, do not claim “no analytics.”
- If Web3Forms is enabled, privacy copy must state that contact form data is processed by Web3Forms.
- Do not introduce hidden tracking, ad pixels, profiling, session recording, or behavioral analytics.
- Any privacy-impacting feature must update README and privacy/legal pages.

## AI rules

- Local/on-device AI behavior must be described honestly.
- If `NEXT_PUBLIC_MODEL_ID` is not set, use predefined local fallback replies.
- Generated replies must stay short, calm, non-escalating, and safe.
- Do not generate insults, threats, pressure tactics, manipulation, or legal/medical/therapy advice.
- Do not present generated text as objectively correct.
- Do not imply the app understands full relationship context.

## Safety UX rules

- Encourage pausing, cooling down, and rewriting calmly.
- For crisis or danger contexts, recommend contacting trusted people or local emergency/crisis resources.
- Do not overpromise emotional outcomes.
- Do not use addictive engagement loops.
- Do not make the app feel like a social network.

## Internationalization rules

- Preserve locale-aware routing and translations.
- Supported locales: `en`, `de`, `tr`, `es`.
- When adding UI copy, update all locale dictionaries.
- Avoid hardcoded user-facing strings in components.
- Keep translations semantically aligned, not mechanically copied.

## Architecture rules

- Keep server/client boundaries clean.
- Client components must not import server-only modules.
- Storage helpers must remain SSR-safe.
- Preserve existing routes, localized URLs, sitemap behavior, robots behavior, and PWA metadata.
- Keep service worker/PWA changes conservative.
- Do not add unnecessary dependencies.
- Do not move test/dev dependencies into production dependencies.
- Keep `private: true` in `package.json` unless explicitly asked to publish as an npm package.

## Required checks

Before finishing any code change, run:

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

If a check fails:

- Fix it if caused by your change.
- Otherwise document the failure clearly.
