# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Packstring** is a productized website product for Montana outfitters, hunting guides, and fishing operations. Built by Firefly Software but has its own distinct brand identity.

**This repo is the marketing/landing site at `packstring.dev`** — it sells Packstring to outfitters (pricing, features, email signup). The actual outfitter demo app lives separately at `demo.packstring.dev`.

The landing page is a teaser/coming-soon site with email signup as the primary conversion goal. Key sections: hero, problem statement, feature list, pricing ($500 build + $35/mo), and email capture.

**Stack:** Go (standard `net/http` + `html/template`) · Tailwind CSS (CLI, no bundler) · Alpine.js (CDN/vendored) · HTMX (email signup form)

## Build & Dev Commands

```
make dev          # Go server (Air hot reload) + Tailwind watch
make build        # Go binary + minified Tailwind CSS
make css-watch    # Tailwind CLI watch mode
make css-build    # Tailwind CLI single build (minified)
make images       # WebP conversion + responsive image generation
make deploy       # Docker image build and deploy
make lighthouse   # Lighthouse CI audit
```

The Go server entry point is `cmd/server/main.go`. Tailwind watches template files and outputs to `static/css/output.css`.

## Architecture

This is a single-page marketing site (not the multi-page outfitter app). The page structure follows `docs/pricing-page-copy`:

1. **Hero** — headline, subhead, email signup CTA
2. **The Problem** — why outfitters need better websites
3. **What Packstring Is** — feature list with demo screenshots
4. **Pricing** — $500 build + $35/mo, add-ons
5. **What You Don't Get** — differentiators (no commissions, no WordPress)
6. **Coming Soon + Email Signup** — primary conversion form
7. **Footer** — Packstring by Firefly Software

### Template System

- `templates/layouts/base.html` — master layout (head, nav, footer, scripts)
- `templates/partials/` — reusable section components
- Standard Go `html/template` — not templ

### Key Patterns

- **Email signup form:** HTMX POST, server returns success/error HTML partial. This is the primary conversion goal.
- **Alpine.js:** Mobile nav toggle, minor interactivity. No build step.
- **Static files:** Served from `static/` (css, js, img, fonts).
- **Voice:** Packstring sales voice — blunt, concrete, owner-to-owner. See `docs/packstring-brand-voice-guide.md`.

## Design System

**Read `docs/style-guide.md` before writing any CSS or HTML.** Key rules:

- Never hardcode colors — use CSS custom properties (`--color-sand`, `--color-timber`, `--color-forest`, etc.)
- `border-radius: 4px` everywhere — never larger
- No parallax, no JS animation libraries, no infinite/looping animations
- Respect `prefers-reduced-motion`
- No Inter, Roboto, Arial, or system-ui fonts

### Fonts (Google Fonts)

| Font | Use |
|---|---|
| **Bitter** (serif) | Headings, trip names, prices, testimonial quotes |
| **Lora** (serif) | Body copy, descriptions |
| **Barlow Semi Condensed** (sans) | Nav, buttons, labels, badges, form labels |
| **Source Code Pro** (mono) | License numbers, coordinates, metadata |

### Colors

- **Surfaces:** sand (#F2EDE4), cream (#FAF8F3), timber (#1A1410)
- **Brand (Saddle):** #6B3A1F — headings, secondary CTA
- **Primary CTA (Forest):** #2E6B45 — buttons, action links
- **Accent (Copper):** #B8652A — eyebrows/kickers, warm glow
- **Supporting:** river (#3A6B6E), sage (#5A7A52), golden (#C8900A)

### Layout

- Max content width: 1100px
- Section padding: 80px 40px (desktop), 56px 20px (mobile)
- Card grid gap: 2px (container background = visible divider)
- Mobile-first responsive: 640px, 768px, 1024px, 1280px breakpoints

## Content & Voice

**Read `docs/packstring-brand-voice-guide.md` before writing copy.** Key points:

- Lean, muscular writing — no filler words, no superlatives without evidence
- Discovery mode (homepage): atmospheric, cinematic
- Decision mode (trip details): direct, practical, facts-forward
- Never use: "nestled," "premier," "world-class," "adventure of a lifetime"
- Montana-specific language — use place names, species, seasons concretely

## Performance Targets

- PageSpeed: 95+ mobile, 98+ desktop
- FCP: < 1.5s
- Page weight: < 500KB per page
- All images: WebP with JPEG fallback, responsive srcset, lazy loading below fold

## Documentation

- `docs/pricing-page-copy` — landing page copy (section-by-section content for this site)
- `docs/style-guide.md` — complete design system (colors, typography, components, layout)
- `docs/packstring-brand-voice-guide.md` — voice, copy patterns, word rules
- `docs/project-plan.md` — milestones and architecture for the demo outfitter app (not this site)
- `docs/outfitter-service-offering-and-demo-spec.md` — service definition, demo spec
