// @flow

import { connect } from 'react-redux'

import UserContent from '../component/user'
import { createUser, changeName } from '../action/user'

const mapDispatchToProps = dispatch => ({
  createUser: (e) => {
    e.preventDefault()
    dispatch(createUser())
  },
  changeName: (e) => { dispatch(changeName(e.target.value)) },
})

export default connect(undefined, mapDispatchToProps)(UserContent)
