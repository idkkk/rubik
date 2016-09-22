/*
  Name   : Contents Component
  Author : zhangbaitong@163.com
  Date   : 2016-09-20
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Menu, Breadcrumb, Table, Icon } from 'antd';

export default class Contents extends Component {

	constructor(props) {
      super(props)
    }

  	render() {
    	return (
        <div className="ant-layout-main">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div id='detail'>
                内容区域
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">rubik © 2016</div>
        </div>
      )
  	}
}