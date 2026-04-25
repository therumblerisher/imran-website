# Fresh site direction

Use `design/reference/reference-homepage.jpg` as the **primary visual reference** for the redesign.

## Goal

Throw away the current portfolio-template direction and rebuild the site from scratch into a minimal personal homepage that feels like a calm writer-builder website.

## Reference image: what to follow closely

- Minimal single-column layout with generous whitespace
- Large name at the top: `Imran Haqeem`
- Short tagline under the name
- Tiny text nav under the tagline: `writing • projects • about`
- Main body is a simple writing list with titles on the left and dates on the right
- Footer/contact line at the bottom with email + X handle
- Elegant editorial feel; not startup landing page, not card-heavy, not portfolio-template-y
- Typography should feel restrained, literary, and timeless

## Canonical identity/contact info

Use these real details instead of the placeholders in the mock:
- Name: `Imran Haqeem`
- X handle: `therumblerisher`
- X URL: `https://x.com/therumblerisher`
- Email: `imranhq957@gmail.com`

## Editorial direction

The mock implies a more specific writing direction than the previous site.
Base the homepage around:
- building in Kuala Lumpur
- writing about the economics of Malaysian daily life
- thoughtful essays / notes / observations

Use this tagline for the new version:

`Building stuff in Kuala Lumpur. Writing about the economics of malaysian daily life.`

## Initial writing list to seed the page

Use these as homepage entries, styled like the reference image:
- `Why kopi is still underpriced` — `Apr 2026`
- `The hidden cost of Grab convenience` — `Mar 2026`
- `What rent teaches you about a city` — `Feb 2026`
- `Mamak economics: margins, mentality, mastery` — `Jan 2026`
- `The real reason things feel expensive` — `Dec 2025`
- `Notes on EPF, compound returns, and patience` — `Nov 2025`
- `Subsidies we love, subsidies we don’t see` — `Oct 2025`
- `The economics of weddings in Malaysia` — `Sep 2025`
- `Building wealth on a Malaysian salary` — `Aug 2025`
- `Small country, open economy: a survival guide` — `Jul 2025`

These can be displayed as draft-style or list entries for now, but the site should visually resemble the reference more than the previous implementation.

## Dark mode

The previous request emphasized dark mode. For this redesign:
- preserve strong dark-mode support
- if possible, make the site feel excellent in both light and dark
- but prioritize the reference image's minimalist structure and typography over the old template
- avoid flashy gradients, cards, sliders, and portfolio-theme UI

## Implementation rules

- Keep the repo static: HTML/CSS/JS only
- Preserve `.git` and `CNAME`
- It is okay to replace `index.html`, `assets/css/styles.css`, and `assets/js/main.js` wholesale
- Remove old-template sections if they no longer fit the new direction
- Keep repo instructions clear for future agent updates

## Success criteria

- The live site no longer looks like the old portfolio template
- The homepage clearly resembles the reference image's direction
- The information architecture is simple: writing, projects, about
- The page feels intentional, minimal, and editorial
- The reference image remains in-repo for future agents
