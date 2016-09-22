/*
  Name   : login logic
  Author : zhangbaitong@163.com
  Date   : 2016-09-22
 */

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

// 使用localstorage管理登录状态

function hasLogin(){
   return localStorage.getItem('login') == 'true';
}

let LoginCom = React.createClass({
  contextTypes: {
      router: React.PropTypes.object
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
    console.log('password: ',this.props.form.getFieldsValue().password)
    console.log('userName: ',this.props.form.getFieldsValue().userName)
    // login
    if (this.props.form.getFieldsValue().password !== 'admin') {
      console.log('login faild');
      return;
    }
    console.log('login true');
    localStorage.setItem('login', 'true');
    localStorage.setItem('userName', this.props.form.getFieldsValue().userName);
    console.log('login state: ',localStorage.getItem('login'));
    const path = `/home`
    console.log('path',path)
    this.context.router.push(path)
  },

  render() {
    console.log('has login ?',hasLogin());
    if(hasLogin()){
          const path = `/home`
          console.log('path',path)
          this.context.router.push(path)
          //return <p>你已经登录系统！<Link to="/logout">点此退出</Link></p>;
    }
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
  },
});


LoginCom = Form.create()(LoginCom);

module.exports = LoginCom