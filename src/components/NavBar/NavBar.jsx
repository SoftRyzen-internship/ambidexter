import PropTypes from 'prop-types';
import { LinkNavBar } from '../LinkNavBar/LinkNavBar';

export const NavBar = ({ className, data, handleMenuToggle }) => {
  return (
    <nav
      className={`${className} md:flex uppercase md:py-3  items-center gap-4 md:gap-6 font-medium leading-normal xl:text-[24px] text-black `}
    >
      {data.map(({ label, link }) => (
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
  data: PropTypes.arrayOf(PropTypes.object),
};
