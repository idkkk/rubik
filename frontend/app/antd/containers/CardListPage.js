/*
  Name   : CardList Container
  Author : zhangbaitong@163.com
  Date   : 2016-09-21
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'

import { searchRecords } from '../actions'

class CardListPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.searchRecords()
  }


  render() {
  	const { records } = this.props

    return (
			<CardList records={records} />
    )
  }

}

CardListPage.propTypes = {
  searchRecords: PropTypes.func.isRequired
}


function mapStateToProps(state, ownProps) {
  return {
  	records: state.records
  }
}

//应用属性映射并注入行为
export default connect(mapStateToProps, {
	searchRecords
})(CardListPage)
