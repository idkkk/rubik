import { combineReducers } from 'redux'

import * as types from '../constants/ActionTypes'

import { default as searchSource } from './search'
import { default as dataSource } from './list'

export default function productListReducer(state, action) {
  return {
    searchSource: searchSource(state.searchSource, action),
    dataSource: dataSource(state.dataSource, action, state.searchSource)
  }
}

// simple use for default setting

// export default combineReducers({
//     searchSource,
//     dataSource
// })