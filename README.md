# imran-website

Minimal personal site for **Imran Haqeem**.

## Current direction

This repo is no longer a portfolio-template site.
It is a quiet editorial homepage centered on:
- writing
- projects
- about

Primary visual reference:
- `design/reference/reference-homepage.jpg`

Primary written brief:
- `design/site-direction.md`

## Canonical profile info

- Name: `Imran Haqeem`
- Tagline: `Building stuff in Kuala Lumpur. Writing about the economics of malaysian daily life.`
- X: `https://x.com/therumblerisher`
- Email: `imranhq957@gmail.com`

## Key files

- `index.html` — homepage markup
- `assets/css/styles.css` — editorial layout + theme styling
- `assets/js/main.js` — theme toggle logic
- `design/reference/reference-homepage.jpg` — design reference image
- `design/site-direction.md` — product/design brief for future updates
- `CNAME` — custom domain

## Local preview

```bash
cd /Users/imranhaqeem/workspace/repos/imran-website
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Update rules

1. **Stay close to the reference direction**
   - Minimal
   - Editorial
   - Calm typography
   - No portfolio-template UI
   - No sliders, cards, or flashy landing-page patterns unless explicitly requested

2. **Writing list is the core of the homepage**
   - Add newest entries at the top
   - Keep titles concise
   - Keep dates in `Mon YYYY` format
   - Entries can remain drafts/in-progress; do not imply they are fully published essays unless asked

3. **Keep structure simple**
   - Top-level IA is: `writing`, `projects`, `about`
   - Footer should keep the real email and X handle

4. **Dark mode matters**
   - Theme support should stay polished in both light and dark
   - Do not sacrifice readability or the minimalist feel

## Deploy

```bash
git status
git add .
git commit -m "Update imran website"
git push origin main
```
