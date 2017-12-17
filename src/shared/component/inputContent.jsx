// @flow

import React from 'react'
import { Textfield } from 'react-mdl'

type Props = {
  placehold: string,
  inputValue: string,
  handleChange: Function,
}

const InputContent = ({ placehold, inputValue, handleChange }: Props) =>
  <Textfield
    onChange={ (e) => handleChange(e.target.value)}
    label={placehold}
    value={inputValue}
    style={{width: '80%', marginLeft: '10%', marginRight: '10%'}}
  />

export default InputContent
