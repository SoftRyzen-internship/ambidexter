//import PropTypes from 'prop-types';
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
        isModalShow ? ' opacity-100' : ' opacity-0 '
      } absolute transition-all   h-[568px] md:hidden top-0 left-0 pt-3 mt-[-12px] w-full bg-white duration-700  `}
    >
      <Container>
        <header className="flex justify-between items-center  mb-6 h-[68px]"></header>
        <div className="flex flex-col gap-9">
          <NavBar
            className={'flex flex-col   text-[16px]'}
            handleMenuToggle={handleMenuToggle}
            data={navBar}
          />
          <LocaleSwitcher className=" flex items-center justify-center text-[12px] " />
          <SocialNetworks socialNetworks={socialNetworks} />
        </div>
      </Container>
    </div>
  );
};

MobileMenu.propTypes = {
  //  handleMenuToggle: PropTypes.func,
  // navBar
  // socialNetworks:
  // isModalShow: PropTypes.bool,
};
