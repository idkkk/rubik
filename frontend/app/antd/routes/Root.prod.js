/*
  Name   : Root Container for dev
  Author : zhangbaitong@163.com
  Date   : 2016-09-23
 */

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import routes from './routes'
import DevTools from './DevTools';


export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
          <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}