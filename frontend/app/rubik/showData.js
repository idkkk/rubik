import React, { Component, PropTypes } from 'react'

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h6 className="commentAuthor">
          {this.props.author} said : {this.props.text}
        </h6>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}  key={comment.id} text={comment.text}>
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
    return;
  },
  render: function() {
    return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var CommentBox = React.createClass({
    getInitialState: function() {
      return {data: [{author: "Pete Hunt", text: "This is one comment" ,id:"001"},
                      {author: "Jordan Walke", text: "This is *another* comment" ,id:"002"}]};
    },
    loadCommentsFromServer: function() {
      {/* we get data from backend server with ajax. */}
      //this.setState({data: data});
    },
    componentDidMount: function() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    handleCommentSubmit: function(comment) {
      var comments = this.state.data;
      comment.id = Date.now();
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
  },
  render: function() {
    return (
      <div className="commentBox">
        <h5>This is a Comments :</h5>
        {/* we will use state store data, so the props just no usefull. */}
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

module.exports = CommentBox