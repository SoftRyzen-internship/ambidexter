import PropTypes from 'prop-types';
import { Container, LocaleSwitcher, Logo } from '@/components';
import { ButtonBtnMobile } from '@/components/ButtonBtnMobile/ButtonBtnMobile';
import { NavBar } from '@/components/NavBar/NavBar';
import { getDictionary } from '@/utils/getDictionary';

export default async function Header({ params }) {
  const localeData = await getDictionary(params.params.locale);

  return (
    <header className="py-6 px-5 fixed w-full ">
      <Container>
        <div className="flex items-center justify-between">
          <Logo isColored={true} />
          <ButtonBtnMobile data={localeData.navBar} />
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
