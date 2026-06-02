import { certifications } from '@/data/content';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
        </header>

        <div className={styles.grid}>
          {certifications.map((certification) => (
            <article key={certification.id} className={`${styles.card} reveal`}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                    <path d="M7 4h10" />
                    <path d="M17 4v5a5 5 0 0 1-10 0V4" />
                    <path d="M5 4H3v2a4 4 0 0 0 4 4" />
                    <path d="M19 4h2v2a4 4 0 0 1-4 4" />
                  </svg>
                </span>
                <span className={styles.date}>{certification.date}</span>
              </div>

              <h3 className={styles.title}>{certification.title}</h3>
              <p className={styles.issuer}>{certification.issuer}</p>
              {certification.details && (
                <p className={styles.details}>{certification.details}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
