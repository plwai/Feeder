// @flow

import { connect } from 'react-redux'

import InputContent from '../component/inputContent'
import { changeText } from '../action/feed'

const mapStateToProps = state => ({
  placehold: state.feed.get('placehold'),
  inputValue: state.feed.get('inputValue'),
})

const mapDispatchToProps = dispatch => ({
  handleChange: (val) => { dispatch(changeText(val)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(InputContent)
