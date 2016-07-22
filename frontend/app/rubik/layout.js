import React, { Component, PropTypes } from 'react'
import Timer from './timer.js'
import TodoApp from './todoApp.js'
import MDEditor from './mdEditor.js'
import ShowData from './showData.js'
import FilterableProductTable from './filterableProductTable.js'
import LikeButton from './likeButton.js'
import Avatar from './avatar.js'
import SingleElement from './singleElement.js'
import MixinsElement from './mixinsElement.js'
import PropsElement from './propsElement.js'
import FocusInput from './focusInput.js'
import TodoTrans from './todoTrans.js'




var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 

// define HelloMessage component
var Layout = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}:
                <hr/>
                <Timer secondsElapsed="0"/>
                <hr/>
                <TodoApp />
                <hr/>
                <MDEditor />
                <hr/>
                <ShowData url={"http://localhost/api/data"} pollInterval={2000}/>
                <hr/>
                <FilterableProductTable products={PRODUCTS} />
                <hr/>
                <LikeButton />
                <hr/>
                <Avatar />
                <hr/>
                {/* <SingleElement name={123}/> */}
                <SingleElement name="zhangbaitong"/>
                <hr/>
                <MixinsElement />
                <hr/>
                <PropsElement checked={true} name="zhangbaitong" type="test" onClick={console.log.bind(console)}>
                  Hello world!
                </PropsElement>
                <hr/>
                <FocusInput />
                <hr/>
                <TodoTrans />
                <hr/>
            </div>
  }
});

module.exports = Layout