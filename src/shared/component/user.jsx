// @flow

import React from 'react'

type Props = {
  userName: string,
  createUser: Function,
  changeName: Function,
}

const UserContent = ({ inputName, userName, createUser, changeName }: Props) =>
  <form onSubmit={createUser}>
    <input onChange={ e => changeName(e)} value={userName}/>
    <button type='submit'>Change</button>
  </form>

export default UserContent
