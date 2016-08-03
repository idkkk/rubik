/*
 * Search Container
 * Author : zhangbaitong@163.com
 * Date   : 2016-07-28
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Form, Input, Row, Col, Button, Table } from 'antd';

import { deleteItem, updateItem } from '../actions/index';
import * as types from '../constants/ActionTypes'

const FormItem = Form.Item;

class ListContainer extends Component {
  render() {
    const { dispatch, dataSource } = this.props
    const rowClick = function(type,item){
      console.log('Row Click!')
      console.log('Row Click!Type is ',type)
      console.log('Row Click!Item is ',item)
      switch (type) {
        case types.UPDATE_ITEM:
          dispatch(updateItem(item))
          break
        case types.DELETE_ITEM:
          dispatch(deleteItem(item))
          break
        default:
          console.log('Row Click!Nothing to do ...')
      }
    }
    
    const pagination = {
      total: dataSource.length,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      },
    };

    const columns = [{
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render(text) {
          return <a href="#">{text}</a>;
        },
      }, {
        title: '数量',
        dataIndex: 'num',
        key: 'num',
      }, {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
      }, {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
          <span>
          <a href="javascript:void(0)" onClick={rowClick.bind(this, types.UPDATE_ITEM,record)}>修改</a>
            <span className="ant-divider"></span>
            <a href="javascript:void(0)" id={record.key} onClick={rowClick.bind(this, types.DELETE_ITEM,record)}>删除</a>
          </span>
        ),
    }];
    
    return (
      <div><Table dataSource={dataSource} columns={columns}  pagination={pagination} onRowClick={(record) => (console.log('table row click! data is ',record))}/></div>
    );
  }
}


// map state.dataSource to props named dataSource
function listSelect(state) {
  return {
    dataSource: state.dataSource
  };
}

// pure UI style
// export default ListContainer
// redux style
export default connect(listSelect)(ListContainer)
