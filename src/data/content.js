export const siteConfig = {
  name: 'Richard Wollyce',
  shortName: 'Richard Wollyce',
  title: 'Full Stack Software Engineer',
  location: 'Franca, São Paulo, Brazil',
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
    'A Full Stack Software Engineer who designs secure architectures and ships solutions that solve real practical problems. I build systems in production, from an ERP that handles over 200 orders a day to chat-based systems that turn conversations into clear, actionable tasks.',
  ctaPrimary: { label: "Let's Talk", href: '#contact' },
  ctaSecondary: { label: 'Recent Work', href: '#work' },
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
      text: 'Production outage restored <10 min, zero data loss',
    },
  ],
};

export const projects = [
  {
    id: 'mg-laser-erp',
    name: 'E-Commerce ERP',
    workplace: 'MG Laser',
    context:
      'MG Laser needed to replace fragile spreadsheet-based workflows with a reliable system to manage inventory, sales, and daily operations across multiple teams.',
    challenge:
      'The business ran on manual data entry across disconnected spreadsheets, causing frequent errors, data inconsistencies, and slow order processing across teams handling 200+ orders per day.',
    solution:
      'Built and maintain a full ERP system covering inventory, sales, and daily operations. Implemented structured forms with automated validation, pagination and targeted RPC calls for performance, and Row-Level Security with Role-Based Access Control for data protection.',
    impact:
      'Reduced manual data entry errors by approximately 95%. The system processes 200+ orders per day reliably. Restored the system after a critical production outage in under 10 minutes with no data loss.',
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'Supabase', 'PostgreSQL', 'Linux VPS', 'EasyPanel'],
    link: null,
    repo: null,
  },
  {
  id: 'roadtocybersec',
  name: 'RoadToCyberSec',
  workplace: 'Personal',
  context:
  'Cybersecurity learning resources are often fragmented, overly technical, or lack a clear progression path for beginners and non-technical professionals.',
  challenge:
  'Creating an accessible, structured learning path that covers fundamentals through advanced topics without overwhelming learners.',
  solution:
  'Curated and authored a structured, beginner-to-advanced cybersecurity learning path. Designed sequential modules covering fundamentals, threat analysis, password security, safe browsing, device hygiene, and incident response.',
  impact:
  'Provides a searchable, structured cybersecurity resource hub accessible to beginners, developers, and non-technical professionals.',
  stack: ['Mintlify', 'Documentation', 'Content Creation', 'Cybersecurity Education', 'Markdown'],
  link: 'https://roadtocybersec.com',
  repo: 'https://github.com/richard-wollyce/road-to-cybersec',
  },
  {
    id: 'studio-r',
    name: 'Chatbot & Dashboard',
    workplace: 'Contractor',
    context:
      'As a contractor for Studio R, a tattoo and barber shop, built a structured intake flow to receive and manage service budget requests instead of unstructured WhatsApp messages.',
    challenge:
      'Client requests arrived as free-form messages with missing details, making it hard to assess scope, pricing, and follow-up status.',
    solution:
      'Built a JSON-driven guided chatbot that converts client conversations into structured tattoo and barber service budget requests. Implemented conversation flows that parse text, images, and links. Built an owner-only dashboard to review requests, manage follow-up, and track statuses.',
    impact:
      'Replaced unstructured intake with a guided flow that captures complete budget requests. The owner dashboard provides full visibility into pending and completed requests.',
    stack: ['TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Supabase', 'PostgreSQL', 'Linux VPS', 'EasyPanel'],
    link: 'https://mayara.richardwollyce.cloud/form',
    repo: null,
  },
  {
    id: '13doze',
    name: 'Event Registration',
    workplace: 'Contractor',
    context:
      'As a contractor for a multi-company event at Franca Shopping, built a fast, reliable client registration app usable by staff across participating businesses on event day.',
    challenge:
      'Staff needed to quickly check existing clients, register new ones, and track event participation in real-time across desktop and mobile devices with no room for downtime.',
    solution:
      'Built a client registration web app with CPF and WhatsApp lookup (~100-200ms verification), a responsive interface for desktop and mobile, and a CRUD system with day-based registration suffixes for accurate participant counting.',
    impact:
      'Used live by staff across participating businesses on event day. Delivered end-to-end including design, development, deployment, and live event support.',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Vercel', 'PostgreSQL'],
    link: null,
    repo: null,
  },
  {
    id: 'qr-imposto',
    name: 'QR Imposto',
    workplace: 'Contractor',
    context:
      'Built as a contractor-led open-source mobile app to give Brazilian citizens visibility into taxes paid on everyday purchases like groceries, medicine, and fuel.',
    challenge:
      'Fiscal data from NFC-e receipts is encoded in QR codes and not easily accessible or understandable to the average consumer.',
    solution:
      'Built an open-source mobile app that lets users scan NFC-e QR codes and see a clear breakdown of taxes paid on purchases. Covers the full workflow from QR scan and fiscal data parsing to logged entries and tax breakdown summaries.',
    impact:
      'Provides transparent tax visibility for everyday purchases. Open-source and distributed through EAS.',
    stack: ['React Native', 'Expo', 'TypeScript', 'EAS'],
    link: null,
    repo: 'https://github.com/richard-wollyce/qr-imposto',
  },
];

