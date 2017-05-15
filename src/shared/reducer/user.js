// @flow

import type { fromJS as Immut } from 'immutable'

import {
  CREATE_USER,
  CHANGE_NAME,
} from '../action/user'

const Immutable = require('immutable')

const initialState = Immutable.fromJS({
  userName: 'anonymous',
  inputName: '',
})

const userReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CHANGE_NAME:
      return state.set('inputName', action.payload)
    case CREATE_USER:
      return state.set('userName', state.get('inputName'))
    default:
      return state
  }
}

export default userReducer
