export const siteConfig = {
  name: 'Richard Wollyce Santos de Souza',
  shortName: 'Richard Wollyce',
  title: 'Tech Lead & Full-Stack Software Engineer',
  location: 'Franca, Sao Paulo, Brazil',
  email: 'mail@richardwollyce.com',
  phone: '+55 (16) 9 9159-7978',
  linkedin: 'https://linkedin.com/in/richardwollyce-/',
  github: 'https://github.com/richard-wollyce',
  website: 'https://richardwollyce.com',
  cvPath: '/richard-wollyce-cv.pdf',
};

export const hero = {
  headline: "Hi, I'm Richard Wollyce",
  title: 'Tech Lead & Full-Stack Software Engineer',
  subheadline:
    'I lead complex software products end to end, from architecture and security to data, payments, integrations, and production operations.',
  ctaPrimary: { label: "Let's Talk", href: '#contact' },
  ctaSecondary: { label: 'View Projects', href: '#work' },
  trustStrip: [
    { icon: 'chart', text: 'Leading BiblinhaPlay and a multi-product platform' },
    { icon: 'check', text: 'Web, mobile, backend, data, payments, and operations' },
    { icon: 'bolt', text: 'Architecture through production ownership' },
  ],
};

export const certifications = [
  {
    id: 'santander-rust-ai',
    title: 'Santander Bootcamp: Rust and AI-Integrated Application Development',
    issuer: 'Santander Bootcamp',
    date: 'Issued June 2026',
  },
  {
    id: 'computational-forensics',
    title: 'Computational Forensics and Digital Evidence Investigation',
    issuer: 'Universidade Cruzeiro do Sul',
    date: 'Issued June 2, 2026',
  },
  {
    id: 'harvardx-leadership',
    title: 'LEAD1x: Exercising Leadership: Foundational Principles',
    issuer: 'HarvardX / edX',
    date: 'Issued May 2026',
  },
  {
    id: 'cisco-intro-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Issued July 2023',
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Issued July 2025',
  },
];

