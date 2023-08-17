import { Container, LocaleSwitcher } from '@/components';
import { ButtonBtnMobile } from '@/components/ButtonBtnMobile/ButtonBtnMobile';
import { NavBar } from '@/components/NavBar/NavBar';
import { getDictionary } from '@/utils/getDictionary';

export default async function Header({ locale }) {
  // const { locale } = localeParams.params;
  const localeData = await getDictionary(locale.params.locale);
  // console.log('localeData: ', localeData.navBar);
  return (
    <header className="py-6 px-5">
      <Container>
        <div className="flex items-center justify-between">
          <div>LOGO</div>
          <ButtonBtnMobile />
          <NavBar className="hidden text-[12px]" data={localeData.navBar} />
          <LocaleSwitcher className="hidden" />
        </div>
      </Container>
    </header>
  );
}
