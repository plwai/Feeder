// @flow

import { connect } from 'react-redux'

import FeedUser from '../component/feedUser'

const mapStateToProps = state => ({
  feedList: state.feed.get('feedList'),
})

export default connect(mapStateToProps)(FeedUser)
