# Astro rebuild direction

Use `design/reference/reference-homepage.jpg` as the **primary visual reference**.

## Goal

Rebuild the site into a minimal Astro-based personal website that feels like a calm writer-builder homepage.

The homepage should be derived from the design image first, then extended into a lightweight writing system.

## Visual direction

Follow the reference image closely:

- minimal single-column layout
- generous whitespace
- large name at the top
- short introduction beneath the name
- elegant serif-forward typography
- cream-toned light mode with strong dark-mode support
- quiet editorial feeling, not a portfolio-template look

## Initial homepage structure

Use this structure as the baseline:

- name
- intro
- writing
- elsewhere
- currently thinking
- footer/contact

## Canonical identity/contact info

Use these real details:

- Name: `Imran Haqeem`
- Tagline: `Building stuff in Kuala Lumpur. Writing about the economics of Malaysian daily life.`
- X handle: `therumblerisher`
- X URL: `https://x.com/therumblerisher`
- Email: `imranhq957@gmail.com`
- Domain: `imranhaqeem.xyz`

## Stack direction

Use:

- Astro
- markdown-backed writing content
- static output for GitHub Pages
- minimal or zero client-side JavaScript by default

## Writing workflow

The point of Astro here is future simplicity.
After the content layer is in place, adding an essay should mean creating one markdown file in:

- `src/content/writing/`

Each essay should include frontmatter like:

- `title`
- `description`
- `date`
- `state`

## Initial content seed

Start with a few believable draft essays such as:

- `Why kopi is still underpriced`
- `The hidden cost of Grab convenience`
- `What rent teaches you about a city`

## Implementation notes

- Keep `public/CNAME`
- Keep the design reference image in-repo
- Prefer simple, readable CSS over heavy abstractions
- Do not reintroduce sliders, portfolio cards, or startup-style UI
- Build for easy GitHub Pages deployment

## Success criteria

- The site clearly resembles the reference image
- The implementation is Astro-based, not a raw static template
- Writing updates are markdown-first and easy
- The homepage feels calm, restrained, and intentional
