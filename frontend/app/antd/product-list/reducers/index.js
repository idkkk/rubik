import { combineReducers } from 'redux'

import * as types from '../constants/ActionTypes'

function addSearchProduct(state,item){
  var tmp = Object.assign({},state)
  tmp.searchSource = Object.assign({},state.searchSource,item);
  return tmp
}

function addProduct(state){
  if(state.dataSource == undefined){
    state.dataSource = []
  }
  var tmp = Object.assign({},state)
  tmp.dataSource = [...tmp.dataSource,{key: parseInt(Math.random()*100,10)+1,
        name: `商品`,
        num: `122`,
        desc: `网店直供号`}]
  return tmp
}

function deleteProduct(state,item){
  if(state.dataSource == undefined){
    state.dataSource = []
  }
  var tmp = Object.assign({},state)
  tmp.dataSource = [
        ...state.dataSource.slice(0, item.indexForSort),
        ...state.dataSource.slice(item.indexForSort + 1)
      ]
  return tmp
}


function updateProduct(state,item){
  if(state.dataSource == undefined){
    state.dataSource = []
  }
  var tmp = Object.assign({},state)
  tmp.dataSource = [
        ...state.dataSource.slice(0, item.indexForSort),
        {key: parseInt(Math.random()*100,10)+1,
          name: `商品999`,
          num: `999`,
          desc: `网店直供999号`,
        },
        ...state.dataSource.slice(item.indexForSort + 1)
      ]
  return tmp
}

function searchProduct(state,item){
  var searchItem = state.searchSource
  if(searchItem.name == null && searchItem.desc == null){
    return Object.assign({},state)
  }
  var tmp = Object.assign({},state)
  console.log(tmp.dataSource)
  tmp.dataSource = []
  state.dataSource.map(
    (item) => {if((searchItem.name != null && item.name.match(searchItem.name) != null) && (searchItem.desc != null &&  item.desc.match(searchItem.desc) != null)){
      tmp.dataSource.push(item)
    }
    return item})
  return tmp
}

function searchClearProduct(state,item){
  var tmp = Object.assign({},state)
  tmp.searchSource = {}
  return tmp
}

export default function productListReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_ITEM:
      return addProduct(state)
    case types.ADD_SEARCH_ITEM:
      return addSearchProduct(state,action.item)
    case types.UPDATE_ITEM:
      return updateProduct(state,action.item)
     case types.DELETE_ITEM:
      return deleteProduct(state,action.item)
     case types.SEARCH_ITEM:
      return searchProduct(state,action.item)
     case types.SEARCH_CLEAR_ITEM:
      return searchClearProduct(state,action.item)
    default:
      return state
  }
}