import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import userReducer from '../../src/shared/reducer/user'

import {
  createFeed,
  createUserFeed,
} from '../../src/shared/action/feed'

const mockStore = configureMockStore([thunkMiddleware])

let userState

beforeEach(() => {
  userState = userReducer(undefined, {})
})

test('createFeed', () => {
  const store = mockStore({ user:userState })

  store.dispatch(createFeed())
  expect(store.getActions()).toEqual([
    createUserFeed('anonymous'),
  ])
})
