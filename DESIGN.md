---
version: alpha
name: Vicente Akel — CV Editorial
description: |
  A personal CV for a Chilean software engineer, built as a single editorial
  column. Anchored on warm cream canvas with serif display type (Fraunces),
  a single saturated terracotta accent, and one dark surface used sparingly.
  No eyebrows, no pills, no chip cards. Composition reads like a long-form
  magazine page, not a SaaS marketing template. Bilingual EN/ES.
---

# Design system

## Direction (one sentence)

> On this page, the engineer's work history becomes an editorial column — each role a paragraph, each skill a typographic entry, the whole page set in the warm cream + serif vocabulary of a literary quarterly rather than a portfolio template.

## Why this direction

- The current design falls in the dark-warm + terracotta cluster that the design-taste-frontend study flags as the most datable AI-default of 2024-2026. Staying there means competing with every other generated portfolio.
- Editorial mono is rare in the portfolio-engineer category. A serif-driven page reads as deliberate, considered, confident — the same signal a CV is trying to send.
- The user works in fintech and medical AI. The cream/serif voice is more compatible with the high-trust domains they serve (banking, healthcare) than the dark-terminal aesthetic.

## Color tokens

| Role | Hex | Use |
|---|---|---|
| `canvas` | `#f6f2eb` | Page body, the warm cream floor |
| `surface` | `#efe9dd` | Cards on canvas — one tonal step down |
| `surface-strong` | `#e6dfd1` | Selected/featured cards, table headers |
| `ink` | `#1a1816` | Headlines, primary text — warm black |
| `ink-secondary` | `#4a463f` | Body paragraphs, descriptions |
| `ink-muted` | `#7a756b` | Captions, metadata, footer fine print |
| `accent` | `#a8553f` | Single saturated terracotta — links, numbers, keywords |
| `accent-active` | `#7d3e2e` | Pressed accent |
| `accent-dim` | `rgba(168, 85, 63, 0.12)` | Subtle accent backgrounds |
| `night` | `#1a1816` | The single dark surface (hero inverse + featured card + footer) |
| `night-raised` | `#2a2724` | Cards on night |
| `on-night` | `#f6f2eb` | Text on night — same as canvas |
| `hairline` | `rgba(26, 24, 22, 0.10)` | 1px rules, table dividers |

## Typography

- **Display:** Fraunces (variable, weight 300–700, opsz 9–144). Use 300–400 for headlines, never bold.
- **Body:** Inter (weight 400–500). Already loaded.
- **Mono:** JetBrains Mono (weight 400–500). For keywords, period dates, the section number labels.

Hierarchy:

| Token | Family | Size desktop | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | Fraunces | clamp(64px, 11vw, 144px) | 300 | -0.025em | Hero name |
| `display-lg` | Fraunces | clamp(40px, 6vw, 72px) | 400 | -0.02em | Section heads (when used) |
| `display-md` | Fraunces | 32px | 400 | -0.01em | Card role titles |
| `display-sm` | Fraunces | 22px | 400 | 0 | Skill category heads |
| `lead` | Inter | clamp(20px, 2vw, 28px) | 400 | 0 | Hero tagline, About lead |
| `body-lg` | Inter | 18px | 400 | 0 | Card descriptions |
| `body` | Inter | 16px | 400 | 0 | Default paragraph text |
| `body-sm` | Inter | 14px | 400 | 0 | Metadata |
| `caption` | Inter | 13px | 500 | 0 | Small labels |
| `keyword` | JetBrains Mono | 14px | 400 | 0 | Skill chips in editorial list |
| `number` | Fraunces | 96px | 300 | -0.02em | Section serial numbers (01, 02, 03) |

## Spacing

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Inline gaps |
| `space-2` | 8px | Tight stack |
| `space-3` | 12px | Component internal |
| `space-4` | 16px | Card padding halves |
| `space-5` | 24px | Standard gap |
| `space-6` | 32px | Card padding |
| `space-7` | 48px | Section sub-dividers |
| `space-8` | 64px | Inter-section |
| `space-9` | 96px | Major section break |
| `space-10` | 128px | Hero top space |

## Shape

- Cards: 4px (almost-square, sharper than the current 16px)
- Buttons: 4px (same family)
- Pills: not used
- Avatar circles: full

## Composition rules

1. No eyebrows above headlines. No ALL-CAPS tracked-out labels.
2. Section numbers (01, 02, 03) in Fraunces 96px / 300 sit on the left of the section content — they ARE the section label.
3. Cards in different sections use different surface tones — never two adjacent sections with the same card surface.
4. Maximum two typefaces on any single screen.
5. Body type runs to 65ch maximum.
6. The hero inverts to the `night` surface once, on the words "Currently building Xepelin". One inversion per page.
7. Whitespace is structural, not decorative — gaps between sections are larger than gaps inside sections.

## Motion

- Hero: scroll-linked parallax (gentle, max 80px translate).
- Sections: stagger on enter (60–90ms between heading and content), triggered once.
- All transforms GPU-only (transform, opacity).
- `prefers-reduced-motion`: all motion disabled, content still present.
- No infinite loops except a single slow rotate on the accent glyph in the hero (3 rev/min, pauses on reduced motion).

## Accessibility

- `color-scheme: light` on html (the page is light, even though there's a dark surface accent).
- `<meta name="theme-color" content="#f6f2eb">`.
- Skip link to main content (already present, keep).
- Focus-visible: 2px outline in accent, 3px offset.
- All buttons hit-target ≥ 44×44px on touch.
- Semantic HTML throughout (button, a, section, h1-h3, nav).
- Decorative SVGs aria-hidden.
- Contrast: ink on canvas 11.2:1 (AAA). ink-secondary on canvas 8.4:1 (AAA). accent on canvas 4.6:1 (AA).