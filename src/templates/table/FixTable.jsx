import React from 'react';
import {Table, Divider} from 'components';
const columnsFixRow = [{
  title: '姓名',
  width: 100,
  fixed: 'left',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '性别',
  width: 100,
  dataIndex: 'sex',
  key: 'sex'
}, {
  title: '年龄',
  width: 100,
  dataIndex: 'age',
  key: 'age',
  sorter: true,
}, {
  title: '所在城市',
  width: 150,
  dataIndex: 'city',
  key: 'city'
}, {
  title: '地址',
  width: 300,
  dataIndex: 'address',
  key: 'address'
}, {
  title: '手机号',
  width: 150,
  dataIndex: 'Tel',
  key: 'Tel'
}, {
  title: '学历',
  width: 150,
  dataIndex: 'study',
  key: 'study'
}, {
  title: '职业',
  width: 150,
  dataIndex: 'work',
  key: 'work'
}, {
  title: '政治面貌',
  width: 150,
  dataIndex: 'status',
  key: 'status'
}, {
  title: '审核状态',
  width: 150,
  dataIndex: 'state',
  key: 'state'
}, {
  title: '操作',
  width: 110,
  dataIndex: 'action',
  fixed: 'right',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href='javascript:;'>编辑</a>
      <Divider type='vertical' />
      <a href='javascript:;'>删除</a>
    </span>
  ),
}];
const dataFixdRow = [{
  key: '11',
  name: '刘乐冉',
  age: 26,
  city: '北京',
  sex: '男',
  status: '党员',
  work: '教师',
  address: '上海市浦东新区唐镇上丰路88号',
  study: '本科',
  Tel: '13943250086',
  state: '审核未通过',
}, {
  key: '12',
  name: '李佳欣',
  age: 24,
  city: '南京',
  sex: '女',
  status: '群众',
  work: 'IT',
  address: '上海市浦东新区唐镇上丰路88号',
  study: '本科',
  Tel: '13262717838',
  state: '审核通过',
}, {
  key: '13',
  name: '孙柔佳',
  age: 22,
  city: '上海',
  sex: '女',
  status: '党员',
  work: '幼师',
  address: '上海市浦东新区唐镇上丰路88号',
  study: '专科',
  Tel: '13950035537',
  state: '审核未通过',
}, {
  key: '14',
  name: '张仁士',
  age: 28,
  city: '合肥',
  sex: '男',
  address: '上海市浦东新区唐镇上丰路88号',
  status: '群众',
  work: '技工',
  study: '专科',
  Tel: '13947766628',
  state: '审核通过',
}, {
  key: '15',
  name: '王子琪',
  age: 32,
  city: '郑州',
  sex: '男',
  address: '上海市浦东新区唐镇上丰路88号',
  status: '党员',
  work: '自由职业',
  study: '博士',
  Tel: '13964507501',
  state: '审核未通过',
}, {
  key: '16',
  name: '陈卜宣',
  age: 27,
  city: '沈阳',
  sex: '女',
  status: '党员',
  address: '上海市浦东新区唐镇上丰路88号',
  work: '医师',
  study: '本科',
  Tel: '13262836283',
  state: '审核通过',
}];
export default class FixTable extends React.Component {
  render () {
    return (
      <Table columns={columnsFixRow} dataSource={dataFixdRow} scroll={{ x: 1500, y: 200 }} />
    )
  }
}
