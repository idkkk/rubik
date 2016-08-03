/*
 * ProductList Container
 * Author : zhangbaitong@163.com
 * Date   : 2016-07028
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { Form, Input, Row, Col, Button, Table } from 'antd';

import { addItem } from '../actions/productListActions';

import { select } from '../reducers/productListReducer';

const FormItem = Form.Item;

const dataSource = [];

for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i,
    name: `商品${i}`,
    num: `${i+Math.floor(Math.random()*10)}`,
    desc: `网店直供${i}号`,
  });
}

const deleteClick = function(){
  console.log('on click is delete')
}
const updateClick = function(){
  console.log('on click is update')
}

const columns = [{
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
    <a href="javascript:void(0)" onClick={updateClick}>修改</a>
      <span className="ant-divider"></span>
      <a href="javascript:void(0)" onClick={deleteClick}>删除</a>
    </span>
  ),
}];

const pagination = {
  total: dataSource.length,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  },
};


export default class ProductList extends Component {
  render() {

    const { dispatch, tableData} = this.props

  	const addClick = function(){
  		console.log('on click is add')
  	}

    const searchClick = function(){
      console.log('on click is search')
    }
    const clearClick = function(){
      console.log('on click is clear')
    }
    return (
      <div>
        <div><Form horizontal className="ant-advanced-search-form">
		    <Row gutter={16}>
		      <Col sm={8}>
		        <FormItem label="名称" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} >
		          <Input placeholder="请输入搜索名称" size="default" />
		        </FormItem>
		      </Col>
		      <Col sm={8}>
		        <FormItem label="描述" labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
		          <Input placeholder="请输入搜索描述" size="default" />
		        </FormItem>
		      </Col>
		    </Row>
		    <Row>
		      <Col span={12} offset={12} style={{ textAlign: 'right' }}>
		        <Button type="primary" htmlType="submit" onClick={searchClick}>搜索</Button>
		        <Button type="primary" htmlType="submit" onClick={text =>{
                console.log('add todo', text)
                dispatch(addItem('111'))}}>添加</Button>
		        <Button onClick={clearClick}>清除条件</Button>
		      </Col>
		    </Row>
		  </Form>
		  <Table dataSource={tableData} columns={columns}  pagination={pagination} />
		  </div>
      </div>
    );
  }
}


export default connect(select)(ProductList);
