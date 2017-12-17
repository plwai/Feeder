// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import feedReducer from '../shared/reducer/feed'
import userReducer from '../shared/reducer/user'

const Immutable = require('immutable')

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.feed) {
    // flow-disable-next-line
    preloadedState.feed = feedReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.feed))
  }

  if (plainPartialState && plainPartialState.user) {
    // flow-disable-next-line
    preloadedState.user = userReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.user))
  }

  return createStore(combineReducers(
    {
      feed: feedReducer,
      user: userReducer,
    }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
