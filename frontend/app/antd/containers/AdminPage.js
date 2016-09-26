/*
  Name   : Admin page container
  Author : zhangbaitong@163.com
  Date   : 2016-09-22
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Admin from '../components/Admin'

// 登录状态过滤器
function hasLogin(){
   console.log('log state now :',localStorage.getItem('login'));
   return localStorage.getItem('login') == 'true';
}

class AdminPage extends Component {

  constructor(props) {
      super(props)
      this.state = {collapse: true}
      this.siderMenuSelect = this.siderMenuSelect.bind(this)
      // 路由信息
      // const path = this.props.route.childRoutes[0].path
  }

  //TODO:优化siderMenuSelect使得可以根据定义的数据进行自动匹配
  siderMenuSelect(item){
    const path = this.props.route.childRoutes[0].path
    console.log("Path : ", path)
    switch(item.key){
      case '1':
        browserHistory.push('/admin/tmpl')
        break;
      case 'tmpl':
        browserHistory.push('/admin/tmpl')
        break;
      case 'products':
        browserHistory.push('/admin/products')
        break;
      case '4':
        browserHistory.push('/admin/tmpl')
        break;
      default:
        browserHistory.push('/admin/tmpl')
    }
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  //TODO:抽象常用变量
  logoutAction() {
    localStorage.setItem('login', 'false');
    localStorage.setItem('userName', '');
    browserHistory.push('/admin/login')
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
    return(
      <Admin userName={userName} logoutAction={this.logoutAction} path={this.props.path} siderMenuSelectAction={this.siderMenuSelect} children={this.props.children}/>
    )
    
  }
  
}

//注入子组件
// AdminPage.propTypes = {
//   children: PropTypes.node
// }

//注入定义的路由信息
AdminPage.contextTypes = {
  route: React.PropTypes.object
}

//注入从routerReducer获取的当前页面路由信息
function mapStateToProps(state, ownProps) {
  return {
    path: state.routing.locationBeforeTransitions.pathname.substring(7)
  }
}

export default connect(mapStateToProps)(AdminPage)

