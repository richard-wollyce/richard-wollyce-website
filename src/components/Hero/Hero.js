import Image from 'next/image';
import { hero, siteConfig } from '@/data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {siteConfig.title}
          </div>

          <h1 className={styles.headline}>{hero.headline}</h1>

          <p className={styles.subheadline}>{hero.subheadline}</p>

          <div className={styles.ctas}>
            <a href={hero.ctaPrimary.href} className={styles.ctaPrimary}>
              {hero.ctaPrimary.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href={hero.ctaSecondary.href} className={styles.ctaSecondary}>
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className={styles.portraitWrapper}>
          <div className={styles.portraitGlow} />
          <div className={styles.portrait}>
            <Image
              src="/images/rw_pfp.jpg"
              alt="Richard Wollyce Santos de Souza — Full Stack Software Engineer"
              width={420}
              height={420}
              priority
              quality={90}
              className={styles.portraitImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.trustStrip}>
        <div className={`container ${styles.trustContainer}`}>
          {hero.trustStrip.map((item, index) => (
            <div key={index} className={styles.trustItem}>
              <span className={styles.trustIcon}>
                {item.icon === 'chart' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                )}
                {item.icon === 'check' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                )}
                {item.icon === 'bolt' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                )}
              </span>
              <span className={styles.trustText}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
