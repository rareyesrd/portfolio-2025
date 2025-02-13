import type { Locale } from '../config/i18n'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then(module => module.default),
  es: () => import('../dictionaries/es.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]() 