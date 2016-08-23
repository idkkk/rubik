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


function mockProducts(){
    const mockState = new Object()
    mockState.dataSource = []
    for (let i = 0; i < 5; i++) {
      mockState.dataSource.push({
        key: i,
        name: `商品${i}`,
        num: `${i+Math.floor(Math.random()*10)}`,
        desc: `网店直供${i}号`,
      });
    }
    mockState.searchSource = {name:"",desc:""}
    return mockState
}

let mockList = mockProducts()
console.log(mockList)


class API extends React.Component {
  render() {
    return (
      {mockList}
    );
  }
}


// define the root component
class App extends Component {
  render() {
    return <Router history={browserHistory}>
    		<Route path="/" component={Login}/>
    		<Route path="/logout" component={Logout}/>
    		<Route path="/about" component={About}/>
    		<Route path="/home" component={Home}/>
    		<Route path="/api" component={API}/>
  		</Router>
  }
}

// render page
ReactDOM.render(<App />,document.getElementById('App'))

