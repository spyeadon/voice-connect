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
    .then(res => {
      dispatch(emailMessage(res.data))
      console.log(res)
    })
    .catch(err => console.error(err))

export const submitMsgWithAudio = (message) =>
  dispatch =>
    axios.post('/api/mail', {message: message})
    .then(res => {
      dispatch(emailMessage(res.data))
      console.log(res)
    })
    .catch(err => console.error(err))

export const GET_RECORDING = 'GET_RECORDING';
export const getRecording = (recordRTC) => {
  return {
    type: GET_RECORDING,
    recordRTC: recordRTC
  }
}
