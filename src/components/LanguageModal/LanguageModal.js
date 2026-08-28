'use client';

import { useEffect, useRef } from 'react';
import { getContent, locales } from '@/data/content';
import { useLocale } from '@/i18n/LocaleProvider';
import Flag from '../Flag/Flag';
import styles from './LanguageModal.module.css';

export default function LanguageModal() {
  const { suggested, setLocale, dismissSuggestion } = useLocale();
  const dialogRef = useRef(null);

  // The copy speaks the language being offered, not the one on screen: a
  // Brazilian arriving here should be addressed in Portuguese.
  const copy = suggested ? getContent(suggested).ui.language : null;

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

  if (!suggested || !copy) return null;

  return (
    <div className={styles.backdrop} onClick={dismissSuggestion}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-modal-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className={styles.title} id="language-modal-title">
          {copy.modalTitle}
        </h2>
        <p className={styles.body}>{copy.modalBody}</p>

        <div className={styles.options}>
          {locales.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`${styles.option} ${option.code === suggested ? styles.optionSuggested : ''}`}
              onClick={() => setLocale(option.code)}
            >
              <Flag code={option.flag} size={34} className={styles.flag} />
              <span className={styles.optionLabel}>{option.label}</span>
            </button>
          ))}
        </div>

        <button type="button" className={styles.dismiss} onClick={dismissSuggestion}>
          {copy.keepEnglish}
        </button>
      </div>
    </div>
  );
}
