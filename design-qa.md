# Design QA — Editorial Portfolio Redesign

Reference: `docs/superpowers/specs/assets/portfolio-editorial-reference.png`

Validated states:

- Desktop: 1440 × 1024 and 1280 × 720
- Tablet: 1024 × 768
- Mobile: 390 × 844
- Light and dark themes
- Desktop cursor-reactive Unicorn scene
- Tablet/mobile ambient-only Unicorn scene
- Mobile keyboard navigation, focus containment, Escape close, and focus restoration
- SDK failure/reduced-motion static fallback by code-path review

## Findings and resolutions

| Priority | Finding | Resolution | Status |
| --- | --- | --- | --- |
| P0 | None | — | Passed |
| P1 | The published Unicorn scene included its own `SYSTEMS / THAT / SHIP.` layer, duplicating the real heading. | Hide the public text layer through the scene API and enforce a scoped CSS fallback for the published HTML text node. | Fixed |
| P1 | Size containment collapsed the mobile hero while its children visibly overflowed. | Switch the mobile stage to inline-size containment so its content contributes to block flow. | Fixed |
| P1 | Container query units resolved to zero for the tablet title and portrait. | Use percentage-based tablet sizing while retaining the same responsive title matrix. | Fixed |
| P1 | The four engineering domains collided with the ownership column on desktop. | Rebalanced the strip as four equal columns and narrowed the display scale. | Fixed |
| P1 | The animated scene could reduce identity-panel contrast at extreme frames. | Reduced theme-specific scene opacity while keeping the motion visible. | Fixed |
| P2 | The production portrait triggered an LCP loading warning during development. | Mark both theme portraits as eager above-the-fold assets. | Fixed |
| P2 | The published Unicorn project carries a faint provider watermark texture. | Reduced its visual weight by breakpoint; full removal requires republishing the external scene without that authored watermark. | External constraint |

## Verification

- `npm run lint`: passed
- `npm run build`: passed
- Production runtime: no errors or new warnings
- Horizontal overflow: none at all tested breakpoints
- Reference and implementation reviewed side by side at the same desktop state

final result: passed
