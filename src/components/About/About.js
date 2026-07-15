import { about, education, languages } from '@/data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className="container">
        <div className={styles.layout}>
          <header className={styles.header}>
            <span className={styles.sectionNumber} aria-hidden="true">
              04
            </span>
            <h2 className={styles.title}>About Me</h2>
          </header>

          <div className={styles.content}>
            <div className={`${styles.manifesto} reveal`}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.detailsGrid}>
              <article className={`${styles.detail} reveal`}>
                <header className={styles.detailHeader}>
                  <span className={styles.detailNumber} aria-hidden="true">
                    01
                  </span>
                  <h3 className={styles.detailTitle}>Education</h3>
                </header>
                <p className={styles.detailPrimary}>{education.degree}</p>
                <p className={styles.detailSecondary}>{education.institution}</p>
                <p className={styles.detailMeta}>{education.period}</p>
              </article>

              <article className={`${styles.detail} reveal`}>
                <header className={styles.detailHeader}>
                  <span className={styles.detailNumber} aria-hidden="true">
                    02
                  </span>
                  <h3 className={styles.detailTitle}>Languages</h3>
                </header>
                <ul className={styles.languageList}>
                  {languages.map((language) => (
                    <li key={language.name} className={styles.languageItem}>
                      <span>{language.name}</span>
                      <strong>{language.level}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
