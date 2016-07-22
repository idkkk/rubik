import React, { Component, PropTypes } from 'react'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Login from './login';

// add login component
var Layout = React.createClass({
  render: function() {
    return (
    	<Login />
    )
  }
});

module.exports = Layout