import axios from 'axios';

export const sendMessageTelegram = text => {
  const token = '6300072134:AAG2uT731m-XLcCZNaxfvOpXIDWY6bB8F0U';
  const chatId = '-946722956';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}`;
  axios.post(url, {
    parse_mode: 'html',
    text,
  });
};
