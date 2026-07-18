import { siteConfig } from '@/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copy}>
          &copy; {currentYear} {siteConfig.name}. All rights reserved.
        </p>

        <div className={styles.links}>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href={`mailto:${siteConfig.email}`} className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
