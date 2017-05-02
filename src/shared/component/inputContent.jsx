// @flow

import React from 'react'

type Props = {
  placehold: string,
}

const InputContent = ({ placehold }: Props) =>
  <textarea placeholder={placehold} ref={(input) => { this.input = input; }} value='' />

export default InputContent
