import React from 'react';
import {Table, Divider, Tooltip, Input, Form, Popconfirm, Select, InputNumber} from 'components';
const {Option} = Select;
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput () {
    if (this.props.inputtype === 'number') {
      return <InputNumber style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'city') {
      return <Select style={{ width: 70 }} placeholder='请选择' >
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
      return <NumericInput value={this.props.value} onChange={this.onChangeValue} style={{ width: 200 }} />;
    }
    if (this.props.inputtype === 'name') {
      return <NumericInput value={this.props.value} onChange={this.onChangeValue} style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'Phone') {
      return <NumericInput value={this.props.value} onChange={this.onChangeValue} style={{ width: 130 }} />;
    }
    return <NumericInput value={this.props.value} onChange={this.onChangeValue} />;
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
export default class EditTable extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    flag: false,
    value: '',
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    editingKey: '',
    data: [{
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
    }],
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
    console.log(`onMouseEnter${this.state.flag}`)
    }
  }
  onMouseLeave () {
    if (this.state.flag === true) {
    this.setState((preState, props) => ({
      flag: preState.flag
    }))
    }
  }
  onChangeValue () {
    this.setState({ value: this.props.value });
  }
  start () {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  handleDelete (key) {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.key !== key) });
  }
  onSelectChange (selectedRowKeys) {
    this.setState({ selectedRowKeys });
  }
  edit(key) {
    this.setState({ editingKey: key });
  }
  cancel () {
    this.setState({ editingKey: '' });
  };
  isEditing (record) { return record.key === this.state.editingKey };
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
    const { flag } = this.state;
    // const rowSelection = {
    //   selectedRowKeys,
    //   onChange: this.onSelectChange,
    // };
    // const hasSelected = selectedRowKeys.length > 0;
    // edit
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columnn = this.handleRendercolnmus(flag).map((col) => {
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
      <Table components={components} bordered dataSource={this.state.data} columns={columnn} />
     )
  }
}

class NumericInput extends React.Component {
  constructor(props) {
  super(props);
  this.onChange = this.onChange.bind(this)
  this.onBlur = this.onBlur.bind(this)
  }
  onChange (e) {
    const { value } = e.target;
      this.props.onChange(value);
  }
  onBlur () {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }


  render() {
    const { value } = this.props;
    return (
      <Tooltip
        trigger='focus'
        title={value}
        placement='topLeft'
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder='Input here'
        />
      </Tooltip>
    );
  }
}
