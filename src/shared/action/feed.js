// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const CREATE_FEED = 'CREATE_FEED'
export const CHANGE_TEXT = 'CHANGE_TEXT'

export const createFeed = createAction(CREATE_FEED)
export const changeText = createAction(CHANGE_TEXT)
