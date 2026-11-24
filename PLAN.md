# PLAN

This file is the working roadmap for the Astro rebuild of `imran-website`.

If you are an agent working in this repo:
1. read `AGENTS.md`
2. read `docs/agent-workflow.md`
3. make one coherent change at a time
4. run `npm run verify`
5. update this file when a task meaningfully changes state

## Branch policy

- `main` = currently live production site and only active branch (`redesign-astro` was superseded and merged)
- do **not** push changes directly to `main` without Imran's approval

## Product roadmap

| ID | Slice | Status | Definition of done |
| --- | --- | --- | --- |
| P1 | Astro scaffold + first-pass homepage | done | Astro project boots locally, custom domain preserved, homepage exists in Astro |
| P2 | Writing collection + routes | done | Markdown essays render on `/writing` and `/writing/[slug]` |
| P3 | Pixel-close homepage refinement | pending | Homepage spacing/type/layout feels much closer to `design/reference/reference-homepage.jpg` |
| P4 | Real content pass | in progress | Homepage bio, links, footer, and projects refreshed for job hunt. Projects list covers Entropic Labs (Kira, Tender OS, DX Gaming Nation, TaxFind) and TZ APAC (Panora, Sogni), plus Currently using and Currently exploring. Old economics drafts removed; Stage 2 technical writing pending. |
| P5 | GitHub Pages deploy via Actions | done | Pages builds from GitHub Actions with `CNAME` preserved |
| P6 | Optional publishing polish | pending | RSS, sitemap, stronger OG/share image, final 404 polish |

## Agent-ops setup

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| A1 | Repo instructions for agents | done | `AGENTS.md`, `README.md`, and `docs/agent-workflow.md` define workflows |
| A2 | Verification command | done | Use `npm run verify` before handing work back |
| A3 | CI verification workflow | done | `.github/workflows/verify.yml` runs install + verify on pushes/PRs |
| A4 | Deploy workflow | done | `.github/workflows/deploy.yml` publishes the Astro build to GitHub Pages on pushes to `main` |

## Content backlog

### High-priority
- publish deep technical write-ups on shipped projects and local AI experiments
- keep `Currently using` and `Currently exploring` current with active work
- move hosting to Cloudflare Pages before renaming or making the GitHub repository private

### Writing backlog
- `Building on YTL ILMU`: receipt verification, fallback routing, and hybrid tender RAG lessons from Kira and Tender OS
- `Inkling 2 Mini on a 12 GB GPU`: Strata vs llama.cpp measurements, context limits, and MCP web search
- `DX Gaming Nation`: booking, QR check-in, and HitPay webhook architecture for a daily-use KL venue
- `Panora on-device iOS lessons`: long-meeting context limits and peak memory reduction without confidential details
- `Daily setup`: Omarchy, Herdr, Rex, Claude Code, and the local markdown wiki

## Definition of done for any agent task

A task is only done when:
- the requested files are updated
- the result still matches the editorial direction
- `npm run verify` passes
- any changed workflow assumptions are reflected in docs
- the agent reports exactly what changed and what remains

## Open questions

- Should essays default to `draft` unless explicitly marked ready to publish?
- When moving to Cloudflare Pages, keep `public/CNAME` or retire GitHub Pages deploy workflow?
