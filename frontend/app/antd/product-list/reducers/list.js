import * as types from '../constants/ActionTypes'
import api from '../api/products';

function addProduct(state = []){
  return Object.assign({}, state, {items:[...state.items,
      {key: parseInt(Math.random()*100,10)+1,
        name: `商品`,
        num: `122`,
        desc: `网店直供号`}]})
  }

function deleteProduct(state = [],item){
  return Object.assign({}, state, {items:[
        ...state.items.slice(0, item.indexForSort),
        ...state.items.slice(item.indexForSort + 1)
      ]})
}

function updateProduct(state = [],item){
  return Object.assign({}, state, {items:[
        ...state.items.slice(0, item.indexForSort),
        {key: parseInt(Math.random()*100,10)+1,
          name: `商品999`,
          num: `999`,
          desc: `网店直供999号`,
        },
        ...state.items.slice(item.indexForSort + 1)
      ]})
}

function searchProduct(state = [],searchItem){
  var tmp = {items:[]}
  if(searchItem.name == null && searchItem.desc == null){
    return tmp
  }
  state.items.map(
    (item) => {if((searchItem.name != null && item.name.match(searchItem.name) != null) && (searchItem.desc != null &&  item.desc.match(searchItem.desc) != null)){
      tmp.items.push(item)
    }
    return item})
  return tmp
}

//test data
function initProduct_test(state = []){
  console.log(">>>>>>>>>>>>>> init products")
  console.log(state)
  return api.getProducts()
}

//real data
function initProduct_real(state = [],item){
  console.log(">>>>>>>>>>>>>> init products")
  console.log(state)
  return Object.assign([],state,item)
}

/*
 * Search Operation by http request
 */

function posts(state = {isFetching: false,items: [] }, action) {
  switch (action.type) {
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: false
      })
    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}


export default function dataSource(state = [], action,searchSource){
    switch (action.type) {
    case types.ADD_ITEM:
      return addProduct(state)
    case types.UPDATE_ITEM:
      return updateProduct(state,action.item)
    case types.DELETE_ITEM:
      return deleteProduct(state,action.item)
    case types.SEARCH_ITEM:
      return searchProduct(state,searchSource)
    case types.INIT_ITEM:
      return initProduct_test(state)
      // return initProduct_real(state,action.item)
    case types.REQUEST_POSTS:
    case types.RECEIVE_POSTS:
      return Object.assign({}, state, posts(state, action))
    default:
      return state
  }
}