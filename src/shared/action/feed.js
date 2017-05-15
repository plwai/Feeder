// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const CREATE_FEED = 'CREATE_FEED'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export const changeText = createAction(CHANGE_TEXT)
export const createUserFeed = createAction(CREATE_FEED)

export const createFeed = () => (dispatch: Function, getState: Function) => {
  const { user } = getState()

  dispatch(createUserFeed(user.get('userName')))
}
