/*
  Name   : Define Routers
  Author : zhangbaitong@163.com
  Date   : 2016-09-22
 */

 // root element
document.write('<div id = "App"></div>');

// css style
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

require("./theme/template/BrowserDemo.css");

// basic js
//document.write(require("./content.js"));

// import react
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

//import component
import Login from './containers/LoginPage';
import LayoutPage from './containers/LayoutPage';
import About from './components/About';


// define the root component
class App extends Component {
  render() {
    return <Router history={browserHistory}>
    		<Route path="/" component={Login}/>
    		<Route path="/about" component={About}/>
    		<Route path="/home" component={LayoutPage}/>
  		</Router>
  }
}

// render page
ReactDOM.render(<App />,document.getElementById('App'))

