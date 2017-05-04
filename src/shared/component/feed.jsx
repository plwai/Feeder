// @flow

import React from 'react'
import FeedUser from './feedUser'
import Message from './message'

type Props = {
  feedList: Object,
}

const Feed = ({ feedList }: Props ) =>
  <div>
    <ul>
      {
        feedList.map(feed =>
          <li key={feed.get('id')}>
            <FeedUser postUser={feed.get('postUser')}/>
            <Message message={feed.get('message')}/>
          </li>
        )
      }
    </ul>
  </div>


export default Feed
