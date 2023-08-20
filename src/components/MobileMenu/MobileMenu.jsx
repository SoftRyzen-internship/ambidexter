'use client';
import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import {
  Container,
  LocaleSwitcher,
  // Logo,
  NavBar,
  SocialNetworks,
} from '@/components';
import { useEffect, useState } from 'react';

//import CloseMobile from 'public/icons/close.svg';
//translate-0 translate-x-full max-w-full translate-x-full
export const MobileMenu = ({
  handleMenuToggle,
  navBar,
  socialNetworks,
  isModalShow,
}) => {
  let [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <Transition
      show={isShowing}
      enter="transform  duration-[800ms]"
      enterFrom="opacity-0  "
      enterTo="opacity-100 "
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100  "
      leaveTo="opacity-0 scale-95 "
    >
      <div
        className={`${
          isModalShow ? ' opacity-100' : ' opacity-0 '
        } absolute transition-all   h-[568px] md:hidden top-0 left-0 pt-3 mt-[-12px] w-full bg-white duration-700  `}
      >
        <Container>
          <header className="flex justify-between items-center  mb-6 h-[68px]">
            {/* <Logo isColored={true} />

          <button
            type="button"
            className="md:hidden cursor-pointer p-[10px] xl:pt-0"
          >
            <CloseMobile
              width={20}
              height={20}
              onClick={() => handleMenuToggle()}
            />
          </button> */}
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
    </Transition>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func,
  // navBar
  // socialNetworks:
  isModalShow: PropTypes.bool,
};
