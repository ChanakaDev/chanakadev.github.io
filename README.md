# Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS. The layout is modeled after Andrej Karpathy's website. Deployed to GitHub Pages at [chanakadev.github.io](https://chanakadev.github.io).

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm 10+

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Build the production bundle to `dist/`   |
| `npm run preview` | Preview the production build locally     |

## Project Structure

```
.
├── index.html              # Vite entry HTML
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component
│   ├── index.css           # Tailwind directives + global styles
│   ├── components/         # Section components (Bio, Header, Timeline, etc.)
│   └── data/               # Content for each section (publications, talks, etc.)
├── public/
│   └── .nojekyll           # Tells GitHub Pages to skip Jekyll processing
├── .github/workflows/
│   └── deploy.yml          # Build + deploy to GitHub Pages on push to main
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Editing Content

All content lives in [src/data/](src/data/). Update the relevant file to change what is rendered:

- [publications.js](src/data/publications.js)
- [talks.js](src/data/talks.js)
- [teaching.js](src/data/teaching.js)
- [timeline.js](src/data/timeline.js)
- [writing.js](src/data/writing.js)
- [projects.js](src/data/projects.js)
- [misc.js](src/data/misc.js)

## Deploying to GitHub Pages

This project ships with a GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) that builds the site and publishes `dist/` to GitHub Pages on every push to `main`.

One-time setup on the repository:

1. Push this repo to `https://github.com/ChanakaDev/chanakadev.github.io` (the `user.github.io` naming makes it a user site served from the root domain).
2. In the repository settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab). The site will be published at [https://chanakadev.github.io](https://chanakadev.github.io).

Because this is a user site (served from `/`), no `base` path is needed in [vite.config.js](vite.config.js). If you fork this into a project repo instead (e.g. `chanakadev.github.io/my-portfolio`), set `base: '/my-portfolio/'` in the Vite config.

## License

This project is private and unlicensed by default. Add a license file if you intend to distribute it.
