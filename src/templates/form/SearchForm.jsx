import React from 'react';
import { Form, Row, Col, DatePicker, Input, Cascader, Button, Icon } from 'components';
const FormItem = Form.Item;
const {RangePicker} = DatePicker;

const labelValue = [
  {
    key: 'name',
    value: '姓名',
    type: 'input'
  }, {
    key: 'phone',
    value: '手机号',
    type: 'input'
  }, {
    key: 'account',
    value: '账号',
    type: 'input'
  }, {
    key: 'address',
    value: '地址',
    type: 'cascader'
  }, {
    key: 'degree',
    value: '学位',
    type: 'input'
  }, {
    key: 'card',
    value: '身份证号',
    type: 'input'
  }, {
    key: 'date',
    value: '起止日期',
    type: 'date'
  }
];

// const searchData = [{
//     value: '上海',
//     label: '上海',
//     children: [{
//       value: '浦东新区',
//       label: '浦东新区',
//       children: [{
//         value: '外滩',
//         label: '外滩',
//       }, {
//         value: '唐镇',
//         label: '唐镇',
//         disabled: true,
//       }],
//     }],
//   }, {
//     value: '浙江',
//     label: '浙江',
//     children: [{
//       value: '杭州',
//       label: '杭州',
//       children: [{
//         value: '西湖',
//         label: '西湖',
//       }],
//     }],
// }];

const idollFormStyle = {
  padding: '24px',
  background: '#fbfbfb',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
}
class AdvancedSearch extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getFields = this.getFields.bind(this);
    this.onCascaderChange = this.onCascaderChange.bind(this);
    this.loadData = this.loadData.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onOk = this.handleOnOk.bind(this);
    this.getInputElement = this.getInputElement.bind(this);
    this.getFormItem = this.getFormItem.bind(this);
    this.state = {
      expand: false,
      text: '未选择',
      loadDataOptions: [{
          value: '浙江',
          label: '浙江',
          isLeaf: false,
      }, {
          value: '江苏',
          label: '江苏',
          isLeaf: false,
      }, {
          value: '上海',
          label: '上海',
          isLeaf: false,
      }]
    };
  }

  onCascaderChange(value, selectOptions) {
    this.setState({
        text: selectOptions.map(o => o.label).join(',')
    })
  };

  loadData(selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      setTimeout(() => {
          targetOption.loading = false;
          targetOption.children = [{
            label: `${targetOption.label} 城市`,
            value: '城市',
          }, {
            label: `${targetOption.label} 地名`,
            value: '地名',
          }];
          this.setState({
            options: [...this.state.loadDataOptions],
          });
      }, 1000)
  }

  onDateChange(date, dateString) {
    console.log('onDateChange', date, dateString);
  }

  handleOnOk() {
    console.log('OK')
  }

  getInputElement(type) {
    switch (type) {
      case 'input' : return <Input placeholder='请输入' />;
      case 'cascader': return <Cascader
        options={this.state.loadDataOptions}
        loadData={this.loadData}
        onChange={this.onCascaderChange}
        changeOnSelect
                />;
      case 'date': return <RangePicker onChange={this.onDateChange} onOk={this.handleOnOk} />;
      default: return <Input placeholder='请输入' />;
    }
  }

  getFormItem(i, count) {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const formItemLayout2 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
    };
    if (labelValue[i].type === 'date') {
      return (
        <Col span={10} key={i} style={{ display: i < count ? 'block' : 'none' }} >
          <FormItem label={labelValue[i].value} {...formItemLayout2} style={{ display: 'flex', marginLeft: '4px' }}>
            {getFieldDecorator(`${labelValue[i].key}`, {
              rules: [{
                required: true,
                message: '不能为空!',
              }],
            })(
              this.getInputElement(labelValue[i].type)
            )}
          </FormItem>
        </Col>
      )
    } else {
      return (
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }} >
          <FormItem label={labelValue[i].value} {...formItemLayout} style={{ display: 'flex' }}>
            {getFieldDecorator(`${labelValue[i].key}`, {
              rules: [{
                required: true,
                message: '不能为空!',
              }],
            })(
              this.getInputElement(labelValue[i].type)
            )}
          </FormItem>
        </Col>
      )
    }
  }

  getFields() {
    const count = this.state.expand ? 7 : 6;
    const children = [];
    for (let i = 0; i < 7; i++) {
      children.push(this.getFormItem(i, count));
    }
    return children;
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.date = [values.date[0].format('YYYY-MM-DD'), values.date[1].format('YYYY-MM-DD')];
      console.log('表单提交内容: ', values);
    });
  }

  handleReset() {
    this.props.form.resetFields();
  }

  toggle() {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    return (
      <Form
        style={idollFormStyle}
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>{this.getFields()}</Row>

        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type='primary' htmlType='submit'>查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清除
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              {this.state.expand ? <span> 收起 <Icon type='up' /></span> : <span> 更多 <Icon type='down' /> </span>}
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}

const SearchForm = Form.create()(AdvancedSearch);
export default SearchForm
