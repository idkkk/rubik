/*
  Name   : Login Container
  Author : zhangbaitong@163.com
  Date   : 2016-09-21
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'

import { searchRecords } from '../actions'

require("../theme/template/BrowserDemo.css");

const path = `/admin/`

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.loginActon = this.loginActon.bind(this)
  }

  // 使用localstorage管理登录状态
  loginActon(name, pass) {
    if (pass !== 'admin') {
      return
    }
    localStorage.setItem('login', 'true')
    localStorage.setItem('userName', name)
    console.log('-- login state --- : ',localStorage.getItem('login'))
    this.context.router.push(path)
  }

  componentWillMount() {
    if(localStorage.getItem('login') == 'true') {
      this.context.router.push(path)
    }
  }

  render() {
    return (
			<Login loginActon={this.loginActon} />
    )
  }

}

LoginPage.contextTypes = {
  router: React.PropTypes.object
}