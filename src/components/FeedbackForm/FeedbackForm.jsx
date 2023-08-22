'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { IncorrectForm } from '../IncorrectForm/IncorrectForm';
import { NotificationForm } from '../NotificationForm/NotificationForm';
import { sendMessageTelegram } from '@/utils/sendMessageTelegram';

export const FeedbackForm = ({ toggleModal }) => {
  const [notificationState, setNotificationState] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: localStorage.getItem('name') || '',
      phone: localStorage.getItem('phone') || '',
      email: localStorage.getItem('email') || '',
      subject: localStorage.getItem('subject') || '',
    },
  });

  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') toggleModal();
    };
    window.addEventListener('keydown', handleESC);
    return () => {
      window.removeEventListener('keydown', handleESC);
    };
  }, [toggleModal]);

  const onSubmit = data => {
    sendMessageTelegram(data)
      .then(() => {
        localStorage.clear();
        setNotificationState('Correct');
        reset();
      })
      .catch(() => {
        console.log('hi');
        setNotificationState('Incorrect');
      });
  };

  const onChange = e => {
    localStorage.setItem(e.target.name, e.target.value);
  };

  return (
    <form
      onChange={onChange}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col border border-accent rounded-[10px] bg-white w-[280px] mx-auto px-[12px] pb-[64px] pt-[56px] md:w-[452px] md:px-[24px] md:pt-[56px] xl:w-[844px] xl:px-[48px] xl:pt-[108px] xl:pb-[100px]"
    >
      <div className=" relative flex flex-col">
        <label htmlFor="name" className="formLabel">
          ПІБ <span className="text-red">*</span>
        </label>
        {errors.name && <IncorrectForm text={'Невірний ПІБ'} />}
        <input
          type="text"
          id="name"
          name="fullname"
          placeholder="Іванов Іван Іванович"
          {...register('name', {
            required: true,
            pattern: /^[а-яА-ЯіІїЇєЄґҐa-zA-Z\s'-]+$/,
            minLength: 3,
            maxLength: 100,
          })}
          className={
            errors.name
              ? 'formInput border-red placeholder:text-red'
              : 'formInput border-accent placeholder:text-black'
          }
        />
      </div>
      <div className=" relative flex flex-col">
        <label htmlFor="phone" className="formLabel">
          Номер телефону <span className="text-red">*</span>
        </label>
        {errors.phone && <IncorrectForm text={'Невірний номер'} />}
        <input
          type="all"
          id="phone"
          name="phone"
          placeholder="+38 (097) 12 34 567 0"
          {...register('phone', {
            required: true,
            pattern: /^\+\d{12}$/,
          })}
          className={
            errors.phone
              ? 'formInput border-red placeholder:text-red'
              : 'formInput border-accent placeholder:text-black'
          }
        />
      </div>
      <div className=" relative flex flex-col">
        <label htmlFor="email" className="formLabel">
          E-mail <span className="text-red">*</span>
        </label>
        {errors.email && <IncorrectForm text={'Невірний E-mail'} />}
        <input
          type="text"
          id="email"
          name="email"
          placeholder="yourmail-mail.com"
          {...register('email', {
            required: true,
            pattern: /^(?!-)[A-Za-z0-9._-]+@[-A-Za-z0-9]+\.[A-Za-z]{2,}$/,
            minLength: 6,
            maxLength: 63,
          })}
          className={
            errors.email
              ? 'formInput border-red placeholder:text-red'
              : 'formInput border-accent placeholder:text-black'
          }
        />
      </div>
      <label htmlFor="subject" className="formLabel">
        Повідомлення
      </label>
      <textarea
        {...register('subject', {
          required: false,
        })}
        id="subject"
        name="subject"
        placeholder="Ваше повідомлення..."
        className="mb-[24px] h-[146px] border rounded-[10px] border-accent px-[12px] py-[8px] leading-[1.15] placeholder:text-black placeholder:opacity-50 placeholder:text-base placeholder:font-normal  xl:px-[24px] xl:py-[16px] xl:placeholder:text-large xl:h-[287px]"
      ></textarea>
      <button
        type="submit"
        className="bg-accent rounded-[10px] py-[8px] text-middle font-medium max-h-[35px] xl:max-h-[76px] xl:py-[16px] xl:text-large36 flex justify-center items-center hover:bg-white hover:border-[2px] border-accent duration-300 cursor-pointer"
      >
        Відправити
      </button>

      <div className="relative flex justify-center">
        {notificationState && (
          <NotificationForm notificationState={notificationState} />
        )}
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

//----------ЩО ПОТРІБНО ПРОПИСАТИ В КОМПОМЕНТІ, ЯКИЙ БУДЕ ВИКЛИКАТИ ЦЮ ФОРМУ--------------:
//
// import { Transition } from '@headlessui/react';
// const [isOpen, setIsOpen] = useState(false);
// const toggleModal = () => {
//  setIsOpen(!isOpen);
// };
// <Transition
// show={isOpen}
// enter="transition-opacity duration-300"
// enterFrom="opacity-0"
// enterTo="opacity-100"
// leave="transition-opacity duration-300"
// leaveFrom="opacity-100"
// leaveTo="opacity-0"
// >
// <FeedbackForm toggleModal={toggleModal} />
// </Transition>
