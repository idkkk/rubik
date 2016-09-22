/*
  Name   : Header Component
  Author : zhangbaitong@163.com
  Date   : 2016-09-20
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'

export default class Header extends Component {

	constructor(props) {
      super(props)
    }

  	render() {
      const { userName, logoutAction } = this.props
    	return (
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
      )
  	}
}