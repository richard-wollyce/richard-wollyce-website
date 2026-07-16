# Design QA - Editorial Portfolio Redesign

Reference: `docs/superpowers/specs/assets/portfolio-editorial-reference.png`

Validated states in this correction pass:

- Desktop: 1920 x 1080 DOM metrics and visual review before the in-app Browser tab became unstable
- Mobile: 390 x 844 DOM metrics
- Light and dark themes
- Desktop cursor-reactive Unicorn scene
- Tablet/mobile ambient-only Unicorn scene
- SDK failure/reduced-motion static fallback by code-path review

## Findings and resolutions

| Priority | Finding | Resolution | Status |
| --- | --- | --- | --- |
| P0 | None | - | Passed |
| P1 | The hero defaulted to dark mode on systems using dark color preference, making the toggle feel permanent. | Use stored preference only; otherwise boot in light mode and let the toggle control the theme explicitly. | Fixed |
| P1 | The first viewport could push the domain strip below the fold on large desktop and mobile. | Rebalanced the desktop grid to reserve strip height and compacted the mobile portrait flow so the strip begins inside the first viewport. | Fixed |
| P1 | The Unicorn scene was washing over the headline and CTA instead of reading as a background behind the portrait. | Repositioned the scene to the right side, kept it behind the portrait, and raised light-mode presence without covering the main lettering. | Fixed |
| P1 | The CTA overlapped the `SHIP.` lettering at wide desktop. | Reduced the hero title matrix and moved the action group into a clean lower-left zone. | Fixed |
| P1 | The Unicorn canvas inherited `pointer-events: none`, weakening cursor behavior validation. | Enable pointer events for the interactive desktop profile while keeping mobile in ambient mode. | Fixed |
| P1 | Next.js build warned about an inferred workspace root due to multiple lockfiles. | Set `turbopack.root` to the local project directory in `next.config.mjs`. | Fixed |
| P2 | The published Unicorn project contains a free-plan watermark render pass inside the WebGL scene. | Not removed in code. The public scene JSON states that removing or obscuring the free-plan watermark is prohibited; a watermark-free version requires republishing/exporting the scene under a plan/license that permits it. | External constraint |
| P2 | The production portrait triggered an LCP loading warning during development. | Mark both theme portraits as eager above-the-fold assets. | Fixed |

## Verification

- `npm run lint`: passed
- `npm run build`: passed
- Next.js root warning: fixed
- Desktop 1920 x 1080: light boot, `data-state="ready"`, `data-profile="interactive"`, canvas present, CTA links present, domain strip visible in first viewport, no horizontal overflow
- Mobile 390 x 844: `data-state="ready"`, `data-profile="mobile-ambient"`, domain strip begins at y=784, no horizontal overflow
- Dark toggle: DOM state changed to dark and back to light with correct button labels
- Browser screenshot limitation: after WebGL screenshot timeouts, the in-app Browser tab became unstable for additional captures. Mobile validation is metric-based for this pass.

final result: passed with screenshot limitation noted
