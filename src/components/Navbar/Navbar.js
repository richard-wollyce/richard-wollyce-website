'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const overlay = overlayRef.current;
    const header = headerRef.current;
    const menuButton = menuButtonRef.current;
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const focusable = [...(header?.querySelectorAll('a[href], button:not([disabled])') ?? [])]
      .filter((element) => element.offsetParent !== null && element.tabIndex >= 0);
    const overlayLinks = overlay?.querySelectorAll('a[href]') ?? [];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    main?.setAttribute('inert', '');
    footer?.setAttribute('inert', '');
    const focusFrame = requestAnimationFrame(() => overlayLinks[0]?.focus());

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      document.removeEventListener('keydown', handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <a href="#hero" className={styles.logo} aria-label="Richard Wollyce — home">
        RW
      </a>

      <nav className={styles.desktopNav} aria-label="Primary navigation">
        <span className={styles.railLine} aria-hidden="true" />
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <span className={styles.railLine} aria-hidden="true" />
      </nav>

      <div className={styles.desktopTheme}>
        <ThemeToggle />
      </div>

      <div className={styles.mobileActions}>
        <ThemeToggle compact />
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        ref={overlayRef}
        id="mobile-navigation"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ol className={styles.mobileLinks}>
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <span aria-hidden="true">0{index + 1}</span>
                <a href={link.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
