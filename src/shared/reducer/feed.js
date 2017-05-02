// @flow

import type { fromJS as Immut } from 'immutable'

import {
  CREATE_FEED,
  CHANGE_TEXT,
} from '../action/feed'

const Immutable = require('immutable')

const initialState = Immutable.fromJS({
  postUser: 'Dummy',
  message: 'Content',
  placehold: 'input feed',
  inputValue: '',
})

const feedReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_FEED:
      return state
        .set('message', state.get('inputValue'))
        .set('postUser', 'testUser')
    case CHANGE_TEXT:
      return state.set('inputValue', action.payload)
    default:
      return state
  }
}

export default feedReducer
