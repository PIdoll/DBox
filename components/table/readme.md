
当有大量结构化的数据需要展现，同时可对数据进行排序、搜索、分页、自定义操作等复杂行为时；

##### **默认表格**
设置columns,data来决定展示的内容
```jsx
import {Table, Divider} from 'dbox-ui';
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
<Table columns={columns} dataSource={data} />
```
##### **三种尺寸**
通过设置size设置为large,middle,small来控制表格的大小默认为large
```jsx
import {Table, Divider} from 'dbox-ui';
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
<div>
<Table columns={columns} dataSource={data} />
<Table columns={columns} dataSource={data} size='middle' />
<Table columns={columns} dataSource={data} size='small' />
</div>
```
##### **边框表格**
通过设置bordered来设置是否展示表格边框
```jsx
import {Table, Divider} from 'dbox-ui';
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
<Table columns={columns} dataSource={data} bordered />
```
##### **带选择框**
通过选择框来搜集选中单元格的信息
```jsx
import {Table, Divider, Button, Checkbox} from 'dbox-ui';
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

class TableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      loading: false,
    }
    this.start = this.start.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
  };
  start () {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange (selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <Button type='primary' onClick={this.start} disabled={!hasSelected} loading={loading}>批量操作</Button>
          <span style={{ marginLeft: 16 }}>
            {hasSelected ? `已选择 ${selectedRowKeys.length} 条数据` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
}
<TableView />
```

##### **异步数据**
通过ajax实时动态获取后台数据
```jsx
import {Table} from 'dbox-ui';
import reqwest from 'reqwest'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [],
    pagination: {},
    loading: false,
  };
    this.handleTableChange = this.handleTableChange.bind(this)
    this.fetch = this.fetch.bind(this)
  }
  componentDidMount() {
    this.fetch();
  }
  handleTableChange (pagination, filters, sorter) {
    const pager = { ...this.state.pagination };
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
  }
  fetch (params = {}) {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }

  render() {
    return (
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    )
  }
}
<App />
```
##### **内嵌表格**
对于复杂表格的嵌套
```jsx
import {Table, Divider, Badge} from 'dbox-ui';
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
  const expandedRowRender = () => {
  const columnsSubmenu = [
    { title: '操作日期', dataIndex: 'date', key: 'date' },
    { title: '操作人员', dataIndex: 'name', key: 'name' },
    { title: '操作状态', key: 'state', render: () => <span className='state' style={{position: 'relative'}}><Badge dot status='success' text='成功' /></span> },
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
      date: '2018-8-8',
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
<Table columns={columns} expandedRowRender={expandedRowRender} dataSource={data} />
```
##### **行列合并**
对于一些公共数据的合并
```jsx
import {Table} from 'dbox-ui';
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
<Table columns={columnsCol} dataSource={dataCol} bordered />
```
#### **固定行列**
对某些特殊列进行固定，方便操作
```jsx
import {Table, Divider} from 'dbox-ui';
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
  sorter: (a, b) => a.age - b.age
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
<Table columns={columnsFixRow} dataSource={dataFixdRow} scroll={{ x: 1500, y: 200 }} />
```

#### **可编辑表格**
对表格内数据进行复杂操作
```jsx
import {Table, Divider, Tooltip, Input, Form, Popconfirm, Select, InputNumber} from 'dbox-ui';
const NumericInput = Table.NumericInput;
const {Option} = Select;
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
let dataSorce = [{
  key: '1',
  name: '刘乐冉',
  age: 26,
  city: '北京',
  Phone: '13943250086',
  address: '上海市浦东新区唐镇上丰路88号',
}, {
  key: '2',
  name: '李佳欣',
  age: 24,
  city: '南京',
  Phone: '13262717838',
  address: '上海市浦东新区唐镇上丰路88号',
}, {
  key: '3',
  name: '孙柔佳',
  age: 22,
  city: '上海',
  Phone: '13950035537',
  address: '上海市浦东新区唐镇上丰路88号',
}, {
  key: '4',
  name: '张仁士',
  age: 28,
  city: '合肥',
  Phone: '13947766628',
  address: '上海市浦东新区唐镇上丰路88号',
}, {
  key: '5',
  name: '王子琪',
  age: 32,
  city: '郑州',
  Phone: '13964507501',
  address: '上海市浦东新区唐镇上丰路88号',
}, {
  key: '6',
  name: '陈卜宣',
  age: 27,
  city: '沈阳',
  Phone: '13262836283',
  address: '上海市浦东新区唐镇上丰路88号',
}];

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput () {
    if (this.props.inputtype === 'number') {
      return <InputNumber style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'city') {
      return <Select style={{ width: 80 }} placeholder='请选择' >
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
      return <NumericInput initialvalue={this.props.value} onChange={this.onChangeValue} />;
    }
    if (this.props.inputtype === 'Phone') {
      return <NumericInput initialvalue={this.props.value} onChange={this.onChangeValue} />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      // title,
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

class TableView extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    flag: false,
    visible: false,
    value: '',
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    editingKey: '',
  };
  this.onMouseEnter = this.onMouseEnter.bind(this);
  this.onMouseLeave = this.onMouseLeave.bind(this);
  this.onChangeValue = this.onChangeValue.bind(this);
  this.start = this.start.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.onSelectChange = this.onSelectChange.bind(this);
  this.edit = this.edit.bind(this);
  this.cancel = this.cancel.bind(this);
  this.isEditing = this.isEditing.bind(this);
  this.save = this.save.bind(this);
  this.handleRendercolnmus = this.handleRendercolnmus.bind(this);
}
  handleRendercolnmus() {
    const columnss = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (text, record) => {
        return text
        }
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      editable: true,
      render: (text, record) => {
        return text
        }
    }, {
      title: '居住地',
      dataIndex: 'city',
      key: 'city',
      editable: true,
      render: (text, record) => {
        return text
        }
    }, {
      title: '手机号',
      dataIndex: 'Phone',
      key: 'Phone',
      editable: true,
      render: (text, record) => {
        return <Tooltip placement='topLeft' title={this.state.flag ? text : ''}><div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</div></Tooltip>
        }
    }, {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      editable: true,
      render: (text, record) => {
        return <Tooltip placement='topLeft' title={this.state.flag ? text : ''}><div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>{text}</div></Tooltip>
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
    return columnss;
  }
  onMouseEnter (e) {
    const parentWidth = e.target.parentNode.offsetWidth
    const selfWdith = e.target.parentNode.lastElementChild.offsetWidth + 2
    const parentPadding = e.target.parentNode.lastElementChild.offsetLeft
    if ((selfWdith > parentWidth - (parentPadding * 2))) {
      this.setState({flag: true});
    }
  }
  onMouseLeave () {
    if (this.state.flag === true) {
    this.setState((preState, props) => ({
      flag: preState.flag
    }))
    }
  }
  onChangeValue () { this.setState({ value: this.props.value }) }
  start () {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  handleDelete (key) { dataSorce = dataSorce.filter(item => item.key !== key); this.setState({loading: false}) }
  onSelectChange (selectedRowKeys) { this.setState({ selectedRowKeys }) }
  edit(key) { this.setState({ editingKey: key }) };
  cancel () { this.setState({ editingKey: '' }) };
  isEditing (record) { return record.key === this.state.editingKey };
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const index = dataSorce.findIndex(item => key === item.key);
      if (index > -1) {
        const item = dataSorce[index];
        dataSorce.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ editingKey: '' });
      } else {
        dataSorce.push(row);
        this.setState({ editingKey: '' });
      }
    });
  }
  render () {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columnn = this.handleRendercolnmus(this.state.flag).map((col) => {
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
            } else if (col.dataIndex === 'address') {
              return 'address'
            } else if (col.dataIndex === 'Phone') {
              return 'Phone'
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
      <Table components={components} bordered dataSource={dataSorce} columns={columnn} />
     )
  }
}

<TableView />
```


