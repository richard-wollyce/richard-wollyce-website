'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LOCALE,
  getContent,
  isLocale,
  localeMeta,
  suggestLocale,
} from '@/data/content';

const STORAGE_KEY = 'locale';

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  // Always start at the default so the client's first render matches the
  // prerendered HTML. The stored choice is applied in the effect below.
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Private mode or blocked storage: fall through to the language guess.
    }

    if (stored && isLocale(stored)) {
      setLocaleState(stored);
      return;
    }

    // No stored choice. Only interrupt when the browser is asking for a
    // language we actually ship and it is not the one already on screen.
    const guess = suggestLocale(navigator.language);
    if (guess) setSuggested(guess);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeMeta(locale).htmlLang;
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!isLocale(next)) return;
    setLocaleState(next);
    setSuggested(null);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // A viewer who blocks storage still gets the switch, just not the memory.
    }
  }, []);

  const dismissSuggestion = useCallback(() => {
    setSuggested(null);
    try {
      window.localStorage.setItem(STORAGE_KEY, DEFAULT_LOCALE);
    } catch {
      // Same as above: the dismissal simply will not persist.
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      suggested,
      dismissSuggestion,
      c: getContent(locale),
      t: getContent(locale).ui,
    }),
    [locale, setLocale, suggested, dismissSuggestion],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside a LocaleProvider');
  }
  return context;
}
