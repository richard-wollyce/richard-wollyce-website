import { siteConfig } from '@/data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.layout}>
          <header className={styles.header}>
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.subtitle}>
              Ready to talk systems, security, or full-stack engineering roles? Get in touch.
            </p>
          </header>

          <div className={styles.grid}>
            <a href={`mailto:${siteConfig.email}`} className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Email</h3>
              <p className={styles.cardDetail}>{siteConfig.email}</p>
            </a>

            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>LinkedIn</h3>
              <p className={styles.cardDetail}>linkedin.com/in/richardwollyce-/</p>
            </a>

            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>GitHub</h3>
              <p className={styles.cardDetail}>github.com/richard-wollyce</p>
            </a>

            <a href={siteConfig.cvPath} download className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Download CV</h3>
              <p className={styles.cardDetail}>Available in PDF format</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
