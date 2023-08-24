import Link from 'next/link';
import PropTypes from 'prop-types';

export const Logo = ({ isColored, className, locale }) => {
  return (
    <Link
      href={`/${locale}`}
      className={`${
        isColored ? 'font-medium' : 'font-bold'
      }  z-10 placeholder:text-middle md:text-small xl:text-large uppercase cursor-pointer ${className}`}
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
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
};
