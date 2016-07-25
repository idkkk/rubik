import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Link } from 'react-router'
import { Menu, Breadcrumb, Table, Icon } from 'antd';


import Info from './components/info';
import Edit from './components/edit';
import {listcolumns,listdata} from './components/list';

const SubMenu = Menu.SubMenu;

function hasLogin(){
   console.log('log state now :',localStorage.getItem('login'));
   return localStorage.getItem('login') == 'true';
}

export default React.createClass({
  onSelectTest(item){
        console.log('select evnet >>>>>');
        console.log(item.key);
        console.log(item.key == '1');
        switch(item.key)
        {
        case '1':
          ReactDOM.render(<Edit />,document.getElementById('detail'))
          break;
        case '2':
          ReactDOM.render(<Table columns={listcolumns} dataSource={listdata} />,document.getElementById('detail'))
          break;
        default:
          ReactDOM.render(<Info />,document.getElementById('detail'))
        }
  },
  getInitialState() {
    return {
      collapse: true,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  render() {
  	const collapse = this.state.collapse;
  	const haslogin = localStorage.getItem('login');
    const userName = localStorage.getItem('userName');
  	console.log(haslogin);
  	console.log(userName);
	if(!hasLogin()){
      browserHistory.push('/')
      //return <p>你已经登录系统！<Link to="/logout">点此退出</Link></p>;
    }
    return (<div className="ant-layout-ceiling-demo">
      <div className="ant-layout-ceiling">
        <div className="ant-layout-wrapper">
          <ul className="right">
            <li>Hi : {userName}</li>
            <li>|</li>
			<li><Link to="/logout">退出</Link></li>            
            <li>|</li>
            <li><a href='https://github.com/idkkk/rubik'>rubik</a></li>
          </ul>
        </div>
      </div>
      <div className="ant-layout-aside">
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}  onSelect={this.onSelectTest}>
          <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
            <Menu.Item key="1">选项1</Menu.Item>
            <Menu.Item key="2">选项2</Menu.Item>
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
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
      <div className="ant-layout-main">
        <div className="ant-layout-header"></div>
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div style={{ height: 390 }} id='detail'>
              内容区域
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
        rubik © 2016
        </div>
      </div>
    </div>
    </div>)
  }
})


