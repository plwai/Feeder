// @flow

import React from 'react'
import FeedUser from './feedUser'
import Message from './message'

import {
  List,
  ListItem,
  ListItemContent,
  ListItemAction,
  Icon,
} from 'react-mdl'

type Props = {
  feedList: Object,
}

const Feed = ({ feedList }: Props ) =>
  <div>
    <List style={{ maxHeight: "500px", overflowY: "auto"}} >
      {
        feedList.map(feed =>
            <ListItem key={feed.get('id')} threeLine>
              <ListItemContent avatar="person" subtitle={feed.get('message')}>{feed.get('postUser')}</ListItemContent>
              <ListItemAction>
                <a href="#"><Icon name="star" /></a>
              </ListItemAction>
            </ListItem>
        )
      }
    </List>
  </div>


export default Feed
