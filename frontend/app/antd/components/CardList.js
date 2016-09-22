/*
 	Name   : Card List Component
 	Author : zhangbaitong@163.com
 	Date   : 2016-09-21
 */

import React, { Component, PropTypes } from 'react';
import { Card, Row, Col } from 'antd';
import CardItem from '../components/CardItem'

export default class CardList extends Component {

	constructor(props) {
	    super(props)
  	}

  	renderItem(item) {
    	return (
    		<Col key={item.id} span="8">
      			<CardItem record={item} />
      		</Col>
    	)
  	}

	render() {
		const { records } = this.props
		return (
			<div style={{ background: '#ECECEC', padding: '30px' }}>
				<Row>
        		{records.map(this.renderItem)}
        		</Row>
      		</div>		    
		)
	}
}

CardList.propTypes = {
  records: PropTypes.array.isRequired
}

// CardList.defaultProps = {
//   records: [{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"},{"id":"1","name":"abc","description":"dddd"}]
// }