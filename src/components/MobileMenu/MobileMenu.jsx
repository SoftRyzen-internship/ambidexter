import PropTypes from 'prop-types';
import {
  Container,
  LocaleSwitcher,
  NavBar,
  SocialNetworks,
} from '@/components';

export const MobileMenu = ({
  handleMenuToggle,
  navBar,
  socialNetworks,
  isModalShow,
}) => {
  return (
    <div
      className={`${
        isModalShow
          ? 'translate-x-0 opacity-100'
          : ' opacity-0 translate-x-full '
      } absolute block  md:hidden top-0 left-0   w-full bg-white duration-300 pt-[76px]  min-h-screen  `}
    >
      <Container>
        <NavBar
          className={'flex flex-col text-[16px] mt-6 '}
          handleMenuToggle={handleMenuToggle}
          data={navBar}
        />
        <LocaleSwitcher className=" flex items-center justify-center text-[12px] mt-9 mb-9 " />
        <SocialNetworks socialNetworks={socialNetworks} />
      </Container>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func,
  navBar: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
  socialNetworks: PropTypes.string.isRequired,
  isModalShow: PropTypes.bool,
};
