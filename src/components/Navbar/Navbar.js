'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#work' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label={t.nav.mainNavigation}>
        <a href="#" className={styles.logo} aria-label={t.nav.home}>
          <span className={styles.logoMark}>RW</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 0.06}s` }}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
