# CV

Every file in this folder is **generated**. Do not edit them by hand: the next run
overwrites whatever you wrote, and hand editing is exactly how the English mirror
once ended up naming the wrong employer.

The single source of the copy is [`../scripts/cv_content.py`](../scripts/cv_content.py),
one entry per locale.

```bash
python scripts/generate-cv.py
```

That writes six files from that one source:

| locale | Markdown, here | PDF, served by the site |
|---|---|---|
| English | `richard-wollyce-cv.md` | `public/richard-wollyce-cv.pdf` |
| Português (pt-BR) | `richard-wollyce-cv-pt-br.md` | `public/richard-wollyce-cv-pt-br.pdf` |
| Español | `richard-wollyce-cv-es.md` | `public/richard-wollyce-cv-es.pdf` |

Narrower runs: `--locale pt-BR`, `--format md`, `--format pdf`.

**New locales and new formats generate here too.** The Markdown lives in a versioned
folder of its own rather than under `docs/`, which is gitignored, because this content
is already public through the site: the PDFs are downloadable from the contact section
and the same copy is on the page. There is nothing to hide by ignoring it, and a mirror
that git does not track is a mirror that silently goes stale.

To change the CV, edit `scripts/cv_content.py`, run the command, and commit both the
Markdown here and the PDFs in `public/`. Keep it in step with `src/data/content/`,
which holds the site's own copy of the same material.
