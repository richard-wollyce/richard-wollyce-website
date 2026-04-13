# Richard Wollyce Website

Portfolio website built with React, TypeScript, and Vite.

## Stack

- React 19
- TypeScript
- Vite
- Vercel Functions for profile SVG assets
- Vitest
- ESLint

## Local Development

```bash
npm install
npm run dev
```

The app builds to `dist/` as a static site and also exposes profile SVG endpoints from `api/profile/*.svg.ts`.

## Validation

```bash
npm run lint
npm run test:run
npm run build
```

The build now type-checks the Vite app, local tooling, and Vercel function files through project references.

## Security Hardening

- Local font assets are bundled with the application instead of loading Google Fonts at runtime.
- `vercel.json` defines production security headers, including CSP, HSTS, and `X-Content-Type-Options`.
- The contact form remains static-only and opens WhatsApp with normalized, length-limited input.
- `.gitignore` excludes `.env*`, `.vercel`, and other local-only files to reduce accidental secret exposure.
- Dependabot is configured through `.github/dependabot.yml`.
- The profile SVG endpoints never embed secrets in responses and fall back to a valid curated SVG if GitHub live data is unavailable.

## Vercel Deployment

Use the repository as a Vercel project with these settings:

- Framework preset: `Other` or `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `GITHUB_PROFILE_TOKEN`

## Profile Asset Endpoints

The GitHub profile README consumes these routes from the deployed site:

- `/api/profile/hero.svg`
- `/api/profile/projects.svg`
- `/api/profile/pulse.svg`

Use `?theme=dark` or `?theme=light` to render theme-specific variants for GitHub profile sections.
