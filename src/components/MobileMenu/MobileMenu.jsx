import PropTypes from 'prop-types';
import {
  Container,
  LocaleSwitcher,
  Logo,
  NavBar,
  SocialNetworks,
} from '@/components';

import CloseMobile from 'public/icons/close.svg';
//import Header from '@/layout/Header/Header';

export const MobileMenu = ({ handleMenuToggle, data, isModalShow }) => {
  const { navBar, socialNetworks } = data;
  return (
    <div
      className={`${
        isModalShow ? 'translate-0 opacity-100' : 'translate-x-full opacity-0'
      } absolute transition-all    h-[568px] md:hidden top-0 left-0 pt-3 mt-[-12px] w-full bg-white   max-w-full duration-700  `}
    >
      <Container>
        <header className="flex justify-between items-center  mb-6 h-[68px]">
          <Logo isColored={true} />
          <button
            type="button"
            className="md:hidden cursor-pointer p-[10px] xl:pt-0"
          >
            <CloseMobile
              width={20}
              height={20}
              onClick={() => handleMenuToggle()}
            />
          </button>
        </header>
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
  handleMenuToggle: PropTypes.func,
  data: PropTypes.object,
  isModalShow: PropTypes.bool,
};
