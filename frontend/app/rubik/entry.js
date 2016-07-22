// root element
document.write('<div id = "App"></div>');

// css style
require("./style.css");

// basic js
//document.write(require("./content.js"));

// import react
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './containers/App'
// import todoApp from './reducers'
// let store = createStore(todoApp)

//import root component
import Layout from './layout.js'

// define the root component
class App extends Component {
  render() {
    return (
      <Layout name="zhangbaitong"/>
    )
  }
}

// render page
ReactDOM.render(<App />,document.getElementById('App'))
