// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import feedReducer from '../shared/reducer/feed'

const Immutable = require('immutable')

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
  }

  if (plainPartialState && plainPartialState.feed) {
    // flow-disable-next-line
    preloadedState.feed = feedReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.feed))
  }

  return createStore(combineReducers(
    {
      hello: helloReducer,
      feed: feedReducer,
    }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
