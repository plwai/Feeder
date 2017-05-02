// @flow

import { connect } from 'react-redux'

import { createFeed } from '../action/feed'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Create Feed',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(createFeed()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
