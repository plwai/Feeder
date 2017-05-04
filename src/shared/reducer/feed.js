// @flow

import type { fromJS as Immut } from 'immutable'

import {
  CREATE_FEED,
  CHANGE_TEXT,
} from '../action/feed'

const Immutable = require('immutable')

let feedId = 1

const initialState = Immutable.fromJS({
  inputValue: '',
  placehold: 'input feed',
  feedList: [
    {
      postUser: 'Dummy ASD',
      message: 'Content',
      id: feedId,
    },
    {
      postUser: 'Dummy ASD',
      message: 'Content',
      id: feedId += 1,
    },
  ],
})

const feedReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_FEED:
      feedId += 1
      return state.set('feedList',
        [...state.get('feedList'), Immutable.fromJS({
          message: state.get('inputValue'),
          postUser: 'testUser',
          id: feedId,
        })])
        .set('inputValue', '')

    case CHANGE_TEXT:
      return state.set('inputValue', action.payload)
    default:
      return state
  }
}

export default feedReducer
