'use client';
import { useMediaQuery } from 'react-responsive';
//import PropTypes from 'prop-types';
import { Container, LocaleSwitcher, Logo, NavBar } from '@/components';
import { ButtonBtnMobile } from '@/components/ButtonBtnMobile/ButtonBtnMobile';

export const Header = ({ navBar, socialNetworks }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // console.log('isMobile', isMobile);

  return (
    <header className="flex items-center h-[68px] md:h-[63px] xl:h-[93px] mt-3 md:mt-9 xl:mt-16 fixed w-full  backdrop-blur-[100px] ">
      <Container>
        <div className="flex items-center justify-between md:h-[39px] xl:h-[29px]">
          <Logo isColored={true} />
          <ButtonBtnMobile navBar={navBar} socialNetworks={socialNetworks} />

          {!isMobile && <NavBar className="hidden text-[12px]" data={navBar} />}

          <LocaleSwitcher className="hidden" />
        </div>
      </Container>
    </header>
  );
};

// Header.propTypes = {
//   params: PropTypes.shape({
//     params: PropTypes.shape({
//       locale: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
