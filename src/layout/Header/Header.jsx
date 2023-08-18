import PropTypes from 'prop-types';
import { Container, LocaleSwitcher, Logo } from '@/components';
import { ButtonBtnMobile } from '@/components/ButtonBtnMobile/ButtonBtnMobile';
import { NavBar } from '@/components/NavBar/NavBar';
import { getDictionary } from '@/utils/getDictionary';

export default async function Header({ params }) {
  const localeData = await getDictionary(params.params.locale);

  return (
    <header className=" mt-3 md:mt-9 xl:mt-16 fixed w-full ">
      <Container>
        <div className="flex items-center justify-between md:h-[39px] xl:h-[29px]">
          <Logo isColored={true} />
          <ButtonBtnMobile
            data={{
              navBar: localeData.navBar,
              socialNetworks: localeData.socialNetworks,
            }}
          />
          <NavBar className="hidden text-[12px]" data={localeData.navBar} />
          <LocaleSwitcher className="hidden" />
        </div>
      </Container>
    </header>
  );
}

Header.propTypes = {
  params: PropTypes.shape({
    params: PropTypes.shape({
      locale: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
