// @flow

import type { fromJS as Immut } from 'immutable'

import {
  CREATE_USER,
  CHANGE_NAME,
  CHANGE_SNACKBAR,
} from '../action/user'

const Immutable = require('immutable')

const initialState = Immutable.fromJS({
  userName: 'anonymous',
  inputName: '',
  snackbar: false,
})

const userReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CHANGE_NAME:
      return state.set('inputName', action.payload)
    case CREATE_USER:
      return state.set('userName', state.get('inputName'))
    case CHANGE_SNACKBAR:
      return state.set('snackbar', action.payload)
    default:
      return state
  }
}

export default userReducer
