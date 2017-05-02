// @flow

import { connect } from 'react-redux'

import FeedUser from '../component/feedUser'

const mapStateToProps = state => ({
  postUser: state.feed.get('postUser'),
  message: state.feed.get('message'),
})

export default connect(mapStateToProps)(FeedUser)
