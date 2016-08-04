
import React, { Component } from 'react'
import SearchContainer from './SearchContainer'
import ListContainer from './ListContainer'

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