// @flow

import type { fromJS as Immut } from 'immutable'

import {
  CREATE_FEED,
} from '../action/feed'

const Immutable = require('immutable')

const initialState = Immutable.fromJS({
  postUser: 'Dummy',
  message: 'Content',
  placehold: 'input feed',
})

const feedReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_FEED:
      state.set('message', action.payload)
      state.set('postUser', 'testUser')
      return state
    default:
      return state
  }
}

export default feedReducer
