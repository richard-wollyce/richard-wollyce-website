'use client';

import { useEffect, useSyncExternalStore } from 'react';
import styles from './ThemeToggle.module.css';

const THEME_CHANGE_EVENT = 'themechange';
const DARK_MODE_QUERY = '(prefers-color-scheme: dark)';

function getThemeSnapshot() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia(DARK_MODE_QUERY).matches ? 'dark' : 'light';
}

function subscribeToThemeChanges(callback) {
  const mediaQuery = window.matchMedia(DARK_MODE_QUERY);
  const handleStorage = (event) => event.key === 'theme' && callback();

  window.addEventListener('storage', handleStorage);
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  mediaQuery.addEventListener('change', callback);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
    mediaQuery.removeEventListener('change', callback);
  };
}

export default function ThemeToggle({ compact = false }) {
  const theme = useSyncExternalStore(subscribeToThemeChanges, getThemeSnapshot, () => 'light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <button
      type="button"
      className={`${styles.toggle} ${compact ? styles.compact : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
    >
      <span aria-hidden="true">{nextTheme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
