import { SectionHeading } from '../components/SectionHeading.tsx'
import type { AchievementsContent } from '../types/content.ts'

type AchievementsSectionProps = {
  achievements: AchievementsContent
}

export function AchievementsSection({
  achievements,
}: AchievementsSectionProps) {
  return (
    <section className="section" id="proof">
      <SectionHeading
        label={achievements.label}
        title={achievements.title}
        intro={achievements.intro}
      />

      <div className="achievement-grid">
        {achievements.items.map((item) => (
          <article key={item.title} className="surface-panel achievement-card">
            <p className="achievement-metric">{item.metric}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
