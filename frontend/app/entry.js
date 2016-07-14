// root element
document.write('<div id = "App"></div>');

// css style
require("./style.css");

// basic js
document.write(require("./content.js"));

// import react
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './containers/App'
// import todoApp from './reducers'

// let store = createStore(todoApp)


// define the root component
class App extends Component {
  render() {
    return (
      <HelloMessage name="zhangbaitong"/>
    )
  }
}

// define HelloMessage component
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}:<Timer secondsElapsed="0"/><Timer secondsElapsed="0"/></div>
  }
});


var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

// render page
let appEle = document.getElementById('App')
ReactDOM.render(
	<App />,
	appEle
)
