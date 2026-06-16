# CLAUDE.md — Personal Terminal Portal

> This file is the source of truth for how Claude Code should behave in this repo.
> Update it whenever a new pattern is established or a task reveals something worth preserving.

---

## Project overview

Personal portfolio and technical blog for Dmytro Khomenko (DevOps engineer, team lead, Kyiv).
Site: **https://xomenko.com**

The aesthetic is **80s tech-noir cyberpunk terminal** — CRT scanlines, orange-on-dark palette,
monospace fonts, retro console widget frames. Every design decision should reinforce this.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 — static-first, zero client-side JS by default |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` — utility classes + CSS custom properties |
| Fonts | JetBrains Mono (body/UI) · Inter (headings) — loaded via Google Fonts in BaseLayout |
| Content | Markdown in `src/content/` — Astro content collections with Zod schemas |
| Language | TypeScript throughout (strict) |
| Design reference | Figma (cyberpunk design system, tokens match exactly) |

No React, Vue, or other JS framework. All pages render at build time.

---

## File structure

```
src/
  layouts/
    BaseLayout.astro        # <html> shell, Google Fonts, global CSS import
  components/
    NavBar.astro            # Sticky top nav
    TerminalFrame.astro     # THE reusable panel primitive (orange border, header bar)
    HeroProfile.astro       # Landing hero: avatar, name, bio, stats, CTAs
    PostCard.astro          # Blog post preview card
    ProjectCard.astro       # Project card (name, desc, tags, stars/forks, links)
    SkillTag.astro          # Inline skill chip
    CvTimeline.astro        # Work experience timeline
    QuotePanel.astro        # Decorative quote block
    ContactPanel.astro      # Social/contact link rows
  content/
    config.ts               # Zod schemas for blog + projects collections
    blog/                   # Blog posts (Markdown)
    projects/               # Project detail pages (Markdown, optional)
  data/
    profile.ts              # Name, bio, stats, socials, work experience
    skills.ts               # Skill categories, tags, certifications
    projects.ts             # Featured project cards shown on landing page
  pages/
    index.astro             # Landing page — assembles all sections
  styles/
    global.css              # Design tokens, base reset, Tailwind @theme, CRT overlay animations
```

### Landing page section order (`src/pages/index.astro`)

1. `<NavBar />`
2. `<HeroProfile />`
3. Latest Posts — `<TerminalFrame>` → `<PostCard />` × 4
4. Three-column row: About `<TerminalFrame>` · `<CvTimeline />` · Skills + `<SkillTag />`
5. Projects — `<TerminalFrame>` → `<ProjectCard />` × 4 (2-col grid)
6. Two-column row: `<QuotePanel />` · `<ContactPanel />`
7. Footer

---

## Design system

### Design tokens (CSS custom properties)

Defined in `src/styles/global.css` as both CSS vars and Tailwind `@theme` tokens.
**Never hardcode colors or fonts** — always reference a token.

| Token | Value | Usage |
|-------|-------|-------|
| `--cyber-bg` | `#0d0d0d` | Page background |
| `--cyber-panel` | `#111111` | Widget panels |
| `--cyber-panel-alt` | `#161616` | Alternate panel shade |
| `--cyber-orange` | `#e8820a` | Primary accent — borders, highlights, interactive |
| `--cyber-orange-dim` | `rgba(232,130,10,0.35)` | Subtle borders and dividers |
| `--cyber-orange-glow` | `rgba(232,130,10,0.5)` | Glow/shadow effects |
| `--cyber-green` | `#4ade80` | Status indicators (ONLINE, ACTIVE) |
| `--cyber-text` | `#d4d4d4` | Body text |
| `--cyber-text-dim` | `#6b6b6b` | Secondary / muted text |
| `--cyber-text-bright` | `#f5f5f5` | Headings, emphasis |
| `--cyber-grid` | `rgba(232,130,10,0.03)` | Background grid texture |

Tailwind equivalents: `bg-cyber-bg`, `text-cyber-orange`, `border-cyber-orange-dim`, etc.

### Typography rules

- Body / UI / labels: `font-family: var(--font-mono)` (JetBrains Mono)
- Headings (`h1`–`h4`): `font-family: var(--font-sans)` (Inter), `font-weight: 700`
- Base font size: `14px` on `<html>`
- Component label text is typically `0.55rem`–`0.65rem` with wide `letter-spacing`
- Text is ALL-CAPS for labels, section titles, tags, and status indicators

### TerminalFrame — the single panel primitive

Every content section on the page wraps in `<TerminalFrame>`. It provides:
- Orange border + corner accents
- Titled header bar with optional right-side annotation

```astro
<TerminalFrame title="// SECTION.TITLE" headerRight="OPTIONAL LABEL">
  <!-- content -->
</TerminalFrame>
```

**Do not create new raw panel containers.** If a new widget is needed, wrap it in `TerminalFrame`.

