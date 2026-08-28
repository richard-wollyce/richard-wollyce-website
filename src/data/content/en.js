const content = {
  locale: 'en',
  location: 'Franca, Sao Paulo, Brazil',
  cvPath: '/richard-wollyce-cv.pdf',

  hero: {
    headline: "Hi, I'm Richard Wollyce",
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'I build the systems other software depends on. Ulpia, my open-source memory layer for AI agents, is written in Rust and answers offline in under a millisecond. The rest of my work is commerce: infoproducts, payments, and the measurement layer that tells you which of them actually sold.',
    ctaPrimary: { label: "Let's Talk", href: '#contact' },
    ctaSecondary: { label: 'View Projects', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Creator of Ulpia, an open-source AI memory system in Rust' },
      { icon: 'chart', text: 'Infoproducts, payments, and conversion systems at Casa Seth' },
      { icon: 'check', text: 'Architecture through production ownership' },
    ],
  },

  certifications: [
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
  ],

  projects: [
    {
      id: 'ulpia',
      name: 'Ulpia',
      category: 'Local-First AI Memory Infrastructure',
      summary:
        'An open-source memory layer for fleets of AI agents, written in Rust and released under Apache 2.0. Retrieval is plain software with no embedding model in the path, so it runs offline, returns the same answer twice, and can say that nobody covers a question instead of handing back the least wrong file.',
      highlights: [
        'Designed a two-scorer retrieval engine: a keyword index built from the keys each file declares, plus SQLite full-text search, fused with Reciprocal Rank Fusion, then measured which scorer wins which job instead of assuming they were interchangeable.',
        'Made refusal a first-class verdict. On a question set authored blind and adversarially checked, 28 of 30 out-of-scope questions are not answered confidently by the deterministic layer alone.',
        'Benchmarked the pipeline end to end: warm route latency of 0.68 ms p50 and 1.16 ms p95 in process, and 97 percent on abstention over the 500 questions of LongMemEval-S, the ability that benchmark\'s own paper reports memory systems fail hardest.',
        'Shipped it as an MCP server with four read-only tools, so Claude and anything else that speaks MCP reads the same base. There is deliberately no write tool reachable by a model.',
        'Built the privacy model out of git rather than configuration: a file git does not track is a file the system will not serve, and it refuses to open a base at all when git cannot be consulted.',
        'Around 17,000 lines of Rust across three crates with a single runtime dependency, over 200 tests, 33 architecture decision records, and a benchmark harness that stamps every result with its command, commit, machine, and date.',
      ],
      stack: ['Rust', 'SQLite FTS5', 'Information Retrieval', 'MCP', 'Tauri', 'Cargo', 'GitHub Actions', 'Apache 2.0'],
      link: 'https://ulpia.io',
      repo: 'https://github.com/richard-wollyce/ulpia',
    },
    {
      id: 'casa-seth',
      name: 'Casa Seth',
      category: 'Infoproducts, Commerce & Conversion Systems',
      summary:
        'The house I lead engineering for. It ships digital products and infoproducts, and the measurement layer underneath them: Pix checkout, attribution, server-side conversion tracking, and financial reconciliation. BiblinhaPlay, a cross-platform learning and entertainment subscription serving roughly 500 users, is the longest-running product inside it.',
      highlights: [
        'Built the revenue instrumentation the house runs on: first-party browser and server conversion tracking, event deduplication, UTM attribution, revenue reconciliation, and dashboards operators use to decide what to run again.',
        'Designed a generative-image pipeline with idempotent jobs, bounded concurrency, caching, persistence, and telemetry, so a failed job retries without duplicating work or double-charging a customer.',
        'Structured shared domain and UI packages across independently deployed product funnels, centralizing payments, session recovery, attribution, and backend integrations.',
        'Ship and operate BiblinhaPlay for roughly 500 users across a production web/PWA and an Expo/React Native client: video streaming, music, printables, interactive games, and gamification behind entitlement-based access.',
        'Ran BiblinhaPlay billing end to end with hosted subscription checkout, verified idempotent webhooks, plan-based entitlements, session-bound protected media delivery, and an immutable content-release pipeline with atomic activation and rollback.',
        'Built BiblinhaCraft, a Three.js voxel experience with deterministic terrain, progressive region streaming, versioned saves, and touch-first controls.',
        'Connected digital checkout to physical production through address validation, print-ready processing, an operational queue, and order-status workflows.',
      ],
      stack: ['TypeScript', 'React', 'TanStack Start', 'Expo', 'React Native', 'Three.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Mercado Pago', 'Turborepo', 'Vercel'],
      link: 'https://biblinhaplay.com',
      linkLabel: 'BiblinhaPlay',
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
  ],

  experience: [
    {
      id: 'ulpia',
      company: 'Ulpia (Open Source)',
      role: 'Creator & Maintainer',
      location: 'Apache 2.0, ulpia.io',
      period: 'August 2026 - Present',
      bullets: [
        'Design and build a local-first memory layer for fleets of AI agents in Rust, with no embedding model in the retrieval path, so results are offline, reproducible, and explainable when they are wrong.',
        'Built a two-scorer engine over a keyword index and SQLite full-text search, fused with Reciprocal Rank Fusion, plus a confidence gate that lets the system decline a question no file covers.',
        'Wrote the benchmark harness alongside the product: abstention against a blind adversarial set, latency, and the full 500 questions of LongMemEval-S, each result stamped with command, commit, machine, and date.',
        'Exposed the library over MCP with four read-only tools for Claude Desktop and any other MCP client, keeping write access off the surface a model can reach.',
        'Maintain roughly 17,000 lines of Rust across three crates with one runtime dependency, over 200 tests, CI on GitHub Actions, and 33 architecture decision records that carry the reasoning behind each trade.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brazil',
      period: 'April 2026 - Present',
      bullets: [
        'Lead architecture and delivery across the house: infoproducts, digital commerce funnels, and the measurement systems that report what each of them earned.',
        'Own conversion engineering end to end, including Pix checkout, server-controlled pricing, UTM attribution, browser and server event deduplication, revenue reconciliation, and operational dashboards.',
        'Designed a generative-image pipeline with idempotent jobs, bounded concurrency, caching, telemetry, and retries that cannot duplicate paid work.',
        'Lead BiblinhaPlay, the subscription learning and entertainment product serving roughly 500 users, with a production web/PWA and an Expo/React Native client covering video, music, printables, games, and gamification.',
        'Structured a TypeScript monorepo with TanStack Start, React, Expo/React Native, PostgreSQL, Drizzle, and reusable UI and transactional-email packages.',
        'Designed hosted subscription checkout, entitlement-based authorization, idempotent webhooks, protected media delivery, and a versioned content pipeline with atomic activation and rollback.',
        'Built BiblinhaCraft in Three.js with procedural terrain, progressive region streaming, persistent progression, and touch-first controls.',
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
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Systems & AI Engineering',
      icon: 'terminal',
      description:
        'I build retrieval and memory infrastructure in Rust, measured against benchmarks I wrote to be able to fail.',
      technologies: ['Rust', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Deterministic Systems', 'Cargo', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Platform Architecture & Leadership',
      icon: 'diagram',
      description:
        'I lead architecture and delivery across web and mobile products, and I stay accountable once they are in production.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'Architecture Decision Records', 'TypeScript', 'JavaScript', 'UML', 'Technical Documentation'],
    },
    {
      id: 'commerce-conversion',
      title: 'Commerce & Conversion Engineering',
      icon: 'shield',
      description:
        'I build the money path and the measurement under it, with events that are safe to retry and numbers that reconcile.',
      technologies: ['Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Billing Reconciliation', 'Server-Side Tracking', 'Attribution', 'Conversion Analytics', 'PostHog', 'A/B Testing'],
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
      id: 'infrastructure-quality',
      title: 'Infrastructure & Quality',
      icon: 'code',
      description:
        'I handle deployment, testing, monitoring, incidents, and recovery across managed services and self-hosted infrastructure.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD', 'Biome', 'Lefthook'],
    },
  ],

  about: {
    paragraphs: [
      'I\'m a Tech Lead and Full-Stack Software Engineer. I turn product requirements into working software and stay responsible after it ships.',
      'My main project is Ulpia, an open-source memory layer for AI agents written in Rust. It keeps every model out of the retrieval path, which is what makes it run offline, answer the same way twice, and admit when no file in the library covers your question. It is Apache 2.0, and the benchmarks that could embarrass it are published in the same repository.',
      'At Casa Seth I lead the commerce side: infoproducts, payment flows, and the attribution and conversion systems that report what each launch actually earned. BiblinhaPlay, the subscription learning platform serving roughly 500 users across web and mobile, is the product I built first and still operate.',
      'I stay close to the code. I define clear boundaries, keep sensitive integrations server-side, plan for recovery, and validate critical workflows.',
    ],
  },

  education: {
    degree: 'B.Sc. Software Engineering',
    institution: 'Universidade de Franca',
    period: '2025 - 2029',
  },

  languages: [
    { name: 'Portuguese (Brazil)', level: 'Native' },
    { name: 'English', level: 'Advanced (C1)' },
    { name: 'Spanish', level: 'Intermediate' },
  ],

  ui: {
    nav: {
      certifications: 'Certifications',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
      home: 'Richard Wollyce - Home',
      mainNavigation: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skipToContent: 'Skip to main content',
    },
    certifications: { title: 'Certifications' },
    experience: {
      title: 'Experience',
      subtitle: 'A history of production engineering, secure system ownership, and reliable software delivery.',
    },
    work: {
      title: 'Projects',
      subtitle: 'Selected systems spanning AI memory infrastructure, commerce and conversion operations, and cybersecurity education.',
      accessProject: 'Access Project',
      visit: (name) => `Visit ${name}`,
      visitAria: (name) => `Visit ${name} live site`,
      repository: 'Repository',
      repositoryAria: (name) => `View ${name} repository on GitHub`,
      techStack: 'Tech Stack',
    },
    strength: {
      title: 'Technical Strength',
      subtitle: 'A structured breakdown of core capabilities built across frontend, backend, data, and infrastructure.',
      technologies: 'Technologies & Frameworks',
    },
    about: {
      title: 'About Me',
      education: 'Education',
      languages: 'Languages',
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Ready to talk systems, security, or full-stack engineering roles? Get in touch.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      downloadCv: 'Download CV',
      cvFormat: 'Available in PDF format',
    },
    footer: { rights: 'All rights reserved.' },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    language: {
      switcherAria: 'Choose language',
    },
  },
};

export default content;
