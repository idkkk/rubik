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

//数据fetch操作action类型

export const RECORDS_REQUEST = 'RECORDS_REQUEST'

export const ADD_SUCCESS = 'ADD_SUCCESS'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const RECORDS_FAILURE = 'RECORDS_FAILURE'

//布局操作action类型

export const LAYOUT_TRANS = 'LAYOUT_TRANS'

//布局类型

export const LAYOUT_EDIT = 'LAYOUT_EDIT'
export const LAYOUT_LIST = 'LAYOUT_LIST'

//TODO:使用action creator和具体函数的工厂方法消除代码冗余

//注：后端API交互需要把json对象转化为字符串

// ********  数据行为  ********

//增加记录

function addRecordsFetchAction(record) {
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, ADD_SUCCESS, RECORDS_FAILURE ],
      endpoint: `product`,
      method: "POST",
      body: JSON.stringify(record)
    }
  }
}

//删除记录

function deleteRecordsFetchAction(key) {
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, DELETE_SUCCESS, RECORDS_FAILURE ],
      endpoint: `product/${key}`,
      method: "DELETE",
      body: key
    }
  }
}

export function deleteRecords(record) {
  return (dispatch, getState) => {
    return dispatch(deleteRecordsFetchAction(record.id))
  }
}

//修改记录

function updateRecordsFetchAction(record) {
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, UPDATE_SUCCESS , RECORDS_FAILURE ],
      endpoint: `product/${record.id}`,
      method: "PUT",
      body: JSON.stringify(record)
    }
  }
}

//查询记录

function searchRecordsFetchAction(record = {name: "", description: ""}) {
  if(record.name != "" || record.description != ""){
    delete record["key"]
    return {
      [CALL_API]: {
        types: [ RECORDS_REQUEST, SEARCH_SUCCESS, RECORDS_FAILURE ],
        endpoint: `products`,
        method: "POST",
        body: JSON.stringify(record)
      }
    }
  }
  return {
    [CALL_API]: {
      types: [ RECORDS_REQUEST, SEARCH_SUCCESS, RECORDS_FAILURE ],
      endpoint: `products`,
      method: "POST"
    }
  }
}

export function searchRecords(record) {
  return (dispatch, getState) => {
    return dispatch(searchRecordsFetchAction(record))
  }
}

//编辑记录

export function submitRecords(record) {
  //save
  if(!record.id){
    return (dispatch, getState) => {
      return dispatch(addRecordsFetchAction(record))
    }
  }else{
  //update
    return (dispatch, getState) => {
      return dispatch(updateRecordsFetchAction(record))
    }
  }
}

// ********  布局行为  ********

function addRecordsAction(record) {
  return {
    type: LAYOUT_TRANS,
    layout: LAYOUT_EDIT,
    body: record
  }
}

export function addRecords(record = {}) {
  return (dispatch, getState) => {
    return dispatch(addRecordsAction(record))
  }

}

function updateRecordsAction(record) {
  return {
    type: LAYOUT_TRANS,
    layout: LAYOUT_EDIT,
    body: record
  }
}

export function updateRecords(record) {
  return (dispatch, getState) => {
    return dispatch(updateRecordsAction(record))
  }
}


function transToListAction() {
  return {
    type: LAYOUT_TRANS,
    layout: LAYOUT_LIST,
    body: {}
  }
}

export function transToList() {
  return (dispatch, getState) => {
    return dispatch(transToListAction())
  }
}

