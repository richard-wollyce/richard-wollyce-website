export type ThemeName = 'dark' | 'light'

export type LanguageRank = {
  name: string
  count: number
}

export type RepoSnapshot = {
  name: string
  url: string
  description: string
  stars: number
  primaryLanguage: string
  updatedAt: string | null
  topics: string[]
}

export type ProfileSnapshotSource = 'graphql' | 'rest' | 'fallback'

export type ProfileSnapshot = {
  name: string
  login: string
  bio: string
  latestRepo: RepoSnapshot
  followers: number
  publicRepos: number
  totalStars: number
  activeRepoCount: number
  recentActivityCount: number
  contributionTotal: number | null
  lastActiveAt: string | null
  topLanguages: LanguageRank[]
  activitySeries: number[]
  featuredRepos: RepoSnapshot[]
  source: ProfileSnapshotSource
}

export type ThemePalette = {
  name: ThemeName
  background: string
  backgroundAlt: string
  panel: string
  panelMuted: string
  panelBorder: string
  text: string
  muted: string
  accent: string
  accentSoft: string
  accentMuted: string
  glow: string
  grid: string
  chipText: string
}

export type FeaturedRepoPreset = {
  name: string
  eyebrow: string
  description: string
  tags: string[]
}
