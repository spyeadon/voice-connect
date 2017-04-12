'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import MessagePreContainer from './components/Message-container.jsx';

// import recordRTCScript from './mic-integration/recordRTC-Mic.js';

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
    {/*children*/}
    <MessagePreContainer />
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <Route path="/record" component={MessagePreContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
