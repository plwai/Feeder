// @flow

import type { fromJS as Immut } from 'immutable'

import {
  CREATE_FEED,
  CHANGE_TEXT,
} from '../action/feed'

const Immutable = require('immutable')

let feedId = 0

const initialState = Immutable.fromJS({
  inputValue: '',
  placehold: 'type here',
  feedList: [],
})

const feedReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_FEED:
      feedId += 1
      return state.set('feedList',
        [Immutable.fromJS({
          message: state.get('inputValue'),
          postUser: action.payload,
          id: feedId,
        }), ...state.get('feedList')])
        .set('inputValue', '')

    case CHANGE_TEXT:
      return state.set('inputValue', action.payload)
    default:
      return state
  }
}

export default feedReducer
