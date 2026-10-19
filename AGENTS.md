# AGENTS.md

## Project

Personal portfolio/CV — Next.js 16 single-page app, no backend, no API routes. Modern bold dark design (Geist + Geist Mono), bilingual EN/ES, deployed on Vercel.

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
│   ├── layout.tsx     # Root layout — Geist + Geist Mono fonts, OG metadata
│   ├── page.tsx       # "use client" — assembles all sections
│   └── globals.css    # Full design system (tokens, layout, components)
├── components/
│   ├── I18nProvider.tsx  # React context — language state, localStorage persistence
│   ├── TopNav.tsx        # Fixed top nav (logo, links, lang toggle, CTA)
│   ├── Hero.tsx          # Name + tagline + bio + CTAs
│   ├── Stats.tsx         # 4 numbers grid (years, projects, tools, industries)
│   ├── About.tsx         # 3-paragraph intro
│   ├── Experience.tsx    # 3 job cards (Xepelin highlighted in lime)
│   ├── SelectedWork.tsx  # 3 highlight cards with external links
│   ├── Skills.tsx        # 4 skill categories grid (Backend highlighted)
│   ├── Contact.tsx       # Email CTA + social links
│   └── Footer.tsx        # Closing strip
└── data/
    ├── content.ts     # Structured data (personal, experience, skills, selected)
    └── i18n.ts        # UI strings (en/es) — edit translations here
```

Path alias: `@/*` → `./src/*` (tsconfig).

## i18n

Bilingual (English/Spanish). `I18nProvider` wraps the entire page. Defaults to browser language, persisted to `localStorage`. To add/change UI text, edit `src/data/i18n.ts`. To add/change structured content, edit `src/data/content.ts`.

## Design Tokens (globals.css)

See `DESIGN.md` for the full system.

- Canvas: `#0a0a0a` (near-black) · Surface: `#1a1a1a` · Surface-hover: `#222222`
- Ink: `#f5f5f5` · Ink-secondary: `#a3a3a3` · Ink-muted: `#6b6b6b`
- Accent: `#c6f24e` (lime) — used sparingly on highlights, CTAs, accents
- On-accent: `#0a0a0a` (text on lime)
- Fonts: Geist (body, `--font-body`) + Geist Mono (mono, `--font-mono`)

## CI / Deploy

Vercel Git integration handles deploys on push to `master` (no GitHub Actions workflow needed — it was removed in commit `e7d8897`). Node 20.

## Gotchas

- `page.tsx` is `"use client"` — the whole page renders client-side.
- Section serials and IDs: Hero (no id) → `#work` (stats) → `#about` → `#experience` → `#selected` (no id) → `#skills` → `#contact`. The TopNav links to `#experience`, `#work`, `#about`, `#skills`, `#contact`.
- All bullets/period/role/focus on experience and skills are typed as `{ en: string; es: string }` — use `language` from `useI18n()` to pick.
- `experience[0]` (Xepelin) has `highlight: true` → renders in lime.
- `selected.items[0]` (Xepelin) has `highlight: true` and `url: "https://xepelin.com"` → renders in lime with a clickable arrow.
- `skills[2]` (Backend & Data) has `highlight: true` → renders in lime.
- The `next-route-announcer` element is hidden via `globals.css` (`next-route-announcer { display: none }`) — keep that rule.