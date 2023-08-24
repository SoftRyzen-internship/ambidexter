import PropTypes from 'prop-types';

import { Container, Logo, Contacts } from '@/components';

export const Footer = ({ contacts }) => {
  return (
    <footer className="py-10 bg-accent">
      <Container className="flex flex-col gap-4">
        <Logo isColored={false} />
        <Contacts data={contacts} />
        <p className="font-normal text-center mt-2">
          Created by{' '}
          <a
            className="font-semibold duration-300 hover:text-white focus:text-white cursor-pointer"
            href="https://softryzen.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            SoftRyzen
          </a>
        </p>
      </Container>
    </footer>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
