import React from 'react'
import CreateReactClass from 'create-react-class';
import Table from 'components/table';
import Button from 'components/button';
import Badge from 'components/badge';
import Divider from 'components/divider';
import Form from 'components/form';
import Input from 'components/input';
import InputNumber from 'components/input-number';
import Popconfirm from 'components/popconfirm';
import Select from 'components/select';
import Tooltip from 'components/tooltip';
import reqwest from 'reqwest'
const {Option} = Select;

// 公共数据
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',

  // sorter: true,
  sorter: (a, b) => a.age - b.age
}, {
  title: '所在城市',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '手机号',
  dataIndex: 'Tel',
  key: 'Tel',
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
  sorter: false,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: '性别',
  dataIndex: 'gender',
  // 筛选
  // filters: [
  //   { text: 'Male', value: 'male' },
  //   { text: 'Female', value: 'female' },
  // ],
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
  sorter: true,
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

// 可编辑功能
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputtype === 'number') {
      return <InputNumber style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'city') {
      return <Select showSearch style={{ width: 70 }} placeholder='请选择' >
        <Option value='北京'>北京</Option>
        <Option value='上海'>上海</Option>
        <Option value='广州'>广州</Option>
        <Option value='沈阳'>沈阳</Option>
        <Option value='郑州'>郑州</Option>
        <Option value='合肥'>合肥</Option>
        <Option value='南京'>南京</Option>
        <Option value='深圳'>深圳</Option>
      </Select>;
    }
    if (this.props.inputtype === 'address') {
      return <Input style={{ width: 200 }} />;
    }
    if (this.props.inputtype === 'name') {
      return <Input style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'Tel') {
      return <Input style={{ width: 130 }} />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      // inputtype,
      record,
      // index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class table extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    flag: false,
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    editingKey: '',
    data: [{
      key: '1',
      name: '劉岳然',
      age: 26,
      city: '北京',
      Tel: '13943250086',
      address: '上海市浦东新区唐镇上丰路88号',
    }, {
      key: '2',
      name: '李鷽釁',
      age: 24,
      city: '南京',
      Tel: '13262717838',
      address: '上海市浦东新区唐镇上丰路88号',
    }, {
      key: '3',
      name: '彭柔群',
      age: 22,
      city: '上海',
      Tel: '13950035537',
      address: '上海市浦东新区唐镇上丰路88号',
    }, {
      key: '4',
      name: '顏仁豪',
      age: 28,
      city: '合肥',
      Tel: '13947766628',
      address: '上海市浦东新区唐镇上丰路88号',
    }, {
      key: '5',
      name: '王郁弘',
      age: 32,
      city: '郑州',
      Tel: '13964507501',
      address: '上海市浦东新区唐镇上丰路88号',
    }, {
      key: '6',
      name: '陳柏萱',
      age: 27,
      city: '沈阳',
      Tel: '13262836283',
      address: '上海市浦东新区唐镇上丰路88号',
    }]
  };
  this.columnss = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    editable: true,
    render: (text, record) => {
      return <Tooltip title={this.state.flag ? text : ''}><span onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</span></Tooltip>
     }
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
    editable: true,
    render: (text, record) => {
      return <Tooltip title={this.state.flag ? text : ''}><span onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</span></Tooltip>
     }
  }, {
    title: '居住地',
    dataIndex: 'city',
    key: 'city',
    editable: true,
    render: (text, record) => {
      return <Tooltip title={this.state.flag ? text : ''}><span onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</span></Tooltip>
     }
  }, {
    title: '手机号',
    dataIndex: 'Tel',
    key: 'Tel',
    editable: true,
    render: (text, record) => {
      return <Tooltip title={this.state.flag ? text : ''}><span onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</span></Tooltip>
     }
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    editable: true,
    render: (text, record) => {
      return <Tooltip title={this.state.flag ? text : ''}><span onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</span></Tooltip>
     }
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => {
      const editable = this.isEditing(record);
      return (
        <div>
          {editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    href='javascript:;'
                    onClick={() => this.save(form, record.key)}
                  >
                    保存
                  </a>
                )}
              </EditableContext.Consumer>
              <Divider type='vertical' />
              <a
                href='javascript:;'
                onClick={() => this.cancel(record.key)}
                  >
                    取消
              </a>
            </span>
          ) : (
            <span>
              <a href='javascript:;' onClick={() => this.edit(record.key)}>编辑</a>
              <Divider type='vertical' />
              <Popconfirm title='您确定要删除吗?' onConfirm={() => this.handleDelete(record.key)}>
                <a href='javascript:;'>删除</a>
              </Popconfirm>
            </span>
          )}
        </div>
      );
    },
  }];
}
  onMouseEnter = (e) => {
    const parentWidth = e.target.parentNode.offsetWidth
    const selfWdith = e.target.parentNode.lastElementChild.offsetWidth + 2
    const parentPadding = e.target.parentNode.lastElementChild.offsetLeft
    console.log(selfWdith > parentWidth - (parentPadding * 2))
    if (selfWdith >= parentWidth - (parentPadding * 2)) {
      this.setState({flag: true})
    }
  }
  onMouseLeave = () => {
    this.setState({flag: false})
    return false
  }
  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }
  start = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  handleDelete = (key) => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.key !== key) });
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  edit(key) {
    this.setState({ editingKey: key });
  }
  cancel = () => {
    this.setState({ editingKey: '' });
  };
  isEditing = record => record.key === this.state.editingKey;
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }
  render () {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    // edit
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columnn = this.columnss.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputtype: (() => {
            if (col.dataIndex === 'age') {
              return 'number'
            } else if (col.dataIndex === 'city') {
              return 'city'
            } else if (col.dataIndex === 'name') {
              return 'name'
            } else if (col.dataIndex === 'address') {
              return 'address'
            } else if (col.dataIndex === 'Tel') {
              return 'Tel'
            } else {
              return 'text'
            }
          })(),
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });
    return (
      <div id='main-container'>
        <h1 className='h1'>可编辑表格</h1>
        <Table components={components} bordered dataSource={this.state.data} columns={columnn} />
        <h1 className='h1'>默认表格</h1>
        <Table columns={columns} dataSource={data} />
        <h1 className='h1'>中号表格</h1>
        <Table columns={columns} dataSource={data} size='middle' />
        <br />
        <h1 className='h1'>小号表格</h1>
        <Table columns={columns} dataSource={data} size='small' />
        <h1 className='h1'>带选择框</h1>
        <div style={{ marginBottom: 12 }}>
          <Button type='primary' onClick={this.start} disabled={!hasSelected} loading={loading}>批量操作</Button>
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
        <Table columns={columns} dataSource={data} bordered />
        <br />
        <h1 className='h1'>内嵌表格</h1>
        <Table columns={columns} expandedRowRender={expandedRowRender} dataSource={data} />
        <h1 className='h1'>固定行列</h1>
        <Table columns={columnsFixRow} dataSource={dataFixdRow} scroll={{ x: 1500, y: 200 }} />
      </div>
    )
  }
}

export default table;
