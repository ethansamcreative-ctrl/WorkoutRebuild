# Project Rebuild

A clean React + Vite foundation for a mobile-first workout and mobility PWA.

## Local setup

```bash
npm install
npm run dev
```

## Test the production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The included `.github/workflows/deploy.yml` builds the application and deploys the generated `dist` folder. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.

## Project structure

- `src/` — React source code
- `src/components/` — reusable UI blocks
- `src/data/` — workout and mobility content
- `public/assets/` — images, icons, patterns, and data copied directly into the build
- `.github/workflows/` — automated build and deployment
- `dist/` — generated production website; do not commit it
