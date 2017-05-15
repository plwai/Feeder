import {
  createUser,
  changeName,
} from '../../src/shared/action/user'

import userReducer from '../../src/shared/reducer/user'

const Immutable = require('immutable')

let userState

beforeEach(() => {
  userState = userReducer(undefined, {})
})

test('handle default', () => {
  expect(userState.get('userName')).toBe('anonymous')
  expect(userState.get('inputName')).toBe('')
})

test('handle CREATE_USER', () => {
  userState = userReducer(userState, createUser())
  expect(userState.get('userName')).toBe('')
})

test('handle CHANGE_NAME', () => {
  userState = userReducer(userState, changeName('test name'))
  expect(userState.get('inputName')).toBe('test name')
})
