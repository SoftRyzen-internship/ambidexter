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
  // pt-3
  return (
    <div
      className={`${
        isModalShow
          ? 'translate-x-0 opacity-100'
          : ' opacity-0 translate-x-full '
      } absolute    h-[568px] md:hidden top-0 left-0 mt-[-12px]  w-full bg-white duration-300 pt-[76px] `}
    >
      <Container className="flex flex-col gap-9 ">
        <NavBar
          className={'flex flex-col   text-[16px]'}
          handleMenuToggle={handleMenuToggle}
          data={navBar}
        />
        <LocaleSwitcher className=" flex items-center justify-center text-[12px] " />
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
