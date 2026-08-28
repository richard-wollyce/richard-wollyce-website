'use client';

import { useEffect, useRef, useState } from 'react';
import { locales } from '@/data/content';
import { useLocale } from '@/i18n/LocaleProvider';
import Flag from '../Flag/Flag';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const active = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
        aria-label={t.language.switcherAria}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag code={active.flag} size={20} className={styles.flag} />
        <span className={styles.short}>{active.short}</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`} role="listbox">
        {locales.map((option) => {
          const isActive = option.code === locale;
          return (
            <li key={option.code}>
              <button
                type="button"
                role="option"
                aria-selected={isActive}
                className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
                onClick={() => {
                  setLocale(option.code);
                  setOpen(false);
                }}
              >
                <Flag code={option.flag} size={20} className={styles.flag} />
                <span>{option.label}</span>
                {isActive && (
                  <svg
                    className={styles.check}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
