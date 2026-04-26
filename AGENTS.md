# AGENTS.md

## Mission

Maintain this repo as a minimal Astro-based personal website for Imran Haqeem.

This is **not** a startup landing page or portfolio template.
It should feel like a calm writer-builder website.

## Source of truth

Always check these first before making visual or structural changes:
- `design/reference/reference-homepage.jpg`
- `design/site-direction.md`
- `PLAN.md`
- `docs/agent-workflow.md`

## Canonical identity

- Name: `Imran Haqeem`
- Tagline: `Building stuff in Kuala Lumpur. Writing about the economics of Malaysian daily life.`
- X URL: `https://x.com/therumblerisher`
- Email: `imranhq957@gmail.com`
- Domain: `imranhaqeem.xyz`

## Tech stack

- Astro
- Markdown writing content in `src/content/writing/`
- Static output for GitHub Pages

## Site structure

Current primary routes:
- `/`
- `/writing`
- `/writing/[slug]`

Core files:
- `src/pages/index.astro`
- `src/pages/writing/index.astro`
- `src/pages/writing/[slug].astro`
- `src/styles/global.css`
- `src/content/writing/*.md`

## Editing rules

1. **Follow the reference image closely**
   - generous whitespace
   - quiet serif-forward typography
   - simple list-based layout
   - minimal navigation

2. **Do not reintroduce the old template**
   - no portfolio grids
   - no carousels/sliders
   - no heavy section chrome
   - no flashy landing-page styling

3. **Writing should stay easy to update**
   - add essays as markdown files
   - keep dates accurate
   - drafts are allowed and can be visibly marked

4. **Keep client-side JavaScript minimal**
   - prefer static rendering
   - only add JS when the UX clearly needs it

5. **Preserve deploy-critical files**
   - `public/CNAME`
   - domain assumptions in config

## Safe-update checklist

After edits, verify:
- the page still feels close to `design/reference/reference-homepage.jpg`
- the homepage remains clean and readable on mobile
- writing links build correctly
- contact info is still correct
- `npm run verify` succeeds
- `PLAN.md` reflects any meaningful roadmap/status change

## Common agent tasks

- add a new draft essay in `src/content/writing/`
- refine homepage copy in `src/pages/index.astro`
- adjust editorial styling in `src/styles/global.css`
- update roadmap status in `PLAN.md`
- follow the detailed playbook in `docs/agent-workflow.md`

## If the direction changes materially

Update these files together so future agents inherit the right context:
- `README.md`
- `design/site-direction.md`
- `PLAN.md`
- this file
