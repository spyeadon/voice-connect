'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import MessagePreContainer from './components/Message-container.jsx';
import RecordContainer from './components/Record-container.jsx';

const AppContainer = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user }) =>
  <div id="app">
    <nav>{user ? <WhoAmI /> : <Login />}</nav>
    <div id="main-components">
    <MessagePreContainer />
    <RecordContainer />
    </div>
  </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
