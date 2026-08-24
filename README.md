# JBeatery Frontend

This is a premium, high-end fine-dining restaurant template built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Philosophy
This project heavily relies on extreme typographic scale, massive whitespace, and highly polished micro-interactions (using Framer Motion) to deliver a Michelin-star level digital experience.

## Deployment on Cloudflare Workers

The site is deployed as a **Cloudflare Worker with static assets** (project name: `jbeatery`).

- `next build` produces the static export in `out/` (`output: "export"` in `next.config.ts`).
- `worker/index.ts` is the Worker entry point. It serves everything from the `ASSETS`
  binding (the `out/` directory) and handles the single dynamic route `POST /api/careers`,
  which forwards the job application to Resend.
- `wrangler.jsonc` wires the two together.
- `app/api/careers/route.ts` is the equivalent handler used by `next dev` only — it is
  never part of the static export, so the Worker route is what runs in production.

### Cloudflare build settings (dashboard → Workers & Pages → jbeatery → Settings → Build)

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

`exit 0` as the deploy command means *nothing is ever deployed* — the site silently keeps
serving the previous build, which is what caused `/api/careers` to return 404.

### Environment variables

`RESEND_API_KEY` must be added as a **Secret** (Settings → Variables and Secrets → type
*Secret*). A plaintext *Variable* is overwritten on every `wrangler deploy` because it is
not declared in `wrangler.jsonc`; secrets are preserved.

### Manual deployment

```bash
npm run build
npx wrangler deploy          # requires Node.js >= 22
```

Verify the API route after a deploy:

```bash
curl https://www.jbeny.com/api/careers
# {"ok":true,"route":"/api/careers","configured":true}
```
