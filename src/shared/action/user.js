// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const CREATE_USER = 'CREATE_USER'
export const CHANGE_NAME = 'CHANGE_NAME'

export const createUser = createAction(CREATE_USER)
export const changeName = createAction(CHANGE_NAME)
