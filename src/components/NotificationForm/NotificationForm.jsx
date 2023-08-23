import CorrectIcon from 'public/icons/correct.svg';
import IncorrectIcon from 'public/icons/incorrect-notification.svg';

export const NotificationForm = ({ notificationState }) => {
  const notificationCheck = notificationState === 'Correct';

  return (
    <div className="flex gap-[8px] justify-center items-center absolute top-[16px] xl:top-[24px] ">
      {notificationCheck ? (
        <CorrectIcon className="notificationIcon" />
      ) : (
        <IncorrectIcon className="notificationIcon" />
      )}
      <p
        className={
          notificationCheck
            ? 'text-accent notificationMessage'
            : 'text-red notificationMessage'
        }
      >
        {notificationCheck
          ? 'Повідомлення успішно відправлено!'
          : 'Виникла помилка при відправленні!'}
      </p>
    </div>
  );
};
