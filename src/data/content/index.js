import en from './en';
import ptBR from './pt-BR';
import es from './es';

export const DEFAULT_LOCALE = 'en';

// htmlLang feeds document.documentElement.lang; match is the navigator.language
// prefix that should trigger the suggestion modal for this locale.
export const locales = [
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en', flag: 'us', match: 'en' },
  { code: 'pt-BR', label: 'Português', short: 'PT', htmlLang: 'pt-BR', flag: 'br', match: 'pt' },
  { code: 'es', label: 'Español', short: 'ES', htmlLang: 'es', flag: 'es', match: 'es' },
];

export const contentByLocale = {
  en,
  'pt-BR': ptBR,
  es,
};

export function isLocale(code) {
  return Object.prototype.hasOwnProperty.call(contentByLocale, code);
}

export function getContent(code) {
  return contentByLocale[code] ?? contentByLocale[DEFAULT_LOCALE];
}

export function localeMeta(code) {
  return locales.find((l) => l.code === code) ?? locales[0];
}

// Maps a raw navigator.language ("pt-br", "es-AR", "en-GB") onto a locale we
// actually ship, or null when we have nothing better than the default.
export function suggestLocale(navigatorLanguage) {
  if (!navigatorLanguage) return null;
  const lower = String(navigatorLanguage).toLowerCase();
  const hit = locales.find((l) => l.code !== DEFAULT_LOCALE && lower.startsWith(l.match));
  return hit ? hit.code : null;
}
