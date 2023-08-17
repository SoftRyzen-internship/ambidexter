'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '../../../i18n';
import PropTypes from 'prop-types';

export const LocaleSwitcher = ({ className }) => {
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
    <ul
      className={`${className} uppercase text-[12px]   md:flex xl:gap-3  navBar-text  `}
    >
      {locales.map(locale => (
        <li key={locale}>
          <Link
            href={redirectedPathName(locale)}
            className={
              locale === getCurrentLocale()
                ? ' font-bold text-activ_nav p-3 xl:p-0  hover:text-accent focus:text-accent '
                : '  font-normal  p-3 xl:p-0 hover:text-accent focus:text-accent'
            }
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

LocaleSwitcher.propTypes = {
  className: PropTypes.string,
};
