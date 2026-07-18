import { about, education, languages } from '@/data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.layout}>
          <header className={styles.header}>
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.accentBar} />
          </header>

          <div className={styles.content}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <div className={styles.detailsGrid}>
              <article className={`${styles.detailCard} reveal`}>
                <h3 className={styles.detailTitle}>Education</h3>
                <p className={styles.detailPrimary}>{education.degree}</p>
                <p className={styles.detailSecondary}>{education.institution}</p>
                <p className={styles.detailMeta}>{education.period}</p>
              </article>

              <article className={`${styles.detailCard} reveal`}>
                <h3 className={styles.detailTitle}>Languages</h3>
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
