'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import menuBtn from 'public/icons/menuIcon.svg';
import { MobileMenu } from '../MobileMenu/MobileMenu';
export const ButtonBtnMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(prev => !prev);
  };
  return (
    <>
      {openMenu && <MobileMenu handleClick={handleClick} />}
      <button type="button" className="md:hidden cursor-pointer">
        <Image
          src={menuBtn}
          width={20}
          height={20}
          alt="menu Btn"
          className=""
          onClick={handleClick}
        />
      </button>
    </>
  );
};
