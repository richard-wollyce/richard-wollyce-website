import CardRail from '@/components/CardRail/CardRail';
import { useLocale } from '@/i18n/LocaleProvider';
import styles from './TechnicalStrength.module.css';

export default function TechnicalStrength() {
  const { c, t } = useLocale();
  const technicalStrength = c.technicalStrength;

  return (
    <section className="section" id="skills">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.strength.title}</h2>
          <p className={styles.sectionSubtitle}>{t.strength.subtitle}</p>
        </header>

        {/*
          Six cards at 360px plus six 24px gaps is 2304px of copy, past the
          2272px a 1136px container needs before an inert copy can come on
          screen. 360px is also about where these cards want to be: the
          description holds two lines and the ten technology pills wrap into
          four rows rather than a ragged two.
        */}
        <CardRail
          sectionName={t.strength.title}
          itemWidth="clamp(240px, 66vw, 358px)"
        >
          {technicalStrength.map((strength) => (
            <article key={strength.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {strength.icon === 'layout' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  )}
                  {strength.icon === 'server' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  )}
                  {strength.icon === 'shield' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {strength.icon === 'terminal' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>
                  )}
                  {strength.icon === 'code' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  )}
                  {strength.icon === 'diagram' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="6" height="6" rx="1" />
                      <rect x="15" y="3" width="6" height="6" rx="1" />
                      <rect x="9" y="15" width="6" height="6" rx="1" />
                      <path d="M9 6h6" />
                      <path d="M12 9v6" />
                    </svg>
                  )}
                </div>
                <h3 className={styles.cardTitle}>{strength.title}</h3>
              </div>

              <p className={styles.description}>{strength.description}</p>

              <div className={styles.techWrapper}>
                <h4 className={styles.techLabel}>{t.strength.technologies}</h4>
                <div className={styles.pills}>
                  {strength.technologies.map((tech) => (
                    <span key={tech} className={styles.pill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </CardRail>
      </div>
    </section>
  );
}
