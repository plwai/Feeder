// @flow

import { connect } from 'react-redux'

import Feed from '../component/feed'

const mapStateToProps = state => ({
  feedList: state.feed.get('feedList'),
})

export default connect(mapStateToProps)(Feed)
