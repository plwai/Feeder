// @flow

import { connect } from 'react-redux'

import FeedUser from '../component/feedUser'

const mapStateToProps = state => ({
  postUser: state.feed.get('postUser'),
})

export default connect(mapStateToProps)(FeedUser)
