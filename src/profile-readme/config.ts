import type { FeaturedRepoPreset } from './types.ts'

export const profileConfig = {
  username: 'richard-wollyce',
  name: 'Richard Wollyce',
  assetBaseUrl: 'https://richardwollyce.com/api/profile',
  websiteUrl: 'https://richardwollyce.com',
  intro:
    'Frontend / 3D engineer building motion-rich product surfaces, browser-native realtime experiences, and interfaces with a systems mindset.',
  heroTitle: ['INTERFACES', 'THAT FEEL', 'ALIVE.'],
  rotatingLines: [
    'Frontend systems with motion, depth, and live telemetry.',
    'Shipping browser-native 3D experiments and cinematic UI.',
    'Building product surfaces that stay sharp under real usage.',
  ],
  capabilityStrip: [
    'TypeScript',
    'React',
    'Three.js',
    'Motion Systems',
    'Realtime UI',
    'Product Engineering',
  ],
  nowBuilding:
    'Now building hand-tracked 3D interactions, cinematic frontend systems, and profile surfaces powered by live GitHub data.',
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
