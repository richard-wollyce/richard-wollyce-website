const content = {
  locale: 'en',
  location: 'Franca, Sao Paulo, Brazil',
  cvPath: '/richard-wollyce-cv.pdf',

  hero: {
    headline: "Hi, I'm Richard Wollyce",
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'I build software infrastructure, digital products, and end-to-end conversion systems. Creator of Ulpia (local-first AI retrieval in Rust) and Tech Lead at Casa Seth, where I own architecture, payments, and revenue engineering.',
    ctaPrimary: { label: "Let's Talk", href: '#contact' },
    ctaSecondary: { label: 'View Projects', href: '#work' },
    trustStrip: [
      { icon: 'bolt', text: 'Creator of Ulpia, an open-source retrieval layer for AI agents written in Rust' },
      { icon: 'chart', text: 'Tech lead for the commerce and payments stack at Casa Seth' },
      { icon: 'check', text: 'Still on call for everything I ship' },
    ],
  },

  certifications: [
    {
      id: 'efset-english',
      title: 'EF SET English Certificate: C1 Advanced, 68/100',
      issuer: 'EF Education First',
      date: 'Issued September 2026',
    },
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
      date: 'Issued June 2026',
    },
    {
      id: 'harvardx-leadership',
      title: 'LEAD1x: Exercising Leadership: Foundational Principles',
      issuer: 'HarvardX / edX',
      date: 'Issued May 2026',
    },
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Issued July 2025',
    },
    {
      id: 'cisco-intro-cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Issued July 2023',
    },
    {
      id: 'remington-web',
      title: 'Professional Qualification in Web Development and Design',
      issuer: 'Escola Remington',
      date: 'Issued April 2015',
    },
  ],

  projects: [
    {
      id: 'ulpia',
      name: 'Ulpia',
      category: 'Local-First AI Memory Infrastructure',
      summary:
        'Open-source memory layer for AI agents, written in Rust and released under Apache 2.0. Deterministic RAG without embedding models: fuses keyword indexing and full-text search via Reciprocal Rank Fusion to deliver offline, reproducible, and verifiable retrieval with reliable abstention.',
      highlights: [
        'Dual-scorer engine combining declared keyword indexing with SQLite FTS5 full-text search via Reciprocal Rank Fusion.',
        'Deterministic confidence gating for abstention: safely declines 28 of 30 out-of-scope queries in blind adversarial benchmarks.',
        'Sub-millisecond hot-path latency (0.68 ms p50, 1.16 ms p95 in-process) with a 97% abstention rate on LongMemEval-S.',
        'Integrated Model Context Protocol (MCP) server providing 4 read-only tools for Claude Desktop and agent runtimes.',
        'Git-anchored privacy model: untracked files are strictly excluded from indexing and serving.',
        'Roughly 17,000 lines of modular Rust across 3 crates, single runtime dependency, over 200 tests, and 36 documented ADRs.',
      ],
      stack: ['Rust', 'RAG', 'AI Agents', 'LLM Evaluation', 'Information Retrieval', 'SQLite FTS5', 'MCP', 'Tauri', 'Cargo', 'GitHub Actions', 'Apache 2.0'],
      link: 'https://ulpia.io',
      repo: 'https://github.com/richard-wollyce/ulpia',
    },
    {
      id: 'casa-seth',
      name: 'Casa Seth',
      category: 'Infoproducts, Commerce & Conversion Systems',
      summary:
        'Digital commerce ecosystem and infoproducts house where I lead engineering and platform architecture. Spans customer-facing applications, payment infrastructure, reconciliation, and BiblinhaPlay (subscription platform with ~500 active users).',
      highlights: [
        'Complete revenue instrumentation: first-party browser and server-side tracking, event deduplication, UTM attribution, and automated reconciliation.',
        'Idempotent image-generation pipeline with bounded concurrency, caching, telemetry, and automated retry mechanisms.',
        'Modular TypeScript monorepo sharing core domain logic, UI libraries, and transactional flows across independent funnels.',
        'BiblinhaPlay in production for ~500 subscribers across Web/PWA and Expo/React Native, featuring entitlement control and protected media.',
        'BiblinhaCraft: interactive voxel engine built from scratch in Three.js with procedural terrain generation and mobile touch controls.',
        'Digital checkout integrated with physical fulfillment: address validation, print-ready asset processing, and order lifecycle queues.',
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
        'I wrote and organized the material myself.',
        'Modules cover fundamentals, threat analysis, password security and MFA, safe browsing, device hygiene, incident response, network fundamentals, and digital evidence handling.',
        'It runs on Mintlify, with a searchable documentation index and a path you can follow in order.',
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
        'Architected and built a local-first memory and retrieval engine in Rust using SQLite FTS5 and Reciprocal Rank Fusion.',
        'Implemented deterministic confidence gating to safely decline queries when no relevant context exists.',
        'Created automated evaluation harnesses benchmarked against LongMemEval-S and adversarial test suites.',
        'Shipped an MCP server with 4 read-only tools enabling local integration with Claude Desktop and AI clients.',
        'Maintained 17,000 lines of Rust across 3 crates with 200+ unit and integration tests and 36 documented ADRs.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brazil',
      period: 'April 2026 - Present',
      bullets: [
        'Technical leadership of software architecture and delivery across digital products, checkout funnels, and revenue infrastructure.',
        'Engineered custom checkout solutions with Pix and Mercado Pago, UTM attribution, server-side tracking, and operational dashboards.',
        'Designed an idempotent image-generation pipeline with bounded concurrency, caching, and robust failure recovery.',
        'Delivered and maintain BiblinhaPlay (Web/PWA and Expo/React Native) with streaming, gamification, and entitlement access.',
        'Structured a modular TypeScript monorepo with TanStack Start, React, React Native, PostgreSQL, and Drizzle ORM.',
        'Developed BiblinhaCraft using Three.js with procedural terrain generation and progressive region streaming.',
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
        'Built and maintained an ERP that several teams used at once for inventory, sales and daily operations.',
        'Replaced spreadsheet workflows with structured forms and automatic validation, and the manual-entry errors fell with them.',
        'The large data tables were slow until pagination and targeted RPC calls went in.',
        'Row-Level Security (RLS) and Role-Based Access Control (RBAC) decide which records a role can see, enforced in the database rather than in the UI.',
        'I handled deployment, monitoring and the self-managed Linux VPS. One critical production outage, service back in under 10 minutes, no data lost.',
      ],
    },
    {
      id: 'contractor',
      company: 'Freelance',
      role: 'Independent Software Engineer',
      location: 'Franca, Brazil',
      period: '2018 - Present',
      bullets: [
        'Engineered full-stack web applications using TypeScript, React, Next.js, Node.js, PostgreSQL, and Tailwind CSS.',
        'Built live-event credentialing and attendee management platforms used across multiple enterprise clients.',
        'Developed chatbot workflows and operational dashboards transforming inquiries into structured quote requests.',
        'Delivered high-converting landing pages with integrated payment gateways and idempotent webhook handlers.',
        'Applied TDD with Vitest, relational schema design, and automated deployments to Linux VPS and Vercel.',
        'Provided systems and infrastructure support for corporate hardware, networks, and environments.',
      ],
    },
    {
      id: 'sao-joaquim',
      company: 'São Joaquim Hospital e Maternidade',
      role: 'IT Support & Operations Assistant',
      location: 'Franca, Brazil',
      period: 'August 2017 - April 2018',
      bullets: [
        'Technical and operational support across the departments of a hospital, including the MV2000 patient-record system, service orders and day-to-day incident handling.',
        'First point of contact for the Ombudsman department, and the link between reception, nursing, medical and technical teams when a workflow stalled.',
      ],
    },
    {
      id: 'remington',
      company: 'Escola Remington',
      role: 'Technical Instructor & IT Support Technician',
      location: 'Franca, Brazil',
      period: 'April 2015 - April 2016',
      bullets: [
        'Technical instructor for web development, design fundamentals, and digital software.',
        'Administered and maintained Windows lab workstations, software deployment, and networking infrastructure.',
        'Provided daily technical support for students and faculty.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Systems & AI Engineering',
      icon: 'terminal',
      description:
        'Retrieval and memory infrastructure for AI agents in Rust, featuring rigorous benchmarking and local-first architecture.',
      technologies: ['Rust', 'RAG', 'AI Agents', 'LLM Evaluation', 'Information Retrieval', 'SQLite FTS5', 'Reciprocal Rank Fusion', 'MCP', 'Local-First', 'Benchmarking', 'Tauri'],
    },
    {
      id: 'platform-leadership',
      title: 'Platform Architecture & Leadership',
      icon: 'diagram',
      description:
        'I lead architecture and delivery across web and mobile products, and I am still the one on call after they go live.',
      technologies: ['System Design', 'Software Architecture', 'Monorepos', 'Domain Modeling', 'Technical Leadership', 'ADRs', 'TypeScript', 'UML'],
    },
    {
      id: 'commerce-conversion',
      title: 'Commerce & Conversion Engineering',
      icon: 'shield',
      description:
        'Checkout architecture, financial reconciliation, and reliable server-side event tracking with idempotency.',
      technologies: ['Mercado Pago', 'Pix', 'Hosted Checkout', 'Webhooks', 'Idempotency', 'Entitlements', 'Reconciliation', 'Server-Side Tracking', 'Attribution', 'PostHog'],
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile',
      icon: 'layout',
      description:
        'Responsive web, PWA and native mobile apps, up to and including streaming interfaces and touch-first 3D gameplay.',
      technologies: ['React', 'TanStack Start', 'Next.js', 'Expo', 'React Native', 'Three.js', 'Vite', 'Tailwind CSS', 'PWA'],
    },
    {
      id: 'backend-data',
      title: 'Backend & Data',
      icon: 'server',
      description:
        'I design the APIs, the authentication, the data models, and the protected-content flows that web and mobile both read from.',
      technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Better Auth', 'Edge Functions', 'RLS', 'RBAC', 'Protected Media'],
    },
    {
      id: 'infrastructure-quality',
      title: 'Infrastructure & Quality',
      icon: 'code',
      description:
        'Deployment, testing, monitoring, incidents and recovery, on managed services and on Linux boxes I administer myself.',
      technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Vercel', 'Vitest', 'Playwright', 'Maestro', 'TDD'],
    },
  ],

  about: {
    paragraphs: [
      "I'm a Tech Lead and Full-Stack Software Engineer specializing in systems architecture, AI engineering, and digital commerce. I take complex product requirements and ship reliable software to production, taking end-to-end ownership throughout its lifecycle.",
      'My work bridges low-level systems engineering (such as Ulpia, a local-first AI memory layer in Rust) with high-scale commerce infrastructure at Casa Seth, spanning payment processing, revenue tracking, and web/mobile apps.',
      'I prioritize clean abstractions, clear domain boundaries, idempotent workflows, and automated testing to ensure system resilience. Based in Franca, Brazil, I work remotely across Latin America and am open to relocation to Santiago, Chile.',
    ],
  },

  education: {
    degree: 'B.Sc. Software Engineering',
    institution: 'Universidade de Franca',
    period: '2025 - 2029, in progress',
  },

  languages: [
    { name: 'Portuguese (Brazil)', level: 'Native' },
    { name: 'English', level: 'C1 Advanced (EF SET 68/100)' },
    { name: 'Spanish', level: 'Fluent' },
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
      subtitle: 'The roles, and what I actually owned inside each one.',
    },
    work: {
      title: 'Projects',
      subtitle: 'A retrieval layer for AI agents, a commerce operation, and a cybersecurity learning hub.',
      accessProject: 'Access Project',
      visit: (name) => `Visit ${name}`,
      visitAria: (name) => `Visit ${name} live site`,
      repository: 'Repository',
      repositoryAria: (name) => `View ${name} repository on GitHub`,
      techStack: 'Tech Stack',
    },
    strength: {
      title: 'Technical Strength',
      subtitle: 'What I know how to do, grouped roughly by where it sits in the stack.',
      technologies: 'Technologies & Frameworks',
    },
    about: {
      title: 'About Me',
      education: 'Education',
      languages: 'Languages',
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'If you have a systems problem, an AI retrieval problem, or an engineering role to fill, remote in Latin America or in Chile, write to me.',
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
    rail: {
      previous: 'Previous',
      next: 'Next',
      regionLabel: (section) => `${section}, horizontal list`,
      position: (current, total) => `Card ${current} of ${total}`,
    },
  },
};

export default content;
