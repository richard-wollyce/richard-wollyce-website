import { SectionHeading } from '../components/SectionHeading.tsx'
import type { AboutContent } from '../types/content.ts'

type AboutSectionProps = {
  about: AboutContent
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="section" id="about">
      <SectionHeading
        label={about.label}
        title={about.title}
        intro={about.intro}
      />

      <div className="about-grid">
        <article className="surface-panel about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <div className="about-side">
          <article className="surface-panel">
            <p className="modal-kicker">WORKING PRINCIPLES</p>
            <ul className="detail-list">
              {about.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </article>

          <article className="surface-panel">
            <p className="modal-kicker">CURRENT SIGNALS</p>
            <ul className="detail-list">
              {about.sideNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
