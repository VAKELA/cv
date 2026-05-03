# AGENTS.md

## Project

Personal portfolio/CV — Next.js 16 single-page app, no backend, no API routes.

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build (also validates types via next build)
npm run lint     # eslint (core-web-vitals + typescript configs)
```

No test runner, no typecheck-only script. `npm run build` is the type-check gate.

## Architecture

```
src/
├── app/
│   ├── layout.tsx     # Root layout — Inter + Syne fonts, metadata
│   ├── page.tsx       # "use client" — assembles all sections
│   └── globals.css    # All styles + CSS custom properties
├── components/
│   ├── I18nProvider.tsx  # React context — language state, localStorage persistence
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   └── FloatingContact.tsx
└── data/
    ├── content.ts     # Structured data (personal, education, experience, skills)
    └── i18n.ts        # Translations (en/es) — edit UI strings here
```

Path alias: `@/*` → `./src/*` (tsconfig).

## i18n

Bilingual (English/Spanish). `I18nProvider` wraps the entire page. Defaults to browser language, persisted to `localStorage`. To add/change UI text, edit `src/data/i18n.ts`. To add/change structured content, edit `src/data/content.ts`.

## Design Tokens (globals.css)

- Background: `#111111` · Surface: `#1a1a1a` · Accent: `#00d4aa`
- Section padding: `--section-padding: 120px`
- Fonts: Inter (body, CSS var `--font-inter`) + Syne (headings, `--font-syne`)

## CI / Deploy

GitHub Actions workflow (`.github/workflows/deploy.yml`): on push to `master` → `npm ci` → `npm run build` → `npx vercel --prod`. Requires `VERCEL_TOKEN` secret. Node 20.

## Gotchas

- `page.tsx` is `"use client"` — the whole page renders client-side
- No AmbientBackground component exists (was removed); don't reference it
- `content.ts` has no `hero` or `contact` keys — hero text comes from `i18n.ts`, contact links from `content.personal`