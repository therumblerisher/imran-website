# Agent workflow

This repo is designed for small, safe, agent-friendly changes.

## Start here

Read, in order:
1. `AGENTS.md`
2. `PLAN.md`
3. `design/site-direction.md`
4. `design/reference/reference-homepage.jpg`

## Local setup

```bash
cd /Users/imranhaqeem/workspace/repos/imran-website
npm install
npm run dev
```

Verification:

```bash
npm run verify
```

## Branching rules

- Treat `main` as production.
- Treat `redesign-astro` as the active rebuild branch.
- If you make a substantial change, branch from `redesign-astro` and merge back there.
- Do not cut over to `main` without explicit approval.

## Repo map

- `src/pages/index.astro` — homepage
- `src/pages/writing/index.astro` — archive page
- `src/pages/writing/[slug].astro` — essay template page
- `src/content/writing/*.md` — essays and drafts
- `src/styles/global.css` — typography, spacing, theme
- `public/` — static assets including `CNAME`
- `design/reference/reference-homepage.jpg` — visual source of truth
- `PLAN.md` — roadmap and active backlog

## Common agent tasks

### 1) Add a new essay draft

1. Copy `docs/templates/essay-template.md`
2. Create a new file in `src/content/writing/` using a clean kebab-case slug
3. Fill in frontmatter accurately
4. Keep the body short if the piece is not fully written yet
5. Leave `state: draft` unless explicitly publishing it
6. Run `npm run verify`

Example filename:

```text
src/content/writing/building-wealth-on-a-malaysian-salary.md
```

### 2) Edit an existing essay

- preserve the slug unless there is a strong reason to change it
- keep the date truthful
- improve clarity before adding volume
- avoid generic AI filler
- if facts are uncertain, either remove them or mark the piece as an unfinished draft

### 3) Change homepage content

Homepage edits usually live in `src/pages/index.astro`.

Safe changes:
- refine intro copy
- add/remove an `Elsewhere` link
- update the `Currently thinking` notes
- reorder writing entries only if the underlying content dates justify it

Avoid:
- turning the page into a startup landing page
- introducing cards, heavy gradients, carousels, or noisy UI
- changing the layout so far that it no longer resembles the reference image

### 4) Change styling

Use `src/styles/global.css`.

Rules:
- preserve calm spacing
- keep serif-forward typography
- prioritize readability over novelty
- check both light and dark mode
- make mobile behavior graceful before considering the task done

### 5) Change canonical identity info

If name, tagline, handles, email, or domain change, update all relevant places:
- `AGENTS.md`
- `README.md`
- `design/site-direction.md`
- affected page content and metadata

## Content guidelines

Write in a voice that feels:
- observant
- specific
- restrained
- thoughtful about incentives and tradeoffs

Avoid writing that feels:
- overly hypey
- pseudo-profound
- generic productivity-guru
- falsely authoritative

Do not invent:
- fake achievements
- fake employers
- fake metrics
- fake publication histories
- confident claims that have not been confirmed

If a piece is a stub, let it be a stub.

## Verification checklist

Before handing work back:

- `npm run verify`
- check the changed route(s) locally if possible
- confirm `public/CNAME` still exists
- confirm links and slugs are correct
- update `PLAN.md` if status changed

## Commit guidance

Prefer clear commit messages:
- `site: refine homepage spacing`
- `essay: add draft on kopi pricing`
- `docs: add agent workflow`
- `ci: add Astro verify workflow`

## When to ask for human input

Stop and ask when:
- a change affects personal facts or public identity
- you need a link/handle/email that is not already canonical
- the design reference and the written brief conflict
- you are unsure whether a draft should be treated as published
