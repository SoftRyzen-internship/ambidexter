import { Container, LocaleSwitcher } from '@/components';
import { ButtonBtnMobile } from '@/components/ButtonBtnMobile/ButtonBtnMobile';
import { NavBar } from '@/components/NavBar/NavBar';

export const Header = () => {
  return (
    <header className="py-6 px-5">
      <Container>
        <div className="flex items-center justify-between">
          <div>LOGO</div>
          <ButtonBtnMobile />
          <NavBar className="hidden text-[12px]" />
          <LocaleSwitcher className="hidden" />
        </div>
      </Container>
    </header>
  );
};
