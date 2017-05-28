// @flow

import React from 'react'
import { Button } from 'react-mdl'

type Props = {
  label: string,
  handleClick: Function,
}

const FeedButton = ({ label, handleClick }: Props) =>
  <Button 
    onClick={handleClick}
    style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }}
    raised colored ripple>
      {label}
  </Button>

export default FeedButton
