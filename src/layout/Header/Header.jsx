import { Container, LocaleSwitcher, Logo } from '@/components';

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo isColored={true} />
        <LocaleSwitcher />
      </Container>
    </header>
  );
};
