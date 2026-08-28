// Inline SVG rather than emoji: Windows ships no flag glyphs, so the emoji
// approach renders as bare letter pairs on the author's own machine.
// Simplified but recognisable at 20px; no coats of arms, no 50 stars.

const STAR_ROWS = [0, 1, 2, 3].flatMap((row) =>
  [0, 1, 2, 3, 4].map((col) => ({
    cx: 1.6 + col * 1.55 + (row % 2 ? 0.78 : 0),
    cy: 1.6 + row * 1.75,
  })),
);

function UsFlag(props) {
  return (
    <svg viewBox="0 0 30 21" role="img" {...props}>
      <rect width="30" height="21" fill="#f4f5f7" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 3.23} width="30" height="1.61" fill="#c8102e" />
      ))}
      <rect width="13" height="11.3" fill="#0a3161" />
      {STAR_ROWS.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r="0.5" fill="#fff" />
      ))}
    </svg>
  );
}

function BrFlag(props) {
  return (
    <svg viewBox="0 0 30 21" role="img" {...props}>
      <rect width="30" height="21" fill="#009b3a" />
      <path d="M15 2.2 27.4 10.5 15 18.8 2.6 10.5Z" fill="#fedf00" />
      <circle cx="15" cy="10.5" r="4.6" fill="#002776" />
      <path d="M10.7 8.9a11 11 0 0 1 8.7 3.1 4.6 4.6 0 0 1-.3 1 11 11 0 0 0-8.8-3.2Z" fill="#fff" />
    </svg>
  );
}

function EsFlag(props) {
  return (
    <svg viewBox="0 0 30 21" role="img" {...props}>
      <rect width="30" height="21" fill="#aa151b" />
      <rect y="5.25" width="30" height="10.5" fill="#f1bf00" />
    </svg>
  );
}

const FLAGS = { us: UsFlag, br: BrFlag, es: EsFlag };

export default function Flag({ code, size = 20, title, className }) {
  const Component = FLAGS[code];
  if (!Component) return null;
  return (
    <Component
      width={size}
      height={(size * 21) / 30}
      className={className}
      aria-label={title}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    />
  );
}
