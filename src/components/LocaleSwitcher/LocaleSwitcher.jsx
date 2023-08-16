'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '../../../i18n';

export const LocaleSwitcher = () => {
  const locales = i18n.locales;
  const pathName = usePathname();

  const getCurrentLocale = () => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    return segments[1];
  };

  const redirectedPathName = locale => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul>
      {locales.map(locale => (
        <li key={locale}>
          <Link
            href={redirectedPathName(locale)}
            className={
              locale === getCurrentLocale()
                ? 'uppercase font-bold'
                : 'uppercase font-thin'
            }
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};
