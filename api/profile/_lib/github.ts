import { profileConfig } from '../../../src/profile-readme/config.js'
import type {
  LanguageRank,
  ProfileSnapshot,
  RepoSnapshot,
} from '../../../src/profile-readme/types.js'

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_GRAPHQL_URL = `${GITHUB_API_BASE}/graphql`
const FEATURED_REPO_NAMES = profileConfig.featuredRepos.map((repo) => repo.name)

type GraphQlResponse<T> = {
  data?: T
  errors?: Array<{ message: string }>
}

type GraphQlRepo = {
  name: string
  description: string | null
  url: string
  stargazerCount: number
  homepageUrl?: string | null
  pushedAt: string | null
  primaryLanguage: { name: string } | null
  repositoryTopics?: {
    nodes: Array<{ topic: { name: string } }>
  }
}

type GraphQlUserResponse = {
  user: {
    name: string | null
    login: string
    bio: string | null
    avatarUrl: string
    followers: { totalCount: number }
    repositories: {
      totalCount: number
      nodes: GraphQlRepo[]
    }
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number
        weeks: Array<{
          contributionDays: Array<{
            contributionCount: number
            date: string
          }>
        }>
      }
    }
    featuredA: GraphQlRepo | null
    featuredB: GraphQlRepo | null
  } | null
}

type RestUser = {
  name: string | null
  login: string
  bio: string | null
  followers: number
  public_repos: number
}

type RestRepo = {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  homepage: string | null
  pushed_at: string | null
  language: string | null
  topics?: string[]
}

type RestEvent = {
  created_at: string
}

