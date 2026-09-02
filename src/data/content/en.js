const content = {
  locale: 'en',
  location: 'Franca, Sao Paulo, Brazil',
  cvPath: '/richard-wollyce-cv.pdf',

  hero: {
    headline: "Hi, I'm Richard Wollyce",
    title: 'Tech Lead & Full-Stack Software Engineer',
    subheadline:
      'I build the infrastructure other software leans on. Ulpia is my most recent open source project: a local-first memory and retrieval layer for AI agents, written in Rust, that serves RAG with no model anywhere in the path. That is what lets it answer offline in under a millisecond and stay consistent between answers, because the same question always finds the same files, and its evaluation harness ships in the same repository. I am also Tech Lead and Software Engineer at Casa Seth, where I own the infoproducts, the payments, and the management, metrics and conversion systems behind them.',
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
        'An open-source memory layer for fleets of AI agents, written in Rust and released under Apache 2.0. There is no embedding model anywhere in the retrieval path. It is retrieval-augmented generation without the embedding model: a keyword index, a full-text index, and the code that fuses them. No network, and the same ranking on the same question every time. It can also tell you that nobody covers a question, instead of handing back the least wrong file.',
      highlights: [
        'Retrieval runs two scorers rather than one. A keyword index built from the keys each file declares, and SQLite full-text search over the prose, fused with Reciprocal Rank Fusion. Then I measured which scorer wins which kind of question, because they are not interchangeable.',
        'Refusal is a first-class verdict here. On a question set authored blind and then checked adversarially, the deterministic layer alone declines to confidently answer 28 of the 30 out-of-scope questions.',
        'Evaluation is part of the product. Warm route latency measures 0.68 ms p50 and 1.16 ms p95, in process. On a full 500-question run of LongMemEval-S it scores 97 percent on abstention, which that benchmark\'s own paper names as the ability memory systems fail hardest.',
        'Ships as an MCP server with four read-only tools, so Claude and anything else that speaks MCP reads the same base I do. There is deliberately no write tool a model can reach.',
        'Git is the privacy model, and there is no configuration file for it. A file git does not track is a file the system will not serve, and it refuses to open a base at all when git cannot be consulted.',
        'Roughly 17,000 lines of Rust across three crates, a single runtime dependency, over 200 tests, 36 architecture decision records. Every benchmark result carries the command, commit, machine and date that produced it.',
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
        'The house I lead engineering for. It ships digital products and infoproducts, and my half is everything underneath the sale, from Mercado Pago and Pix checkout (Pix is Brazil\'s instant account-to-account rail) and attribution through server-side conversion tracking to the financial reconciliation at the end of the month. BiblinhaPlay is the oldest product still running in it, a cross-platform learning and entertainment subscription with roughly 500 users.',
      highlights: [
        'I built the revenue instrumentation the house runs on. First-party browser and server conversion tracking, event deduplication, UTM attribution, revenue reconciliation, and the dashboards operators read before deciding what to run again.',
        'A generative-image pipeline with idempotent jobs, bounded concurrency, caching, persistence and telemetry. All of that exists so a failed job can retry without duplicating work or charging a customer twice.',
        'Product funnels deploy independently but share domain and UI packages, which is how payments, session recovery, attribution and backend integrations ended up living in one place.',
        'BiblinhaPlay I both ship and operate, for roughly 500 users, across a production web/PWA and an Expo/React Native client. Video streaming, music, printables, interactive games and gamification, all of it behind entitlement-based access.',
        'Billing runs on hosted subscription checkout with verified idempotent webhooks, plan-based entitlements and session-bound delivery of protected media. Content goes out through an immutable release pipeline that activates atomically and rolls back.',
        'BiblinhaCraft is a Three.js voxel world with deterministic terrain, progressive region streaming, versioned saves and touch-first controls.',
        'Digital checkout reaches physical production through address validation, print-ready processing, an operational queue and order-status workflows.',
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
        'I design and build a local-first memory and retrieval layer for fleets of AI agents in Rust: RAG without an embedding model. Nothing in the retrieval path is a model, so it runs offline, and when a result is wrong you can read why.',
        'The engine runs two scorers over a keyword index and SQLite full-text search, fused with Reciprocal Rank Fusion, behind a confidence gate that lets the system decline a question no file covers.',
        'The evaluation harness went in alongside the product. It covers abstention against a blind adversarial set, latency, and the full 500 questions of LongMemEval-S, and every result it prints is stamped with command, commit, machine and date.',
        'Everything reaches Claude Desktop and other MCP clients through four read-only tools. Write access never touches the surface a model can see.',
        'I maintain roughly 17,000 lines of Rust across three crates, one runtime dependency, over 200 tests and CI on GitHub Actions. There are 36 architecture decision records, and each one says what the trade was and why I took that side of it.',
      ],
    },
    {
      id: 'casa-seth',
      company: 'Casa Seth',
      role: 'Tech Lead & Software Engineer',
      location: 'Brazil',
      period: 'April 2026 - Present',
      bullets: [
        'I lead architecture and delivery for the house. Infoproducts, the digital commerce funnels, and the measurement systems that report what each one earned.',
        'The conversion path is mine, all of it. Mercado Pago and Pix checkout, server-controlled pricing, UTM attribution, deduplication of browser and server events, revenue reconciliation, and the operational dashboards on top.',
        'Designed a generative-image pipeline around idempotent jobs, bounded concurrency, caching, telemetry, and retries that cannot duplicate paid work.',
        'I lead BiblinhaPlay, the subscription learning and entertainment product with roughly 500 users, running on a production web/PWA and an Expo/React Native client that carry video, music, printables, games and gamification.',
        'I structured the TypeScript monorepo behind all of it, on TanStack Start, React, Expo/React Native, PostgreSQL and Drizzle, with reusable UI and transactional-email packages shared across it.',
        'On the billing side: hosted subscription checkout, entitlement-based authorization, idempotent webhooks, protected media delivery, and a versioned content pipeline that activates atomically and rolls back.',
        'Built BiblinhaCraft in Three.js, with procedural terrain, progressive region streaming, persistent progression and touch-first controls.',
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
        'Full-stack web apps for clients, on TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS and Vercel.',
        'A live event registration system that staff across several companies use, with CPF and WhatsApp validation, a responsive UI and participant tracking.',
        'For a tattoo and barber shop, a chatbot and admin dashboard that turn chats into structured budget requests and follow-up tasks. I still maintain it.',
        'Landing pages and internal tools with payment integrations and webhooks wired in, to automate checkout and the day-to-day work behind it.',
        'Frontend, backend, database design, deployment, maintenance and live support are all me. I work in TDD with Vitest, so regressions get caught and a refactor stays safe.',
        'From 2018 to 2025 the same practice also covered IT support and systems work for people and small businesses, remote and on site: hardware, Windows, Linux and Android, software installation and configuration, and troubleshooting.',
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
        'Hired by the school out of its own classroom, during the web development and design course I was enrolled on there.',
        'Taught web design and creative software, and kept the Windows lab running: installation, configuration and updates across every workstation.',
        'Support for students and staff during daily operations, from software issues to the lab network.',
      ],
    },
  ],

  technicalStrength: [
    {
      id: 'systems-ai',
      title: 'Systems & AI Engineering',
      icon: 'terminal',
      description:
        'Retrieval and memory infrastructure for AI agents in Rust, measured by an evaluation harness that ships in the same repository.',
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
        'The money path, and the measurement underneath it. Events that are safe to retry, numbers that add up at the end of the month.',
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
      "I'm a Tech Lead and Full-Stack Software Engineer. I take product requirements and turn them into software that works, and then I keep answering for it after it ships.",
      'The project I care most about is Ulpia, an open-source memory and retrieval layer for AI agents, written in Rust. It is RAG with no model in the retrieval path at all. That is what lets it run offline, stay consistent between answers, and tell you when no file in the library covers your question. It is Apache 2.0, and the evaluation lives in the same repository, including the categories where it scores badly.',
      'At Casa Seth I lead the commerce side. Infoproducts and payment flows, plus the attribution and conversion systems that report what each launch actually earned. BiblinhaPlay is the one I built first and still operate, a subscription learning platform with roughly 500 users across web and mobile.',
      'I stay close to the code. Sensitive integrations stay server-side, boundaries get drawn on purpose, critical workflows get tested, and I plan for the day something has to be restored. I work from Franca, Brazil, remotely across Latin America, and I am open to relocating to Santiago, Chile.',
    ],
  },

  education: {
    degree: 'B.Sc. Software Engineering',
    institution: 'Universidade de Franca',
    period: '2025 - 2029, in progress',
  },

  languages: [
    { name: 'Portuguese (Brazil)', level: 'Native' },
    { name: 'English', level: 'Advanced (C1)' },
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
