import { profileConfig } from './config.js'
import {
  clamp,
  escapeXml,
  formatCompactNumber,
  formatRelativeDate,
  wrapText,
} from './helpers.js'
import type { LanguageRank, ProfileSnapshot, ThemeName, ThemePalette } from './types.js'

function getThemePalette(theme: ThemeName): ThemePalette {
  if (theme === 'light') {
    return {
      name: 'light',
      background: '#f4fbff',
      backgroundAlt: '#e7f2ff',
      panel: '#ffffff',
      panelMuted: '#eef5ff',
      panelBorder: '#d7e7f4',
      text: '#0f172a',
      muted: '#52657b',
      accent: '#0077b6',
      accentSoft: '#14b8a6',
      accentMuted: '#8dddf4',
      glow: 'rgba(0, 119, 182, 0.18)',
      grid: 'rgba(122, 155, 185, 0.18)',
      chipText: '#0b2942',
    }
  }

  return {
    name: 'dark',
    background: '#050816',
    backgroundAlt: '#0c1528',
    panel: '#0b1220',
    panelMuted: '#101b31',
    panelBorder: '#1a2d46',
    text: '#ebf6ff',
    muted: '#95adc5',
    accent: '#4fc8ff',
    accentSoft: '#6cf6d9',
    accentMuted: '#1e7491',
    glow: 'rgba(79, 200, 255, 0.22)',
    grid: 'rgba(71, 108, 146, 0.16)',
    chipText: '#dff8ff',
  }
}

