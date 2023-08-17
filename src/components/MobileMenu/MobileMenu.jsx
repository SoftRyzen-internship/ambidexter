import Image from 'next/image';
import { Container, LocaleSwitcher } from '@/components';
import PropTypes from 'prop-types';
import { NavBar } from '../NavBar/NavBar';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import closeMobile from 'public/icons/close.svg';

export const MobileMenu = ({ handleMenuToggle }) => {
  return (
    <div className="absolute md:hidden top-0 left-0 pt-3 min-h-screen w-full bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div>LOGO</div>
          <button type="button" className="md:hidden cursor-pointer">
            <Image
              src={closeMobile}
              width={20}
              height={20}
              alt="close mobile menu"
              className=""
              onClick={() => handleMenuToggle()}
            />
          </button>
        </div>
        <div className="flex flex-col gap-9">
          <NavBar
            className={'flex flex-col gap-[25px] mt-[25px] text-[16px]'}
            handleMenuToggle={handleMenuToggle}
          />
          <LocaleSwitcher className=" flex items-center justify-center text-[12px] " />
          <SocialNetworks />
        </div>
      </Container>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func,
};
