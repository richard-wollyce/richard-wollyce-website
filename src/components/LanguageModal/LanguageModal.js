'use client';

import { useEffect, useRef } from 'react';
import { getContent, locales } from '@/data/content';
import { useLocale } from '@/i18n/LocaleProvider';
import Flag from '../Flag/Flag';
import styles from './LanguageModal.module.css';

export default function LanguageModal() {
  const { suggested, setLocale, dismissSuggestion } = useLocale();
  const dialogRef = useRef(null);

  // No visible copy: three flags say which languages exist and what each one is.
  // The labels below are for screen readers only, which have no flag to look at.
  const dialogLabel = suggested ? getContent(suggested).ui.language.switcherAria : null;

  useEffect(() => {
    if (!suggested) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') dismissSuggestion();
    };
    document.addEventListener('keydown', handleKeyDown);

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previous;
    };
  }, [suggested, dismissSuggestion]);

  if (!suggested) return null;

  return (
    <div className={styles.backdrop} onClick={dismissSuggestion}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={dialogLabel}
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        {locales.map((option) => (
          <button
            key={option.code}
            type="button"
            className={`${styles.option} ${option.code === suggested ? styles.optionSuggested : ''}`}
            onClick={() => setLocale(option.code)}
            aria-label={option.label}
            title={option.label}
          >
            <Flag code={option.flag} size={72} className={styles.flag} />
          </button>
        ))}
      </div>
    </div>
  );
}
