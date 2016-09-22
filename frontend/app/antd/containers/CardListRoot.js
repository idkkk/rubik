/*
  Name   : Card List Root Container
  Author : zhangbaitong@163.com
  Date   : 2016-09-21
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CardListPage from './CardListPage';
import DevTools from './DevTools';

//TODO:区分开发和生产环境
export default class CardListRoot extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <CardListPage />
          <DevTools />
        </div>
      </Provider>
    );
  }
}