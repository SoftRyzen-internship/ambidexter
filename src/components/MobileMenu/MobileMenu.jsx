import Image from 'next/image';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Container, LocaleSwitcher, Logo } from '@/components';
import { NavBar } from '../NavBar/NavBar';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import closeMobile from 'public/icons/close.svg';
//min-h-screen
export const MobileMenu = ({ handleMenuToggle, data }) => {
  const { navBar, socialNetworks } = data;
  return (
    <motion.div
      initial={{
        x: -800,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="absolute z-10 h-[568px] md:hidden top-0 left-0 pt-3 mt-[-12px] w-full bg-white  "
    >
      <Container>
        <header className="flex justify-between items-center  mb-6">
          <Logo isColored={true} />
          <button
            type="button"
            className="md:hidden cursor-pointer p-[10px] xl:pt-0"
          >
            <Image
              src={closeMobile}
              width={20}
              height={20}
              alt="close mobile menu"
              className=""
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
    </motion.div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func,
  data: PropTypes.object,
};
