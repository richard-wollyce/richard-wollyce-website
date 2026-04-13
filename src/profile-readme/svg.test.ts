import { describe, expect, it } from 'vitest'

import { renderHeroSvg, renderProjectsSvg, renderPulseSvg } from './svg'
import type { ProfileSnapshot } from './types'

const snapshot: ProfileSnapshot = {
  name: 'Richard Wollyce',
  login: 'richard-wollyce',
  bio: 'Frontend / 3D engineer building cinematic interfaces with live telemetry.',
  followers: 4,
  publicRepos: 9,
  totalStars: 26,
  activeRepoCount: 4,
  recentActivityCount: 18,
  contributionTotal: 142,
  lastActiveAt: '2026-04-13T15:00:00.000Z',
  topLanguages: [
    { name: 'TypeScript', count: 4 },
    { name: 'JavaScript', count: 2 },
    { name: 'HTML', count: 1 },
  ],
  activitySeries: [2, 3, 4, 5, 6, 8, 5, 7, 9, 6, 10, 12],
  featuredRepos: [
    {
      name: 'hand-shark',
      url: 'https://github.com/richard-wollyce/hand-shark',
      description: 'Realtime hand-tracked 3D app built for the browser.',
      stars: 12,
      primaryLanguage: 'JavaScript',
      updatedAt: '2026-04-12T15:00:00.000Z',
      topics: ['MediaPipe', 'Three.js', '3D'],
    },
    {
      name: 'richard-wollyce-website',
      url: 'https://github.com/richard-wollyce/richard-wollyce-website',
      description: 'Personal portfolio surface that now hosts profile telemetry assets.',
      stars: 5,
      primaryLanguage: 'TypeScript',
      updatedAt: '2026-04-11T15:00:00.000Z',
      topics: ['React', 'TypeScript', 'Vercel'],
    },
  ],
  source: 'graphql',
}

describe('profile SVG renderers', () => {
  it('renders the hero with live metrics and featured surfaces', () => {
    const svg = renderHeroSvg(snapshot, 'dark')

    expect(svg).toContain('LIVE PRODUCT HERO')
    expect(svg).toContain('hand-shark')
    expect(svg).toContain('RECENT ACTIVITY')
  })

  it('renders selected work cards from the featured repositories', () => {
    const svg = renderProjectsSvg(snapshot, 'light')

    expect(svg).toContain('SELECTED WORK')
    expect(svg).toContain('richard-wollyce-website')
    expect(svg).toContain('github.com/richard-wollyce/hand-shark')
  })

  it('renders pulse telemetry with language bars and activity trend', () => {
    const svg = renderPulseSvg({ ...snapshot, source: 'rest', contributionTotal: null }, 'dark')

    expect(svg).toContain('GITHUB PULSE')
    expect(svg).toContain('LANGUAGE GRAVITY')
    expect(svg).toContain('Public API mode')
  })
})
