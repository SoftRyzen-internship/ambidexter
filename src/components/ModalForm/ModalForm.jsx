import PropTypes from 'prop-types';

import CloseIcon from 'public/icons/close.svg';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';

export const ModalForm = ({ toggleModal }) => {
  const handleOverlay = e => {
    if (e.target.id === 'Overlay') {
      toggleModal();
    }
  };
  return (
    <div
      className="bg-bgColor pt-[24px] h-full w-full z-10 "
      id="Overlay"
      onClick={handleOverlay}
    >
      <div className="w-[280px] md:w-[452px] xl:w-[844px] relative mx-auto">
        <button
          onClick={toggleModal}
          className="w-[40px] h-[40px] flex justify-center items-center ml-auto mb-[24px] md:mb-[12px] xl:mb-[36px] absolute top-[12px] right-[12px] md:top-[24px] md:right-[24px] xl:top-[48px] xl:right-[48px]"
        >
          <CloseIcon className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] " />
        </button>
        <FeedbackForm toggleModal={toggleModal} />
      </div>
    </div>
  );
};

ModalForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
