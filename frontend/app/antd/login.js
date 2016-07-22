import React, { Component, PropTypes } from 'react'

import { Link } from 'react-router'

// import antd
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

// import rubik

function hasLogin(){
   console.log('log state now :',localStorage.getItem('login'));
   return localStorage.getItem('login') == 'true';
}

let Demo = React.createClass({
  contextTypes: {
      router: React.PropTypes.object
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
    console.log('password: ',this.props.form.getFieldsValue().password)
    // login
    if (this.props.form.getFieldsValue().password !== 'admin') {
      console.log('login faild');
      return;
    }
    console.log('login true');
    localStorage.setItem('login', 'true');
    console.log('login state: ',localStorage.getItem('login'));
    const path = `/home`
    console.log('path',path)
    this.context.router.push(path)
  },

  render() {
    console.log('has login ?',hasLogin());
    if(hasLogin()){
      return <p>你已经登录系统！<Link to="/logout">点此退出</Link></p>;
    }
    const { getFieldProps } = this.props.form;
    return (
          <Form inline onSubmit={this.handleSubmit}>
              <FormItem label="账户"><Input placeholder="请输入账户名" {...getFieldProps('userName')}/></FormItem>
              <FormItem label="密码"><Input type="password" placeholder="请输入密码" {...getFieldProps('password')}/></FormItem>
              <FormItem><Checkbox {...getFieldProps('agreement')}>记住我</Checkbox></FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
          </Form>
    );
  },
});


Demo = Form.create()(Demo);

module.exports = Demo