'use client';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MobileMenu } from '@/components';
import MenuBtn from 'public/icons/menu.svg';

export const ButtonBtnMobile = ({ navBar, socialNetworks }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };
  return (
    <>
      <MobileMenu
        handleMenuToggle={handleMenuToggle}
        navBar={navBar}
        socialNetworks={socialNetworks}
        isModalShow={isOpenMenu}
      />

      <button
        type="button"
        className="md:hidden cursor-pointer p-[10px] xl:pt-0"
      >
        <MenuBtn width={20} height={20} onClick={handleMenuToggle} />
      </button>
    </>
  );
};

ButtonBtnMobile.propTypes = {
  navBar: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  socialNetworks: PropTypes.string,
};
