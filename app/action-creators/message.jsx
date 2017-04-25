import axios from 'axios';

export const SEND_EMAIL = 'SEND_EMAIL';
export const emailMessage = (message) => {
  return {
    type: SEND_EMAIL,
    message: message
  }
}

export const submitMessage = (message) =>
  dispatch =>
    axios.post('/api/mail/test', {message: message})
    .then(res => console.log(res))
    .catch(err => console.error(err))
