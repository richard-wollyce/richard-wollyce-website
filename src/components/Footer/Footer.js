import { siteConfig } from '@/data/site';
import { useLocale } from '@/i18n/LocaleProvider';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copy}>
          {/* shortName, not name: the footer is a signature, and a signature is the
            * name somebody is called by. The full legal name stays where it is a legal
            * field, which is the document metadata in data/meta.js. */}
          &copy; {currentYear} {siteConfig.shortName}. {t.footer.rights}
        </p>

        <div className={styles.links}>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {t.contact.linkedin}
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {t.contact.github}
          </a>
          <a href={`mailto:${siteConfig.email}`} className={styles.link}>
            {t.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
