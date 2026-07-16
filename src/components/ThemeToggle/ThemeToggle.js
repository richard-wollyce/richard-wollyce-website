'use client';

import { useEffect, useSyncExternalStore } from 'react';
import styles from './ThemeToggle.module.css';

const THEME_CHANGE_EVENT = 'themechange';

function getThemeSnapshot() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function subscribeToThemeChanges(callback) {
  const handleStorage = (event) => event.key === 'theme' && callback();

  window.addEventListener('storage', handleStorage);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
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
      title={`Switch to ${nextTheme} mode`}
    >
      <span aria-hidden="true">{nextTheme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