#### **Table**

| 参数           | 说明                     | 类型             | 默认值   |
|---------------|--------------------------|-----------------|---------|
| rowSelection  | 列表项是否可选择，配置项 | Object  | null  |
| pagination    | 分页器，配置项参考 pagination，设为 false 时不显示分页 | Object/bool |  |
| size          | 正常或迷你类型，`large` `middle` or `small`  | String | `large` |
| dataSource    | 数据数组 | Array |            |
| columns       | 表格列的配置描述，具体项见下表 | Array | - |
| rowClassName  | 表格行的类名      | Function(record, index):string | - |
| expandedRowRender  | 额外的展开行 | Function | - |
| defaultExpandedRowKeys | 默认展开的行 | Array | - |
| expandedRowKeys | 展开的行，控制属性 | Array | - |
| onChange      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
| loading       | 页面是否加载中 | Boolean | false |
| locale        | 默认文案设置，目前包括排序、过滤、空数据文案 | Object | filterConfirm: '确定' <br> filterReset: '重置' <br> emptyText: '暂无数据' <br> |
| onRowClick    | 处理行点击事件 | Function(record, index)   | - |
| bordered  | 是否展示外边框和列边框 | Boolean | false      |
| zebraColor  | 是否展示斑马线表格 | Boolean | false      |
| showHeader  | 是否显示表头 | Boolean          | true      |
| footer  | 表格底部自定义渲染函数         | Function(currentPageData)   | |
| title  | 表格头部自定义渲染函数         | Function(currentPageData)   | |
| scroll  | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{{ x: true, y: 300 }}` | Object   | -  |

#### **Column**

列描述数据对象，是 columns 中的一项。

| 参数       | 说明                       | 类型            |  默认值  |
|-----------|----------------------------|-----------------|---------|
| title      | 列头显示文字               | String or React.Element | - |
| key        | React 需要的 key，建议设置 | String          | - |
| hidden     | 表头是否显隐 | Boolean          | - |
| dataIndex  | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | String | - |
| render     | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并 | Function(text, record, index) {} | - |
| filters    | 表头的筛选菜单项           | Array           | - |
| filterMultiple | 是否多选 | Boolean    | true    |
| colSpan    | 表头列合并,设置为 0 时，不渲染 | Number      |         |
| width      | 列宽度 | String or Number | -  |
| className  | 列的 className             | String          |  -      |
| fixed      | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | Boolean or String | false |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | Boolean or String | - |

#### **rowSelection**

选择功能的配置。

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|---------|
| type | 多选/单选，`checkbox` or `radio` | String | `checkbox`  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | Array | []  |
| onChange | 选中项发生变化的时的回调 | Function(selectedRowKeys, selectedRows) | -   |
| onSelect | 用户手动选择/取消选择某列的回调         | Function(record, selected, selectedRows) |   -   |
| onSelectAll | 用户手动选择/取消选择所有列的回调    | Function(selected, selectedRows, changeRows) |   -   |

## 注意

按照 React 的[规范](http://facebook.github.io/react/docs/multiple-dbox-ui.html#dynamic-children)，所有的组件数组必须绑定 key。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。

```jsx static
// 比如你的数据主键是 uid
return <Table rowKey="uid" />;
// 或
return <Table rowKey={record => record.uid} />;
```


```jsx noeditor
import {BackTop} from 'dbox-ui';
import TableView from '../prevPage/table';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <TableView />
</div>
```
