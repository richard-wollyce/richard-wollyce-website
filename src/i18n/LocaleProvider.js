'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react';
import { useRouter } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  getContent,
  isLocale,
  localeMeta,
  suggestLocale,
} from '@/data/content';

const STORAGE_KEY = 'locale';

// Module scope on purpose. A visitor who lands on "/" with a stored
// non-English preference is sent to that locale's route once per document
// load; this flag survives the provider remounting on client-side navigation
// and only resets on a full page load, so the back button can bring them to
// "/" and stay there instead of bouncing to "/es" again.
let redirectedFromRoot = false;

// Also module scope. A localized URL is written to storage once per document
// load, when the visitor arrived on it (a shared link, a bookmark). Reaching it
// again through back or forward navigation is not a new choice and must not
// overwrite one the visitor just made with the switcher.
let urlLocaleRecorded = false;

const LocaleContext = createContext(null);

function readStored() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode or blocked storage: behave as if nothing was stored.
    return null;
  }
}

function writeStored(code) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // A viewer who blocks storage still gets the switch, just not the memory.
  }
}

// The language the browser is asking for, when it is one we ship and nothing
// has been stored yet. Read through useSyncExternalStore so the server and
// the hydration pass both see null (no modal in the HTML) and the first
// client render after hydration sees the real answer.
function subscribeToStorage(callback) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getGuessSnapshot() {
  const stored = readStored();
  if (stored && isLocale(stored)) return null;
  return suggestLocale(navigator.language);
}

function getServerGuessSnapshot() {
  return null;
}

// initialLocale is the locale of the route that rendered this page, decided
// on the server from the URL. State starts there, so the first client render
// matches the prerendered HTML and there is nothing to flash.
export function LocaleProvider({ initialLocale, children }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(initialLocale);
  const [dismissed, setDismissed] = useState(false);

  // Back and forward navigation change the route without going through
  // setLocale. When the route's locale changes, follow it during render.
  const [seenInitial, setSeenInitial] = useState(initialLocale);
  if (seenInitial !== initialLocale) {
    setSeenInitial(initialLocale);
    setLocaleState(initialLocale);
  }

  const guess = useSyncExternalStore(subscribeToStorage, getGuessSnapshot, getServerGuessSnapshot);

  // The modal shows only on "/", only when nothing is stored, and only until
  // the visitor answers it. `dismissed` covers the case where storage is
  // blocked and the answer could not be written down.
  const suggested = initialLocale === DEFAULT_LOCALE && !dismissed ? guess : null;

  useEffect(() => {
    if (initialLocale !== DEFAULT_LOCALE) {
      // The URL carries a locale, and the URL wins on arrival: remember it.
      if (!urlLocaleRecorded) {
        urlLocaleRecorded = true;
        writeStored(initialLocale);
      }
      return;
    }

    // On "/" a stored preference for another locale moves the visitor to that
    // locale's route. Crawlers have no localStorage, so for them "/" stays
    // English and the redirect never fires.
    const stored = readStored();
    if (stored && isLocale(stored) && stored !== DEFAULT_LOCALE && !redirectedFromRoot) {
      redirectedFromRoot = true;
      router.replace(localeMeta(stored).path, { scroll: false });
    }
  }, [initialLocale, router]);

  useEffect(() => {
    document.documentElement.lang = localeMeta(locale).htmlLang;
  }, [locale]);

  const setLocale = useCallback(
    (next) => {
      if (!isLocale(next)) return;
      setLocaleState(next);
      setDismissed(true);
      writeStored(next);
      // An explicit choice settles the question for this document load: if the
      // visitor later presses Back to "/", it stays on "/".
      redirectedFromRoot = true;
      urlLocaleRecorded = true;
      if (next !== locale) {
        router.push(localeMeta(next).path, { scroll: false });
      }
    },
    [locale, router],
  );

  const dismissSuggestion = useCallback(() => {
    setDismissed(true);
    writeStored(DEFAULT_LOCALE);
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
