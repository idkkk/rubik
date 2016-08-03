import React from 'react'
import { Form, Input, Row, Col, Button, DatePicker, Table, Icon } from 'antd';

const FormItem = Form.Item;

const dataSource = [];

for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i,
    name: `商品${i}`,
    num: `${i+Math.floor(Math.random()*10)}`,
    desc: `网店直供${i}号`,
  });
}

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
      <a href="#">修改</a>
      <span className="ant-divider"></span>
      <a href="#">删除</a>
    </span>
  ),
}];

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



export default React.createClass({
  render() {
    return <div><Form horizontal className="ant-advanced-search-form">
    <Row gutter={16}>
      <Col sm={8}>
        <FormItem
          label="名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
      </Col>
      <Col sm={8}>
        <FormItem
          label="描述"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索描述" size="default" />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={12} style={{ textAlign: 'right' }}>
        <Button type="primary" htmlType="submit">搜索</Button>
        <Button type="primary" htmlType="submit">添加</Button>
        <Button>清除条件</Button>
      </Col>
    </Row>
  </Form>
  <Table dataSource={dataSource} columns={columns}  pagination={pagination} />
  </div>
  }
})


