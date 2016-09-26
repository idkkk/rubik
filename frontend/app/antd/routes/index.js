/*
  Name   : define index for application
  Author : zhangbaitong@163.com
  Date   : 2016-09-23
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './Root'
import configureStore from '../store/configureStore'

//page style
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

require("../theme/template/BrowserDemo.css");

//redux store
const store = configureStore()

//browser history with store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root store={store} history={history} />, document.getElementById('application')
)