/*
  Name   : API middleware
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import 'isomorphic-fetch'

// const API_ROOT = 'http://web.rubik.com/'
const API_ROOT = 'http://localhost:9090/'

// 统一处理fetch类操作，并规范数据格式

function fetchConfig(method,body) {
  return { method: method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body:body
  }
}

//对DELETE操作不进行操作

function callApi(endpoint,method,body) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  return fetch(fullUrl, fetchConfig(method,body))
    .then(response => {
      let json = {}
      if(method != "DELETE"){
        json = response.json()
      }else{
        json = {key: body}
      }
      return { json, response }
    })
    // .then(response =>
    //   response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      // 可以同时处理response和处理过的结果，这里直接使用response
      // return Object.assign({response: response},{result: json})
      return Object.assign(json)
    })

    // .then(result => {
    //   console.log("response : ",result,result.body)
    //   return result.json()
    // })
    // .then(data => console.log("response data : ",data))
}

// 使用CALL_API来做actions的middleware，同时处理fetch类actions

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { endpoint, method, body } = callAPI
  const { types } = callAPI
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint,method,body).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}