# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server on `localhost:5173`
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally

Deployment: pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes `dist/` to GitHub Pages (source must be set to **GitHub Actions** in the repo's Pages settings). Target site: `chanakadev.github.io` — served from the root, so no Vite `base` is set.

There is no test runner, linter, or type checker configured.

## Architecture

Single-page React portfolio (React 18 + Vite + Tailwind 3) styled as a visual recreation of Andrej Karpathy's personal site. All content is static; there is no router, state management, or backend.

**Content / presentation split.** Every section follows the same pattern:
- A component in [src/components/](src/components/) renders layout + Tailwind classes.
- The data it iterates over lives in a sibling module in [src/data/](src/data/) (`timeline.js`, `talks.js`, `teaching.js`, `writing.js`, `projects.js`, `publications.js`, `misc.js`).
- To edit copy or add an entry, edit the data file — not the component. Many strings are HTML fragments rendered via `dangerouslySetInnerHTML` (so inline `<a>` tags inside data strings are intentional, not a mistake).

**Page composition.** [src/App.jsx](src/App.jsx) is a fixed vertical stack of sections (Header → Timeline → Bio → FeaturedTalks → Teaching → FeaturedWriting → PetProjects → Publications → MiscUnsorted → footer). Reordering means editing `App.jsx` directly; there's no section registry.

**Styling conventions.** The visual design is locked in via custom Tailwind tokens in [tailwind.config.js](tailwind.config.js) and base styles in [src/index.css](src/index.css):
- Colors: `ink` (#222 body text), `sub` (#555 meta text), `link` (#1a4d99), `panel` / `panelAlt` (alternating section backgrounds).
- Layout: `max-w-page` (880px) — every section wraps its inner content in `.container-page` to enforce the page width.
- Section headings use the `.section` class (`h2.section { text-2xl lowercase ... }`), so lowercase section titles are deliberate.
- Alternating panel backgrounds come from applying `panel` to every other `<section>` (see FeaturedTalks, Publications). Maintain this rhythm when adding sections.

**Placeholder content.** Most `href` values are `"#"` and avatars/thumbnails are inline SVG gradients with emoji glyphs — this is intentional scaffolding, not broken links to fix.
