/*
  Name   : SiderMenu Component
  Author : zhangbaitong@163.com
  Date   : 2016-09-20
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Menu, Breadcrumb, Table, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SiderMenu extends Component {

	constructor(props) {
      super(props)
      this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(item){
    this.props.siderMenuSelect(item)
  }

	render() {
  	return (
      <aside className="ant-layout-sider">
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}  onSelect={this.handleSelect}>
          <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
            <Menu.Item key="1">Template</Menu.Item>
            <Menu.Item key="2">Template</Menu.Item>
            <Menu.Item key="3">商品管理</Menu.Item>
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
    )
	}
}