import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  message: require('./message.jsx').default
})

export default rootReducer
