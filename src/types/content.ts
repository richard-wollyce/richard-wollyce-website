export type NavItem = {
  label: string
  href: `#${string}`
}

export type HeroStat = {
  value: string
  label: string
  note: string
}

export type HeroContent = {
  eyebrow: string
  titleLines: string[]
  accentLine: string
  intro: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  secondaryCtaHref: `#${string}`
  stats: HeroStat[]
  terminalLines: string[]
}

export type AboutContent = {
  label: string
  title: string
  intro: string
  paragraphs: string[]
  principles: string[]
  sideNotes: string[]
}

export type ServiceCube = {
  id: string
  index: string
  shortLabel: string
  title: string
  teaser: string
  description: string
  highlights: string[]
  proof: string
}

export type ServicesContent = {
  label: string
  title: string
  intro: string
  cubes: ServiceCube[]
}

export type Achievement = {
  title: string
  metric: string
  description: string
}

export type AchievementsContent = {
  label: string
  title: string
  intro: string
  items: Achievement[]
}

export type ExperienceEntry = {
  role: string
  company: string
  period: string
  summary: string
  tags: string[]
  highlights: string[]
}

export type ExperienceContent = {
  label: string
  title: string
  intro: string
  items: ExperienceEntry[]
}

export type TechStackGroup = {
  title: string
  description: string
  items: string[]
}

export type TechStackContent = {
  label: string
  title: string
  intro: string
  groups: TechStackGroup[]
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

export type ContactContent = {
  label: string
  title: string
  intro: string
  formHeading: string
  availability: string
  channels: ContactLink[]
  whatsappNumber: string
  whatsappDisplay: string
  quickMessage: string
}

export type FooterLink = {
  label: string
  href: string
  external?: boolean
}

export type FooterContent = {
  eyebrow: string
  note: string
  links: FooterLink[]
}

export type SiteContent = {
  brand: string
  nav: NavItem[]
  hero: HeroContent
  about: AboutContent
  services: ServicesContent
  achievements: AchievementsContent
  experience: ExperienceContent
  techStack: TechStackContent
  contact: ContactContent
  footer: FooterContent
}
