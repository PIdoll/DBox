import React from 'react'
import CreateReactClass from 'create-react-class';
import Table from 'components/table';
import Button from '../../components/button/index';
import Badge from '../../components/badge/index';
import Divider from '../../components/divider/index';
import reqwest from 'reqwest'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
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
  name: '劉岳然',
  age: 26,
  address: '北京',
  Tel: '13943250086',
  state: '审核未通过',
}, {
  key: '2',
  name: '李鷽釁',
  age: 24,
  address: '南京',
  Tel: '13262717838',
  state: '审核通过',
}, {
  key: '3',
  name: '彭柔群',
  age: 22,
  address: '上海',
  Tel: '13950035537',
  state: '审核未通过',
}, {
  key: '4',
  name: '顏仁豪',
  age: 28,
  address: '合肥',
  Tel: '13947766628',
  state: '审核通过',
}, {
  key: '5',
  name: '王郁弘',
  age: 32,
  address: '郑州',
  Tel: '13964507501',
  state: '审核未通过',
}, {
  key: '6',
  name: '陳柏萱',
  age: 27,
  address: '沈阳',
  Tel: '13262836283',
  state: '审核通过',
}];

// 基础数据源
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

// 异步加载
const Test = CreateReactClass({
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
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = this.state.pagination;
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
      <Table
        columns={columnsTest}
        showHeader={false}
        rowKey={record => record.login.uuid}
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
  render: renderContent,
}, {
  title: '家庭电话',
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

    // 第三列的第四行被合并没了，设置 rowSpan = 0 不要渲染
    if (index === 3) {
      obj.props.rowSpan = 0;
    }

    // 第一行的第第三列合并2列
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
    // 第一行的第四列和第一行的第三列合并不要渲染
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
  name: '劉岳然',
  age: 26,
  tel: '0571-22098909',
  phone: 13943250086,
  address: '浦东新区唐镇',
}, {
  key: '2',
  name: '李鷽釁',
  tel: '0571-22098333',
  phone: 13262717838,
  age: 24,
  address: '浦东新区唐镇',
}, {
  key: '3',
  name: '彭柔群',
  age: 22,
  tel: '0575-22098909',
  phone: 13950035537,
  address: '浦东新区唐镇',
}, {
  key: '4',
  name: '顏仁豪',
  age: 28,
  tel: '0575-22098909',
  phone: 13947766628,
  address: '浦东新区唐镇',
}, {
  key: '5',
  name: '王郁弘',
  age: 32,
  tel: '0575-22098909',
  phone: 13964507501,
  address: '浦东新区唐镇',
}];

//  内嵌表格
const expandedRowRender = () => {
  const columnsSubmenu = [
    { title: '操作日期', dataIndex: 'date', key: 'date' },
    { title: '操作人员', dataIndex: 'name', key: 'name' },
    { title: '操作状态', key: 'state', render: () => <span style={{position: 'relative'}}><Badge dot status='success' text='成功' /></span> },
    { title: '操作次数', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    {
      title: '异常状态',
      dataIndex: 'operation',
      key: 'operation',
    },
  ];

  const datasubmenu = [];
  for (let i = 0; i < 2; ++i) {
    datasubmenu.push({
      key: i,
      date: new Date().toLocaleString(),
      name: 'Admin',
      operation: '正常',
      upgradeNum: Math.ceil(Math.random() * 10),
    });
  }
  return (
    <Table
      columns={columnsSubmenu}
      dataSource={datasubmenu}
      pagination={false}
    />
  );
};


// 固定列
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
  key: 'age'
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
  name: '劉岳然',
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
  name: '李鷽釁',
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
  name: '彭柔群',
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
  name: '顏仁豪',
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
  name: '王郁弘',
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
  name: '陳柏萱',
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

class table extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render () {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div id='main-container'>
        <h1 className='h1'>默认表格</h1>
        <Table columns={columns} dataSource={data} />
        <h1 className='h1'>中号表格</h1>
        <Table columns={columns} dataSource={data} size='middle' />
        <br />
        <h1 className='h1'>小号表格</h1>
        <Table columns={columns} dataSource={data} size='small' />
        <h1>带选择框</h1>
        <div style={{ marginBottom: 12 }}>
          <Button type='primary' onClick={this.start} disabled={!hasSelected} loading={loading}>选择</Button>
          <span style={{ marginLeft: 16 }}>
            {hasSelected ? `已选择 ${selectedRowKeys.length} 条数据` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        <h1 className='h1'>异步数据</h1>
        <Test />
        <h1 className='h1'>行列合并</h1>
        <Table columns={columnsCol} dataSource={dataCol} bordered />
        <h1 className='h1'>边框表格</h1>
        <Table columns={columns} dataSource={data} bordered title={() => '表头'} footer={() => '表底'} />
        <br />
        <h1 className='h1'>内嵌表格</h1>
        <Table
          columns={columns}
          expandedRowRender={expandedRowRender}
          dataSource={data}
        />
        <h1>固定行列</h1>
        <Table columns={columnsFixRow} dataSource={dataFixdRow} scroll={{ x: 1500, y: 200 }} />
      </div>
    )
  }
}

export default table;
