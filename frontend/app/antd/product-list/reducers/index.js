import { combineReducers } from 'redux'

import * as types from '../constants/ActionTypes'

function addSearchProduct(state,item){
  return Object.assign({},state,item);
}

function addProduct(state = []){
  return [...state,{key: parseInt(Math.random()*100,10)+1,
        name: `商品`,
        num: `122`,
        desc: `网店直供号`}]
  }

function deleteProduct(state = [],item){
  return [
        ...state.slice(0, item.indexForSort),
        ...state.slice(item.indexForSort + 1)
      ]
}


function updateProduct(state = [],item){
  return [
        ...state.slice(0, item.indexForSort),
        {key: parseInt(Math.random()*100,10)+1,
          name: `商品999`,
          num: `999`,
          desc: `网店直供999号`,
        },
        ...state.slice(item.indexForSort + 1)
      ]
}

function searchProduct(state = [],searchItem){
  console.log('>>>>>>>>>>>>>',state,searchItem)
  var tmp = []
  if(searchItem.name == null && searchItem.desc == null){
    return tmp
  }
  state.map(
    (item) => {if((searchItem.name != null && item.name.match(searchItem.name) != null) && (searchItem.desc != null &&  item.desc.match(searchItem.desc) != null)){
      tmp.push(item)
    }
    return item})
  console.log('>>>>>>>>>>>>>',tmp,searchItem)
  return tmp
}

function searchClearProduct(state = {},item){
  return {}
}

function searchSource(state = {}, action){
    switch (action.type) {
    case types.ADD_SEARCH_ITEM:
      return addSearchProduct(state,action.item)
     case types.SEARCH_CLEAR_ITEM:
      return searchClearProduct(state,action.item)
    default:
      return state
  }
}

function dataSource(state = [], action,searchSource){
    switch (action.type) {
    case types.ADD_ITEM:
      return addProduct(state)
    case types.UPDATE_ITEM:
      return updateProduct(state,action.item)
    case types.DELETE_ITEM:
      return deleteProduct(state,action.item)
    case types.SEARCH_ITEM:
      return searchProduct(state,searchSource)
    default:
      return state
  }
}


export default function productListReducer(state, action) {
  return {
    searchSource: searchSource(state.searchSource, action),
    dataSource: dataSource(state.dataSource, action, state.searchSource)
  }
}

// export default combineReducers({
//     searchSource,
//     dataSource
// })