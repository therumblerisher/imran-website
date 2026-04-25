# imran-website

Personal site for **Imran Haqeem**.

Current positioning:
- Tagline: **Building stuff in Kuala Lumpur. Writing about things im learning**
- X: **@therumblerisher**
- Email: **imranhq957@gmail.com**
- Default presentation: **dark mode first**

## Repo structure

- `index.html` — single-page site markup
- `assets/css/styles.css` — visual system and section styles
- `assets/js/main.js` — navigation, theme toggle, footer year
- `assets/img/` — images used by the site
- `CNAME` — custom domain (`imranhaqeem.xyz`)

## Local preview

```bash
cd /Users/imranhaqeem/workspace/repos/imran-website
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Content update rules

1. **Keep hero, contact, and footer consistent**
   - X link should point to `https://x.com/therumblerisher`
   - Email should be `imranhq957@gmail.com`
   - Tagline should stay aligned with the current builder/writer positioning unless explicitly changed

2. **Writing section is draft-first**
   - New post ideas should start as draft cards in the `#writing` section
   - Keep the `Draft` badge until Imran explicitly wants something published/polished
   - Prefer short working titles and 1-2 sentence summaries

3. **Dark mode is not optional**
   - Default state should remain dark
   - Any visual refresh should be checked in dark mode first
   - Do not regress to light-only styling

4. **Keep the site lightweight**
   - No framework migration unless explicitly requested
   - Prefer simple HTML/CSS/JS edits over adding tooling

## Publishing workflow

This site is a static site. After edits:

```bash
git status
# review changes
git add .
git commit -m "Update personal site"
git push
```

If you make copy changes, sanity-check:
- hero section
- writing draft cards
- contact links
- footer links/socials
