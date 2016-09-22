/*
  Name   : configure store for production env
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  )
}
