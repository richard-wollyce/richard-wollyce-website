import type { FeaturedRepoPreset } from './types.js'

export const profileConfig = {
  username: 'richard-wollyce',
  name: 'Richard Wollyce',
  assetBaseUrl: 'https://richardwollyce.com/api/profile',
  websiteUrl: 'https://richardwollyce.com',
  intro:
    'Building full stack products with sharp interfaces, resilient backend flows, and motion only where it improves the experience.',
  heroTitle: ['FULL STACK', 'SOFTWARE', 'ENGINEER'],
  ctas: [
    { label: 'Website', href: 'https://richardwollyce.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/richardwollyce-/' },
    { label: 'Featured Project', href: 'https://github.com/richard-wollyce/hand-shark' },
    { label: 'Instagram', href: 'https://www.instagram.com/richardwollyce/' },
  ],
  featuredRepos: [
    {
      name: 'hand-shark',
      eyebrow: '3D Interaction Lab',
      description:
        'Web-based 3D app where a holographic shark responds to live hand gestures in the browser.',
      tags: ['MediaPipe', 'Three.js', 'Realtime Input'],
    },
    {
      name: 'richard-wollyce-website',
      eyebrow: 'Live Profile Surface',
      description:
        'Personal site and deployment surface used to host dynamic profile assets and presentation layers.',
      tags: ['React', 'TypeScript', 'Vercel'],
    },
  ] satisfies FeaturedRepoPreset[],
} as const
