'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { localeMeta } from '@/data/content';
import { useLocale } from '@/i18n/LocaleProvider';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { t, locale } = useLocale();
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

  // The wordmark is a link to the locale's home path, which on a one-page site is
  // the route the visitor is already on, so the navigation itself is a no-op and
  // clicking it appeared to do nothing. The scroll is the actual behaviour people
  // expect from a logo. No behavior option is passed on purpose: the default
  // resolves to the document's own scroll-behavior, which globals.css sets to
  // smooth and already forces back to auto under prefers-reduced-motion, so the
  // motion floor is one rule rather than two.
  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label={t.nav.mainNavigation}>
        {/* The monogram is the name with its middles removed, so the hover is the
          * name filling itself back in: the R holds the left edge, "ichard" grows out
          * of nothing and pushes the W rightward, and "ollyce" follows it. The letters
          * are real text in the document rather than a swapped string, which is why
          * the face, the size, the colour and the tracking cannot drift from the
          * resting state. aria-hidden because the link already carries its own name. */}
        <Link
          href={localeMeta(locale).path}
          className={styles.logo}
          aria-label={t.nav.home}
          onClick={handleLogoClick}
        >
          <span className={styles.logoMark} aria-hidden="true">
            R
            <span className={styles.logoGrowA}><span className={styles.logoGrowInner}>ichard&nbsp;</span></span>
            W
            <span className={styles.logoGrowB}><span className={styles.logoGrowInner}>ollyce</span></span>
          </span>
        </Link>

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
