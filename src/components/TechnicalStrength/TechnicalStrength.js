import { technicalStrength } from '@/data/content';
import styles from './TechnicalStrength.module.css';

export default function TechnicalStrength() {
  return (
    <section className={`section ${styles.section}`} id="skills">
      <div className="container">
        <header className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <span className={styles.sectionNumber} aria-hidden="true">
              03
            </span>
            <h2 className={styles.sectionTitle}>Technical Strength</h2>
          </div>

          <p className={styles.sectionSubtitle}>
            Capabilities proven across platform architecture, product engineering, reliability, and production ownership.
          </p>
        </header>

        <div className={styles.ledger}>
          {technicalStrength.map((strength, index) => (
            <article key={strength.id} className={`${styles.entry} reveal`}>
              <header className={styles.entryHeader}>
                <span className={styles.entryNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.entryTitle}>{strength.title}</h3>
              </header>

              <div className={styles.entryBody}>
                <p className={styles.description}>{strength.description}</p>

                <div className={styles.evidence}>
                  <h4 className={styles.techLabel}>Capabilities &amp; Tools</h4>
                  <ul
                    className={styles.techList}
                    aria-label={`Capabilities and tools for ${strength.title}`}
                  >
                    {strength.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
