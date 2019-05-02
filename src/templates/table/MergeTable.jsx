import React from 'react';
import {Table} from 'components';
const renderContent = function (value, row, index) {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

const columnsCol = [{
  title: '姓名',
  dataIndex: 'name',
  render(text, row, index) {
      return text;
  },
}, {
  title: '年龄',
  dataIndex: 'age',
  sorter: (a, b) => a.age - b.age,
  render: renderContent,
}, {
  title: '家庭电话',
  dataIndex: 'tel',
  render(value, row, index) {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 2) {
      obj.props.rowSpan = 2;
    }
    if (index === 3) {
      obj.props.rowSpan = 0;
    }
    if (index === 0) {
      obj.props.colSpan = 2
    }
    return obj;
  },
}, {
  title: '手机号',
  dataIndex: 'phone',
  render(value, row, index) {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.colSpan = 0
    }
    return obj
   },
}, {
  title: '住址',
  dataIndex: 'address',
  render: renderContent,
}];

const dataCol = [{
  key: '1',
  name: '刘乐冉',
  age: 26,
  tel: '0571-22098909',
  phone: 13943250086,
  address: '浦东新区唐镇',
}, {
  key: '2',
  name: '李佳欣',
  tel: '0571-22098333',
  phone: 13262717838,
  age: 24,
  address: '浦东新区唐镇',
}, {
  key: '3',
  name: '孙柔佳',
  age: 22,
  tel: '0575-22098909',
  phone: 13950035537,
  address: '浦东新区唐镇',
}, {
  key: '4',
  name: '张仁士',
  age: 28,
  tel: '0575-22098909',
  phone: 13947766628,
  address: '浦东新区唐镇',
}, {
  key: '5',
  name: '王子琪',
  age: 32,
  tel: '0575-22098909',
  phone: 13964507501,
  address: '浦东新区唐镇',
}];
export default class MergeTable extends React.Component {
  render () {
    return (
      <Table columns={columnsCol} dataSource={dataCol} bordered />
    )
  }
}
