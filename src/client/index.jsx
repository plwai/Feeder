// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'

import App from '../shared/app'
import feedReducer from '../shared/reducer/feed'
import userReducer from '../shared/reducer/user'
import { isProd } from '../shared/utils'

const Immutable = require('immutable')

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

const store = createStore(combineReducers(
  {
    feed: feedReducer,
    user: userReducer,
  }),
  {
    feed: Immutable.fromJS(preloadedState.feed),
    user: Immutable.fromJS(preloadedState.user),
  },
  composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootEl = document.getElementById('main')

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
