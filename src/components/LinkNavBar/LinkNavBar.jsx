import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

export const LinkNavBar = ({ link, label, handleClick }) => {
  return (
    <Link
      key={label}
      to={`${link}`}
      className="cursor-pointer hover:text-accent focus:text-accent duration-300"
      href="/"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

LinkNavBar.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.any,
};
