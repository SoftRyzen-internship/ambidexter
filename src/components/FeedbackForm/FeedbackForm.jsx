'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { IncorrectForm } from '../IncorrectForm/IncorrectForm';
import { NotificationForm } from '../NotificationForm/NotificationForm';
import { sendMessageTelegram } from '@/utils/sendMessageTelegram';

export const FeedbackForm = ({ toggleModal, data }) => {
  const [notificationState, setNotificationState] = useState(null);
  const { name, phoneNumber, email, message, notification, btnSend } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: localStorage?.getItem('name') || '',
      phone: localStorage?.getItem('phone') || '',
      email: localStorage?.getItem('email') || '',
      subject: localStorage?.getItem('subject') || '',
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
      className="flex flex-col border border-accent rounded-10 bg-white w-[280px] mx-auto px-[12px] pb-[64px] pt-[56px] md:w-[452px] md:px-[24px] md:pt-[56px] xl:w-[844px] xl:px-[48px] xl:pt-[108px] xl:pb-[100px]"
    >
      <label className="formLabel relative flex flex-col">
        <p className="mb-[8px]">
          {name.label} <span className="text-red">*</span>
        </p>
        <input
          type="text"
          id="name"
          name="fullname"
          placeholder={name.placeholder}
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
        {errors.name && <IncorrectForm text={name.errors} />}
      </label>

      <label className="formLabel relative flex flex-col">
        <p className="mb-[8px]">
          {phoneNumber.label} <span className="text-red">*</span>
        </p>
        <input
          type="all"
          id="phone"
          name="phone"
          placeholder={phoneNumber.placeholder}
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
        {errors.phone && <IncorrectForm text={phoneNumber.errors} />}
      </label>

      <label className="formLabel relative flex flex-col">
        <p className="mb-[8px]">
          {email.label} <span className="text-red">*</span>
        </p>
        <input
          type="text"
          id="email"
          name="email"
          placeholder={email.placeholder}
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
        {errors.email && <IncorrectForm text={email.errors} />}
      </label>

      <label htmlFor="subject" className="formLabel">
        {message.label}
      </label>
      <textarea
        {...register('subject', {
          required: false,
        })}
        id="subject"
        name="subject"
        placeholder={message.placeholder}
        className="mb-[24px] h-[146px] border rounded-10 border-accent px-[12px] py-[8px] leading-[1.15] placeholder:text-black placeholder:opacity-50 placeholder:text-base placeholder:font-normal  xl:px-[24px] xl:py-[16px] xl:placeholder:text-large xl:h-[287px]"
      ></textarea>
      <button
        type="submit"
        className="bg-accent rounded-10 py-[8px] text-middle font-medium max-h-[35px] xl:max-h-[76px] xl:py-[16px] xl:text-large36 flex justify-center items-center hover:bg-white hover:border-[2px] border-accent duration-300 cursor-pointer"
      >
        {btnSend}
      </button>

      <div className="relative flex justify-center">
        {notificationState && (
          <NotificationForm
            notificationState={notificationState}
            text={notification}
          />
        )}
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
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