export const experience = [
  {
    id: 'mg-laser',
    company: 'MG Laser',
    role: 'Software Engineer',
    location: 'Franca, Brazil',
    period: 'November 2025 — May 2026',
    bullets: [
      'Build and maintain an ERP system processing 200+ orders per day across multiple teams, covering inventory, sales, and daily operations.',
      'Reduced manual data entry errors by ~95% by replacing spreadsheet workflows with structured forms and automated validation.',
      'Secured data access with RLS and RBAC, restricting records to appropriate user roles.',
      'Restored the system after a critical production outage in under 10 minutes with no data loss.',
    ],
  },
  {
    id: 'contractor',
    company: 'Contractor',
    role: 'Contractor / Freelance Software Engineer',
    location: 'Franca, Brazil · Remote',
    period: '2024 — Present',
    bullets: [
      'Delivered client projects including 13doze (event registration app), Studio R (chatbot & dashboard), and QR Imposto (open-source mobile app).',
      'Owned full lifecycle: requirements, design, development, deployment, and live event or post-launch support.',
      'Implemented payment integrations, webhooks, conversational flows, and applied TDD with Vitest to reduce regressions.',
      'Worked across frontend, backend, databases, and self-managed server deployments.',
    ],
  },
];

export const technicalStrength = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    description:
      'Building responsive, accessible interfaces with modern React patterns. From complex data tables to guided conversational flows, every UI is production-ready and performance-conscious.',
    technologies: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Three.js', 'Redux'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    description:
      'Designing APIs, authentication flows, and webhook integrations that handle real workloads. Every backend service is built for reliability and secure data handling.',
    technologies: ['Node.js', 'REST APIs', 'GraphQL', 'Supabase', 'Auth', 'Webhooks'],
  },
  {
    id: 'data-security',
    title: 'Data & Security',
    icon: 'shield',
    description:
      'Structuring databases with secure-by-default thinking. Row-Level Security and Role-Based Access Control are standard practice, not afterthoughts.',
    technologies: ['PostgreSQL', 'SQL', 'RLS', 'RBAC', 'Database Design'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Quality',
    icon: 'terminal',
    description:
      'Owning the full deployment pipeline from container to production. Self-managed servers, CI/CD automation, and test-driven development keep systems reliable.',
    technologies: ['Docker', 'Linux VPS', 'Nginx', 'GitHub Actions', 'CI/CD', 'Vitest', 'TDD'],
  },
];

export const about = {
  paragraphs: [
    "I'm a Full Stack Software Engineer based in São Paulo, currently pursuing a B.Sc. in Software Engineering. I take ownership from problem definition to production, building systems that remain reliable under real conditions.",
    'I work with a secure by default mindset. Row Level Security, Role Based Access Control, and structured data access are part of every system I design. I focus on getting the architecture right early so the system can grow without accumulating fragile solutions.',
    'My interest in technology started early. At seven years old, I had my first computer and began formal IT training. That curiosity turned into a long term commitment to building useful and scalable software.',
    'Outside of engineering, I am a father and passionate about music. Both influence how I think and build, bringing creativity, discipline, and a strong sense of responsibility to everything I do. I learn quickly, adapt fast, and focus on delivering work that truly matters.',
  ],
};
