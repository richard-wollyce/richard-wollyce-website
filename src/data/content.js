export const siteConfig = {
  name: 'Richard Wollyce Santos de Souza',
  shortName: 'Richard Wollyce',
  title: 'Full Stack Software Engineer',
  location: 'Franca, Sao Paulo, Brazil',
  email: 'mail@richardwollyce.com',
  phone: '+55 (16) 9 9159-7978',
  linkedin: 'https://linkedin.com/in/richardwollyce-/',
  github: 'https://github.com/richard-wollyce',
  website: 'https://richardwollyce.com',
  cvPath: '/richard-wollyce-cv.pdf',
};

export const hero = {
  headline: 'Hi, I\'m Richard Wollyce',
  title: 'Full Stack Software Engineer',
  subheadline:
    'Full Stack Software Engineer focused on TypeScript, JavaScript, and Rust, building secure, scalable web applications end to end across React, Next.js, Node.js, Supabase, PostgreSQL, CI/CD, and Linux deployments.',
  ctaPrimary: { label: "Let's Talk", href: '#contact' },
  ctaSecondary: { label: 'View Projects', href: '#work' },
  trustStrip: [
    {
      icon: 'chart',
      text: 'ERP handling 200+ orders/day',
    },
    {
      icon: 'check',
      text: '~95% reduction in manual entry errors',
    },
    {
      icon: 'bolt',
      text: 'Security, networking, and digital forensics foundation',
    },
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
    id: 'roadtocybersec',
    name: 'RoadToCyberSec.com',
    category: 'Cybersecurity Project',
    summary:
      'A structured, beginner-to-advanced cybersecurity learning path and resource hub focused on practical, actionable guidance.',
    highlights: [
      'Curated and authored sequential learning material for beginners, developers, and non-technical professionals.',
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
    id: 'mg-laser',
    company: 'MG Laser',
    role: 'Software Engineer',
    location: 'Franca, Brazil',
    period: 'November 2025 - Present',
    bullets: [
      'Tech stack: TypeScript, React, Vite, Tailwind CSS, Node.js, Supabase, PostgreSQL, Linux VPS, EasyPanel.',
      'Build and maintain an ERP system covering inventory, sales, and daily operations, processing 200+ orders per day across multiple teams.',
      'Reduced manual data entry errors by approximately 95% by replacing spreadsheet-based workflows with structured forms and automated validation.',
      'Improved responsiveness on high-volume data tables through pagination and targeted RPC calls.',
      'Secured data access with Row-Level Security (RLS) and Role-Based Access Control (RBAC), restricting records to the appropriate user roles.',
      'Apply secure coding, audit-aware access control, and incident-response thinking when designing business-critical workflows.',
      'Manage deployment, monitoring, and server infrastructure on a self-managed Linux VPS.',
      'Restored the system after a critical production outage in under 10 minutes with no data loss.',
    ],
  },
  {
    id: 'contractor',
    company: 'Contractor',
    role: 'Contractor - Software Engineer',
    location: 'Franca, Brazil',
    period: null,
    bullets: [
      'Work for multiple clients on freelance and contract projects.',
      'Build full-stack web apps for clients using TypeScript, React, Next.js, Node.js, Supabase, PostgreSQL, Vite, Tailwind CSS, and Vercel.',
      'Built a live event registration system used by staff across multiple companies, including CPF and WhatsApp validation, responsive UI, and participant tracking workflows.',
      'Built and maintain a chatbot and admin dashboard for a tattoo and barber shop, turning chats into structured budget requests and follow-up tasks.',
      'Built landing pages and small business systems with payment integrations and webhooks to automate checkout and day-to-day work.',
      'Handle frontend, backend, database design, deployment, maintenance, live support, and ongoing improvements.',
      'Use AI-assisted development workflows to accelerate implementation while keeping code review, testing, and production validation under developer control.',
      'Use TDD with Vitest to avoid regressions and refactor safely.',
    ],
  },
];

export const technicalStrength = [
  {
    id: 'languages-ai',
    title: 'Languages & AI Workflow',
    icon: 'code',
    description:
      'Building with the core languages and workflow practices listed in the CV, including Rust and AI-assisted development under developer-controlled review, testing, and validation.',
    technologies: ['TypeScript', 'JavaScript', 'Rust', 'HTML', 'CSS', 'Python', 'Bash', 'SQL fundamentals', 'Cargo', 'AI-assisted workflows'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    description:
      'Building responsive interfaces and application flows across web and mobile using the frontend stack listed in the CV.',
    technologies: ['React', 'Next.js', 'React Native', 'Expo', 'Three.js', 'Vite', 'Tailwind CSS', 'Redux', 'Responsive UI'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    description:
      'Designing APIs, authentication flows, authorization, and webhooks for full-stack applications and client systems.',
    technologies: ['Node.js', 'Next.js API routes', 'API development', 'API design', 'REST APIs', 'GraphQL', 'Supabase', 'Authentication', 'Authorization', 'Webhooks'],
  },
  {
    id: 'data-security',
    title: 'Data, Security & Forensics',
    icon: 'shield',
    description:
      'Applying secure data access, cybersecurity fundamentals, networking knowledge, and digital evidence handling to system design and implementation.',
    technologies: ['PostgreSQL', 'Database design', 'RPC calls', 'RLS', 'RBAC', 'Secure coding', 'TCP/IP', 'IPv4', 'IPv6', 'Wireless security', 'Incident response', 'Digital evidence', 'Chain of custody'],
  },
  {
    id: 'infrastructure-quality',
    title: 'Infrastructure & Quality',
    icon: 'terminal',
    description:
      'Owning deployment, monitoring, automated validation, and production troubleshooting across managed and self-managed environments.',
    technologies: ['AWS fundamentals', 'Docker', 'Linux', 'Nginx', 'Vercel', 'Self-managed VPS', 'EasyPanel', 'GitHub Actions', 'CI/CD', 'EAS', 'Vitest', 'TDD', 'Biome', 'Lefthook'],
  },
  {
    id: 'methods-modeling',
    title: 'Methods & Modeling',
    icon: 'diagram',
    description:
      'Using structured software methods and modeling practices to reason about requirements, architecture, and implementation.',
    technologies: ['Domain-driven design (DDD)', 'Specification-driven design (SDD)', 'Agile', 'UML', 'Class diagrams', 'Sequence diagrams', 'Component diagrams', 'Technical documentation'],
  },
];

export const about = {
  paragraphs: [
    'Full Stack Software Engineer focused on TypeScript, JavaScript, and Rust, building secure, scalable web applications end to end.',
    'Experienced with React, Next.js, Node.js, Supabase, PostgreSQL, REST APIs, authentication, CI/CD, AWS fundamentals, and Linux server deployments.',
    'Strong foundation in system design, cybersecurity, network fundamentals, digital forensics, secure data access, and AI-assisted development workflows.',
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
