import * as types from '../constants/ActionTypes'

function addSearchProduct(state,item){
  return Object.assign({},state,item);
}


function searchClearProduct(state = {},item){
  return {}
}

export default function searchSource(state = {}, action){
    switch (action.type) {
    case types.ADD_SEARCH_ITEM:
      return addSearchProduct(state,action.item)
     case types.SEARCH_CLEAR_ITEM:
      return searchClearProduct(state,action.item)
    default:
      return state
  }
}
