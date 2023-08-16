const dictionaries = {
  en: () => import('../../dictionaries/en.json').then(r => r.default),
  uk: () => import('../../dictionaries/uk.json').then(r => r.default),
};

export const getDictionary = locale => {
  return dictionaries[locale]();
};
