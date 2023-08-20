import TelegramIcon from 'public/icons/telegram.svg';
import ViberIcon from 'public/icons/viber.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';

export const Contacts = () => {
  return (
    <ul>
      <li className="flex justify-start items-center gap-[12px] xl:gap-[16px] mb-[16px] md:mb-[32px] xl:mb-[24px]">
        <p className="font-medium md:text-small xl:text-large">
          Phone:
          <a
            href="tel:+380680619457"
            className="hover:text-white focus:fill-white duration-300"
            target="_blank"
          >
            &nbsp;+38 (068) 06 19 457
          </a>
        </p>
        <ul className="flex gap-[8px] xl:gap-[12px]">
          <li>
            <a
              href="https://t.me/+380680619457"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Telegram icon"
            >
              <TelegramIcon className="fill-black w-[12px] h-[12px] xl:w-[24px] xl:h-[24px] hover:fill-white focus:fill-white duration-300" />
            </a>
          </li>
          <li>
            <a
              href="viber://contact?number=%2B380680619457"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Viber icon"
            >
              <ViberIcon className="fill-black w-[12px] h-[12px] xl:w-[24px] xl:h-[24px]  hover:fill-white focus:fill-white duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=380680619457"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Whatsapp icon"
            >
              <WhatsappIcon className="fill-black w-[12px] h-[12px] xl:w-[24px] xl:h-[24px]  hover:fill-white focus:fill-white duration-300" />
            </a>
          </li>
        </ul>
      </li>
      <li>
        <p className="font-medium md:text-small xl:text-large">
          E-mail:
          <a
            href="mailto:ambidexterschool@gmail.com"
            className="hover:text-white focus:fill-white duration-300"
            target="_blank"
          >
            &nbsp;ambidexterschool@gmail.com
          </a>
        </p>
      </li>
    </ul>
  );
};
