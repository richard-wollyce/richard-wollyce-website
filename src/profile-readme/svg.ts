import { profileConfig } from './config.js'
import {
  clamp,
  escapeXml,
  formatCompactNumber,
  formatRelativeDate,
  wrapText,
} from './helpers.js'
import type { LanguageRank, ProfileSnapshot, ThemeName, ThemePalette } from './types.js'

type LanguageShare = {
  name: string
  percent: number
}

function getThemePalette(theme: ThemeName): ThemePalette {
  void theme

  return {
    name: 'dark',
    background: '#0d1117',
    backgroundAlt: '#0d1117',
    panel: '#202020',
    panelMuted: '#171717',
    panelBorder: '#2a2a2a',
    text: '#f2f2ef',
    muted: '#787878',
    accent: '#f2c94c',
    accentSoft: '#f7f4ee',
    accentMuted: '#00d4ff',
    glow: 'rgba(0, 212, 255, 0.16)',
    grid: 'rgba(255, 255, 255, 0.03)',
    chipText: '#f2f2ef',
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
  <desc id="desc">Live profile dashboard generated from GitHub data for ${escapeXml(profileConfig.username)}.</desc>
  <defs>
    <linearGradient id="repo-glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="rgba(0,212,255,0.35)" />
      <stop offset="1" stop-color="rgba(0,212,255,0)" />
    </linearGradient>
    <filter id="soft-blur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="28" />
    </filter>
  </defs>
  <style>
    text { font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
    .display { font-family: "Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif; }
    .text { fill: ${palette.text}; }
    .muted { fill: ${palette.muted}; }
    .gold { fill: ${palette.accent}; }
    .cyan { fill: ${palette.accentMuted}; }
    .panel {
      fill: ${palette.panel};
      stroke: ${palette.panelBorder};
      stroke-width: 1;
    }
    .panel-soft {
      fill: ${palette.panelMuted};
      stroke: ${palette.panelBorder};
      stroke-width: 1;
    }
    .glow {
      animation: drift 16s ease-in-out infinite;
      transform-origin: center;
    }
    .pulse {
      animation: pulse 3.8s ease-in-out infinite;
      transform-origin: center;
    }
    .bar-fill {
      animation: growBar 2.4s ease-out both;
      transform-origin: left center;
    }
    @keyframes drift {
      0%, 100% { transform: translateY(0px); opacity: 0.6; }
      50% { transform: translateY(-10px); opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.55; }
      50% { opacity: 1; }
    }
    @keyframes growBar {
      from { transform: scaleX(0.18); opacity: 0.45; }
      to { transform: scaleX(1); opacity: 1; }
    }
  </style>
  <rect width="${width}" height="${height}" rx="30" fill="${palette.background}" />
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
      const width = Math.max(92, label.length * 10 + 26)
      const chip = `
        <g transform="translate(${x} ${y})">
          <rect class="panel-soft" width="${width}" height="34" rx="10" />
          <text x="${width / 2}" y="22" class="muted" font-size="13" font-weight="700" text-anchor="middle">${escapeXml(label.toUpperCase())}</text>
        </g>
      `.trim()

      x += width + 12
      return chip
    })
    .join('')
}

function renderMetricCard({
  x,
  y,
  width,
  height,
  title,
  value,
  note,
  icon,
}: {
  x: number
  y: number
  width: number
  height: number
  title: string
  value: string
  note: string
  icon: string
}): string {
  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="${width}" height="${height}" rx="14" />
      <text x="22" y="26" class="muted" font-size="11" font-weight="700" letter-spacing="0.18em">${escapeXml(title.toUpperCase())}</text>
      <g transform="translate(${width - 38} 16)">${icon}</g>
      <text x="22" y="72" class="display text" font-size="50" font-weight="700">${escapeXml(value)}</text>
      <text x="22" y="94" class="muted" font-size="15">${escapeXml(note)}</text>
    </g>
  `.trim()
}

function renderRecentActivityCard(snapshot: ProfileSnapshot, x: number, y: number): string {
  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="300" height="220" rx="14" />
      <text x="22" y="26" class="muted" font-size="11" font-weight="700" letter-spacing="0.18em">RECENT ACTIVITY</text>
      <g transform="translate(260 16)">
        <path d="M0 18L8 10L14 16L24 4L34 14" stroke="#00d4ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
      <text x="22" y="126" class="display text" font-size="56" font-weight="700">${escapeXml(
        formatCompactNumber(snapshot.recentActivityCount),
      )}</text>
      <circle cx="116" cy="118" r="4" class="cyan pulse" />
      <text x="128" y="123" class="cyan" font-size="14" font-weight="700" letter-spacing="0.12em">PULSE</text>
      <text x="22" y="174" class="muted" font-size="14">Public activity</text>
      <text x="22" y="196" class="muted" font-size="14">in the last 28 days.</text>
      <g opacity="0.08" transform="translate(200 134)">
        <path d="M0 52L18 34L32 46L52 18L82 48L82 74L0 74Z" fill="#f2f2ef" />
        <rect x="8" y="42" width="10" height="32" fill="#f2f2ef" />
        <rect x="26" y="28" width="10" height="46" fill="#f2f2ef" />
        <rect x="44" y="12" width="10" height="62" fill="#f2f2ef" />
      </g>
    </g>
  `.trim()
}

function renderLanguageIcon(): string {
  return `
    <rect x="0" y="0" width="16" height="11" rx="1.5" stroke="#00d4ff" stroke-width="1.7" fill="none" />
    <path d="M3 8L6.5 5L9 7L12.5 3.5" stroke="#00d4ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
  `.trim()
}

function renderRepoIcon(): string {
  return `
    <path d="M2 4.5C2 3.12 3.12 2 4.5 2H9.5L14 6.5V13.5C14 14.88 12.88 16 11.5 16H4.5C3.12 16 2 14.88 2 13.5V4.5Z" fill="#00d4ff" opacity="0.9" />
    <path d="M9.5 2V6.5H14" fill="none" stroke="#0b0b0b" stroke-width="1.3" stroke-linejoin="round" />
  `.trim()
}

function renderFollowersIcon(): string {
  return `
    <circle cx="6" cy="5" r="2.2" fill="#00d4ff" />
    <circle cx="12.2" cy="6.1" r="1.9" fill="#00d4ff" opacity="0.75" />
    <path d="M2.8 14.5C3.2 11.8 5.2 10.5 7.4 10.5C9.6 10.5 11.4 11.8 11.8 14.5" stroke="#00d4ff" stroke-width="1.9" stroke-linecap="round" />
    <path d="M10.6 14.4C10.9 12.5 12.2 11.6 13.8 11.6C15 11.6 16.1 12.1 16.8 13.4" stroke="#00d4ff" stroke-width="1.6" stroke-linecap="round" opacity="0.7" />
  `.trim()
}

function buildLanguageShares(languages: LanguageRank[]): LanguageShare[] {
  const top = languages.slice(0, 3)
  const total = top.reduce((sum, language) => sum + language.count, 0) || 1

  return top.map((language) => ({
    name: language.name,
    percent: Math.max(5, Math.round((language.count / total) * 100)),
  }))
}

function renderTopLanguagesCard(snapshot: ProfileSnapshot, x: number, y: number): string {
  const shares = buildLanguageShares(snapshot.topLanguages)
  const rows = shares
    .map((language, index) => {
      const rowY = 66 + index * 52
      const width = clamp(language.percent * 3.9, 46, 342)

      return `
        <g transform="translate(0 ${rowY})">
          <text x="20" y="0" class="text" font-size="15" font-weight="600">${escapeXml(language.name)}</text>
          <text x="362" y="0" class="cyan" font-size="15" font-weight="700" text-anchor="end">${escapeXml(language.percent.toString())}%</text>
          <rect x="20" y="14" width="322" height="4" rx="2" fill="#303030" />
          <rect class="bar-fill" x="20" y="14" width="${width}" height="4" rx="2" fill="#00d4ff" />
        </g>
      `.trim()
    })
    .join('')

  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="590" height="220" rx="14" />
      <text x="20" y="26" class="muted" font-size="11" font-weight="700" letter-spacing="0.18em">TOP LANGUAGES</text>
      <g transform="translate(552 16)">
        ${renderLanguageIcon()}
      </g>
      ${rows}
    </g>
  `.trim()
}

function renderRepoIllustration(x: number, y: number): string {
  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel-soft" width="360" height="250" rx="16" />
      <rect x="24" y="24" width="312" height="202" rx="12" fill="#141414" stroke="#2d2d2d" />
      <circle class="glow" cx="180" cy="110" r="62" fill="#00d4ff" opacity="0.08" filter="url(#soft-blur)" />
      <path d="M115 78C115 68.61 122.61 61 132 61H170C176.5 61 182.1 64.1 186 69.2C189.9 64.1 195.5 61 202 61H240C249.39 61 257 68.61 257 78V170C257 171.66 255.66 173 254 173H204C197.19 173 190.98 175.48 186 179.58C181.02 175.48 174.81 173 168 173H118C116.34 173 115 171.66 115 170V78Z" fill="#101010" stroke="#00d4ff" stroke-width="2.2" />
      <path d="M186 69V180" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" />
      <path d="M132 88H169" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.8" />
      <path d="M132 106H169" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.6" />
      <path d="M202 88H240" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.8" />
      <path d="M202 106H240" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.6" />
      <path d="M132 142H169" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.45" />
      <path d="M202 142H240" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.45" />
    </g>
  `.trim()
}

function renderNowBuildingPanel(snapshot: ProfileSnapshot, x: number, y: number): string {
  const repo = snapshot.latestRepo
  const description = repo.description?.trim()
    ? repo.description
    : 'Repository currently receiving the latest public work and iteration focus.'
  const descriptionLines = wrapText(description, 68, 3)
  const tags = [repo.primaryLanguage, ...repo.topics]
    .filter(Boolean)
    .filter((value, index, values) => values.indexOf(value) === index)
    .slice(0, 3)

  return `
    <g transform="translate(${x} ${y})">
      <rect class="panel" width="1216" height="324" rx="16" />
      ${renderRepoIllustration(24, 37)}
      <g transform="translate(418 48)">
        <path d="M0 0H48" stroke="#f2c94c" stroke-width="2" stroke-linecap="round" />
        <text x="60" y="5" class="gold" font-size="15" font-weight="700" letter-spacing="0.12em">NOW BUILDING</text>
        <text x="0" y="72" class="display text" font-size="56" font-weight="700">${escapeXml(repo.name)}</text>
        ${renderWrappedText(descriptionLines, 0, 114, 30, 'muted', 18)}
        ${renderChipRow(tags, 0, 196)}
        <text x="0" y="254" class="muted" font-size="14">${escapeXml(repo.url.replace('https://github.com/', 'github.com/'))}  •  ${escapeXml(
          formatRelativeDate(repo.updatedAt),
        )}</text>
      </g>
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
          <rect class="bar-fill" x="0" y="24" width="${barWidth}" height="12" rx="6" fill="${theme.accentMuted}" />
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
      const x = index * 28
      const y = 184 - height
      const opacity = index >= safeValues.length - 4 ? 1 : 0.66
      return `
        <g transform="translate(${x} 0)">
          <rect x="0" y="${y}" width="18" height="${height}" rx="9" fill="${theme.accentMuted}" opacity="${opacity}" class="bar-fill" />
        </g>
      `.trim()
    })
    .join('')
}

export function renderHeroSvg(snapshot: ProfileSnapshot, theme: ThemeName): string {
  const palette = getThemePalette(theme)
  const stack = ['Software Engineer', ...snapshot.topLanguages.slice(0, 3).map((language) => language.name)].join(
    '  •  ',
  )

  return renderLayout({
    theme,
    width: 1280,
    height: 900,
    body: `
      <text x="18" y="26" class="gold" font-size="13" font-weight="700" letter-spacing="0.16em">SYSTEM STATUS: ACTIVE</text>

      <g transform="translate(18 106)">
        <text class="display text" font-size="76" font-weight="700" letter-spacing="-0.05em">
          <tspan x="0" y="0">FULL STACK</tspan>
        </text>
        <text x="0" y="86" class="display gold" font-size="76" font-weight="700" letter-spacing="-0.05em">SOFTWARE ENGINEER</text>
        <text x="0" y="146" class="muted" font-size="20">${escapeXml(stack)}</text>
      </g>

      ${renderTopLanguagesCard(snapshot, 18, 276)}
      ${renderRecentActivityCard(snapshot, 628, 276)}
      ${renderMetricCard({
        x: 946,
        y: 276,
        width: 316,
        height: 106,
        title: 'Active Repos',
        value: formatCompactNumber(snapshot.activeRepoCount),
        note: 'updated in the last 120 days',
        icon: renderRepoIcon(),
      })}
      ${renderMetricCard({
        x: 946,
        y: 390,
        width: 316,
        height: 106,
        title: 'Followers',
        value: formatCompactNumber(snapshot.followers),
        note: 'people tracking the work',
        icon: renderFollowersIcon(),
      })}

      ${renderNowBuildingPanel(snapshot, 18, 528)}

      <g transform="translate(24 874)">
        <circle cx="0" cy="0" r="6" fill="${palette.accentMuted}" class="pulse" />
        <text x="16" y="5" class="muted" font-size="13">${escapeXml(sourceLabel(snapshot))}</text>
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
        <text x="32" y="44" class="gold" font-size="14" font-weight="700" letter-spacing="0.16em">0${index + 1} // ${escapeXml(
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
        <text x="504" y="334" class="cyan" font-size="16" font-weight="700" text-anchor="end">github.com/${escapeXml(
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
      <text x="72" y="78" class="gold" font-size="15" font-weight="700" letter-spacing="0.18em">SELECTED WORK // LIVE REPO CARDS</text>
      <text x="72" y="122" class="display text" font-size="54" font-weight="700">Two builds that best frame the current profile story.</text>
      ${cards.join('')}
      <g transform="translate(72 506)">
        <circle cx="0" cy="0" r="7" fill="${palette.accentMuted}" class="pulse" />
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
      <text x="72" y="78" class="gold" font-size="15" font-weight="700" letter-spacing="0.18em">GITHUB PULSE // LIVE TELEMETRY</text>
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
        <circle cx="0" cy="0" r="7" fill="${palette.accentMuted}" class="pulse" />
        <text x="20" y="6" class="muted" font-size="14">${escapeXml(sourceLabel(snapshot))}</text>
      </g>
    `,
  })
}
