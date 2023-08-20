'use client';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({ link, label, handleMenuToggle }) => {
  return (
    <li className=" md:h-[39px] flex items-center  cursor-pointer hover:text-accent focus:text-accent duration-300 ">
      <Link
        key={label}
        to={link}
        smooth
        spy
        href="/"
        onClick={handleMenuToggle}
        activeClass="text-secondary "
      >
        {label}
      </Link>
    </li>
  );
};

LinkNavBar.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  handleMenuToggle: PropTypes.func,
};
