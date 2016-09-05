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
  return [ ...state,{key: response.key,
                    name: `New商品999`,
                    num: `999`,
                    desc: `New网店直供999号`,}]
}

function deleteRecord(state = [],response){
  // 返回key不相等的数据组成的新array
  return array.remove(state, function(record) {
    return record.key != response.key
  })
}


function updateRecord(state = [],response){
  let updateIndex = array.findIndex(state, function(record) { return record.key == response.key; });
  return [
        ...state.slice(0, updateIndex),
        {key: parseInt(Math.random()*100,10)+1,
          name: `商品999`,
          num: `999`,
          desc: `网店直供999号`,
        },
        ...state.slice(updateIndex + 1)]
}

function searchRecord(state = [],response){
  return Object.assign([], state, response)
}

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

const rootReducer = combineReducers({
  records,
  errorMessage
})

export default rootReducer
