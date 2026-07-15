import { siteConfig } from '@/data/content';
import styles from './Contact.module.css';

const contactLinks = [
  {
    label: 'Email',
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: 'LinkedIn',
    detail: 'linkedin.com/in/richardwollyce-/',
    href: siteConfig.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    detail: 'github.com/richard-wollyce',
    href: siteConfig.github,
    external: true,
  },
  {
    label: 'Download CV',
    detail: 'Available in PDF format',
    href: siteConfig.cvPath,
    download: true,
  },
];

export default function Contact() {
  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <header className={styles.header}>
          <div className={styles.headingGroup}>
            <span className={styles.sectionNumber} aria-hidden="true">
              06
            </span>
            <h2 className={styles.title}>Let&apos;s Connect</h2>
          </div>

          <p className={styles.subtitle}>
            Looking for technical leadership with hands-on product ownership? Let&apos;s talk.
          </p>
        </header>

        <nav className={styles.links} aria-label="Contact links">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.contactLink} reveal`}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              {...(link.download ? { download: true } : {})}
            >
              <span className={styles.linkNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkDetail}>{link.detail}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
