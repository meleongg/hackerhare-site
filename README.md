# HackerHare

Marketing site for **[HackerHare](https://hackerhare.vercel.app)** — a Chrome extension that runs security heuristics **on your device** to flag risky autofill, deceptive UI, phishing-style hostnames, and unencrypted credential submission. Page content and URLs are not sent to our servers for scanning.

This repo hosts the landing page, live **global intercept counter**, [Privacy Policy](https://hackerhare.vercel.app/privacy) / [Terms](https://hackerhare.vercel.app/terms), and the `/api/metrics/increment` telemetry endpoint.

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 4** · **Framer Motion** · **next-themes**
- **Neon** (`@neondatabase/serverless`) for the global metrics counter
- Deployed on **Vercel**

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

When users opt in, the extension sends an empty POST to `/api/metrics/increment` with a handshake header (`x-hackerhare-agent`). CORS is enabled for extension requests. The counter reflects **heuristic flags**, not confirmed attacks—no URLs, page content, trusted-site lists, IPs, or user identifiers.
