import {SEND_EMAIL, GET_RECORDING} from '../action-creators/message.jsx';

const initialState = {
  messageTxt: {},
  recordRTC: {}
}

const message = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case GET_RECORDING:
      newState.recordRTC = action.recordRTC;
      return newState;

    default:
      return state;
  }
}

export default message;
