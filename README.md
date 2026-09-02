# richardwollyce.com

Portfolio and CV of Richard Wollyce, Tech Lead & Full-Stack Software Engineer.

Next.js (App Router) and React, with no CMS. The copy lives in one file per language,
`src/data/content/en.js`, `pt-BR.js` and `es.js`, and each language has its own
prerendered URL: `/` (English), `/pt-br` and `/es`, with `hreflang` alternates, a
sitemap and a robots file. The switcher in the header moves between those routes and
remembers the choice.

## Run

```bash
npm install
npm run dev
npm run build
```

## CVs

The three PDFs in `public/` and the Markdown mirrors in `cv/` are generated from a
single source, `scripts/cv_content.py`, by `scripts/generate-cv.py` (reportlab):

```bash
python scripts/generate-cv.py
```

Edit the Python file, run the script, and commit both the PDFs and the Markdown. The
site's own copy of the same material is in `src/data/content/`; the two are kept in
step by hand.

## Layout

- `src/app/[[...locale]]/` holds the root layout and the page; the optional catch-all
  is what gives every language its own static route.
- `src/data/meta.js` builds the per-language metadata (title, description, Open Graph,
  canonical and alternates).
- `src/i18n/LocaleProvider.js` carries the current language to the components.
- `src/components/` are the sections of the page, one folder each.
