# PLAN

This file is the working roadmap for the Astro rebuild of `imran-website`.

If you are an agent working in this repo:
1. read `AGENTS.md`
2. read `docs/agent-workflow.md`
3. make one coherent change at a time
4. run `npm run verify`
5. update this file when a task meaningfully changes state

## Branch policy

- `main` = currently live production site
- `redesign-astro` = active rebuild branch
- feature branches are optional, but any redesign work should merge back into `redesign-astro` until cutover
- do **not** push a redesign directly to `main` unless explicitly asked

## Product roadmap

| ID | Slice | Status | Definition of done |
| --- | --- | --- | --- |
| P1 | Astro scaffold + first-pass homepage | done | Astro project boots locally, custom domain preserved, homepage exists in Astro |
| P2 | Writing collection + routes | done | Markdown essays render on `/writing` and `/writing/[slug]` |
| P3 | Pixel-close homepage refinement | pending | Homepage spacing/type/layout feels much closer to `design/reference/reference-homepage.jpg` |
| P4 | Real content pass | pending | Final bio, intro, elsewhere links, footer, and initial essay metadata confirmed |
| P5 | GitHub Pages deploy via Actions | pending | Pages builds from GitHub Actions with `CNAME` preserved |
| P6 | Optional publishing polish | pending | RSS, sitemap, stronger OG/share image, final 404 polish |

## Agent-ops setup

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| A1 | Repo instructions for agents | done | `AGENTS.md`, `README.md`, and `docs/agent-workflow.md` define workflows |
| A2 | Verification command | done | Use `npm run verify` before handing work back |
| A3 | CI verification workflow | done | `.github/workflows/verify.yml` runs install + verify on pushes/PRs |
| A4 | Deploy workflow | pending | Do only once cutover strategy is approved |

## Content backlog

### High-priority
- tighten the homepage so it matches the design reference more closely
- confirm the exact intro copy and whether the current tagline is final
- confirm whether `Elsewhere` should include anything beyond X, GitHub, and email
- decide whether `Projects` and `About` deserve dedicated routes later or stay implicit for now

### Writing backlog
- expand `Why kopi is still underpriced`
- expand `The hidden cost of Grab convenience`
- expand `What rent teaches you about a city`
- add more notes on Malaysian daily life economics only when they feel believable and specific

## Definition of done for any agent task

A task is only done when:
- the requested files are updated
- the result still matches the editorial direction
- `npm run verify` passes
- any changed workflow assumptions are reflected in docs
- the agent reports exactly what changed and what remains

## Open questions

- Should the homepage stay as `name / intro / writing / elsewhere / currently thinking`, or should `projects` re-enter the information architecture later?
- Should essays default to `draft` unless explicitly marked ready to publish?
- When the redesign is approved, do we cut over by merging `redesign-astro` into `main`, or by replacing `main` via a clean PR?