### CRT overlays and animations

`body::before` = scanlines (CSS, `z-index: 9999`)
`body::after` = grid texture (`z-index: 0`)
Utility classes: `.blink`, `.flicker` — use sparingly for terminal-authenticity moments.

---

## Content conventions

### Blog posts (`src/content/blog/*.md`)

Required frontmatter:
```yaml
title: "Post Title"
description: "One-sentence summary."
pubDate: 2026-06-12
tags: ["kubernetes", "terraform"]
```
Optional: `draft: true` (hides from all listings), `cover: "url"`.

Landing page shows the 4 most recent non-draft posts, sorted by `pubDate` descending.

### Featured projects (`src/data/projects.ts`)

The 4 project cards on the landing page come from this file (static data), **not** the content
collection. Edit `projects.ts` directly to update them. The `src/content/projects/` collection
is for extended project detail pages (currently unused).

### Profile data (`src/data/profile.ts`)

All personal data — name, bio, stats, socials, work experience — lives here as exported
TypeScript constants. Edit this file to update any personal details on the site.

---

## Development workflow

```bash
npm install       # install deps (Node 18+ required)
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview prod build locally
```

**When making UI or visual changes:** start the dev server and verify the change in a browser
before reporting the task complete. Check both the golden path and obvious edge cases.

TypeScript check: `npx astro check` — run this if you change component props or data shapes.

---

## Figma integration (MCP)

Figma MCP (`figma-developer-mcp`) is configured via `.mcp.json` at the repo root.
The Figma server is enabled in `.claude/settings.json`.

The `FIGMA_API_KEY` must be set in `.claude/settings.local.json` (gitignored):
```json
{ "env": { "FIGMA_API_KEY": "your-token" } }
```

The Figma design system tokens match the CSS tokens in `global.css` exactly — if you
update tokens in one place, update both.

When asked to work with Figma:
- Load the `/figma-use` skill before every `use_figma` call.
- Load `/figma-generate-design` for full-page or multi-section layouts.
- Load `/figma-generate-library` for component or token work in Figma.

---

## Coding guidelines

### General

- TypeScript throughout — no `any`, no implicit types on public interfaces.
- No comments unless the WHY is non-obvious (hidden constraint, workaround, subtle invariant).
- No abstractions beyond what the task requires.
- No client-side JS unless explicitly requested — this is a static Astro site.

### Astro components

- Props must be typed with a TypeScript interface or inline type.
- Scoped `<style>` blocks inside `.astro` files for component-level styles.
- Page-level layout styles live in `<style>` in the page file (e.g., `index.astro`).
- Global / cross-component styles live in `src/styles/global.css` only.

### Naming and aesthetic consistency

- Section titles follow the pattern `// KEYWORD` or `// KEYWORD.NOUN` (e.g., `// PROJECTS.DB`).
- Status / label text is ALL-CAPS.
- New components should follow the naming pattern of existing ones (`NounNoun.astro`).

### Data vs content

| What | Where |
|------|-------|
| Personal profile, socials, experience | `src/data/profile.ts` |
| Skills, certifications | `src/data/skills.ts` |
| Featured project cards | `src/data/projects.ts` |
| Blog posts | `src/content/blog/*.md` |
| Project detail pages | `src/content/projects/*.md` |

---

## Email obfuscation

Email addresses must never appear in rendered HTML or source code. The pattern used:

1. At build time (Astro frontmatter), encode with `Buffer.from(email).toString("base64")`.
2. Pass the encoded value as a `data-e` attribute on a placeholder element with no text content.
3. A small inline `<script>` on the same component/page decodes with `atob(el.dataset.e)` and
   sets `el.textContent` (and `el.href` for `mailto:` links) at runtime.

Affected locations:
- `src/components/ContactPanel.astro` — `hi@xomenko.com` mailto link
- `src/components/HeroProfile.astro` — decorative `root@xomenko.com` prompt text
- `src/pages/index.astro` — `root@xomenko.com` in footer

**Do not add email strings to HTML attributes, text nodes, or JS strings in any `.astro` or
`.ts` file that gets included in the static output.** Always go through this encode/decode pattern.

---

## Claude behavior for this project

- When the task involves UI: verify in the browser — don't rely on type-checking alone.
- When adding a new section to the landing page: use `TerminalFrame` and follow the existing
  section structure in `index.astro`.
- When adding design tokens: add them to both the `@theme` block and `:root` in `global.css`.
- When asked about ops/infra topics in the context of this portfolio: frame through a
  DevOps engineering lens — AWS cloud, hybrid AWS+vSphere, IaC, containers, CI/CD.
  Dmytro Khomenko is a DevOps engineer (not a software engineer), 10+ years experience.
- Keep responses concise — no trailing summaries, no re-explaining what was just done.
- Update this CLAUDE.md whenever a new project-level pattern is established.
