/*
 	Name   : List Component
 	Author : zhangbaitong@163.com
 	Date   : 2016-08-31
 */

import React, { Component, PropTypes } from 'react';
import { Form, Input, Row, Col, Button, Table } from 'antd';

const FormItem = Form.Item;

export default class List extends Component {

	constructor(props) {
	    super(props)
  	}
  // 定义List内部的行为
	handleDeleteClick(record){
		this.props.deleteClick(record)
	}	
	handleUpdateClick(record){
		this.props.updateClick(record)
	}
  // 获取分页信息
	getPagination(totalNum){
		return {
			total: totalNum,
	      	showSizeChanger: true,
			     onShowSizeChange(current, pageSize) {
            //TODO:使用日志组件
	        	console.log('Current: ', current, '; PageSize: ', pageSize);
	      	},
	      	onChange(current) {
            //TODO:使用日志组件
	        	console.log('Current: ', current);
	      	},
	    };
	}
  // 获取列表头信息
	getColumns(){
		return [{
			title: '名称',
        	dataIndex: 'name',
        	key: 'name',
        	render(text) {
		          return <a href="#">{text}</a>;
        	},
      	}, {
        	title: '数量',
        	dataIndex: 'num',
        	key: 'num',
  		}, {
        	title: '描述',
        	dataIndex: 'desc',
        	key: 'desc',
      	}, {
        	title: '操作',
        	key: 'operation',
        	render: (text, record) => (
          		<span>
          			<a href="javascript:void(0)" onClick={this.handleUpdateClick.bind(this,record)}>修改</a>
            		<span className="ant-divider"></span>
            		<a href="javascript:void(0)" id={record.key} onClick={this.handleDeleteClick.bind(this,record)}>删除</a>
          		</span>
        	),
    	}]
	}

  render() {
    const { records } = this.props
    const pagination = this.getPagination(records.length)
    const columns = this.getColumns()
    return (
      //TODO:外部提供执行行为
      <div><Table dataSource={records} columns={columns}  pagination={pagination} onRowClick={(record) => (console.log('table row click! data is ',record))}/></div>
    );
  }
}

List.propTypes = {
  deleteClick: PropTypes.func.isRequired,
  updateClick: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired
}

