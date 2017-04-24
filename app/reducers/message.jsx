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
