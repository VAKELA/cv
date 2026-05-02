# AGENTS.md

## Project Overview

- **Project**: Personal portfolio/CV website
- **Type**: Next.js single-page application (no backend)
- **Location**: `C:\work\cv`
- **Framework**: Next.js 16 with TypeScript
- **Animation**: Framer Motion
- **Fonts**: Inter (body) + Syne (headings)

## Developer Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Lint
npm run lint

# Start production server
npm start
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx    # Root layout with fonts/metadata
│   ├── page.tsx      # Main single-page
│   └── globals.css    # All styles + CSS variables
├── components/
│   ├── Hero.tsx           # Animated hero with name/title
│   ├── About.tsx          # Scroll-reveal about
│   ├── Experience.tsx     # Timeline with staggered reveals
│   ├── Skills.tsx          # Staggered skill chips
│   ├── FloatingContact.tsx # Fixed buttons (parallax)
│   └── AmbientBackground.tsx # Grid + orbs
└── data/
    └── content.ts     # All site content (edit here)
```

## Content

Edit content in `src/data/content.ts` — contains:
- hero (name, title, pitch)
- experience (array of jobs)
- skills (array)
- contact (email, linkedin, github, location)

## Design System

- **Background**: `#111111` (soft dark)
- **Surface**: `#1a1a1a` (elevated cards)
- **Accent**: `#00d4aa` (teal)
- **Spacing**: `--section-padding: 120px`

## Animations

- Scroll-driven reveals via Framer Motion `whileInView`
- Floating buttons have subtle parallax on mouse move
- Skills scale on hover
- Ambient orbs move on scroll

## Deployment

Deploy to Vercel — zero config for Next.js:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect GitHub repo to Vercel for auto-deploys.