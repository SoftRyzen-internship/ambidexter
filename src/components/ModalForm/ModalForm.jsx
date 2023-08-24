'use client';

import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import CloseIcon from 'public/icons/close.svg';
import { FeedbackForm } from '..';

export const ModalForm = ({ toggleModal, isOpen, data }) => {
  const handleClick = e => {
    if (e.target.id === 'overlay') {
      toggleModal();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={toggleModal}
      className="relative top-0 left-0 z-40 "
    >
      <div className="bg-bgModal fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center backdrop-blur-[12.5px] ">
        <Dialog.Panel className="relative">
          <div
            className="fixed inset-0 overflow-y-scroll"
            id="overlay"
            onClick={handleClick}
          >
            <div className="mx-auto relative w-[260px] md:w-[452px] xl:w-[844px] flex justify-center items-center mt-[24px] xl:my-[64px]">
              <button
                onClick={toggleModal}
                className=" w-[40px] h-[40px] flex justify-center items-center ml-auto mb-[24px] md:mb-[12px] xl:mb-[36px] absolute top-[12px] right-[12px] md:top-[24px] md:right-[24px] xl:top-[48px] xl:right-[48px] z-50"
              >
                <CloseIcon className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" />
              </button>

              <FeedbackForm toggleModal={toggleModal} data={data} />
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

ModalForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
    phoneNumber: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
    email: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
    message: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }).isRequired,
    notification: PropTypes.shape({
      error: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
    }).isRequired,
    btnSend: PropTypes.string.isRequired,
  }).isRequired,
};