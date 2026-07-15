import { experience } from '@/data/content';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience" aria-labelledby="experience-title">
      <div className="container">
        <header className={styles.sectionHeader}>
          <p className={styles.sectionIndex}>02 / Experience</p>
          <div className={styles.headingGroup}>
            <h2 className={styles.sectionTitle} id="experience-title">Responsibility at production scale.</h2>
            <p className={styles.sectionSubtitle}>
              Technical leadership and end-to-end ownership across product platforms, business-critical systems, and client work.
            </p>
          </div>
        </header>

        <ol className={styles.timeline}>
          {experience.map((job, index) => (
            <li key={job.id} className={`${styles.timelineItem} reveal`}>
              <article className={styles.role} aria-labelledby={`${job.id}-role`}>
                <div className={styles.indexColumn}>
                  <p className={styles.roleIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  {job.period && <time className={styles.period}>{job.period}</time>}
                  {job.location && <p className={styles.location}>{job.location}</p>}
                </div>

                <header className={styles.roleHeader}>
                  <p className={styles.companyName}>{job.company}</p>
                  <h3 className={styles.roleTitle} id={`${job.id}-role`}>{job.role}</h3>
                </header>

                <ol className={styles.responsibilities}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ol>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
