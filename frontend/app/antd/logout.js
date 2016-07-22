import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
  componentDidMount() {
    localStorage.setItem('login', 'false');
    localStorage.setItem('userName', '');
   	browserHistory.push('/')
  },

  render() {
    return <p>logout redirect</p>;
  }
})