function renderLayout({
  theme,
  width,
  height,
  body,
}: {
  theme: ThemeName
  width: number
  height: number
  body: string
}): string {
  const palette = getThemePalette(theme)

  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(profileConfig.name)} profile surface</title>
  <desc id="desc">Animated live SVG generated from GitHub profile data for ${escapeXml(profileConfig.username)}.</desc>
  <defs>
    <linearGradient id="bg-gradient" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.background}"/>
      <stop offset="1" stop-color="${palette.backgroundAlt}"/>
      <animate attributeName="x1" values="0;${Math.round(width * 0.15)};0" dur="16s" repeatCount="indefinite" />
      <animate attributeName="y2" values="${height};${Math.round(height * 0.85)};${height}" dur="16s" repeatCount="indefinite" />
    </linearGradient>
    <radialGradient id="glow-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${Math.round(width * 0.72)} ${Math.round(height * 0.18)}) rotate(90) scale(${Math.round(height * 0.45)} ${Math.round(width * 0.35)})">
      <stop stop-color="${palette.glow}"/>
      <stop offset="1" stop-color="transparent"/>
    </radialGradient>
    <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="32" />
    </filter>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" stroke="${palette.grid}" stroke-width="1" />
    </pattern>
  </defs>
  <style>
    text { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
    .display { font-family: "Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif; }
    .muted { fill: ${palette.muted}; }
    .text { fill: ${palette.text}; }
    .accent { fill: ${palette.accent}; }
    .accent-soft { fill: ${palette.accentSoft}; }
    .panel {
      fill: rgba(255,255,255,${theme === 'light' ? '0.72' : '0.04'});
      stroke: ${palette.panelBorder};
      stroke-width: 1;
    }
    .chip {
      fill: rgba(255,255,255,${theme === 'light' ? '0.82' : '0.05'});
      stroke: ${palette.panelBorder};
      stroke-width: 1;
    }
    .chip-text { fill: ${palette.chipText}; font-size: 15px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
    .scan-line {
      fill: url(#glow-gradient);
      opacity: 0.85;
      animation: sweep 9s ease-in-out infinite;
      transform-origin: center;
    }
    .float-1 { animation: floatY 12s ease-in-out infinite; }
    .float-2 { animation: floatY 10s ease-in-out infinite reverse; }
    .pulse { animation: pulse 3.6s ease-in-out infinite; transform-origin: center; }
    .fade-1 { animation: phraseOne 12s linear infinite; }
    .fade-2 { animation: phraseTwo 12s linear infinite; }
    .fade-3 { animation: phraseThree 12s linear infinite; }
    .bar-fill { animation: growBar 2.6s ease-out both; transform-origin: left center; }
    @keyframes floatY {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.45; }
      50% { opacity: 1; }
    }
    @keyframes sweep {
      0% { transform: translateY(-80px); opacity: 0; }
      12% { opacity: 0.7; }
      60% { opacity: 0.32; }
      100% { transform: translateY(${height + 120}px); opacity: 0; }
    }
    @keyframes phraseOne {
      0%, 28% { opacity: 1; }
      33%, 100% { opacity: 0; }
    }
    @keyframes phraseTwo {
      0%, 33% { opacity: 0; }
      38%, 61% { opacity: 1; }
      66%, 100% { opacity: 0; }
    }
    @keyframes phraseThree {
      0%, 66% { opacity: 0; }
      71%, 94% { opacity: 1; }
      100% { opacity: 0; }
    }
    @keyframes growBar {
      from { transform: scaleX(0.18); opacity: 0.45; }
      to { transform: scaleX(1); opacity: 1; }
    }
  </style>
  <rect width="${width}" height="${height}" rx="36" fill="url(#bg-gradient)" />
  <rect width="${width}" height="${height}" rx="36" fill="url(#grid)" />
  <circle class="float-1" cx="${Math.round(width * 0.82)}" cy="${Math.round(height * 0.2)}" r="${Math.round(height * 0.14)}" fill="${palette.glow}" filter="url(#soft-blur)" />
  <circle class="float-2" cx="${Math.round(width * 0.14)}" cy="${Math.round(height * 0.78)}" r="${Math.round(height * 0.12)}" fill="${palette.glow}" filter="url(#soft-blur)" />
  <rect class="scan-line" x="0" y="-120" width="${width}" height="180" />
  ${body}
</svg>`.trim()
}

function sourceLabel(snapshot: ProfileSnapshot): string {
  if (snapshot.source === 'graphql') {
    return 'live via GitHub GraphQL'
  }

  if (snapshot.source === 'rest') {
    return 'live via GitHub public API'
  }

  return 'curated fallback while live sync warms up'
}

function renderMetricCard({
  x,
  y,
  width,
  title,
  value,
  note,
}: {
  x: number
  y: number
  width: number
  title: string
  value: string
  note: string
}): string {
  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="${width}" height="132" rx="24" />
      <text x="24" y="36" class="muted" font-size="14" letter-spacing="0.12em">${escapeXml(title.toUpperCase())}</text>
      <text x="24" y="84" class="display text" font-size="38" font-weight="700">${escapeXml(value)}</text>
      <text x="24" y="110" class="muted" font-size="15">${escapeXml(note)}</text>
    </g>
  `.trim()
}

function renderChipRow(labels: readonly string[], startX: number, y: number): string {
  let x = startX

  return labels
    .map((label) => {
      const width = Math.max(118, label.length * 11 + 34)
      const chip = `
        <g transform="translate(${x} ${y})">
          <rect class="chip" width="${width}" height="38" rx="19" />
          <text x="${width / 2}" y="24" class="chip-text" text-anchor="middle">${escapeXml(label)}</text>
        </g>
      `.trim()

      x += width + 14
      return chip
    })
    .join('')
}

function renderWrappedText(
  lines: string[],
  x: number,
  startY: number,
  lineHeight: number,
  className: string,
  fontSize: number,
): string {
  return lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${startY + index * lineHeight}" class="${className}" font-size="${fontSize}">${escapeXml(line)}</text>`,
    )
    .join('')
}

function buildLanguageBars(languages: LanguageRank[], theme: ThemePalette): string {
  const max = Math.max(...languages.map((language) => language.count), 1)

  return languages
    .slice(0, 4)
    .map((language, index) => {
      const barWidth = clamp((language.count / max) * 300, 52, 300)
      const y = 258 + index * 52
      return `
        <g transform="translate(0 ${y})">
          <text x="0" y="14" class="text" font-size="16" font-weight="600">${escapeXml(language.name)}</text>
          <text x="344" y="14" class="muted" font-size="14" text-anchor="end">${escapeXml(language.count.toString())} repo${language.count === 1 ? '' : 's'}</text>
          <rect x="0" y="24" width="300" height="12" rx="6" fill="${theme.panelBorder}" opacity="0.48" />
          <rect class="bar-fill" x="0" y="24" width="${barWidth}" height="12" rx="6" fill="${theme.accent}" />
        </g>
      `.trim()
    })
    .join('')
}

function buildActivityBars(values: number[], theme: ThemePalette): string {
  const safeValues = values.length > 0 ? values : [0, 0, 0, 0, 0, 0]
  const max = Math.max(...safeValues, 1)

  return safeValues
    .map((value, index) => {
      const height = clamp((value / max) * 120, 18, 120)
      const x = 0 + index * 28
      const y = 184 - height
      const opacity = index >= safeValues.length - 4 ? 1 : 0.66
      return `
        <g transform="translate(${x} 0)">
          <rect x="0" y="${y}" width="18" height="${height}" rx="9" fill="${theme.accent}" opacity="${opacity}" class="bar-fill" />
        </g>
      `.trim()
    })
    .join('')
}

export function renderHeroSvg(snapshot: ProfileSnapshot, theme: ThemeName): string {
  const palette = getThemePalette(theme)
  const intro = snapshot.bio?.trim() ? snapshot.bio : profileConfig.intro
  const featuredNames = snapshot.featuredRepos.map((repo) => repo.name)

  return renderLayout({
    theme,
    width: 1280,
    height: 720,
    body: `
      <text x="72" y="78" class="accent" font-size="15" font-weight="700" letter-spacing="0.18em">LIVE PRODUCT HERO // ${escapeXml(snapshot.login.toUpperCase())}</text>
      <text x="1208" y="78" class="muted" font-size="14" text-anchor="end">${escapeXml(formatRelativeDate(snapshot.lastActiveAt))}</text>

      <g transform="translate(72 140)">
        <text class="display text" font-size="84" font-weight="700" letter-spacing="-0.05em">
          <tspan x="0" y="0">${escapeXml(profileConfig.heroTitle[0])}</tspan>
          <tspan x="0" y="88">${escapeXml(profileConfig.heroTitle[1])}</tspan>
          <tspan x="0" y="176" class="accent-soft">${escapeXml(profileConfig.heroTitle[2])}</tspan>
        </text>

        <g transform="translate(0 228)">
          <text class="muted fade-1" font-size="21">${escapeXml(profileConfig.rotatingLines[0])}</text>
          <text class="muted fade-2" font-size="21">${escapeXml(profileConfig.rotatingLines[1])}</text>
          <text class="muted fade-3" font-size="21">${escapeXml(profileConfig.rotatingLines[2])}</text>
        </g>

        ${renderWrappedText(wrapText(intro, 56, 3), 0, 294, 32, 'text', 20)}
        <text x="0" y="412" class="accent" font-size="15" font-weight="700" letter-spacing="0.14em">NOW BUILDING</text>
        ${renderWrappedText(wrapText(profileConfig.nowBuilding, 62, 2), 0, 446, 30, 'muted', 18)}
        ${renderChipRow(profileConfig.capabilityStrip, 0, 498)}
      </g>

      <g transform="translate(776 134)">
        ${renderMetricCard({
          x: 0,
          y: 0,
          width: 204,
          title: 'Total Stars',
          value: formatCompactNumber(snapshot.totalStars),
          note: 'across public repositories',
        })}
        ${renderMetricCard({
          x: 228,
          y: 0,
          width: 204,
          title: 'Recent Activity',
          value: formatCompactNumber(snapshot.recentActivityCount),
          note: 'latest 28-day pulse',
        })}
        ${renderMetricCard({
          x: 0,
          y: 156,
          width: 204,
          title: 'Followers',
          value: formatCompactNumber(snapshot.followers),
          note: 'people tracking the work',
        })}
        ${renderMetricCard({
          x: 228,
          y: 156,
          width: 204,
          title: 'Active Repos',
          value: formatCompactNumber(snapshot.activeRepoCount),
          note: 'updated in the last 120 days',
        })}
      </g>

      <g transform="translate(72 632)">
        <text class="muted" font-size="14" letter-spacing="0.14em">FEATURED SURFACES</text>
        ${renderChipRow(featuredNames, 0, 20)}
      </g>

      <g transform="translate(846 622)">
        <circle cx="0" cy="0" r="7" fill="${palette.accent}" class="pulse" />
        <text x="20" y="6" class="muted" font-size="14">${escapeXml(sourceLabel(snapshot))}</text>
      </g>
    `,
  })
}

export function renderProjectsSvg(snapshot: ProfileSnapshot, theme: ThemeName): string {
  const palette = getThemePalette(theme)
  const cards = snapshot.featuredRepos.slice(0, 2).map((repo, index) => {
    const descriptionLines = wrapText(repo.description, 34, 3)
    const tags = repo.topics.slice(0, 3)
    const x = 72 + index * 568

    return `
      <g transform="translate(${x} 136)">
        <rect class="panel" width="536" height="350" rx="30" />
        <text x="32" y="44" class="accent" font-size="14" font-weight="700" letter-spacing="0.16em">0${index + 1} // ${escapeXml(
          repo.primaryLanguage.toUpperCase(),
        )}</text>
        <text x="32" y="102" class="display text" font-size="42" font-weight="700">${escapeXml(repo.name)}</text>
        <text x="32" y="136" class="muted" font-size="18">${escapeXml(
          profileConfig.featuredRepos[index]?.eyebrow ?? 'Selected Work',
        )}</text>
        ${renderWrappedText(descriptionLines, 32, 188, 30, 'text', 19)}
        ${renderChipRow(tags.length > 0 ? tags : profileConfig.featuredRepos[index]?.tags ?? [], 32, 246)}
        <line x1="32" y1="300" x2="504" y2="300" stroke="${palette.panelBorder}" stroke-width="1" />
        <text x="32" y="334" class="muted" font-size="16">stars // ${escapeXml(formatCompactNumber(repo.stars))}</text>
        <text x="248" y="334" class="muted" font-size="16">updated // ${escapeXml(formatRelativeDate(repo.updatedAt))}</text>
        <text x="504" y="334" class="accent" font-size="16" font-weight="700" text-anchor="end">github.com/${escapeXml(
          snapshot.login,
        )}/${escapeXml(repo.name)}</text>
      </g>
    `.trim()
  })

  return renderLayout({
    theme,
    width: 1280,
    height: 540,
    body: `
      <text x="72" y="78" class="accent" font-size="15" font-weight="700" letter-spacing="0.18em">SELECTED WORK // LIVE REPO CARDS</text>
      <text x="72" y="122" class="display text" font-size="54" font-weight="700">Two builds that best frame the current profile story.</text>
      ${cards.join('')}
      <g transform="translate(72 506)">
        <circle cx="0" cy="0" r="7" fill="${palette.accent}" class="pulse" />
        <text x="20" y="6" class="muted" font-size="14">${escapeXml(sourceLabel(snapshot))}</text>
      </g>
    `,
  })
}

export function renderPulseSvg(snapshot: ProfileSnapshot, theme: ThemeName): string {
  const palette = getThemePalette(theme)
  const languages = snapshot.topLanguages.slice(0, 4)
  const activitySeries = snapshot.activitySeries.slice(-12)
  const dominantStack = languages.slice(0, 3).map((language) => language.name).join(' // ')

  return renderLayout({
    theme,
    width: 1280,
    height: 520,
    body: `
      <text x="72" y="78" class="accent" font-size="15" font-weight="700" letter-spacing="0.18em">GITHUB PULSE // LIVE TELEMETRY</text>
      <text x="72" y="122" class="display text" font-size="54" font-weight="700">Recent activity, language gravity, and repo momentum.</text>

      <g transform="translate(72 168)">
        <rect class="panel" width="448" height="284" rx="28" />
        <text x="30" y="42" class="muted" font-size="14" letter-spacing="0.14em">12-WEEK ACTIVITY TREND</text>
        ${buildActivityBars(activitySeries, palette)}
        <line x1="0" y1="194" x2="386" y2="194" stroke="${palette.panelBorder}" stroke-width="1" />
        <text x="0" y="236" class="text" font-size="18">Recent pulse // ${escapeXml(formatCompactNumber(snapshot.recentActivityCount))}</text>
        <text x="0" y="264" class="muted" font-size="16">${escapeXml(
          snapshot.contributionTotal === null
            ? 'Public API mode: reading recent events and repo updates.'
            : `Contribution calendar total // ${formatCompactNumber(snapshot.contributionTotal)}`,
        )}</text>
      </g>

      <g transform="translate(560 168)">
        <rect class="panel" width="648" height="284" rx="28" />
        <text x="32" y="42" class="muted" font-size="14" letter-spacing="0.14em">LANGUAGE GRAVITY</text>
        ${buildLanguageBars(languages, palette)}
        <text x="32" y="74" class="text" font-size="18">Dominant stack // ${escapeXml(dominantStack || 'TypeScript // React')}</text>
        <text x="32" y="96" class="muted" font-size="16">Active repos // ${escapeXml(
          formatCompactNumber(snapshot.activeRepoCount),
        )}   |   Public repos // ${escapeXml(formatCompactNumber(snapshot.publicRepos))}</text>
        <text x="32" y="118" class="muted" font-size="16">Stars // ${escapeXml(
          formatCompactNumber(snapshot.totalStars),
        )}   |   Followers // ${escapeXml(formatCompactNumber(snapshot.followers))}</text>
      </g>

      <g transform="translate(72 484)">
        <circle cx="0" cy="0" r="7" fill="${palette.accent}" class="pulse" />
        <text x="20" y="6" class="muted" font-size="14">${escapeXml(sourceLabel(snapshot))}</text>
      </g>
    `,
  })
}
