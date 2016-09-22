/*
  Name   : LayoutPage container
  Author : zhangbaitong@163.com
  Date   : 2016-09-22
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Link } from 'react-router'

import Header from '../components/layout/Header';
import SiderMenu from '../components/layout/SiderMenu';
import Contents from '../components/layout/Contents';

import Template from '../components/template';
import TableListRoot from './Root'
import CardListRoot from './CardListRoot'
import TableListRootConfigureStore from '../store/configureStore'


// 登录状态过滤器
function hasLogin(){
   console.log('log state now :',localStorage.getItem('login'));
   return localStorage.getItem('login') == 'true';
}

export default class LayoutPage extends Component {

  constructor(props) {
      super(props)
      this.state = {collapse: true}
  }

  siderMenuSelect(item){
    switch(item.key){
      case '1':
        ReactDOM.render(<Template />,document.getElementById('detail'))
        break;
      case '2':
        ReactDOM.render(<Template />,document.getElementById('detail'))
        break;
      case '3':
        const tableListStore = TableListRootConfigureStore()
        ReactDOM.render(<TableListRoot store={tableListStore} />,document.getElementById('detail'))
        break;
      case '4':
        const CardListRootStore = TableListRootConfigureStore()
        ReactDOM.render(<CardListRoot store={CardListRootStore}/>,document.getElementById('detail'))
        break;
      default:
        ReactDOM.render(<Template />,document.getElementById('detail'))
    }
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  logoutAction() {
    localStorage.setItem('login', 'false');
    localStorage.setItem('userName', '');
    browserHistory.push('/')
  }

  componentWillMount() {
    const collapse = this.state.collapse;
    const haslogin = localStorage.getItem('login');
    const userName = localStorage.getItem('userName');
    if(!hasLogin()){
      browserHistory.push('/')
      //return <p>你已经登录系统！<Link to="/logout">点此退出</Link></p>;
    }
  }

  render() {
    const userName = localStorage.getItem('userName');
    return (
      <div className="ant-layout-ceiling-demo">
        <Header userName={userName} logoutAction={this.logoutAction}/>
        <div className="ant-layout-aside">
          <SiderMenu siderMenuSelect={this.siderMenuSelect} />
          <Contents />
        </div>
      </div>
    )
  }
}




