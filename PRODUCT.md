# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone in Ayush's professional network who lands on the link — shared via LinkedIn, X, GitHub, email signature, or similar. Not a narrowly job-seeking audience; a general personal-brand presence for whoever encounters it.

## Product Purpose

A single-page personal site that establishes who Ayush is and how to reach him, fast. It exists to give a visitor quick credibility (current role, one line of personal positioning) and a low-friction way to make contact (email, LinkedIn, GitHub, X, Instagram) — not to be browsed in depth.

## Positioning

A software engineer at Bloomberg whose interest in markets predates and motivates the engineering work — markets as "a live scoreboard for the real world," and building the systems behind that scoreboard where correctness and speed have real consequences. This market-native framing (not just "SWE who also likes finance") is the distinguishing angle.

## Operating Context

- Single page (`src/pages/index.tsx`): animated name → role line ("SWE @ Bloomberg") → short positioning blurb → contact icon row → live NYSE market-open/closed indicator.
- Dark, terminal-inspired aesthetic: monospace accents, scanline texture, green accent color, typewriter-style name animation with a blinking cursor.
- Custom 404 page exists.
- No CMS, no backend, no forms — fully static content shipped in code.

## Capabilities and Constraints

- Next.js (Pages Router) + TypeScript, Tailwind CSS, Framer Motion, `react-type-animation`.
- Respects `prefers-reduced-motion` (skips typewriter/entrance animation in favor of static content).
- Contact surface is exactly: email (dev@ayushmanoj.com), LinkedIn, GitHub, X (@ayushsmanoj), Instagram.
- Market-status indicator approximates NYSE regular hours (Mon–Fri, 9:30–16:00 ET) and does not account for market holidays — documented as an accepted simplification.
- No multi-page content (no About/Skills/Experience/Projects subpages) — that structure was intentionally removed in favor of the single-page format.

## Brand Commitments

- Name: Ayush Manoj.
- Current role, stated on the page itself: SWE @ Bloomberg (not a student — has graduated from UT Austin, CS + Math).
- Voice: terse, confident, specific — avoids generic "passionate about technology" phrasing in favor of concrete, personal reasoning (see the existing hero blurb in `index.tsx`).

## Evidence on Hand

- The hero blurb itself is the canonical voice reference for any future copy (bio rewrites, etc.).
- No testimonials, press, or case studies exist or should be fabricated.

## Product Principles

- One page, one impression: optimize for a fast, confident read, not exhaustive coverage.
- Show current identity, not history — the site reflects who Ayush is now (Bloomberg SWE), not a chronological résumé.
- Personality through restraint: the terminal aesthetic and small live details (market status, typewriter cursor) carry character without adding content sections.
- Every visual flourish must degrade gracefully under `prefers-reduced-motion`.

## Accessibility & Inclusion

Reduced-motion support is implemented and expected to be preserved in any future animation work (`usePrefersReducedMotion` hook, `@media (prefers-reduced-motion: reduce)` fallback in `globals.css`).
