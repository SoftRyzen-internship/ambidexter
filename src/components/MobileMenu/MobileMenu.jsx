import Image from 'next/image';
import PropTypes from 'prop-types';
import { Container, LocaleSwitcher, Logo } from '@/components';
import { NavBar } from '../NavBar/NavBar';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import closeMobile from 'public/icons/close.svg';

export const MobileMenu = ({ handleMenuToggle, data }) => {
  return (
    <div className="z-10 absolute md:hidden top-0 left-0 pt-3 min-h-screen w-full bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <Logo isColored={true} />
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
            data={data}
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
  data: PropTypes.arrayOf(PropTypes.object),
};
