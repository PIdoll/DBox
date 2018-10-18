import React from 'react'

import Table from 'components/table'
import reqwest from 'reqwest'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: '李大大',
  age: 32,
  address: '浦东新区唐镇',
}, {
  key: '2',
  name: '李大大',
  age: 42,
  address: '浦东新区唐镇',
}, {
  key: '3',
  name: '李大大',
  age: 32,
  address: '浦东新区唐镇',
}]

// columns for Test
const columnsTest = [{
  title: '姓名',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: '性别',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: '邮箱',
  dataIndex: 'email',
}];

const Test = React.createClass({
  getInitialState() {
    return {
      data: [],
      pagination: {},
      loading: false,
    };
  },
  handleTableChange(pagination, filters, sorter) {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  },
  fetch(params = {}) {
    console.log('请求参数：', params);
    this.setState({ loading: true });
    reqwest({
      url: 'http://api.randomuser.me',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = this.state.pagination;
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  },
  componentDidMount() {
    this.fetch();
  },
  render() {
    return (
      <Table columns={columnsTest}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  },
});

// 事例表中第四行合并了五列，除了第一列设置 colSpan = 5 外
// 其他列的第四行 colSpan = 0 (被合并掉，不会渲染)
const renderContent = function (value, row, index) {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columnsCol = [{
  title: '姓名',
  dataIndex: 'name',
  render(text, row, index) {
    if (index < 4) {
      return <a href='#'>{text}</a>;
    }
    return {
      children: <a href='#'>{text}</a>,
      props: {
        colSpan: 5,
      },
    };
  },
}, {
  title: '年龄',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: '家庭电话',
  colSpan: 2,
  dataIndex: 'tel',
  render(value, row, index) {
    const obj = {
      children: value,
      props: {},
    };
    // 第三列的第三行行合并
    if (index === 2) {
      obj.props.rowSpan = 2;
    }

    // 第三列的第四行被合并没了，设置 rowSpan = 0 直接不用渲染
    if (index === 3) {
      obj.props.rowSpan = 0;
    }

    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  },
}, {
  title: '手机号',
  colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}, {
  title: '住址',
  dataIndex: 'address',
  render: renderContent,
}];

const dataCol = [{
  key: '1',
  name: '张大',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: '浦东新区唐镇',
}, {
  key: '2',
  name: '胡彦祖',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: '浦东新区唐镇',
}, {
  key: '3',
  name: '张大',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: '浦东新区唐镇',
}, {
  key: '4',
  name: '李夫人',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: '浦东新区唐镇',
}, {
  key: '5',
  name: '习大大',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: '浦东新区唐镇',
}];

// 可展开
const columnsExpend = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
  { title: '操作', dataIndex: '', key: 'x', render: () => <a href='#'>删除</a> },
];

const dataExpend = [
  { key: 1, name: '张大', age: 32, address: '浦东新区唐镇', description: '我是张大，今年32岁，住在浦东新区唐镇。' },
  { key: 2, name: '张大', age: 42, address: '浦东唐镇2号', description: '我是张大，今年42岁，住在浦东唐镇2号。' },
  { key: 3, name: '张大', age: 32, address: '浦东唐镇3号', description: '我是张大，今年32岁，住在浦东唐镇3号。' },
];

// 固定列
const columnsFixRow = [
  { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '年龄', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: '列1', dataIndex: 'address', key: '1' },
  { title: '列2', dataIndex: 'address', key: '2' },
  { title: '列3', dataIndex: 'address', key: '3' },
  { title: '列4', dataIndex: 'address', key: '4' },
  { title: '列5', dataIndex: 'address', key: '5' },
  { title: '列6', dataIndex: 'address', key: '6' },
  { title: '列7', dataIndex: 'address', key: '7' },
  { title: '列8', dataIndex: 'address', key: '8' },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href='#'>操作</a>,
  },
];

const dataFixdRow = [{
  key: '1',
  name: '张大',
  age: 32,
  address: '浦东唐镇0号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 40,
  address: '浦东新区唐镇',
}];

// 带选择框
const columnsCheckbox = [{
  title: '姓名',
  dataIndex: 'name',
  render: text => <a href='#'>{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
}];
const dataCheckbox = [{
  key: '1',
  name: '张大',
  age: 32,
  address: '浦东新区唐镇',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '浦东新区唐镇',
}, {
  key: '3',
  name: '张大',
  age: 32,
  address: '浦东新区唐镇',
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  getCheckboxProps: record => ({
    disabled: record.name === '胡彦祖', // 配置无法勾选的列
  }),
};

class table extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>中号表格（紧凑型）</h1>
        <Table columns={columns} dataSource={data} size='middle' />
        <br />
        <h1 className='h1'>小号表格</h1>
        <Table columns={columns} dataSource={data} size='small' />
        <h1 className='h1'>Ajax</h1>
        <Test />
        <h1 className='h1'>行/列合并</h1>
        <Table columns={columnsCol} dataSource={dataCol} />
        <h1 className='h1'>可展开</h1>
        <Table columns={columnsExpend}
          expandedRowRender={record => <p>{record.description}</p>}
          dataSource={dataExpend}
          className='table'
        />
        <h1>固定列</h1>
        <Table columns={columnsFixRow} dataSource={dataFixdRow} scroll={{ x: 1300 }} />
        <h1>带选择框</h1>
        <Table rowSelection={rowSelection} columns={columnsCheckbox} dataSource={dataCheckbox} />
      </div>
    )
  }
}

export default table;
