/*
 * Search Container
 * Author : zhangbaitong@163.com
 * Date   : 2016-07-28
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Form, Input, Row, Col, Button, Table } from 'antd';

import { addSearchItem, addItem, searchClearItem, searchItem } from '../actions/index';
import { select } from '../reducers/index';

const FormItem = Form.Item;

class SearchContainer extends Component {
  	handleChange(event,type) {
		const { dispatch, searchSource } = this.props
    	dispatch(addSearchItem(type,event.target.value))
  	}
  render() {

	const { dispatch, searchSource } = this.props   

    const searchClearClick = function(item){
 		dispatch(searchClearItem(item))
	}

    const searchClick = function(item){
 		dispatch(searchItem(item))
	}

	const addClick = function(item){
		dispatch(addItem(item))
	}

    return (
        <div>
		    <Row gutter={16}>
		      <Col sm={8}>
		        <FormItem label="名称" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} >
		          <Input placeholder="请输入搜索名称" size="default" value={searchSource.name} onChange={(event) =>{this.handleChange(event,'name')}} />
		        </FormItem>
		      </Col>
		      <Col sm={8}>
		        <FormItem label="描述" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
		          <Input placeholder="请输入搜索描述" size="default" value={searchSource.desc} onChange={(event) =>{this.handleChange(event,'desc')}} />
		        </FormItem>
		      </Col>
		    </Row>
		    <Row>
		      <Col span={12} offset={12} style={{ textAlign: 'right' }}>
		        <Button type="primary" htmlType="submit" onClick={searchClick}>搜索</Button>
		        <Button type="primary" htmlType="submit" onClick={addClick}>添加</Button>
		        <Button onClick={searchClearClick}>清除条件</Button>
		      </Col>
		    </Row>
		  </div>
    );
  }
}


// map state.searchItem to props named searchItem
function searchSelect(state) {
  return {
    searchSource: state.searchSource
  };
}

function mapDispstchToProps (dispatch) {
	return (action) => {
		dispatch(action)
	}
}

// pure UI style
// export default SearchContainer
// redux style
export default connect(searchSelect)(SearchContainer)
