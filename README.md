# Personal Terminal Portal

A personal portfolio and technical blog with an 80s tech-noir cyberpunk terminal aesthetic.

The portal presents my CV, selected projects, skills, and engineering blog posts through a retro computer-console interface inspired by classic cyberpunk games, CRT screens, old terminal UIs, and noir futurism.

It is designed to be both functional and memorable: a place to learn about my professional experience, explore my work, and read technical articles about DevOps architecture, platform engineering, distributed systems, reliability, observability, and the day-to-day craft of leading and building engineering teams.

---

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Claude Code](https://claude.ai/code) CLI installed
- A [Figma account](https://figma.com) with API access

---

## Claude Code Setup

This project uses **Claude Code** as the primary development assistant, with MCP (Model Context Protocol) servers wired in for design integration.

### 1. Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. MCP Servers

MCP servers extend Claude Code with external tool access. This project's servers are declared in `.mcp.json` at the repo root.

**Configured servers:**

| Server | Purpose |
|--------|---------|
| `figma` | Read/write Figma designs, generate UI from code, sync design tokens |

`.mcp.json` is committed to the repo — it defines the server list but **not secrets**.

### 3. Environment Variables

Secrets are stored in `.claude/settings.local.json`, which is **git-ignored** and never committed.

Create the file:

```bash
mkdir -p .claude
touch .claude/settings.local.json
```

Add your keys:

```json
{
  "env": {
    "FIGMA_API_KEY": "your-figma-personal-access-token"
  }
}
```

**How to get a Figma API key:**
1. Log in to Figma → click your avatar → **Settings**
2. Scroll to **Personal access tokens**
3. Generate a new token and paste it above

### 4. Start Claude Code

```bash
claude
```

Claude will automatically pick up `.mcp.json` and inject the env vars from `settings.local.json`. Run `/mcp` inside the session to confirm the Figma server connected:

```
Authentication successful. Connected to plugin:figma:figma.
```

---

## Project Structure

```
personal-terminal-portal/
├── .claude/
│   └── settings.local.json   # local secrets — never commit
├── .mcp.json                  # MCP server definitions
├── .gitignore
└── README.md
```

---

## Contributing

This is a personal project. Issues and feedback are welcome, but PRs are unlikely to be merged.

---

## License

MIT
