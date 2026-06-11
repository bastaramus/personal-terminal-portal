# Personal Terminal Portal

A personal portfolio and technical blog with an 80s tech-noir cyberpunk terminal aesthetic.

The portal presents my CV, selected projects, skills, and DevOps engineering blog posts through a retro computer-console interface inspired by classic cyberpunk games, CRT screens, old terminal UIs, and noir futurism.

It is designed to be both functional and memorable: a place to learn about my professional background as a DevOps engineer and team lead, explore my open-source infrastructure tooling, and read technical articles about AWS cloud, hybrid infrastructure (AWS + VMware vSphere), Kubernetes, Terraform, Ansible, Packer, observability, and the day-to-day craft of building and leading DevOps teams.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) — static-first, component-driven, content collections built-in |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` — utility classes + CSS custom properties for design tokens |
| Typography | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (UI / body) · [Inter](https://fonts.google.com/specimen/Inter) (headings) via Google Fonts |
| Content | Markdown files in `src/content/` — Astro content collections with Zod schema validation (blog posts, projects) |
| Language | TypeScript throughout |
| Design reference | Figma (cyberpunk design system) |

No client-side JS framework. All pages are statically rendered at build time.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)

### Install dependencies

```bash
npm install
```

### Serve locally

```bash
npm run dev
```

Opens at `http://localhost:4321` (falls back to the next available port if 4321 is taken — the actual URL is printed in the terminal).

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
personal-terminal-portal/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        # <html> shell, Google Fonts, global CSS
│   │
│   ├── components/
│   │   ├── NavBar.astro            # Sticky top navigation bar
│   │   ├── TerminalFrame.astro     # Reusable widget wrapper (orange border + header bar)
│   │   ├── HeroProfile.astro       # Landing hero: avatar, name, bio, stats, CTAs
│   │   ├── PostCard.astro          # Blog post preview card (image, tags, title, date)
│   │   ├── ProjectCard.astro       # Project card (name, desc, tags, stars/forks, links)
│   │   ├── SkillTag.astro          # Inline skill chip — plain or linked to a tag page
│   │   ├── CvTimeline.astro        # Experience timeline (role, company, period, desc)
│   │   ├── QuotePanel.astro        # Decorative quote block
│   │   └── ContactPanel.astro      # Social/contact link rows
│   │
│   ├── content/
│   │   ├── config.ts               # Content collection schemas (blog, projects)
│   │   ├── blog/                   # Blog posts as Markdown files
│   │   └── projects/               # Project pages as Markdown files (optional)
│   │
│   ├── data/
│   │   ├── profile.ts              # Name, bio, stats, socials, work experience
│   │   ├── skills.ts               # Skill categories, tags, certifications
│   │   └── projects.ts             # Featured projects data (used on landing page)
│   │
│   ├── pages/
│   │   └── index.astro             # Landing page — assembles all sections
│   │
│   └── styles/
│       └── global.css              # Design tokens (CSS custom properties), base reset,
│                                   # Tailwind @theme config, scanlines/grid overlays,
│                                   # utility animations (blink, flicker, scan)
│
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### How sections are composed

The landing page (`src/pages/index.astro`) assembles sections in order:

1. `<NavBar />` — sticky top bar
2. `<HeroProfile />` — full-width hero with city background
3. `<TerminalFrame title="// LATEST POSTS">` → `<PostCard />` × 4 (from content collection)
4. Three-column row: About `<TerminalFrame>` · `<CvTimeline />` · Skills + `<SkillTag />`
5. `<TerminalFrame title="// PROJECTS.DB">` → `<ProjectCard />` × 4 (2-column grid)
6. Two-column row: `<QuotePanel />` · `<ContactPanel />`

`TerminalFrame` is the single reusable panel primitive — it provides the orange border, corner accents, and titled header bar. Every section on the page uses it.

---

## Adding Content

### New blog post

Create a Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "One-sentence summary shown in post cards."
pubDate: 2026-06-12
tags: ["kubernetes", "terraform", "devops"]
---

Post body goes here.
```

The landing page automatically picks up the 4 most recent non-draft posts. Setting `draft: true` in frontmatter hides a post from all listings.

### New project (Markdown)

Create a Markdown file in `src/content/projects/`:

```markdown
---
name: "MY-PROJECT"
description: "What it does."
tags: ["rust", "cli"]
status: "ACTIVE"
repo: "https://github.com/you/my-project"
stars: 0
forks: 0
---

Extended project description.
```

### Featured projects (landing page)

The four project cards on the landing page come from `src/data/projects.ts`, not the content collection. Edit that file directly to update them.

---

## Design Tokens

All visual constants live as CSS custom properties in `src/styles/global.css` and are mapped into Tailwind's `@theme` block:

| Token | Value | Usage |
|-------|-------|-------|
| `--cyber-bg` | `#0d0d0d` | Page background |
| `--cyber-panel` | `#111111` | Widget panels |
| `--cyber-orange` | `#e8820a` | Primary accent, borders, highlights |
| `--cyber-orange-dim` | `rgba(232,130,10,0.35)` | Subtle borders |
| `--cyber-green` | `#4ade80` | Status indicators (ONLINE, ACTIVE) |
| `--cyber-text` | `#d4d4d4` | Body text |
| `--cyber-text-dim` | `#6b6b6b` | Secondary / muted text |
| `--cyber-text-bright` | `#f5f5f5` | Headings, emphasis |

The design was built in Figma first — these tokens match the Figma variable collection exactly.

---

## Claude Code Setup

This project uses **Claude Code** as the primary development assistant, with MCP (Model Context Protocol) servers wired in for design integration.

### Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### MCP Servers

MCP servers extend Claude Code with external tool access. This project's servers are declared in `.mcp.json` at the repo root.

| Server | Purpose |
|--------|---------|
| `figma` | Read/write Figma designs, generate UI from code, sync design tokens |

`.mcp.json` is committed to the repo — it defines the server list but **not secrets**.

### Secrets

Secrets are stored in `.claude/settings.local.json`, which is **git-ignored** and never committed.

```bash
mkdir -p .claude
touch .claude/settings.local.json
```

```json
{
  "env": {
    "FIGMA_API_KEY": "your-figma-personal-access-token"
  }
}
```

**How to get a Figma API key:** Figma → avatar → Settings → Personal access tokens → Generate.

### Start Claude Code

```bash
claude
```

Claude picks up `.mcp.json` automatically and injects env vars from `settings.local.json`. Run `/mcp` inside the session to confirm the Figma server is connected.

---

## Contributing

This is a personal project. Issues and feedback are welcome, but PRs are unlikely to be merged.

---

## License

MIT
