import React, { Component, PropTypes,requiredAny } from 'react'

var SingleElement = React.createClass({
  propTypes: {
    //children: React.PropTypes.element.isRequired
    name: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  },
  render: function() {
    return (
      <div>	
        hi {this.props.name}, here is a SingleElement.
      </div>
    );
  }

});


module.exports = SingleElement