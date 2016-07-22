import React, { Component, PropTypes } from 'react'

var FancyCheckbox = React.createClass({
  render: function() {
    var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    // 反模式：`checked` 会被传到里面的组件里
    return (
      <div {...this.props} className={fancyClass} />
    );
  }
});

module.exports = FancyCheckbox