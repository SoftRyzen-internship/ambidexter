import { Container, LocaleSwitcher, Logo } from '@/components';
import { ItemCourseCard } from '@/components/ItemCourseCard/ItemCourseCard';

const data = {
  title:
    'Мистецтво аргументації. Як переконувати. Відстоювати свою точку зору.',
  list: [
    'Техніки правильного формулювання та подання аргументу',
    'Структура переконливої промови.',
    'Розвинути здатність до критичного мислення',
    'Вміння вести дискусію та правильно використовувати аргументи',
    'Що (не) треба казати клієнтам і як гасити конфлікти: алгоритм',
    'Розробка стратегій мирного вирішення конфліктів',
    'Залізна логіка: як здобувати переконливу перемогу у суперечках',
    'Отримайте конкретний досвід застосування на практиці запропонованих способів переконання',
  ],
};
export const Header = () => {
  return (
    <header>
      <Container>
        <Logo isColored={true} />
        <LocaleSwitcher />
        <ItemCourseCard data={data} />
      </Container>
    </header>
  );
};
