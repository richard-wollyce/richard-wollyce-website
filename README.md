# Richard Wollyce Website

Security-focused portfolio website built with React, TypeScript, and Vite.

## Stack

- React 19
- TypeScript
- Vite
- Vitest
- ESLint

## Local Development

```bash
npm install
npm run dev
```

The app builds to `dist/` as a static site.

## Validation

```bash
npm run lint
npm run test:run
npm run build
```

## Security Hardening

- Local font assets are bundled with the application instead of loading Google Fonts at runtime.
- `vercel.json` defines production security headers, including CSP, HSTS, and `X-Content-Type-Options`.
- The contact form remains static-only and opens WhatsApp with normalized, length-limited input.
- `.gitignore` excludes `.env*`, `.vercel`, and other local-only files to reduce accidental secret exposure.
- Dependabot is configured through `.github/dependabot.yml`.

## Vercel Deployment

Use the repository as a Vercel project with these settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

The project does not require a server runtime or additional environment variables for the current static deployment.
