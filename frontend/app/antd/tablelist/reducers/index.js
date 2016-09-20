/*
  Name   : reducers
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import * as ActionTypes from '../actions'
import array from 'lodash/array'
import { combineReducers } from 'redux'

// 根据失败的fetch错误来更新错误信息

function errorMessage(state = null, action) {
  const { type, error } = action
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }
  return state
}

//list的CRUD

function addRecord(state = [],response){
  return [ ...state,response]
}

function deleteRecord(state = {},response){
  // 返回key不相等的数据组成的新array
  return array.remove(state, function(record) {
    return record.id != response.key
  })
}


function updateRecord(state = [],response){
  let updateIndex = array.findIndex(state, function(record) { return record.id == response.id; });
  return [
        ...state.slice(0, updateIndex),
        response,
        ...state.slice(updateIndex + 1)]
}

function searchRecord(state = [],response){
  return Object.assign([], response)
}

// 处理API数据

function records(state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_SUCCESS:
      return addRecord(state, action.response)
    case ActionTypes.DELETE_SUCCESS:
      return deleteRecord(state, action.response)
    case ActionTypes.UPDATE_SUCCESS:
      return updateRecord(state, action.response)
    case ActionTypes.SEARCH_SUCCESS:
      return searchRecord(state, action.response)
    default:
      return state
    }
}

//处理本地数据：编辑数据初始化

function record(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LAYOUT_TRANS:
      return Object.assign({}, state, action.body)
    case ActionTypes.ADD_SUCCESS:
      return {}
    case ActionTypes.UPDATE_SUCCESS:
      return {}
    default:
      return state
    }
}

//处理布局数据

function layout(state = ActionTypes.LAYOUT_LIST, action) {
    switch (action.type) {
    case ActionTypes.LAYOUT_TRANS:
      return action.layout
    case ActionTypes.ADD_SUCCESS:
      return ActionTypes.LAYOUT_LIST
    case ActionTypes.UPDATE_SUCCESS:
      return ActionTypes.LAYOUT_LIST
    default:
      return state
    }
}
const rootReducer = combineReducers({
  layout,
  records,
  record,
  errorMessage
})

export default rootReducer
