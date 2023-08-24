'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({ link, label, handleMenuToggle, isFooter }) => {
  return (
    <li
      className={`md:h-[39px] flex items-center cursor-pointer duration-300 ${
        isFooter
          ? 'hover:text-white focus:text-white'
          : 'hover:text-accent focus:text-accent'
      }`}
    >
      <Link
        key={label}
        to={link}
        smooth="easeInOutQuart"
        spy={true}
        href="/"
        onClick={handleMenuToggle}
        activeClass={isFooter ? '' : 'text-secondary'}
        offset={-100}
      >
        {label}
      </Link>
    </li>
  );
};

LinkNavBar.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleMenuToggle: PropTypes.func,
  isFooter: PropTypes.bool.isRequired,
};
