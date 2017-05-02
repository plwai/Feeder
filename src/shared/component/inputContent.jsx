// @flow

import React from 'react'

type Props = {
  placehold: string,
  inputValue: string,
  handleChange: Function,
}

const InputContent = ({ placehold, inputValue, handleChange }: Props) =>
  <textarea placeholder={placehold} onChange={ e => handleChange(e.target.value)} value={inputValue}/>

export default InputContent
