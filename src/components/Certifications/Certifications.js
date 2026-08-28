import CardRail from '@/components/CardRail/CardRail';
import { useLocale } from '@/i18n/LocaleProvider';
import styles from './Certifications.module.css';

export default function Certifications() {
  const { c, t } = useLocale();
  const certifications = c.certifications;

  return (
    <section className={`section ${styles.certifications}`} id="certifications">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.certifications.title}</h2>
        </header>

        {/*
          440px is not a taste call. The rail loops by rendering the list three
          times and jumping a whole copy at 0.5 and 1.5 copies, so an inert copy
          becomes visible whenever the viewport is wider than half a copy. The
          widest this container gets is 1136px, so one copy has to reach 2272px:
          5 cards at 440px plus five 24px gaps is 2320px, and no dead copy is
          ever on screen.
        */}
        <CardRail
          sectionName={t.certifications.title}
          itemWidth="clamp(240px, 66vw, 358px)"
        >
          {certifications.map((certification) => (
            <article key={certification.id} className={styles.card}>
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
        </CardRail>
      </div>
    </section>
  );
}