export const projects = [
  {
    id: 'biblinhaplay',
    name: 'BiblinhaPlay',
    category: 'Cross-Platform Learning Ecosystem',
    summary:
      'A subscription product for family learning and entertainment. The web/PWA is in production, with an Expo mobile client in development. It includes streaming, music, printables, gamification, interactive games, protected media, and recurring billing.',
    highlights: [
      'Led the architecture of a TypeScript monorepo with TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle, and shared UI and transactional-email packages.',
      'Designed entitlement-based access, hosted checkout, idempotent webhooks, financial reconciliation, and session-bound protected media delivery.',
      'Built an immutable content-release pipeline with validation, atomic activation, public/private media separation, and rollback independent of the CMS.',
      'Developed BiblinhaCraft, a Three.js voxel experience with deterministic terrain, progressive region streaming, versioned saves, and touch-first controls.',
    ],
    stack: ['TypeScript', 'TanStack Start', 'React', 'Expo', 'React Native', 'Three.js', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'GitHub Actions'],
    link: 'https://biblinhaplay.com',
    repo: null,
  },
  {
    id: 'casa-seth-platform',
    name: 'Casa Seth Product Platform',
    category: 'Multi-Product Commerce Platform',
    summary:
      'A shared platform for digital and physical product operations. It handles personalized experiences, AI media generation, Pix payments, attribution, financial reconciliation, and production workflows.',
    highlights: [
      'Structured shared domain and UI packages across independent product funnels, centralizing payments, session recovery, attribution, and backend integrations.',
      'Designed a generative-image pipeline with idempotent jobs, bounded concurrency, caching, persistence, and telemetry. Failed jobs can be retried without duplicating work.',
      'Implemented first-party browser/server conversion tracking, event deduplication, financial reconciliation, and dashboards for revenue, conversion, and media performance.',
      'Connected digital checkout to physical production through address validation, print-ready processing, an operational queue, and order-status workflows.',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Supabase', 'PostgreSQL', 'Edge Functions', 'OpenAI API', 'Mercado Pago', 'Tailwind CSS', 'Vercel', 'Turborepo'],
    link: null,
    repo: null,
  },
  {
    id: 'roadtocybersec',
    name: 'RoadToCyberSec.com',
    category: 'Cybersecurity Learning Hub',
    summary:
      'A cybersecurity learning path and resource hub for beginners, developers, and non-technical professionals.',
    highlights: [
      'Wrote and organized learning material for beginners, developers, and non-technical professionals.',
      'Designed modules covering fundamentals, threat analysis, password security and MFA, safe browsing, device hygiene, incident response, network fundamentals, and digital evidence handling.',
      'Hosted on Mintlify with a searchable documentation index and a clear learning path.',
    ],
    stack: ['Mintlify', 'Markdown', 'Cybersecurity Education', 'Technical Documentation'],
    link: 'https://roadtocybersec.com',
    repo: null,
  },
];

export const experience = [
  {
    id: 'casa-seth',
    company: 'Casa Seth',
    role: 'Tech Lead & Software Engineer',
    location: 'Brazil',
    period: 'April 2026 - Present',
    bullets: [
      'Lead the architecture and delivery of BiblinhaPlay. The web/PWA is in production, while the Expo/React Native client is in development.',
      'Structured a TypeScript monorepo with TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle, and reusable UI and transactional-email packages.',
      'Designed hosted subscription checkout, entitlement-based authorization, idempotent webhooks, financial reconciliation, and protected media delivery.',
      'Built a versioned content pipeline with validation, atomic activation, rollback, and public/private media separation.',
      'Developed BiblinhaCraft in Three.js with procedural terrain, progressive region streaming, persistent progression, and touch-first controls.',
      'Lead a separate multi-product platform integrating AI media generation, Pix payments, attribution, browser/server tracking, financial dashboards, and physical-product operations.',
    ],
  },
  {
    id: 'mg-laser',
    company: 'MG Laser',
    role: 'Software Engineer',
    location: 'Franca, Brazil',
    period: 'November 2025 - April 2026',
    bullets: [
      'Tech stack: TypeScript, React, Vite, Tailwind CSS, Node.js, Supabase, PostgreSQL, Linux VPS, EasyPanel.',
      'Built and maintained an ERP for inventory, sales, and daily operations across multiple teams.',
      'Replaced spreadsheet workflows with structured forms and automated validation, reducing manual-entry errors.',
      'Reduced load time on large data tables with pagination and targeted RPC calls.',
      'Secured data access with Row-Level Security (RLS) and Role-Based Access Control (RBAC), restricting records to the appropriate user roles.',
      'Managed deployment, monitoring, and a self-managed Linux VPS; restored service after a critical production outage in under 10 minutes with no data loss.',
    ],
  },
  {
    id: 'contractor',
    company: 'Independent / Contract',
    role: 'Independent Software Engineer',
    location: 'Franca, Brazil',
    period: null,
    bullets: [
      'Build full-stack web apps for clients using TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS, and Vercel.',
      'Built a live event registration system used by staff across multiple companies, including CPF and WhatsApp validation, responsive UI, and participant tracking workflows.',
      'Built and maintain a chatbot and admin dashboard for a tattoo and barber shop, turning chats into structured budget requests and follow-up tasks.',
      'Built landing pages and internal tools with payment integrations and webhooks to automate checkout and day-to-day work.',
      'Own frontend, backend, database design, deployment, maintenance, and live support, using TDD with Vitest to prevent regressions and refactor safely.',
    ],
  },
];

export const technicalStrength = [
  {
    id: 'platform-leadership',
    title: 'Platform Architecture & Leadership',
    icon: 'diagram',
    description:
      'I lead architecture and delivery across web and mobile products, and I stay accountable once they are in production.',
    technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'TypeScript', 'JavaScript', 'Rust', 'UML', 'Technical Documentation'],
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile',
    icon: 'layout',
    description:
      'I build responsive web, PWA, and native mobile apps, including streaming interfaces and touch-first 3D gameplay.',
    technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'Responsive UI', 'PWA'],
  },
  {
    id: 'backend-data',
    title: 'Backend & Data',
    icon: 'server',
    description:
      'I design APIs, authentication, data models, and protected-content flows shared across web and mobile.',
    technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'REST APIs', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
  },
  {
    id: 'commerce-product',
    title: 'Commerce & Product Systems',
    icon: 'shield',
    description:
      'I build billing and entitlement flows around server-side rules, with events that are safe to retry and reconcile.',
    technologies: ['Hosted Checkout', 'Pix', 'Webhooks', 'Billing Reconciliation', 'Entitlements', 'Idempotency', 'Product Analytics', 'Attribution', 'PostHog', 'A/B Testing'],
  },
  {
    id: 'ai-media-interactive',
    title: 'AI, Media & Interactive Systems',
    icon: 'code',
    description:
      'I design AI and media pipelines with safety checks, caching, telemetry, rollback, and manual review where automation should stop.',
    technologies: ['Generative AI', 'RAG', 'ASR', 'TTS', 'OpenAI API', 'Image Processing', 'Three.js', 'Streaming Media', 'Gamification', 'Prompt Evaluation'],
  },
  {
    id: 'infrastructure-quality',
    title: 'Infrastructure & Quality',
    icon: 'terminal',
    description:
      'I handle deployment, testing, monitoring, incidents, and recovery across managed services and self-hosted infrastructure.',
    technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD', 'Biome', 'Lefthook'],
  },
];

export const about = {
  paragraphs: [
    'I\'m a Tech Lead and Full-Stack Software Engineer. I turn product requirements into working software and stay responsible after it ships.',
    'At Casa Seth, I lead BiblinhaPlay and a separate commerce platform. My work covers subscription billing, protected media, gamification, 3D experiences, generative AI, analytics, and production operations.',
    'I stay close to the code. I define clear boundaries, keep sensitive integrations server-side, plan for recovery, and validate critical workflows.',
  ],
};

export const education = {
  degree: 'B.Sc. Software Engineering',
  institution: 'Universidade de Franca',
  period: '2025 - 2029',
};

export const languages = [
  { name: 'Portuguese (Brazil)', level: 'Native' },
  { name: 'English', level: 'Advanced (C1)' },
  { name: 'Spanish', level: 'Intermediate' },
];
