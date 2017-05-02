// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const CREATE_FEED = 'CREATE_FEED'

export const createFeed = createAction(CREATE_FEED)
