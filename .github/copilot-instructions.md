# GitHub Copilot Instructions

`AGENTS.md` is the canonical source for this repository. Follow it first.

Practical summary:

- Preserve local-only chat privacy behavior.
- Never send chat message content to third parties.
- Keep UX and copy calm, de-escalating, and non-judgmental.
- When adding user-facing text, update all supported locales (`en`, `de`, `tr`, `es`).
- Keep privacy docs aligned with actual product behavior.
- Before finishing changes, run:
  - `npm run lint`
  - `npm run typecheck`
  - `npm run test`
  - `npm run build`
