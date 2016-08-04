
import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
import ListContainer from './ListContainer'

import configureStore from '../configureStore'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Product List Demo</h2>
        <hr/>
        <SearchContainer />
        <hr/>
        <ListContainer />
      </div>
    )
  }
}

export function createStore(){
  return configureStore()
}


