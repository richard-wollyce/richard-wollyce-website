import type { HeroContent, ServiceCube } from '../types/content.ts'

type HeroSectionProps = {
  brand: string
  hero: HeroContent
  serviceCubes: ServiceCube[]
  primaryHref: string
}

export function HeroSection({
  brand,
  hero,
  serviceCubes,
  primaryHref,
}: HeroSectionProps) {
  return (
    <section className="section hero-section" id="hero">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            {hero.titleLines.map((line) => (
              <span
                key={line}
                className={line === hero.accentLine ? 'accent' : undefined}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-intro">{hero.intro}</p>

          <div className="hero-actions">
            <a
              className="button-primary"
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCtaLabel}
            </a>
            <a className="button-secondary" href={hero.secondaryCtaHref}>
              {hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="hero-stats">
            {hero.stats.map((stat) => (
              <article key={stat.label} className="surface-panel stat-card">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-note">{stat.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-panels">
          <article className="surface-panel terminal-panel">
            <p className="terminal-prompt">&gt; init_profile --target "{brand}"</p>
            <div className="terminal-lines">
              {hero.terminalLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>

          <article className="surface-panel hero-node-panel">
            <p className="section-label">ACTIVE SERVICE MAP</p>
            <div className="hero-node-list">
              {serviceCubes.map((cube) => (
                <span key={cube.id}>{cube.shortLabel}</span>
              ))}
            </div>
            <p className="hero-node-note">
              Security-first delivery across architecture, product, automation,
              and operational resilience.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
