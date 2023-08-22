'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import {
  Container,
  LocaleSwitcher,
  Logo,
  MobileMenu,
  NavBar,
} from '@/components';
import CloseMobile from 'public/icons/close.svg';
import MenuBtn from 'public/icons/menu.svg';

export const Header = ({ navBar, socialNetworks }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    isOpenMenu
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [isOpenMenu]);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('keydown', closeESC);
    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <header className="z-30 flex items-center h-[68px] md:h-[63px] xl:h-[93px]  fixed w-full  backdrop-blur-[100px] ">
      <Container>
        <div className="flex items-center justify-between md:h-[39px] xl:h-[29px]">
          <Logo isColored={true} className={isOpenMenu && 'z-10'} />
          {!isMobile && (
            <NavBar className=" hidden text-[12px]" data={navBar} />
          )}
          {isMobile && (
            <button
              type="button"
              className={`${
                isOpenMenu && 'z-10'
              } cursor-pointer p-[10px] xl:pt-0`}
              onClick={handleMenuToggle}
            >
              {!isOpenMenu ? (
                <MenuBtn width={20} height={20} className="duration-300" />
              ) : (
                <CloseMobile width={20} height={20} className="duration-300" />
              )}
            </button>
          )}
          {!isMobile && <LocaleSwitcher className="hidden" />}
        </div>

        <MobileMenu
          handleMenuToggle={handleMenuToggle}
          navBar={navBar}
          socialNetworks={socialNetworks}
          isModalShow={isOpenMenu}
        />
      </Container>
    </header>
  );
};

Header.propTypes = {
  navBar: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
  socialNetworks: PropTypes.string.isRequired,
};
