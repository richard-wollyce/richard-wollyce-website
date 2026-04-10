import { SectionHeading } from '../components/SectionHeading.tsx'
import type { ExperienceContent } from '../types/content.ts'

type ExperienceSectionProps = {
  experience: ExperienceContent
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="section" id="experience">
      <SectionHeading
        label={experience.label}
        title={experience.title}
        intro={experience.intro}
      />

      <div className="experience-grid">
        {experience.items.map((item) => (
          <article key={`${item.role}-${item.company}`} className="surface-panel">
            <div className="experience-header">
              <div>
                <p className="section-label">{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <p className="experience-period">{item.period}</p>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <ul className="detail-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
