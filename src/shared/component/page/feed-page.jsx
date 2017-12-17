// @flow

import React from 'react'

import Feed from '../../container/feed'
import FeedInputContent from '../../container/feed-input-content'
import FeedButton from '../../container/feed-button'

const FeedUserPage = () =>
  <div>
    <Feed />
    <form onSubmit={ (e) => e.preventDefault() }>
      <FeedInputContent />
      <FeedButton />
    </form>
  </div>

export default FeedUserPage
