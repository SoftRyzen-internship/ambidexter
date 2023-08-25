'use client';

import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import {
  Container,
  LocaleSwitcher,
  Logo,
  MobileMenu,
  NavBar,
  ButtonMenuToggle,
} from '@/components';

export const Header = ({ navBar, socialNetworks, socialMedia, locale }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 767 });

  useLayoutEffect(() => {
    if (scrollHeight === null) {
      setScrollHeight(window.scrollY);
    }
    setIsHydrated(true);
  }, [scrollHeight]);

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

  const listenCallback = useCallback(() => {
    console.log(window.scrollY);
    setScrollHeight(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', listenCallback);

    return () => {
      document.removeEventListener('scroll', listenCallback);
    };
  }, [listenCallback, scrollHeight, setScrollHeight]);

  const handleMenuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <>
      {isHydrated && (
        <header
          className={`z-30 flex items-center h-[68px] md:h-[63px] xl:h-[93px]  fixed w-full  ${
            scrollHeight > 0 && 'backdrop-blur-[100px] bg-headerBg'
          }`}
        >
          <Container className="flex items-center justify-between md:h-[39px] xl:h-[29px]">
            <Logo isColored={true} locale={locale} />

            {!isMobile && (
              <NavBar data={navBar} className="hidden md:block text-[12px]" />
            )}
            {!isMobile && <LocaleSwitcher className="hidden md:block " />}

            {isMobile && (
              <ButtonMenuToggle
                isOpenMenu={isOpenMenu}
                handleMenuToggle={handleMenuToggle}
              />
            )}

            {isMobile && (
              <MobileMenu
                handleMenuToggle={handleMenuToggle}
                navBar={navBar}
                socialNetworks={socialNetworks}
                isModalShow={isOpenMenu}
                socialMedia={socialMedia}
              />
            )}
          </Container>
        </header>
      )}
    </>
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
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ),
  locale: PropTypes.string.isRequired,
};
