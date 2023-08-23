'use client';

import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { ModalForm } from '..';

export const ApplyButton = ({ data, isFree, formData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`${
          isFree
            ? 'h-[35px] md:w-[211px] md:h-[53px] xl:w-[305px] xl:h-[92px] xl:text-large36'
            : 'h-[43px] md:h-[61px]'
        } w-full flex items-center justify-center bg-accent border-2 border-accent rounded-10 text-middle md:text-large font-medium cursor-pointer duration-300 hover:bg-white focus:bg-white`}
        type="button"
        onClick={() => {
          toggleModal();
        }}
      >
        {data}
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ModalForm toggleModal={toggleModal} isOpen={isOpen} data={formData} />
      </Transition>
    </>
  );
};

ApplyButton.propTypes = {
  isFree: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
    phoneNumber: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
    email: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
    message: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
    notification: PropTypes.shape({
      error: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
    }),
    btnSend: PropTypes.string.isRequired,
  }),
};
