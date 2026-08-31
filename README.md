# DaanVeda ImpactOS Landing Page

Responsive CSR and ESG product landing page with a placeholder route for connecting the main application.

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run start
```

## Main files

- `app/page.tsx` — landing-page content and components
- `app/globals.css` — visual design and responsive styles
- `app/layout.tsx` — page title and metadata
- `app/app/page.tsx` — temporary main-application entry page

## Connect the main application

The landing-page buttons currently open `/app`. You can either:

1. Replace `app/app/page.tsx` with the main application; or
2. Change the links from `/app` to the deployed application URL.

Search for `href="/app"` inside `app/page.tsx` to find all relevant links.

## Important

The demo button currently opens an email addressed to `hello@daanveda.com`. Replace that address if needed before production use.
