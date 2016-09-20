/*
  Name   : Edit Component
  Author : zhangbaitong@163.com
  Date   : 2016-09-20
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, Radio, Tooltip, Icon } from 'antd';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Edit extends Component {
    constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleReset = this.handleReset.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault()
      let submitRecord = Object.assign({}, this.props.record, this.props.form.getFieldsValue())
      this.props.submitClick(submitRecord)
    }

    handleReset(e) {
      e.preventDefault()
      this.props.form.resetFields()
    }

    componentDidMount() {
      this.props.form.setFieldsValue(this.props.record) 
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidUpdate() {
    }

    render() {
      const { getFieldProps } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };

      const { record } = this.props

      return (
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="名称" >
            <Input type="input" {...getFieldProps('name', { initialValue: '' })} placeholder="填写商品名称" />
          </FormItem>
          <FormItem {...formItemLayout} label="描述">
            <Input type="textarea" {...getFieldProps('description', { initialValue: '' })} placeholder="请填写商品描述" />
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">确定</Button>
            &nbsp;&nbsp;&nbsp;
            <Button type="ghost" onClick={this.handleReset}>重置</Button>
          </FormItem>
        </Form>
    )
  }
}

export default Form.create()(Edit);



