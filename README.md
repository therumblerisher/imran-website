# imran-website

Personal site for **Imran Haqeem**.

## Current direction

This repo is being rebuilt as an **Astro** site based on the design image in:

- `design/reference/reference-homepage.jpg`

The goal is a quiet editorial homepage with lightweight writing workflows:

- a simple homepage
- a writing archive
- markdown-backed essays
- static output for GitHub Pages

## Canonical profile info

- Name: `Imran Haqeem`
- Tagline: `I build software products and write about the economics of everyday life in Malaysia.`
- X: `https://x.com/therumblerisher`
- Email: `imranhq957@gmail.com`
- Domain: `imranhaqeem.xyz`

## Stack

- Astro
- Markdown content collection for writing
- Static build output
- GitHub Pages-compatible deployment

## Key files

- `src/pages/index.astro` — homepage
- `src/pages/writing/index.astro` — writing archive
- `src/pages/writing/[slug].astro` — essay pages
- `src/content/writing/*.md` — essays/drafts
- `src/styles/global.css` — global editorial styling
- `design/reference/reference-homepage.jpg` — visual reference
- `design/site-direction.md` — implementation brief
- `PLAN.md` — active roadmap and backlog
- `docs/agent-workflow.md` — operational instructions for agents
- `public/CNAME` — custom domain

## Local development

```bash
cd /Users/imranhaqeem/workspace/repos/imran-website
npm install
npm run dev
```

Then open the local Astro URL shown in the terminal.

## Deploy

`main` is now deployed through GitHub Pages Actions.

Typical flow:

```bash
git checkout main
git pull
# make changes
npm run verify
git add .
git commit -m "your change"
git push origin main
```

That push triggers `.github/workflows/deploy.yml` and publishes the latest Astro build to `imranhaqeem.xyz`.

## Writing workflow

Add a new essay by creating a markdown file in `src/content/writing/`.
You can also start from `docs/templates/essay-template.md`:

```md
---
title: Why kopi is still underpriced
description: Draft note on value and routine.
date: 2026-04-26
state: draft
---

Body goes here.
```

Then run:

```bash
npm run verify
```

Then commit and push.

## Agent workflow

For future agentic work, use:
- `AGENTS.md` for repo rules
- `PLAN.md` for roadmap status and open tasks
- `docs/agent-workflow.md` for common task recipes

## Notes for future updates

1. Stay visually close to the reference image.
2. Keep the site quiet, serif-forward, and editorial.
3. Avoid reintroducing portfolio-template UI.
4. Prefer zero client-side JavaScript unless there is a strong reason.
5. Preserve the custom domain setup.
