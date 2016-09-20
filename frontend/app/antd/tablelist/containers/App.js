/*
  Name   : App Container
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import List from '../components/List'
import Edit from '../components/Edit'
import { resetErrorMessage, addRecords, deleteRecords, updateRecords, searchRecords, submitRecords, LAYOUT_EDIT, LAYOUT_LIST } from '../actions'

import { Form } from 'antd';


class App extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(record) {
    this.props.submitRecords(record) 
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
    const { records, record, layout } = this.props

    //定义布局
    var layoutDetail
    if(layout == LAYOUT_LIST){
      layoutDetail = <div>
                  <Search searchClick={this.handleSearch} addClick={this.handleAdd} />
                  <List deleteClick={this.handleDelete} updateClick={this.handleUpdate} records={records} />
              </div>
    }else if(layout == LAYOUT_EDIT){
      layoutDetail = <div>
                  <Edit submitClick={this.handleSubmit} record={record} />
               </div>
    }else{
      //TODO: 在外部定义异常显示状态
      layoutDetail = <p>No Layout Detail</p>
    }

    return (
      <div>
        <h2>Table List Template</h2>
        {layoutDetail}
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
  record: PropTypes.object,
  layout: PropTypes.string.isRequired,
  //自定义注入
  addRecords: PropTypes.func.isRequired,
  deleteRecords: PropTypes.func.isRequired,
  updateRecords: PropTypes.func.isRequired,
  searchRecords: PropTypes.func.isRequired,
  submitRecords: PropTypes.func.isRequired,
  resetErrorMessage: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
    records: state.records,
    record: state.record,
    layout: state.layout
  }
}

//应用属性映射并注入行为
export default connect(mapStateToProps, {
  resetErrorMessage,
  addRecords,
  deleteRecords,
  updateRecords,
  searchRecords,
  submitRecords
})(App)
