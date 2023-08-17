import { Container, LocaleSwitcher } from '@/components';
import { ItemCourse } from '@/components/ItemCourse/ItemCourse';

const item = {
  title: 'Вміння говорити',
  list: [
    'Ораторська майстерність: зоровий контакт, жестикуляція, інтонації, темпоритм мовлення',
    'Грамотне висловлювання думок та підвищення комунікаційних навичок',
    'Подолання страху публічних виступів та спілкування з людьми',
    'Використання голосу та промови для виділення інформації',
    'Розвиток навичок активного слухання та вміння взаємодіяти з аудиторією під час діалогу чи дискусії підвищує якість комунікації.',
  ],
};

export const Header = () => {
  return (
    <header>
      <Container>
        <LocaleSwitcher />
        <ItemCourse title={item.title} list={item.list} />
      </Container>
    </header>
  );
};
