// @flow
import type { fromJS as Immut } from 'immutable'
import { SAY_HELLO } from '../action/hello'

const Immutable = require('immutable')

const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
})

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    default:
      return state
  }
}

export default helloReducer
