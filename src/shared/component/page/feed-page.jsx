// @flow

import React from 'react'

import FeedUser from '../../container/feedUser'
import Message from '../../container/message'
import FeedInputContent from '../../container/feed-input-content'
import FeedButton from '../../container/feed-button'

const FeedUserPage = () =>
  <div>
    <Message />
    <FeedUser />
    <FeedInputContent />
    <FeedButton />
  </div>

export default FeedUserPage
