// @flow

import { connect } from 'react-redux'

import UserContent from '../component/user'
import { createUser, changeName, changeSnackbar } from '../action/user'

const mapStateToProps = state => ({
  isSnackbarActive: state.user.get('snackbar'),
  userName: state.user.get('userName'),
})

const mapDispatchToProps = dispatch => ({
  createUser: (e) => {
    e.preventDefault()
    dispatch(createUser())
  },
  changeName: (e) => { dispatch(changeName(e.target.value)) },
  handleTimeoutSnackbar: () => { dispatch(changeSnackbar(false)) },
  handleShowSnackbar: () => { dispatch(changeSnackbar(true)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContent)
