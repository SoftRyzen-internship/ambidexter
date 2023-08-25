import axios from 'axios';

export const sendEmail = formData =>
  fetch('/api/form', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
