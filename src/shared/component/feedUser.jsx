// @flow

import React from 'react'

type Props = {
  postUser: string,
}

const FeedUser = ({ postUser }: Props ) =>
  <div>
    <p>{postUser}</p>
  </div>


export default FeedUser
