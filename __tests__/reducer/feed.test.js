import {
  createUserFeed,
  changeText,
} from '../../src/shared/action/feed'

import type { fromJS as Immut } from 'immutable'
import feedReducer from '../../src/shared/reducer/feed'

const Immutable = require('immutable')

let feedState

beforeEach(() => {
  feedState = feedReducer(undefined, {})
})

test('handle default', () => {
  expect(feedState.get('inputValue')).toBe('')
  expect(feedState.get('placehold')).toBe('type here')
})

test('handle CHANGE_TEXT', () => {
  feedState = feedReducer(feedState, changeText('test text'))
  expect(feedState.get('inputValue')).toBe('test text')
})

test('handle CREATE_FEED', () => {
  feedState = feedReducer(feedState, changeText('test text'))

  feedState = feedReducer(feedState, createUserFeed('testUser'))
  expect(feedState.get('feedList')).toEqual([Immutable.fromJS({
    message: 'test text',
    postUser: 'testUser',
    id: 1,
  })])
})
