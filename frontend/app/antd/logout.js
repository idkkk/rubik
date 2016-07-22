import React, { Component, PropTypes } from 'react'

export default React.createClass({
  componentDidMount() {
    localStorage.setItem('login', 'false');
  },

  render() {
    return <p>已经退出！</p>;
  }
})