import type { SiteContent } from '../types/content.ts'

export const siteContent: SiteContent = {
  brand: 'Richard Wollyce',
  nav: [
    { label: 'SYSTEM_INIT', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICE_NODES', href: '#services' },
    { label: 'STACK', href: '#stack' },
    { label: 'CONTACT', href: '#contact' },
  ],
  hero: {
    eyebrow: 'CYBER ARCHITECT // SECURITY-FOCUSED SOFTWARE ENGINEER',
    titleLines: ['SECURE SYSTEMS', 'BUILT FOR', 'REAL OPERATIONS.'],
    accentLine: 'REAL OPERATIONS.',
    intro:
      'Richard Wollyce designs internal platforms, custom web products, automation flows, and resilient infrastructure with a security-first mindset. The work is shaped around clear execution, role boundaries, data integrity, and systems that stay dependable under pressure.',
    primaryCtaLabel: 'START ON WHATSAPP',
    secondaryCtaLabel: 'INSPECT SERVICE NODES',
    secondaryCtaHref: '#services',
    stats: [
      {
        value: '~10 min',
        label: 'critical recovery window',
        note: 'restored infrastructure with zero data loss',
      },
      {
        value: '95%',
        label: 'fewer manual errors',
        note: 'after automating production documentation',
      },
      {
        value: 'E2E',
        label: 'delivery ownership',
        note: 'architecture, product, deployment, and support',
      },
    ],
    terminalLines: [
      '> architecture.security = "first"',
      '> stack = ["TypeScript", "React", "Node.js", "PostgreSQL"]',
      '> focus = ["RBAC", "workflow design", "automation", "resilience"]',
      '> location = "Franca, Sao Paulo, Brazil"',
    ],
  },
  about: {
    label: 'ABOUT',
    title: 'Editorial clarity with operational depth.',
    intro:
      'The resume points to one consistent pattern: systems are designed to be practical, secure, and maintainable by real teams.',
    paragraphs: [
      'Richard Wollyce works across system architecture, full-stack engineering, infrastructure, and deployment. The goal is not just to ship code, but to create software that improves operational autonomy and product reliability.',
      'That means mapping business rules before implementation, enforcing least-privilege access where it matters, and carrying the work through deployment, troubleshooting, and long-term resilience.',
    ],
    principles: [
      'Security-by-design from architecture to interface',
      'Strong workflow modeling for business-critical operations',
      'Clear trust boundaries and role-based access control',
      'Production-ready delivery with resilience in mind',
    ],
    sideNotes: [
      'Independent product delivery since 2024',
      'Lead internal systems and architecture work at MG Laser since 2025',
      'Working across custom products, landing pages, automation, and infrastructure',
    ],
  },
  services: {
    label: 'SERVICE NODES',
    title: 'Four core service tracks, one shared standard.',
    intro:
      'Each cube below maps to a focused service area. The implementation is modular in the interface and in the codebase, so adding, removing, or reorganizing service nodes stays simple.',
    cubes: [
      {
        id: 'architecture',
        index: '01',
        shortLabel: 'ARCH_NODE',
        title: 'Secure Systems Architecture',
        teaser:
          'Security-first architecture for internal tools, workflows, and access-sensitive operations.',
        description:
          'Designed for teams that need business-critical systems with clear permission boundaries, durable data flow, and production-ready operational logic.',
        highlights: [
          'Role-based access control and least-privilege modeling',
          'Workflow and state-transition design for real operations',
          'Database integrity and environment separation',
          'Architecture decisions aligned with deployment and maintenance',
        ],
        proof:
          'Built a mission-critical ERP covering order management, inventory, and production workflows for MG Laser.',
      },
      {
        id: 'web-products',
        index: '02',
        shortLabel: 'WEB_NODE',
        title: 'Custom Web Products',
        teaser:
          'Landing pages and web applications built for usability, performance, and clean execution.',
        description:
          'Ideal for teams that need a custom build instead of a template. Product decisions stay grounded in conversion, clarity, and long-term maintainability.',
        highlights: [
          'Responsive, conversion-aware landing pages',
          'Full-stack product delivery with modern web tooling',
          'Security-conscious frontend and backend integration',
          'Clear UX for editors, portals, and customer-facing flows',
        ],
        proof:
          'Delivered custom digital products including landing pages and specialized text-editing workflows with a focus on user autonomy.',
      },
      {
        id: 'automation',
        index: '03',
        shortLabel: 'AUTO_NODE',
        title: 'Automation Platforms',
        teaser:
          'Structured automation for quoting, intake, support, and repeatable operational processes.',
        description:
          'Automation work is treated like product design: business rules, edge cases, persistent data, and usability are all part of the build.',
        highlights: [
          'Automated customer intake and quote generation flows',
          'Backend logic tied to persistent operational data',
          'Reduced friction across customer-facing workflows',
          'Practical delivery with tools like n8n and modern web stacks',
        ],
        proof:
          'Implemented a conversational automation platform that standardized customer intake and improved process consistency.',
      },
      {
        id: 'infrastructure',
        index: '04',
        shortLabel: 'RES_NODE',
        title: 'Infrastructure and Resilience',
        teaser:
          'Deployment, recovery planning, and Linux-based infrastructure with real-world failover thinking.',
        description:
          'For teams that need systems to stay online, recover quickly, and remain understandable after launch.',
        highlights: [
          'Cloud-hosted deployment and environment separation',
          'Linux, Docker, Supabase, and service orchestration',
          'Standby infrastructure and failover readiness',
          'Incident response and end-to-end troubleshooting',
        ],
        proof:
          'Recovered a critical system during infrastructure outage in about 10 minutes with zero data loss, then improved redundancy with standby infrastructure.',
      },
    ],
  },
  achievements: {
    label: 'PROOF',
    title: 'Resume-backed outcomes, not placeholder claims.',
    intro:
      'The metrics below come directly from documented work across internal systems, automation, and infrastructure.',
    items: [
      {
        title: 'Zero-downtime recovery',
        metric: '~10 min',
        description:
          'Recovered a mission-critical system during infrastructure outage with zero data loss.',
      },
      {
        title: 'Process automation',
        metric: '95%',
        description:
          'Reduced manual documentation errors by automating production workflows.',
      },
      {
        title: 'Operational continuity',
        metric: 'RBAC',
        description:
          'Enforced strict role boundaries across commercial, production, and executive interfaces.',
      },
      {
        title: 'Custom product delivery',
        metric: 'Multi-build',
        description:
          'Delivered multiple tailored digital products under tight deadlines with emphasis on quality and UX.',
      },
    ],
  },
  experience: {
    label: 'EXPERIENCE',
    title: 'Recent work across internal platforms and custom digital products.',
    intro:
      'The current focus combines internal systems architecture with independent product delivery, which is why the service offer covers both operational tooling and external-facing web products.',
    items: [
      {
        role: 'Software Engineer | Lead Internal Systems and Security-First Architecture',
        company: 'MG Laser',
        period: '2025 - Present',
        summary:
          'Leading architecture and engineering for business-critical internal systems that connect order management, inventory, production workflows, and operational continuity.',
        tags: ['ERP', 'RBAC', 'Production workflows', 'Incident response'],
        highlights: [
          'Designed and implemented a mission-critical ERP integrating orders, inventory, and production.',
          'Modeled real-time workflows connecting commercial, production, and executive teams.',
          'Defined and enforced strict access boundaries across operational interfaces.',
          'Owned deployment, recovery, and troubleshooting across cloud infrastructure.',
        ],
      },
      {
        role: 'Full-Stack Software Engineer | Custom Digital Products',
        company: 'Independent / Self-Employed',
        period: '2024 - Present',
        summary:
          'Building custom digital products, responsive websites, and structured learning applications with strong emphasis on usability, performance, and resilient delivery.',
        tags: ['Landing pages', 'Web apps', 'Automation', 'Product UX'],
        highlights: [
          'Delivered responsive websites and high-conversion landing pages.',
          'Built specialized digital tools with practical, outcome-focused UX.',
          'Developed web applications centered on structured learning and autonomy.',
          'Worked end-to-end across frontend, backend, and infrastructure layers.',
        ],
      },
    ],
  },
  techStack: {
    label: 'STACK',
    title: 'Modern tools, selected for shipping real systems.',
    intro:
      'The stack reflects what the resume already demonstrates in practice: TypeScript-heavy product work combined with pragmatic infrastructure and automation tooling.',
    groups: [
      {
        title: 'Languages',
        description: 'Core implementation languages used in current product and systems work.',
        items: ['JavaScript', 'TypeScript', 'Python'],
      },
      {
        title: 'Frontend and Product',
        description: 'Interface and application layers for web products and landing pages.',
        items: ['React', 'Next.js', 'Tailwind CSS', 'Responsive UX'],
      },
      {
        title: 'Backend and Infrastructure',
        description: 'Core runtime, data, and deployment foundation.',
        items: ['Node.js', 'PostgreSQL', 'Supabase', 'Docker', 'Linux'],
      },
      {
        title: 'Platforms and Operations',
        description: 'Delivery and automation tools used in production workflows.',
        items: ['Vercel', 'GitHub', 'VS Code / Cursor', 'Easypanel', 'n8n'],
      },
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'Start with context. Move fast from there.',
    intro:
      'For internal systems, landing pages, automation builds, or infrastructure work, the fastest path is WhatsApp. Send the project context and the next step can be scoped quickly.',
    formHeading: 'OPEN A WHATSAPP THREAD',
    availability:
      'Working from Franca, Sao Paulo, Brazil across architecture, full-stack product delivery, automation, and resilient infrastructure.',
    channels: [
      {
        label: 'Email',
        value: 'mail@richardwollyce.com',
        href: 'mailto:mail@richardwollyce.com',
      },
      {
        label: 'GitHub',
        value: 'github.com/richard-wollyce',
        href: 'https://github.com/richard-wollyce',
      },
      {
        label: 'Location',
        value: 'Franca, Sao Paulo, Brazil',
        href: 'https://maps.google.com/?q=Franca+Sao+Paulo+Brazil',
      },
      {
        label: 'WhatsApp',
        value: '+55 16 99159-7978',
        href: 'https://wa.me/5516991597978',
      },
    ],
    whatsappNumber: '+55 16 99159-7978',
    whatsappDisplay: '+55 16 99159-7978',
    quickMessage:
      'Hello Richard, I would like to discuss a project involving secure systems, web products, automation, or infrastructure.',
  },
  footer: {
    eyebrow: 'RICHARD WOLLYCE // SECURITY-FIRST DELIVERY',
    note:
      'Custom web products, operational tooling, automation platforms, and infrastructure designed for practical use.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/richard-wollyce',
        external: true,
      },
      {
        label: 'Email',
        href: 'mailto:mail@richardwollyce.com',
      },
      {
        label: 'WhatsApp',
        href: 'https://wa.me/5516991597978',
        external: true,
      },
    ],
  },
}
