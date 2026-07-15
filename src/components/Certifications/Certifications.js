import { certifications } from '@/data/content';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section className={`section ${styles.section}`} id="certifications">
      <div className="container">
        <header className={styles.sectionHeader}>
          <span className={styles.sectionNumber} aria-hidden="true">
            05
          </span>
          <h2 className={styles.sectionTitle}>Certifications</h2>
        </header>

        <ol className={styles.ledger}>
          {certifications.map((certification, index) => (
            <li key={certification.id} className={`${styles.entry} reveal`}>
              <span className={styles.entryNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className={styles.entryContent}>
                <h3 className={styles.title}>{certification.title}</h3>
                {certification.details && (
                  <p className={styles.details}>{certification.details}</p>
                )}
              </div>

              <div className={styles.meta}>
                <p className={styles.issuer}>{certification.issuer}</p>
                <p className={styles.date}>{certification.date}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
