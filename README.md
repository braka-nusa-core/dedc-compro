# DEDC Website — Phase 1 Foundation

Design Engineering & Drafting Course — Professional Engineering Training Center Website

**Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18.17.0 or later |
| npm | 9.0.0 or later |

---

## Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in the required values:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://dedc.co.id`) |
| `NEXT_PUBLIC_WA_NUMBER` | WhatsApp number in international format without `+` (e.g. `6281234567890`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | Google Maps embed URL for Contact page |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type check |
| `npm run format` | Format with Prettier |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router — routes and layouts
│   ├── layout.tsx          # Root layout — fonts, providers, skip link
│   ├── page.tsx            # Home page (Phase 3 placeholder)
│   ├── globals.css         # Tailwind v4 @theme + base styles
│   ├── sitemap.ts          # Dynamic sitemap generator
│   ├── robots.ts           # Dynamic robots.txt
│   ├── about/              # /about route
│   ├── programs/           # /programs + /programs/[slug] routes
│   ├── success-stories/    # /success-stories route
│   ├── resources/          # /resources + /resources/[slug] routes
│   ├── gallery/            # /gallery route
│   └── contact/            # /contact route
│
├── components/             # React components (built in Phase 2)
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Navbar, Footer, WhatsAppButton
│   ├── common/             # Shared components (cards, buttons, etc.)
│   └── sections/           # Page sections grouped by route
│
├── lib/                    # Utilities and helpers
│   ├── animations.ts       # Framer Motion variant presets
│   ├── constants.ts        # Site-wide constants
│   ├── fonts.ts            # next/font configuration
│   ├── metadata.ts         # generateMetadata() helper
│   ├── schema.ts           # JSON-LD schema generators
│   ├── utils.ts            # cn(), slugify(), formatNumber()
│   └── whatsapp.ts         # WhatsApp URL builder
│
├── config/                 # Site configuration
│   ├── navigation.ts       # Navbar and footer link structure
│   ├── programs.ts         # Programme slug constants
│   ├── seo.ts              # Per-page SEO defaults
│   └── site.ts             # Site-level config
│
├── data/                   # Static content (replaces CMS in v1)
│   ├── articles.ts         # Resource articles
│   ├── clients.ts          # Corporate clients
│   ├── company.ts          # Company info
│   ├── faq.ts              # FAQ items
│   ├── gallery.ts          # Gallery images
│   ├── metrics.ts          # Trust metric numbers
│   ├── programs.ts         # Training programmes
│   ├── successStories.ts   # Alumni success stories
│   ├── testimonials.ts     # Testimonials
│   └── trainers.ts         # Trainer profiles
│
├── hooks/                  # Custom React hooks
│   ├── useActiveSection.ts
│   ├── useAnimateOnScroll.ts
│   ├── useCounter.ts
│   ├── useMediaQuery.ts
│   └── useWhatsApp.ts
│
├── providers/              # React context providers
│   ├── AnalyticsProvider.tsx
│   ├── ThemeProvider.tsx
│   └── index.tsx
│
└── types/                  # TypeScript type definitions
    ├── index.ts            # Re-exports all types
    ├── alumni.ts
    ├── article.ts
    ├── client.ts
    ├── faq.ts
    ├── gallery.ts
    ├── metadata.ts
    ├── navigation.ts
    ├── program.ts
    ├── testimonial.ts
    └── trainer.ts
```

---

## Content Updates

All website content is stored as TypeScript files in `src/data/`. To update content, edit the relevant file — no CMS required.

| File | Update When |
|------|-------------|
| `src/data/metrics.ts` | Trust metric numbers change |
| `src/data/programs.ts` | Programme details, curriculum, pricing |
| `src/data/trainers.ts` | Trainer profiles and photos |
| `src/data/successStories.ts` | New alumni stories |
| `src/data/testimonials.ts` | New testimonials |
| `src/data/clients.ts` | Corporate client logos |
| `src/data/gallery.ts` | Gallery photos |
| `src/data/faq.ts` | FAQ questions and answers |
| `src/data/company.ts` | Contact info, address, social links |

---

## Photography

Replace placeholder image paths in `src/data/` files with real photos. All photos go in `public/images/`:

| Directory | Contents |
|-----------|----------|
| `public/images/trainers/` | Trainer headshots |
| `public/images/alumni/` | Alumni photos |
| `public/images/clients/` | Corporate client logos |
| `public/images/gallery/` | Training activity photos |
| `public/images/programs/` | Programme hero and thumbnails |
| `public/images/logo/` | DEDC logo variants |

**Required formats:** WebP preferred, JPG/PNG accepted. Minimum widths: hero 1200px, card thumbnails 600px.

---

## Deployment (Vercel)

1. Push to GitHub
2. Connect repository to Vercel
3. Add all environment variables from `.env.example` in Vercel dashboard
4. Deploy — `vercel.json` handles headers and caching automatically

---

## Phase Roadmap

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1** | ✅ Complete | Foundation — config, types, data, utilities |
| **Phase 2** | ⏳ Next | Global components — Navbar, Footer, cards, hooks |
| **Phase 3** | Pending | Page assembly — all 8 pages with real sections |
| **Phase 4** | Pending | QA, performance, accessibility, launch |
