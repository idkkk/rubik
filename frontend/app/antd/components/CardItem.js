/*
 	Name   : Card Item Component
 	Author : zhangbaitong@163.com
 	Date   : 2016-09-21
 */

import React, { Component, PropTypes } from 'react';
import { Card } from 'antd';

export default class CardItem extends Component {

	constructor(props) {
	    super(props)
  	}

	render() {

		const { record } = this.props
		
		return (
		    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
		    <div className="custom-image">
		      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
		    </div>
		    <div className="custom-card">
		      <h3>{record.name}</h3>
		      <p>{record.description}</p>
		    </div>
		  </Card>
		)
	}
}