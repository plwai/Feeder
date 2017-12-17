// @flow

import React from 'react'
import { Button, Textfield, Snackbar } from 'react-mdl'

type Props = {
  userName: string,
  isSnackbarActive: bool,
  createUser: Function,
  changeName: Function,
  handleTimeoutSnackbar: Function,
  handleShowSnackbar: Function,
}

const UserContent = ({ inputName, userName, isSnackbarActive, createUser, changeName, handleTimeoutSnackbar, handleShowSnackbar }: Props) =>
  <form onSubmit={createUser}>
    <Textfield
      onChange={(e) => changeName(e)}
      defaultValue={userName}
      label="Username"
      style={{width: '80%', marginLeft: '10%', marginRight: '10%'}}
    />
    <Button
      onClick={handleShowSnackbar}
      style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }}
      raised colored ripple>
        Change
    </Button>
    <Snackbar
      active={isSnackbarActive}
      onTimeout={handleTimeoutSnackbar}>
        Success
    </Snackbar>
  </form>

export default UserContent
