// @flow

import type { fromJS as Immut } from 'immutable'

import {
  SHOW_FEED,
} from '../action/feed'

const Immutable = require('immutable')

const initialState = Immutable.fromJS({
  postUser: 'Dummy',
})

const feedReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SHOW_FEED:
      return state.set('postUser', action.payload)
    default:
      return state
  }
}

export default feedReducer
