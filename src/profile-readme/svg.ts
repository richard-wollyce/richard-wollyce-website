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
      background: '#0c0a08',
      backgroundAlt: '#1a140e',
      panel: '#14100c',
      panelMuted: '#1a1510',
      panelBorder: '#4b3921',
      text: '#f1ece3',
      muted: '#c1b6a4',
      accent: '#c7a36b',
      accentSoft: '#efd7a5',
      accentMuted: '#76582b',
      glow: 'rgba(199, 163, 107, 0.20)',
      grid: 'rgba(255, 255, 255, 0.02)',
      chipText: '#f7f2ea',
    }
  }

  return {
    name: 'dark',
    background: '#050505',
    backgroundAlt: '#110d08',
    panel: '#0d0a07',
    panelMuted: '#14100b',
    panelBorder: '#3c2d18',
    text: '#ede7de',
    muted: '#b7ad9e',
    accent: '#c7a36b',
    accentSoft: '#f1d8a7',
    accentMuted: '#6c522a',
    glow: 'rgba(199, 163, 107, 0.18)',
    grid: 'rgba(255, 255, 255, 0.02)',
    chipText: '#f3eee6',
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
    </linearGradient>
    <linearGradient id="title-gradient" x1="0" y1="0" x2="0" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#faf6ef" />
      <stop offset="1" stop-color="#d7cec1" />
    </linearGradient>
    <radialGradient id="glow-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${Math.round(width * 0.72)} ${Math.round(height * 0.24)}) rotate(90) scale(${Math.round(height * 0.42)} ${Math.round(width * 0.24)})">
      <stop stop-color="${palette.glow}"/>
      <stop offset="1" stop-color="transparent"/>
    </radialGradient>
    <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="48" />
    </filter>
  </defs>
  <style>
    text { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
    .display { font-family: "Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif; }
    .title { fill: url(#title-gradient); }
    .muted { fill: ${palette.muted}; }
    .text { fill: ${palette.text}; }
    .accent { fill: ${palette.accent}; }
    .accent-soft { fill: ${palette.accentSoft}; }
    .panel {
      fill: rgba(15, 12, 9, 0.82);
      stroke: ${palette.panelBorder};
      stroke-width: 1;
    }
    .frame {
      fill: none;
      stroke: ${palette.panelBorder};
      stroke-width: 1.25;
    }
    .orb-glow {
      fill: url(#glow-gradient);
      opacity: 0.9;
      animation: breathe 18s ease-in-out infinite;
      transform-origin: center;
    }
    .pulse { animation: pulse 5.6s ease-in-out infinite; transform-origin: center; }
    .bar-fill { animation: growBar 2.6s ease-out both; transform-origin: left center; }
    @keyframes breathe {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); opacity: 0.7; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.45; }
      50% { opacity: 1; }
    }
    @keyframes growBar {
      from { transform: scaleX(0.18); opacity: 0.45; }
      to { transform: scaleX(1); opacity: 1; }
    }
  </style>
  <rect width="${width}" height="${height}" rx="36" fill="url(#bg-gradient)" />
  <rect x="1.5" y="1.5" width="${width - 3}" height="${height - 3}" rx="34.5" class="frame" />
  <circle class="orb-glow" cx="${Math.round(width * 0.72)}" cy="${Math.round(height * 0.24)}" r="${Math.round(height * 0.2)}" filter="url(#soft-blur)" />
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
  height,
  title,
  value,
  note,
  valueClass = 'display text',
  valueSize = 38,
}: {
  x: number
  y: number
  width: number
  height: number
  title: string
  value: string
  note: string
  valueClass?: string
  valueSize?: number
}): string {
  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="${width}" height="${height}" rx="24" />
      <text x="24" y="36" class="muted" font-size="14" letter-spacing="0.12em">${escapeXml(title.toUpperCase())}</text>
      <text x="24" y="82" class="${valueClass}" font-size="${valueSize}" font-weight="700">${escapeXml(value)}</text>
      <text x="24" y="${height - 22}" class="muted" font-size="15">${escapeXml(note)}</text>
    </g>
  `.trim()
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

function renderChipRow(labels: readonly string[], startX: number, y: number): string {
  let x = startX

  return labels
    .map((label) => {
      const width = Math.max(118, label.length * 11 + 34)
      const chip = `
        <g transform="translate(${x} ${y})">
          <rect class="panel" width="${width}" height="38" rx="19" />
          <text x="${width / 2}" y="24" class="accent" font-size="14" font-weight="700" text-anchor="middle">${escapeXml(label)}</text>
        </g>
      `.trim()

      x += width + 14
      return chip
    })
    .join('')
}

function renderListCard({
  x,
  y,
  width,
  height,
  title,
  lines,
  note,
}: {
  x: number
  y: number
  width: number
  height: number
  title: string
  lines: string[]
  note: string
}): string {
  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="${width}" height="${height}" rx="24" />
      <text x="24" y="36" class="muted" font-size="14" letter-spacing="0.12em">${escapeXml(title.toUpperCase())}</text>
      ${renderWrappedText(lines, 24, 82, 30, 'accent-soft', 24)}
      <text x="24" y="${height - 22}" class="muted" font-size="15">${escapeXml(note)}</text>
    </g>
  `.trim()
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
  const dominantLanguages = snapshot.topLanguages
    .slice(0, 3)
    .map((language) => language.name)
    .join(' / ')
  const languageLines = wrapText(dominantLanguages || 'TypeScript / React', 18, 2)

  return renderLayout({
    theme,
    width: 1280,
    height: 720,
    body: `
      <text x="72" y="78" class="accent" font-size="15" font-weight="700" letter-spacing="0.18em">LIVE PROFILE SURFACE // ${escapeXml(snapshot.login.toUpperCase())}</text>
      <text x="1208" y="78" class="muted" font-size="14" text-anchor="end">${escapeXml(formatRelativeDate(snapshot.lastActiveAt))}</text>

      <g transform="translate(72 146)">
        <text class="display title" font-size="86" font-weight="700" letter-spacing="-0.05em">
          <tspan x="0" y="0">${escapeXml(profileConfig.heroTitle[0])}</tspan>
          <tspan x="0" y="88">${escapeXml(profileConfig.heroTitle[1])}</tspan>
          <tspan x="0" y="176">${escapeXml(profileConfig.heroTitle[2])}</tspan>
        </text>

        ${renderWrappedText(wrapText(intro, 54, 3), 0, 254, 32, 'text', 20)}
        <text x="0" y="392" class="accent" font-size="15" font-weight="700" letter-spacing="0.14em">NOW BUILDING</text>
        <text x="0" y="444" class="display accent-soft" font-size="34" font-weight="700">${escapeXml(snapshot.latestRepoName)}</text>
        <text x="0" y="480" class="muted" font-size="18">Most recently updated public repository on GitHub.</text>
      </g>

      <g transform="translate(736 140)">
        ${renderListCard({
          x: 0,
          y: 0,
          width: 220,
          height: 160,
          title: 'Top Languages',
          lines: languageLines,
          note: 'most used across recent public work',
        })}
        ${renderMetricCard({
          x: 252,
          y: 0,
          width: 220,
          height: 160,
          title: 'Recent Activity',
          value: formatCompactNumber(snapshot.recentActivityCount),
          note: 'latest 28-day pulse',
        })}
        ${renderMetricCard({
          x: 0,
          y: 188,
          width: 220,
          height: 160,
          title: 'Active Repos',
          value: formatCompactNumber(snapshot.activeRepoCount),
          note: 'updated in the last 120 days',
        })}
        ${renderMetricCard({
          x: 252,
          y: 188,
          width: 220,
          height: 160,
          title: 'Followers',
          value: formatCompactNumber(snapshot.followers),
          note: 'people tracking the work',
        })}
      </g>

      <g transform="translate(736 648)">
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
