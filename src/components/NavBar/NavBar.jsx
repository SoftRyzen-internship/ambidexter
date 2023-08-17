'use client';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/utils/getDictionary';
import { LinkNavBar } from '../LinkNavBar/LinkNavBar';

export const NavBar = ({ className, handleMenuToggle }) => {
  // console.log('dataNavBar', data);
  const { locale } = useParams();
  const [navBar, setNavBar] = useState(null);

  useEffect(() => {
    getDictionary(locale).then(data => setNavBar(data.navBar));
  }, [locale]);

  return (
    <nav
      className={`${className} md:flex uppercase   items-center gap-4 md:gap-6 navBar-text text-black `}
    >
      {navBar &&
        navBar.map(({ label, link }) => (
          <LinkNavBar
            key={label}
            link={link}
            label={label}
            handleMenuToggle={handleMenuToggle}
          />
        ))}
    </nav>
  );
};
NavBar.propTypes = {
  className: PropTypes.string,
  handleMenuToggle: PropTypes.func,
};
