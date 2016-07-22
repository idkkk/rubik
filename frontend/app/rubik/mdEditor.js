import React, { Component, PropTypes } from 'react'
/*
* markdown plugin
* https://github.com/showdownjs/showdown
*/
import Showdown from 'Showdown'

var converter = new Showdown.Converter()

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <h5>This is a MarkdownEditor :</h5>
        <h6>Input</h6>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h6>Output</h6>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(this.state.value)
          }}
        />
      </div>
    );
  }
});

module.exports = MarkdownEditor