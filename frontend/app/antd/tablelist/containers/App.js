/*
  Name   : App Container
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import List from '../components/List'
import { resetErrorMessage, addRecords, deleteRecords, updateRecords, searchRecords } from '../actions'


class App extends Component {
    constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  //重置错误信息
  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  //定义CRUD
  handleAdd(record) {
    this.props.addRecords(record)
  }

  handleDelete(record) {
    this.props.deleteRecords(record)
  }

  handleUpdate(record) {
    this.props.updateRecords(record)
  }

  handleSearch(record) {
    this.props.searchRecords(record)
  }

  //初始化页面数据
  componentWillMount() {
    this.props.searchRecords()
  }

  //错误信息渲染
  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }
    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    //获取List需要的数据
    const { records } = this.props
    return (
      <div>
        <h2>Table List Template</h2>
        <hr/>
        <Search searchClick={this.handleSearch} addClick={this.handleAdd} />
        <hr />
        <List deleteClick={this.handleDelete} updateClick={this.handleUpdate} records={records} />
        <hr />
        {this.renderErrorMessage()}
      </div>
    )
  }
}


App.propTypes = {
  //React Redux注入
  errorMessage: PropTypes.string,
  //action触发
  records: PropTypes.array.isRequired,
  //自定义注入
  addRecords: PropTypes.func.isRequired,
  deleteRecords: PropTypes.func.isRequired,
  updateRecords: PropTypes.func.isRequired,
  searchRecords: PropTypes.func.isRequired,
  resetErrorMessage: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
    records: state.records
  }
}

//应用属性映射并注入行为
export default connect(mapStateToProps, {
  resetErrorMessage,
  addRecords,
  deleteRecords,
  updateRecords,
  searchRecords
})(App)
