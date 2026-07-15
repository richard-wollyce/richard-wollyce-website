import Image from 'next/image';
import { hero, siteConfig } from '@/data/content';
import UnicornScene from '@/components/UnicornScene/UnicornScene';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-title">
      <div className={styles.heroStage}>
        <UnicornScene />

        <h1 className={styles.heroTitle} id="hero-title">
          <span className={styles.srOnly}>{hero.title}</span>
          <span className={`${styles.titleLine} ${styles.systems}`} aria-hidden="true">
            <span className={styles.lineInk}>SYSTEMS</span>
          </span>
          <span className={`${styles.titleLine} ${styles.that}`} aria-hidden="true">
            <span className={styles.lineInk}>THAT</span>
          </span>
          <span className={`${styles.titleLine} ${styles.ship}`} aria-hidden="true">
            <span className={`${styles.lineInk} ${styles.shipInk}`}>
              <span className={styles.shipWord}>SHIP</span>
              <span className={styles.period}>.</span>
            </span>
          </span>
        </h1>

        <div className={styles.identity}>
          <p className={styles.name}>{siteConfig.shortName}</p>
          <p className={styles.role}>{hero.role}</p>
          <span className={styles.identityLine} aria-hidden="true" />
          <p className={styles.statement}>{hero.statement}</p>
        </div>

        <div className={styles.actions}>
          <a href={hero.ctaPrimary.href} className={styles.primaryAction}>
            {hero.ctaPrimary.label}
            <span aria-hidden="true">→</span>
          </a>
          <a href={hero.ctaSecondary.href} className={styles.secondaryAction} download>
            {hero.ctaSecondary.label}
          </a>
        </div>

        <figure
          className={styles.portrait}
          role="img"
          aria-label={`${siteConfig.name}, ${siteConfig.title}`}
        >
          <Image
            src="/images/richard-editorial-cutout.png"
            alt=""
            width={930}
            height={909}
            sizes="(max-width: 767px) 112vw, (max-width: 1199px) 66vw, 64vw"
            quality={90}
            loading="eager"
            className={`${styles.portraitImage} ${styles.lightPortrait}`}
          />
          <Image
            src="/images/richard-editorial-cutout-dark.png"
            alt=""
            width={924}
            height={908}
            sizes="(max-width: 767px) 112vw, (max-width: 1199px) 66vw, 64vw"
            quality={90}
            loading="eager"
            className={`${styles.portraitImage} ${styles.darkPortrait}`}
          />
        </figure>
      </div>

      <div className={styles.domainStrip} aria-label="Engineering scope">
        <ul className={styles.domains}>
          {hero.domains.map((domain) => (
            <li key={domain}>{domain}</li>
          ))}
        </ul>
        <p className={styles.ownership}>{hero.ownership}</p>
      </div>
    </section>
  );
}
