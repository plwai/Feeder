// @flow

import { connect } from 'react-redux'

import { createFeed } from '../action/feed'
import FeedButton from '../component/button'

const mapStateToProps = () => ({
  label: 'Create Feed',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(createFeed()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedButton)
