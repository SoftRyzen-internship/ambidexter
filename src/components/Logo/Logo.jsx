import Link from 'next/link';
import PropTypes from 'prop-types';

export const Logo = ({ isColored }) => {
  return (
    <Link
      href="/"
      className={`${
        isColored ? 'font-medium' : 'font-bold'
      } text-middle md:text-small xl:text-large uppercase cursor-pointer`}
    >
      AMBI
      <span
        className={
          isColored
            ? 'text-accent font-bold'
            : 'text-black font-medium duration-300 hover:text-white  focus:text-white'
        }
      >
        DEXTER
      </span>
    </Link>
  );
};

Logo.propTypes = {
  isColored: PropTypes.bool.isRequired,
};