function githubHeaders(withAuth = true): HeadersInit {
  const token = process.env.GITHUB_PROFILE_TOKEN

  return {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'User-Agent': 'richard-wollyce-profile-generator',
    ...(withAuth && token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

async function fetchJson<T>(
  input: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(input, init)

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

function languageRanks(values: Array<string | null | undefined>): LanguageRank[] {
  const counts = new Map<string, number>()

  for (const value of values) {
    if (!value) {
      continue
    }

    counts.set(value, (counts.get(value) ?? 0) + 1)
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([name, count]) => ({ name, count }))
}

function sumRecentActivity(dates: string[], days: number): number {
  const now = Date.now()
  const windowMs = days * 86_400_000

  return dates.filter((value) => {
    const time = new Date(value).getTime()
    return !Number.isNaN(time) && now - time <= windowMs
  }).length
}

function activeRepoCount(values: Array<string | null>, days: number): number {
  const now = Date.now()
  const windowMs = days * 86_400_000

  return values.filter((value) => {
    if (!value) {
      return false
    }

    const time = new Date(value).getTime()
    return !Number.isNaN(time) && now - time <= windowMs
  }).length
}

function normalizeRepo(
  repo: Partial<GraphQlRepo> & {
    name: string
    url: string
    description?: string | null
    stargazerCount?: number
    pushedAt?: string | null
    primaryLanguage?: { name: string } | null
    repositoryTopics?: {
      nodes: Array<{ topic: { name: string } }>
    }
  },
  fallbackDescription: string,
  fallbackTopics: string[],
): RepoSnapshot {
  return {
    name: repo.name,
    url: repo.url,
    description: repo.description?.trim() || fallbackDescription,
    stars: repo.stargazerCount ?? 0,
    primaryLanguage: repo.primaryLanguage?.name ?? 'Web',
    updatedAt: repo.pushedAt ?? null,
    topics:
      repo.repositoryTopics?.nodes
        .map((node) => node.topic.name)
        .filter(Boolean)
        .slice(0, 4) ?? fallbackTopics,
  }
}

function normalizeRestRepo(
  repo: RestRepo,
  fallbackDescription: string,
  fallbackTopics: string[],
): RepoSnapshot {
  return {
    name: repo.name,
    url: repo.html_url,
    description: repo.description?.trim() || fallbackDescription,
    stars: repo.stargazers_count,
    primaryLanguage: repo.language ?? 'Web',
    updatedAt: repo.pushed_at,
    topics: repo.topics?.slice(0, 4) ?? fallbackTopics,
  }
}

function fallbackFeaturedRepos(): RepoSnapshot[] {
  return profileConfig.featuredRepos.map((repo) => ({
    name: repo.name,
    url: `https://github.com/${profileConfig.username}/${repo.name}`,
    description: repo.description,
    stars: 0,
    primaryLanguage: repo.tags[0] ?? 'Web',
    updatedAt: null,
    topics: repo.tags,
  }))
}

function fallbackSnapshot(): ProfileSnapshot {
  return {
    name: profileConfig.name,
    login: profileConfig.username,
    bio: profileConfig.intro,
    latestRepoName: profileConfig.featuredRepos[0]?.name ?? 'repository',
    followers: 0,
    publicRepos: FEATURED_REPO_NAMES.length,
    totalStars: 0,
    activeRepoCount: FEATURED_REPO_NAMES.length,
    recentActivityCount: 0,
    contributionTotal: null,
    lastActiveAt: null,
    topLanguages: [
      { name: 'TypeScript', count: 3 },
      { name: 'React', count: 2 },
      { name: 'Three.js', count: 1 },
    ],
    activitySeries: [0, 1, 0, 1, 0, 2, 1, 1, 2, 1, 2, 3],
    featuredRepos: fallbackFeaturedRepos(),
    source: 'fallback',
  }
}

async function fetchGraphQlSnapshot(): Promise<ProfileSnapshot> {
  const token = process.env.GITHUB_PROFILE_TOKEN

  if (!token) {
    throw new Error('GITHUB_PROFILE_TOKEN is not configured')
  }

  const query = `
    query ProfileReadme($login: String!, $featuredA: String!, $featuredB: String!) {
      user(login: $login) {
        name
        login
        bio
        avatarUrl(size: 256)
        followers {
          totalCount
        }
        repositories(ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, first: 100, orderBy: { field: PUSHED_AT, direction: DESC }) {
          totalCount
          nodes {
            name
            description
            url
            stargazerCount
            homepageUrl
            pushedAt
            primaryLanguage {
              name
            }
            repositoryTopics(first: 4) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
        featuredA: repository(name: $featuredA) {
          name
          description
          url
          stargazerCount
          homepageUrl
          pushedAt
          primaryLanguage {
            name
          }
          repositoryTopics(first: 4) {
            nodes {
              topic {
                name
              }
            }
          }
        }
        featuredB: repository(name: $featuredB) {
          name
          description
          url
          stargazerCount
          homepageUrl
          pushedAt
          primaryLanguage {
            name
          }
          repositoryTopics(first: 4) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  `

  const result = await fetchJson<GraphQlResponse<GraphQlUserResponse>>(GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: githubHeaders(),
    body: JSON.stringify({
      query,
      variables: {
        login: profileConfig.username,
        featuredA: FEATURED_REPO_NAMES[0],
        featuredB: FEATURED_REPO_NAMES[1],
      },
    }),
  })

  if (result.errors?.length) {
    throw new Error(result.errors.map((entry) => entry.message).join('; '))
  }

  const user = result.data?.user

  if (!user) {
    throw new Error('GitHub GraphQL returned no user payload')
  }

  const repos = user.repositories.nodes
  const calendarWeeks = user.contributionsCollection.contributionCalendar.weeks
  const activitySeries = calendarWeeks
    .slice(-12)
    .map((week) =>
      week.contributionDays.reduce(
        (total, day) => total + day.contributionCount,
        0,
      ),
    )
  const contributionDates = calendarWeeks.flatMap((week) =>
    week.contributionDays
      .filter((day) => day.contributionCount > 0)
      .map((day) => day.date),
  )

  const featuredRepos = profileConfig.featuredRepos.map((preset, index) => {
    const graphQlRepo = index === 0 ? user.featuredA : user.featuredB
    const fallbackRepo = repos.find((repo) => repo.name === preset.name)

    if (graphQlRepo) {
      return normalizeRepo(graphQlRepo, preset.description, preset.tags)
    }

    if (fallbackRepo) {
      return normalizeRepo(fallbackRepo, preset.description, preset.tags)
    }

    return {
      name: preset.name,
      url: `https://github.com/${profileConfig.username}/${preset.name}`,
      description: preset.description,
      stars: 0,
      primaryLanguage: preset.tags[0] ?? 'Web',
      updatedAt: null,
      topics: preset.tags,
    }
  })

  return {
    name: user.name ?? profileConfig.name,
    login: user.login,
    bio: user.bio?.trim() || profileConfig.intro,
    latestRepoName: repos[0]?.name ?? profileConfig.featuredRepos[0]?.name ?? 'repository',
    followers: user.followers.totalCount,
    publicRepos: user.repositories.totalCount,
    totalStars: repos.reduce((total, repo) => total + repo.stargazerCount, 0),
    activeRepoCount: activeRepoCount(
      repos.map((repo) => repo.pushedAt),
      120,
    ),
    recentActivityCount: activitySeries.slice(-4).reduce((total, value) => total + value, 0),
    contributionTotal: user.contributionsCollection.contributionCalendar.totalContributions,
    lastActiveAt:
      repos[0]?.pushedAt ??
      contributionDates[contributionDates.length - 1] ??
      null,
    topLanguages: languageRanks(repos.map((repo) => repo.primaryLanguage?.name)).slice(0, 4),
    activitySeries,
    featuredRepos,
    source: 'graphql',
  }
}

function buildWeeklyEventSeries(events: RestEvent[]): number[] {
  const now = Date.now()
  const series = Array.from({ length: 12 }, () => 0)

  for (const event of events) {
    const diffWeeks = Math.floor((now - new Date(event.created_at).getTime()) / 604_800_000)

    if (diffWeeks >= 0 && diffWeeks < 12) {
      const index = 11 - diffWeeks
      series[index] += 1
    }
  }

  return series
}

async function fetchRestSnapshot(): Promise<ProfileSnapshot> {
  const [user, repos, events] = await Promise.all([
    fetchJson<RestUser>(`${GITHUB_API_BASE}/users/${profileConfig.username}`, {
      headers: githubHeaders(false),
    }),
    fetchJson<RestRepo[]>(
      `${GITHUB_API_BASE}/users/${profileConfig.username}/repos?per_page=100&sort=updated`,
      {
        headers: githubHeaders(false),
      },
    ),
    fetchJson<RestEvent[]>(
      `${GITHUB_API_BASE}/users/${profileConfig.username}/events/public?per_page=100`,
      {
        headers: githubHeaders(false),
      },
    ),
  ])

  const featuredRepos = profileConfig.featuredRepos.map((preset) => {
    const repo = repos.find((entry) => entry.name === preset.name)
    return repo
      ? normalizeRestRepo(repo, preset.description, preset.tags)
      : {
          name: preset.name,
          url: `https://github.com/${profileConfig.username}/${preset.name}`,
          description: preset.description,
          stars: 0,
          primaryLanguage: preset.tags[0] ?? 'Web',
          updatedAt: null,
          topics: preset.tags,
        }
  })

  return {
    name: user.name ?? profileConfig.name,
    login: user.login,
    bio: user.bio?.trim() || profileConfig.intro,
    latestRepoName: repos[0]?.name ?? profileConfig.featuredRepos[0]?.name ?? 'repository',
    followers: user.followers,
    publicRepos: user.public_repos,
    totalStars: repos.reduce((total, repo) => total + repo.stargazers_count, 0),
    activeRepoCount: activeRepoCount(
      repos.map((repo) => repo.pushed_at),
      120,
    ),
    recentActivityCount: sumRecentActivity(events.map((event) => event.created_at), 28),
    contributionTotal: null,
    lastActiveAt: repos[0]?.pushed_at ?? events[0]?.created_at ?? null,
    topLanguages: languageRanks(repos.map((repo) => repo.language)).slice(0, 4),
    activitySeries: buildWeeklyEventSeries(events),
    featuredRepos,
    source: 'rest',
  }
}

export async function getProfileSnapshot(): Promise<ProfileSnapshot> {
  try {
    return await fetchGraphQlSnapshot()
  } catch (error) {
    console.error('Profile GraphQL sync failed, falling back to public API.', error)
  }

  try {
    return await fetchRestSnapshot()
  } catch (error) {
    console.error('Profile REST sync failed, using curated fallback.', error)
  }

  return fallbackSnapshot()
}
