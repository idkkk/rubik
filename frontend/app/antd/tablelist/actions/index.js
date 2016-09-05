/*
  Name   : define actions
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import { CALL_API } from '../middleware/api'

//定义错误处理操作的action类型

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

//清空当前可见的错误信息

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}

//定义数据fetch操作的action类型

export const RECORDS_REQUEST = 'RECORDS_REQUEST'

export const ADD_SUCCESS = 'ADD_SUCCESS'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const RECORDS_FAILURE = 'RECORDS_FAILURE'

//TODO:使用action creator和具体函数的工厂方法消除代码冗余

//增加记录

function addRecordsFetchAction(record) {
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, ADD_SUCCESS, RECORDS_FAILURE ],
      endpoint: `http://web.rubik.com/api/add/${record.key}`
    }
  }
}

export function addRecords(record) {
  return (dispatch, getState) => {
    return dispatch(addRecordsFetchAction(record))
  }
}

//删除记录

function deleteRecordsFetchAction(key) {
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, DELETE_SUCCESS, RECORDS_FAILURE ],
      endpoint: `http://web.rubik.com/api/delete/${key}`
    }
  }
}

export function deleteRecords(record) {
  return (dispatch, getState) => {
    return dispatch(deleteRecordsFetchAction(record.key))
  }
}

//修改记录

function updateRecordsFetchAction(record) {
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, UPDATE_SUCCESS, RECORDS_FAILURE ],
      endpoint: `http://web.rubik.com/api/update/${record.key}`
    }
  }
}

export function updateRecords(record) {
  return (dispatch, getState) => {
    return dispatch(updateRecordsFetchAction(record))
  }
}

//查询记录

function searchRecordsFetchAction(record = {name: "", desc: ""}) {
  if(record.name != "" && record.desc != ""){
    return {
      [CALL_API]: {
        types: [ RECORDS_REQUEST, SEARCH_SUCCESS, RECORDS_FAILURE ],
        endpoint: `http://web.rubik.com/api/search/${record.name}/${record.desc}`
      }
    }
  }
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, SEARCH_SUCCESS, RECORDS_FAILURE ],
      endpoint: `http://web.rubik.com/api/all`
    }
  }
}

export function searchRecords(record) {
  return (dispatch, getState) => {
    return dispatch(searchRecordsFetchAction(record))
  }
}