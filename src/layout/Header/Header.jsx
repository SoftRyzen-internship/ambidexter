'use client';
import { Container, FeedbackForm, LocaleSwitcher, Logo } from '@/components';
import { ModalForm } from '@/components/ModalForm/ModalForm';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <header>
      <Container>
        {isOpen ? (
          <ModalForm toggleModal={toggleModal} />
        ) : (
          <>
            <Logo isColored={true} />
            <LocaleSwitcher />
            <button onClick={toggleModal}>Open</button>
          </>
        )}
      </Container>
    </header>
  );
};
