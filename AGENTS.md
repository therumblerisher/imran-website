# AGENTS.md

## Mission

Keep this repo as Imran's lightweight internet home for:
- what he's building
- what he's learning
- draft-first writing

## Source of truth

- Identity + tagline live in `index.html`
- Styling lives in `assets/css/styles.css`
- Theme behavior and small interactions live in `assets/js/main.js`

## Canonical profile info

- Name: **Imran Haqeem**
- X: **https://x.com/therumblerisher**
- Email: **imranhq957@gmail.com**
- Tagline: **Building stuff in Kuala Lumpur. Writing about things im learning**
- Location copy: **Kuala Lumpur, Malaysia**

## Growth agent workflow

When updating this repo:

1. **Assume draft-first publishing**
   - New ideas go into the `#writing` section as draft cards first
   - Do not present unfinished writing as polished essays
   - Keep labels explicit: `Draft`, plus a simple category like `Build notes`, `Product`, or `Personal`

2. **Preserve positioning**
   - This is a builder/writer site, not a corporate portfolio
   - Prefer current projects, learnings, and experiments over old resume-style copy

3. **Keep consistency across sections**
   - If X/email changes in one place, update hero/contact/footer together
   - If tagline changes, check page title + hero + README

4. **Respect dark mode**
   - Dark is the default experience
   - Test contrast before shipping visual changes
   - Don't introduce cards or text that only work on light backgrounds

5. **Stay lightweight**
   - Avoid adding dependencies, build steps, or frameworks unless explicitly requested
   - Prefer surgical edits

## Safe edit checklist

After making changes, verify:
- `index.html` still has valid section anchors
- theme toggle still works
- writing cards read cleanly on mobile and desktop
- contact links open the correct X/email targets
- footer year still renders

## Don't do

- Don't invent metrics or credentials
- Don't remove the draft status from writing stubs without approval
- Don't swap the site back to light-first
- Don't add heavy tooling for a simple copy/style update
