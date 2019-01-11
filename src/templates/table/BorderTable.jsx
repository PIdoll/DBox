import React from 'react';
import {Table, Divider} from 'components';
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  sorter: (a, b) => a.age - b.age
}, {
  title: '所在城市',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '手机号',
  dataIndex: 'Tel',
  key: 'Tel'
}, {
  title: '审核状态',
  dataIndex: 'state',
  key: 'state',
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href='javascript:;'>编辑</a>
      <Divider type='vertical' />
      <a href='javascript:;'>删除</a>
    </span>
  ),
}];
const data = [{
  key: '1',
  name: '刘乐冉',
  age: 26,
  address: '北京',
  Tel: '13943250086',
  state: '审核未通过',
}, {
  key: '2',
  name: '李佳欣',
  age: 24,
  address: '南京',
  Tel: '13262717838',
  state: '审核通过',
  }, {
  key: '3',
  name: '孙柔佳',
  age: 22,
  address: '上海',
  Tel: '13950035537',
  state: '审核未通过',
}, {
  key: '4',
  name: '张仁士',
  age: 28,
  address: '合肥',
  Tel: '13947766628',
  state: '审核通过',
  }, {
  key: '5',
  name: '王子琪',
  age: 32,
  address: '郑州',
  Tel: '13964507501',
  state: '审核未通过',
  }, {
  key: '6',
  name: '陈卜宣',
  age: 27,
  address: '沈阳',
  Tel: '13262836283',
  state: '审核通过',
  }];
export default class BorderTable extends React.Component {
  render () {
    return (
      <Table columns={columns} dataSource={data} bordered title={() => 'Header'} footer={() => 'Footer'} />
    )
  }
}
