// root element
document.write('<div id = "App"></div>');

// css style
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

// basic js
//document.write(require("./content.js"));

// import react
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

//import root component
import Layout from './layout.js'

// define the root component
class App extends Component {
  render() {
    return <Layout />
  }
}

// render page
ReactDOM.render(<App />,document.getElementById('App'))

