// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const SHOW_FEED = 'SHOW_FEED'

export const showFeed = createAction(SHOW_FEED)
