// @flow

import { connect } from 'react-redux'

import InputContent from '../component/inputContent'

const mapStateToProps = state => ({
  placehold: state.feed.get('placehold'),
})

export default connect(mapStateToProps)(InputContent)
