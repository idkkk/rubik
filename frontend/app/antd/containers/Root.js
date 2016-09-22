/*
  Name   : Root Container
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';

//TODO:区分开发和生产环境
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    );
  }
}