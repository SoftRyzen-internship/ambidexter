const metaDictionaries = {
  en: () => import('../../dictionaries/metaEn.json').then(r => r.default),
  ua: () => import('../../dictionaries/metaUk.json').then(r => r.default),
};

export const getMetaByLocale = locale => {
  return metaDictionaries[locale]();
};
