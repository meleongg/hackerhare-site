# HackerHare

Marketing site for **HackerHare**, a browser extension that runs security heuristics **on your device**—flagging risky autofill, deceptive UI, phishing-style domains, and unencrypted credential submission. Form and page content stay local; the extension may send an **anonymous +1 ping** when a heuristic blocks something (see Privacy Policy)—no URLs, inputs, or identifiers.

This repo hosts the public landing page, a live **global intercept counter** (anonymous +1 pings from the extension), Privacy Policy / Terms pages, and the `/api/metrics/increment` telemetry endpoint.

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 4** · **Framer Motion** · **next-themes**
- **Neon** (`@neondatabase/serverless`) for the global metrics counter
- Deployed on **Vercel** (typical setup)

## Getting started

**Prerequisites:** Node.js 20+, npm

```bash
git clone https://github.com/meleongg/hackerhare-site.git
cd hackerhare-site
npm install
cp .env.example .env.local
```

Set in `.env.local`:

| Variable                      | Required          | Purpose                                        |
| ----------------------------- | ----------------- | ---------------------------------------------- |
| `DATABASE_URL`                | Yes (for counter) | Neon Postgres connection string                |
| `NEXT_PUBLIC_EXTENSION_URL`   | No                | Overrides default Chrome Web Store listing URL |
| `NEXT_PUBLIC_GITHUB_REPO_URL` | No                | Footer contact link (defaults to this repo)    |

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run format`.

Without `DATABASE_URL`, the site still runs; the global tally and increment API are disabled.

## Extension telemetry

The extension POSTs to `/api/metrics/increment` with header `x-hackerhare-agent` (see route handler). CORS is enabled for cross-origin extension requests. The counter is display-only marketing telemetry—no URLs, IPs, or user identifiers.
