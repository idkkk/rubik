/*
  Name   : Admin Component
  Author : zhangbaitong@163.com
  Date   : 2016-09-26
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'

import { Menu, Breadcrumb, Table, Icon } from 'antd'

const SubMenu = Menu.SubMenu

export default class Header extends Component {

	constructor(props) {
      super(props)
    }

  	render() {
  	const { userName, logoutAction, path, siderMenuSelectAction, children } = this.props
    
    return (
      <div className="ant-layout-ceiling-demo" style={{height:600}}>
        {/* Header */}
        <div className="ant-layout-ceiling">
          <div className="ant-layout-wrapper">
            <ul className="right">
              <li>Hi : {userName}</li>
              <li>|</li>
              <li onClick={logoutAction}>退出</li>
              <li>|</li>
              <li><a href='https://github.com/idkkk/rubik'>rubik</a></li>
            </ul>
          </div>
        </div>
        {/* Main Layout */}
        <div className="ant-layout-aside">
        {/* SiderMenu */}
        <aside className="ant-layout-sider">
        <Menu mode="inline" theme="dark" defaultSelectedKeys={[path]} defaultOpenKeys={['sub1']}  onSelect={siderMenuSelectAction}>
          <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
            <Menu.Item key="1">Template</Menu.Item>
            <Menu.Item key="tmpl">Template</Menu.Item>
            <Menu.Item key="products">商品管理</Menu.Item>
            <Menu.Item key="4">商品列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
        {/* Content */}
        <div className="ant-layout-main">
          {/* Breadcrumb */}
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* Main Content */}
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              { children }
            </div>
          </div>
          {/* Footer */}
          <div className="ant-layout-footer">rubik © 2016</div>
        </div>
          //End Content{/*  */}
        </div>
        {/* End Main Layout */}
      </div>
    )
  }
}