/*
  Name   : Login Components
  Author : zhangbaitong@163.com
  Date   : 2016-09-22
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';

import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {

	constructor(props) {
	    super(props)
	    this.handleSubmit = this.handleSubmit.bind(this)
  	}

	handleSubmit(e) {
	    e.preventDefault();
	    console.log('--- login info -- : ', this.props.form.getFieldsValue());
	    this.props.loginActon(this.props.form.getFieldsValue().userName, this.props.form.getFieldsValue().password)
  	}

	render() {
	    const { getFieldProps } = this.props.form;
	    return (
	          <div className='antd-login-backgroud'>
	          <div className='antd-login'>
	          <Form inline onSubmit={this.handleSubmit}>
	              <FormItem label="账户"><Input placeholder="请输入账户名" {...getFieldProps('userName')}/></FormItem>
	              <FormItem label="密码"><Input type="password" placeholder="请输入密码" {...getFieldProps('password')}/></FormItem>
	              <FormItem><Checkbox {...getFieldProps('agreement')}>记住我</Checkbox></FormItem>
	              <Button type="primary" htmlType="submit">登录</Button>
	          </Form>
	          </div>
	          </div>
	    );
  	}
}

export default Form.create()(Login)
