'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import menuBtn from 'public/icons/menu.svg';

export const ButtonBtnMobile = ({ data }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsOpenMenu(prev => !prev);
  };
  return (
    <>
      {isOpenMenu && (
        <MobileMenu handleMenuToggle={handleMenuToggle} data={data} />
      )}
      <button type="button" className="md:hidden cursor-pointer p-[10px]">
        {/* <Menu_mobile width={20} height={20} /> */}

        <Image
          src={menuBtn}
          width={20}
          height={20}
          alt="menu Btn"
          onClick={handleMenuToggle}
        />
      </button>
    </>
  );
};
