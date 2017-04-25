import {SEND_EMAIL} from '../action-creators/message.jsx';

const initialState = {
  messageTxt: {}
}

const message = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type){
    default:
      return state;
  }
}
