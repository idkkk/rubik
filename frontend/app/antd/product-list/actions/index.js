/*
 * ProductList Actions
 * Author : zhangbaitong@163.com
 * Date   : 2016-07-28
 */

import products from '../api/products'

import * as types from '../constants/ActionTypes'

import fetch from 'isomorphic-fetch'



/*
 * action 执行函数
 */


export function getAllProducts() {
  return dispatch => {
    products.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}


/*
 * action 创建函数
 */


function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export function addItem(item) {
  return { type: types.ADD_ITEM, item }
}

export function addSearchItem(type,value){
  let item = {}
  if('name' == type){
    item.name = value
  }else{
    item.desc = value
  }
  return { type: types.ADD_SEARCH_ITEM, item }
}

export function deleteItem(item) {
  return { type: types.DELETE_ITEM, item }
}

export function updateItem(item) {
  return { type: types.UPDATE_ITEM, item }
}

export function searchItem(item) {
  return { type: types.SEARCH_ITEM, item }
}

export function searchClearItem(item) {
  return { type: types.SEARCH_CLEAR_ITEM, item }
}

