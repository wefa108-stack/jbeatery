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

## Deployment on Cloudflare Pages (Free & Commercial)

Cloudflare Pages is highly recommended for this project as it is 100% free with generous limits and fully permits commercial use.

### Method 1: GitHub Integration (Recommended)
The easiest way to deploy is directly via the Cloudflare Dashboard:
1. Push this code to a GitHub repository.
2. Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your repository.
4. **Framework preset**: Select `Next.js`.
5. Click **Save and Deploy**. 
Cloudflare will automatically build and deploy your site, and provide you with a free `your-project.pages.dev` domain.

### Method 2: Manual CLI Deployment
If you prefer deploying via terminal, use the Cloudflare Wrangler CLI.

1. Build the project for Cloudflare Pages:
```bash
npx @cloudflare/next-on-pages
```

2. Authenticate and Deploy:
```bash
npx wrangler pages deploy .vercel/output/static
```
*(Note: You will be prompted to log in to your Cloudflare account via the browser).*
