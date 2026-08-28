import { useLocale } from '@/i18n/LocaleProvider';
import styles from './Experience.module.css';

export default function Experience() {
  const { c, t } = useLocale();
  const experience = c.experience;

  return (
    <section className="section" id="experience">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.experience.title}</h2>
          <p className={styles.sectionSubtitle}>{t.experience.subtitle}</p>
        </header>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.id} className={`${styles.timelineItem} reveal`}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot} />
                <div className={styles.markerLine} />
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.roleHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{job.role}</h3>
                    <h4 className={styles.companyName}>{job.company}</h4>
                  </div>
                  <div className={styles.meta}>
                    {job.period && <span className={styles.period}>{job.period}</span>}
                    {job.location && <span className={styles.location}>{job.location}</span>}
                  </div>
                </div>

                <ul className={styles.bullets}>
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className={styles.bullet}>
                      <span className={styles.bulletIcon}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className={styles.bulletText}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
