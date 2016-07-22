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
import Login from './login';
import Logout from './logout';
import Home from './home';
import About from './about';


// define the root component
class App extends Component {
  render() {
    return <Router history={browserHistory}>
    		<Route path="/" component={Login}/>
    		<Route path="/logout" component={Logout}/>
    		<Route path="/home" component={Home}/>
    		<Route path="/about" component={About}/>
  		</Router>
  }
}

// render page
ReactDOM.render(<App />,document.getElementById('App'))


