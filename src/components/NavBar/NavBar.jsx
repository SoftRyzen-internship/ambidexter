'use client';
import PropTypes from 'prop-types';

import { getDictionary } from '@/utils/getDictionary';

import { useParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { LinkNavBar } from '../LinkNavBar/LinkNavBar';

export const NavBar = ({ className, handleClick }) => {
  const { locale } = useParams();
  const [navBar, setNavBar] = useState(null);

  useEffect(() => {
    getDictionary(locale).then(data => setNavBar(data.navBar));
  }, [locale]);

  return (
    <nav
      className={`${className} md:flex uppercase   items-center gap-4 md:gap-6 navBar-text color-navBar `}
    >
      {navBar &&
        navBar.map(({ label, link }) => (
          <LinkNavBar
            key={label}
            link={link}
            label={label}
            handleClick={handleClick}
          />
        ))}
    </nav>
  );
};
NavBar.propTypes = {
  className: PropTypes.string,
};
