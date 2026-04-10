import { SectionHeading } from '../components/SectionHeading.tsx'
import type { TechStackContent } from '../types/content.ts'

type TechStackSectionProps = {
  techStack: TechStackContent
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section className="section" id="stack">
      <SectionHeading
        label={techStack.label}
        title={techStack.title}
        intro={techStack.intro}
      />

      <div className="stack-grid">
        {techStack.groups.map((group) => (
          <article key={group.title} className="surface-panel stack-card">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
