import React from 'react'
import CreateReactClass from 'create-react-class';
import Table from 'components/table';
import Button from '../../components/button/index';
import Divider from '../../components/divider/index';
// import Button from '../../components/button/index'
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
  key: 'state'
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
  name: '天津',
  age: 24,
  address: '南京',
  Tel: '13262717838',
  state: '审核通过',
  action: ''
}, {
  key: '3',
  name: '彭柔群',
  age: 22,
  address: '上海',
  Tel: '13950035537',
  state: '审核未通过',
  action: ''
}, {
  key: '4',
  name: '顏仁豪',
  age: 28,
  address: '合肥',
  Tel: '13947766628',
  state: '审核通过',
  action: ''
}, {
  key: '5',
  name: '王郁弘',
  age: 32,
  address: '郑州',
  Tel: '13964507501',
  state: '审核未通过',
  action: ''
}, {
  key: '6',
  name: '陳柏萱',
  age: 27,
  address: '沈阳',
  Tel: '13262836283',
  state: '审核通过',
  action: ''
}];

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
    console.log('请求参数：', params);
    this.setState({ loading: true });
    reqwest({
      url: 'http://randomuser.me/api',
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
  {title: '操作',
    dataIndex: '',
    key: 'x',
    render: (text, record) => (
      <span>
        <a href='javascript:;'>编辑</a>
        <Divider type='vertical' />
        <a href='javascript:;'>删除</a>
      </span>
    ),
  },
];

const dataExpend = [
  { key: 1, name: '张大', age: 32, address: '浦东新区唐镇', description: '我是张大，今年32岁，住在浦东新区唐镇。' },
  { key: 2, name: '张大', age: 42, address: '浦东唐镇2号', description: '我是张大，今年42岁，住在浦东唐镇2号。' },
  { key: 3, name: '张大', age: 32, address: '浦东唐镇3号', description: '我是张大，今年32岁，住在浦东唐镇3号。' },
];

// 固定列
const columnsFixRow = [{
  title: '姓名',
  width: 70,
  fixed: 'left',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '年龄',
  width: 100,
  dataIndex: 'age',
  key: 'age'
}, {
  title: '所在城市',
  width: 100,
  dataIndex: 'address',
  key: 'address'
}, {
  title: '手机号',
  width: 150,
  dataIndex: 'Tel',
  key: 'Tel'
}, {
  title: '审核状态',
  width: 150,
  dataIndex: 'state',
  key: 'state'
}, {
  title: '操作',
  width: 100,
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
  address: '北京',
  Tel: '13943250086',
  state: '审核未通过',
}, {
  key: '12',
  name: '天津',
  age: 24,
  address: '南京',
  Tel: '13262717838',
  state: '审核通过',
}, {
  key: '13',
  name: '彭柔群',
  age: 22,
  address: '上海',
  Tel: '13950035537',
  state: '审核未通过',
}, {
  key: '14',
  name: '顏仁豪',
  age: 28,
  address: '合肥',
  Tel: '13947766628',
  state: '审核通过',
}, {
  key: '15',
  name: '王郁弘',
  age: 32,
  address: '郑州',
  Tel: '13964507501',
  state: '审核未通过',
}, {
  key: '16',
  name: '陳柏萱',
  age: 27,
  address: '沈阳',
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
        <h1 className='h1'>中号表格（紧凑型）</h1>
        <Table columns={columns} dataSource={data} size='middle' />
        <br />
        <h1 className='h1'>小号表格</h1>
        <Table columns={columns} dataSource={data} size='small' />
        <h1>带选择框</h1>
        <div style={{ marginBottom: 16 }}>
          <Button
            type='primary'
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            选择
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `已选择 ${selectedRowKeys.length} 条数据` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        <h1 className='h1'>Ajax</h1>
        <Test />
        <h1 className='h1'>行/列合并</h1>
        <Table columns={columnsCol} dataSource={dataCol} />
        <h1 className='h1'>带边框表格</h1>
        <Table columns={columns} dataSource={data} bordered title={() => '表头'} footer={() => '表底'} />
        <br />
        <h1 className='h1'>可展开</h1>
        <Table columns={columnsExpend}
          expandedRowRender={record => <p>{record.description}</p>}
          dataSource={dataExpend}
          className='table'
        />
        <h1>固定行/列</h1>
        <Table columns={columnsFixRow} dataSource={dataFixdRow} scroll={{ x: 1300, y: 200 }} />
      </div>
    )
  }
}

export default table;
