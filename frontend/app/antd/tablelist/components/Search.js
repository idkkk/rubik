/*
 	Name   : Search Items Component
 	Author : zhangbaitong@163.com
 	Date   : 2016-08-31
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Row, Col, Button, Table } from 'antd';

const FormItem = Form.Item;

export default class Search extends Component {

	constructor(props) {
	    super(props)
	    this.handleAddClick = this.handleAddClick.bind(this)
	    this.handleSearchClick = this.handleSearchClick.bind(this)
	    this.handleClearClick = this.handleClearClick.bind(this)
  	}

  	//设置页面DOM元素值
	setInputValue(refs,json) {
		//TODO:是否有更简单的方法，不必在修改页面时逐个获取
		let nameInput = ReactDOM.findDOMNode(refs.name).firstChild
		let descInput = ReactDOM.findDOMNode(refs.desc).firstChild
	    nameInput.value = json.name
	    descInput.value = json.desc
  	}

  	//获取页面DOM元素值
  	getInputValue(refs) {
    	return {name: ReactDOM.findDOMNode(refs.name).firstChild.value,
    		desc: ReactDOM.findDOMNode(refs.desc).firstChild.value,
    		key: parseInt(Math.random()*100,10)+1}
	}
	//定义Search中的按钮行为
  	handleSearchClick() {
  		let record = this.getInputValue(this.refs)
    	this.props.searchClick(record)
  	}

	handleAddClick() {
		let record = this.getInputValue(this.refs)
    	this.props.addClick(record)
  	}

	handleClearClick() {
		console.log("handleClearClick : ",this.getInputValue(this.refs))
    	this.setInputValue(this.refs,{name:"",desc:""})
  	}
  	//TODO:如何能够动态进行页面元素构建？元数据？
	render() {
		return (
		    <div>
			    <Row gutter={16}>
			      <Col sm={8}>
			        <FormItem label="名称" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} >
			          <Input ref="name" placeholder="请输入搜索名称" size="default" defaultValue="" />
			        </FormItem>
			      </Col>
			      <Col sm={8}>
			        <FormItem label="描述" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
			          <Input ref="desc" placeholder="请输入搜索描述" size="default" />
			        </FormItem>
			      </Col>
			    </Row>
			    <Row>
			      <Col span={12} offset={12} style={{ textAlign: 'right' }}>
			        <Button type="primary" htmlType="submit" onClick={this.handleSearchClick}>搜索</Button>
			        <Button type="primary" htmlType="submit" onClick={this.handleAddClick}>添加</Button>
			        <Button onClick={this.handleClearClick}>清除条件</Button>
			      </Col>
			    </Row>
			  </div>
		);
	}
}


Search.propTypes = {
  searchClick: PropTypes.func.isRequired,
  addClick: PropTypes.func.isRequired
}