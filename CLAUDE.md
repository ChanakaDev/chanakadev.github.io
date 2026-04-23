# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Vite dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # serve dist/ locally to verify before deploy
```

## Architecture

**Stack:** Vite 6 + React 18 + Tailwind CSS v4 + React Router v6 (HashRouter)

**Routing:** HashRouter — all routes are `/#/`, `/#/publications`, `/#/projects`, `/#/contact`. This avoids GitHub Pages 404s with no server config needed.

**File layout:**
```
src/
  components/     Navbar, Footer (shared across all pages)
  pages/          Home, Publications, Projects, Contact
  data/           projects.js, publications.js  ← edit content here
  App.jsx         Router + layout shell
  index.css       Tailwind v4 @theme tokens
```

## Styling

Tailwind CSS v4 is configured via `@theme {}` in [src/index.css](src/index.css) — there is no `tailwind.config.js`. The `@tailwindcss/vite` plugin processes it.

**Custom tokens** (all extend Tailwind defaults, not replace):
- **Colors** — full Material Design 3 system: `primary`, `secondary`, `tertiary`, `surface-container-*`, `on-*` variants, `outline`, `outline-variant`. See the `@theme` block for hex values.
- **Spacing** — `stack-sm` (8px), `stack-md` (24px), `stack-lg` (48px), `gutter` (24px), `section-padding` (80px), `container-max` (1140px).
- **Type scale** — `text-headline-xl/lg/md`, `text-body-lg/md`, `text-label-caps`. Each includes line-height, letter-spacing, and font-weight via the `--text-{name}--*` modifiers.
- **Font families** — `font-headline-xl/lg/md` → Newsreader (serif); `font-body-lg/md`, `font-label-caps` → Manrope (sans-serif). Loaded via Google Fonts in [index.html](index.html).
- **Border radius** — `rounded` (2px), `rounded-lg` (4px), `rounded-xl` (8px), `rounded-full` (12px). All subtler than Tailwind defaults.

Standard Tailwind utilities (`p-4`, `text-slate-900`, `gap-8`, etc.) still work alongside custom tokens.

## Updating content

All page content is separated from component logic:
- **Projects** — edit `src/data/projects.js`
- **Publications & citation metrics** — edit `src/data/publications.js`
- **Name, bio, hero text, lab stats** — edit `src/pages/Home.jsx`
- **Contact address, profile links** — edit `src/pages/Contact.jsx`

## Deployment

The GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) triggers on push to `main`, builds the app, and deploys `dist/` to GitHub Pages.

**One-time setup required in the repo settings:**
- Settings → Pages → Source → **GitHub Actions**

After that, every push to `main` deploys automatically.

## Known placeholders

- All `href="#"` links (CV download, Google Scholar, ORCID, GitHub) need real URLs.
- Profile images are from Google's AIDA public service and should be replaced with actual photos.
- The contact form `onSubmit` is a no-op — wire up a form service (Formspree, EmailJS, etc.) when ready.
