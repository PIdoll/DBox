
用于可配置校验规则的数据提交，输入数据包含输入框、单选框、多选框、日期选择框、下拉框等元素。

##### **登录框**
```jsx
import { Form,Input,Icon,Checkbox,Button } from 'dbox-ui';
const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('输入框中的内容 ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{width: '300px'}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )
          }
          <a href="" style={{float: 'right'}}>忘记密码</a> <br />
        </FormItem>
        <Button type="primary" htmlType="submit" style={{width: '100%',margin: 0}}>
            登录
        </Button>
        <br />
        或者 <a href="">注册</a>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);
<WrappedLoginForm />
```

##### **注册**
```jsx
import { Form,Select,Input,Cascader,Checkbox,Button } from 'dbox-ui';
const FormItem = Form.Item;
const residences = [{
  value: 'shanghai',
  label: '上海',
  children: [{
    value: 'pudongxinqu',
    label: '浦东新区',
    children: [{
      value: 'dongfangminzhu',
      label: '东方明珠',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'xuanwuhu',
      label: '玄武湖',
    }],
  }],
}];
class RegistrationForm extends React.Component {

  constructor(){
    super();
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }


  validateToNextPassword(rule, value, callback){
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  compareToFirstPassword(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致!');
    } else {
      callback();
    }
  }

  handleConfirmBlur(e){
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('提交表单内容: ', values);
      }
    });
  }

  render(){
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

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return(
      <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '输入项不符合邮箱格式!',
            }, {
              required: true, message: '请输入你的邮箱账号!',
            }],
          })(
            <Input placeholder="请输入邮箱账号"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入您的密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" placeholder="请输入密码"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请输入您的确认密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请输入确认密码"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              别名
            </span>
          )}
        >
          {getFieldDecorator('nickname')(
            <Input placeholder="选填"/>
          )}
        </FormItem>

         <FormItem
          {...formItemLayout}
          label="地址"
        >
          {getFieldDecorator('residence', {
            initialValue: ['shanghai', 'pudongxinqu', 'dongfangminzhu'],
            rules: [{ type: 'array', required: true, message: '请选择地址!' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="手机号码"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的手机号码!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>

         <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">注册</Button>
        </FormItem>
      </Form>
    )
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
<WrappedRegistrationForm />
```

##### **高级搜索**
```jsx
import { Form,Row,Col,DatePicker,Input,Cascader,Button,Icon } from 'dbox-ui';
const FormItem = Form.Item;
const {RangePicker} = DatePicker;

const labelValue = [
  {
    key: 'name',
    value: '姓名',
    type: 'input'
  },{
    key: 'phone',
    value: '手机号',
    type: 'input'
  },{
    key: 'account',
    value: '账号',
    type: 'input'
  },{
    key: 'address',
    value: '地址',
    type: 'cascader'
  },{
    key: 'degree',
    value: '学位',
    type: 'input'
  },{
    key: 'card',
    value: '身份证号',
    type: 'input'
  },{
    key: 'date',
    value: '起止日期',
    type: 'date'
  }
];

const searchData = [{
    value: '上海',
    label: '上海',
    children: [{
      value: '浦东新区',
      label: '浦东新区',
      children: [{
        value: '外滩',
        label: '外滩',
      }, {
        value: '唐镇',
        label: '唐镇',
        disabled: true,
      }],
    }],
  }, {
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
}];

const idollFormStyle = {
  padding: '24px',
  background: '#fbfbfb',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
}
class AdvancedSearchForm extends React.Component {
  constructor(){
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
      },{
          value: '上海',
          label: '上海',
          isLeaf: false,
      }]
    };

  }

  onCascaderChange(value, selectOptions){
    this.setState({
        text: selectOptions.map(o => o.label).join(',')
    })
  };

  loadData(selectedOptions){
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

  onDateChange(date, dateString){
    console.log('onDateChange', date, dateString);
  }

  handleOnOk(){
    console.log('OK')
  }

  getInputElement(type) {
    switch(type){
      case  'input' : return <Input placeholder='请输入'/>;
      case 'cascader': return <Cascader
                options={this.state.loadDataOptions}
                loadData={this.loadData}
                onChange={this.onCascaderChange}
                changeOnSelect
                />;
      case 'date': return <RangePicker onChange={this.onDateChange} onOk={this.handleOnOk} />;
      default: return <Input placeholder='请输入'/>;
    }
  }

  getFormItem(i,count) {
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
    if(labelValue[i].type === 'date') {
      return (
        <Col span={10} key={i} style={{ display: i < count ? 'block' : 'none' }} >
          <FormItem label={labelValue[i].value} {...formItemLayout2} style={{ display: 'flex',marginLeft: '4px'}}>
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
          <FormItem label={labelValue[i].value} {...formItemLayout} style={{ display: 'flex'}}>
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
      children.push(this.getFormItem(i,count));
    }
    return children;
  }

  handleSearch(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.date =  [values.date[0].format('YYYY-MM-DD'), values.date[1].format('YYYY-MM-DD')];
      console.log('表单提交内容: ', values);
    });
  }

  handleReset(){
    this.props.form.resetFields();
  }

  toggle(){
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render(){

    return (
      <Form
        style={idollFormStyle}
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>{this.getFields()}</Row>

        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清除
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              {this.state.expand ? <span> 收起 <Icon type= 'up'/></span>: <span> 更多 <Icon type= 'down'/> </span>}
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
<WrappedAdvancedSearchForm />

```

##### **紧凑型表单**
```jsx
import { Form,Row,Col,Select,DatePicker,Input,Button } from 'dbox-ui';
const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;
class CompactSearchForm extends React.Component {
  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleOnOk = this.handleOnOk.bind(this);
  }

  onDateChange(date, dateString){
    console.log('onDateChange', date, dateString);
  }

  handleOnOk(){
    console.log('OK')
  }

  handleSearch(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.date =  [values.date[0].format('YYYY-MM-DD'), values.date[1].format('YYYY-MM-DD')];
      console.log('表单提交内容: ', values);
    });
  }

  handleReset(){
    this.props.form.resetFields();
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 9 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
      },
    };
    const formItemLayout2 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
      },
    };
    const beforeLength = '100px';

    return (
       <Form onSubmit={this.handleSearch}>
        <Row gutter={24}>
          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='姓名'
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '不能为空!',
                }],
              })(
                <Input placeholder='请输入'/>
              )}
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='手机号码'
            >
              {getFieldDecorator('phone', {
                rules: [{
                  required: true, message: '不能为空!',
                }],
              })(
                <Input placeholder='请输入'/>
              )}
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='邮箱'
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '输入项不符合邮箱格式!',
                },{
                  required: true, message: '不能为空!',
                }],
              })(
                <Input placeholder='请输入'/>
              )}
            </FormItem>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='地址'
            >
              {getFieldDecorator('address', {
                rules: [{
                  required: true, message: '不能为空!',
                }],
              })(
                <Select placeholder='请选择' allowClear>
                    <Option value='beijing'>北京</Option>
                    <Option value='shanghai'>上海</Option>
                    <Option value='guangzhou'>广州</Option>
                    <Option value='shenzhen'>深圳</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout2}
              formType='compact'
              label='起止日期日期'
            >
              {getFieldDecorator('date', {
                rules: [{
                  required: true, message: '不能为空!',
                }],
              })(
                <RangePicker onChange={this.onDateChange} onOk={this.handleOnOk} />
              )}
            </FormItem>
          </Col>
        </Row>

         <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清除
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrappedCompactSearchForm = Form.create()(CompactSearchForm);
<WrappedCompactSearchForm />

```

##### **弹出层中新建表单**
```jsx
import { Form,Row,Col,Button,Modal,Input,Icon } from 'dbox-ui';
const FormItem = Form.Item;
class modalForm extends React.Component {
  constructor(){
    super();
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
  }

  compareToFirstPassword(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致!');
    } else {
      callback();
    }
  }
  render() {
    const {visible, onCancel, onCreate, form,} = this.props;
    const { getFieldDecorator } = form;
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
    return (
      <Modal
        visible={visible}
        title="注册信息"
        okText="注册"
        onCancel={onCancel}
        onOk={onCreate}
      >

        <Form onSubmit={this.handleSubmit} style={{width: '300px'}}>
          <FormItem  label='账号' {...formItemLayout}>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '不能为空!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
            )}
          </FormItem>
          <FormItem label='密码' {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '不能为空!' }],
            })(
              <Input prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>

            <FormItem label='确认密码' {...formItemLayout}>
            {getFieldDecorator('confirmPassword', {
              rules: [{ required: true, message: '不能为空!'
              }, {validator: this.compareToFirstPassword,
                }],
            })(
              <Input prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
            )}
          </FormItem>
        </Form>

      </Modal>
    );
  }
}
const CollectionCreateForm = Form.create()(
    modalForm
);

class ModalNewForm extends React.Component {
  constructor(){
    super();
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.saveFormRef = this.saveFormRef.bind(this);
    this.state = {
      visible: false,
    }
  }

  showModal(){
    this.setState({ visible: true });
  }

  handleCancel(){
    this.setState({ visible: false });
  }

  handleCreate(){
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('表单提交内容: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef(formRef){
    this.formRef = formRef;
  }


  render(){
      return(
        <div>
        <Button type="primary" onClick={this.showModal}>注册</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
      )
  }
}

<ModalNewForm />
```

##### **表单联动**
```jsx
import { Form,Row,Col,Input,Select,Button } from 'dbox-ui';
const FormItem = Form.Item;
class FormDemo extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('表单提交内容: ', values);
      }
    });
  }

  handleSelectChange(value){
    console.log(value);
    this.props.form.setFieldsValue({
      email: `123456789${value === '@qq.com' ? '@qq.com' : '@163.com'}`,
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="邮箱号"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '不能为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="邮箱类型"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('emailType', {
            rules: [{ required: true, message: '不能为空' }],
          })(
            <Select
              placeholder="请选择邮箱类型"
              onChange={this.handleSelectChange}
            >
              <Option value="@qq.com">@qq.com</Option>
              <Option value="@163.com">@163.com</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}
const WrappedFormDemo = Form.create()(FormDemo);
<WrappedFormDemo />
```

##### **自定义校验**
```jsx
import { Form,Row,Col,Input,DatePicker,TimePicker,Cascader,InputNumber,Select,Button } from 'dbox-ui';
const FormItem = Form.Item;
const Option = Select.Option;
class FormDemo extends React.Component {
  render(){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="错误"
          validateStatus="error"
          help="输入数字和字母组合"
        >
          <Input placeholder="错误输入" id="error" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="警告"
          validateStatus="warning"
        >
          <Input placeholder="警告" id="warning" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="验证"
          hasFeedback
          validateStatus="validating"
          help="信息正在验证..."
        >
          <Input placeholder='验证输入' id="validating" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="成功"
          hasFeedback
          validateStatus="success"
        >
          <Input placeholder="正确输入" id="success" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="警告"
          hasFeedback
          validateStatus="warning"
        >
          <Input placeholder="警告" id="warning" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="错误"
          hasFeedback
          validateStatus="error"
          help="输入数字和字母组合"
        >
          <Input placeholder="错误输入" id="error" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="成功"
          hasFeedback
          validateStatus="success"
        >
          <DatePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="警告"
          hasFeedback
          validateStatus="warning"
        >
          <TimePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="错误"
          hasFeedback
          validateStatus="error"
        >
          <Select defaultValue="1">
            <Option value="1">北京</Option>
            <Option value="2">上海</Option>
            <Option value="3">广州</Option>
          </Select>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="验证"
          hasFeedback
          validateStatus="validating"
          help="信息正在验证..."
        >
          <Cascader defaultValue={['1']} options={[]} />
        </FormItem>

        <FormItem
          label="内联"
          {...formItemLayout}
        >
          <Col span={11}>
            <FormItem validateStatus="error" help="请选择正确的日期">
              <DatePicker />
            </FormItem>
          </Col>
          <Col span={2}>
            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
              -
            </span>
          </Col>
          <Col span={11}>
            <FormItem>
              <DatePicker />
            </FormItem>
          </Col>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="成功"
          hasFeedback
          validateStatus="success"
        >
          <InputNumber style={{ width: '100%' }} />
        </FormItem>
    </Form>
    )
  }
}
<FormDemo />
```

##### **动态校验规则**
```jsx
import { Form,Row,Col,Select,Input,Checkbox,Button } from 'dbox-ui';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class FormDemo extends React.Component {
  constructor(){
    super();
    this.check = this.check.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      phone: false,
    }
  }

  check(){
    this.props.form.validateFields((err,values) => {
        if (!err) {
          console.log('表单提交内容: ', values);
        }
      },
    );
  }

  handleChange(e) {
    this.setState({
      phone: e.target.checked,
    }, () => {
      this.props.form.validateFields(['phone'], { force: true });
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <FormItem {...formItemLayout} label="姓名">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '不能为空',
            }],
          })(
            <Input placeholder="请输入" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="手机号">
          {getFieldDecorator('phone', {
            rules: [{
              required: this.state.phone,
              message: '不能为空',
            }],
          })(
            <Input placeholder={this.state.phone?"请输入":"选填"} />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Checkbox
            checked={this.state.phone}
            onChange={this.handleChange}
          >
            手机号是否必填
          </Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            提交
          </Button>
        </FormItem>
      </div>
    )
  }
}
const WrappedFormDemo = Form.create()(FormDemo);
<WrappedFormDemo />
```

##### **校验其他组件**
```jsx
import { Form,Row,Col,Select,Radio,InputNumber,Switch,Slider,Button } from 'dbox-ui';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
class FormDemo extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 9 },
    };
    return(
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="单选"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: '不能为空!' },
              ],
            })(
              <Select placeholder="请选择">
                <Option value="shanghai">上海</Option>
                <Option value="beijing">北京</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="多选"
          >
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: '不能为空', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="请选择">
                <Option value="shanghai">上海</Option>
                <Option value="beijing">北京</Option>
                <Option value="gunagzhou">广州</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="数字输入"
          >
            {getFieldDecorator('input-number', { initialValue: 3 })(
              <InputNumber min={1} max={10} />
            )}
            <span> 空位</span>
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="开关"
          >
            {getFieldDecorator('switch')(
              <Switch />
            )}
          </FormItem>

           <FormItem
            {...formItemLayout}
            label="滑动条"
            >
            {getFieldDecorator('slider',{ initialValue: [10, 30]})(
              <Slider range />
            )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="单选组"
            >
              {getFieldDecorator('radio-group')(
                <RadioGroup>
                  <Radio value="a">A</Radio>
                  <Radio value="b">B</Radio>
                  <Radio value="c">C</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="单选按钮"
            >
              {getFieldDecorator('radio-button')(
                <RadioGroup>
                  <RadioButton value="1">按钮 1</RadioButton>
                  <RadioButton value="2">按钮 2</RadioButton>
                  <RadioButton value="3">按钮 3</RadioButton>
                </RadioGroup>
              )}
            </FormItem>


           <FormItem
              wrapperCol={{ span: 12, offset: 6 }}
           >
            <Button type="primary" htmlType="submit">提交</Button>
           </FormItem>
        </Form>
    )
  }
}
const WrappedFormDemo = Form.create()(FormDemo);
<WrappedFormDemo />
```


##### **Form**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 经 `Form.create()` 包装过的组件会自带 `this.props.form` 属性，直接传给 Form 即可。1.7.0 之后无需设置 | object | 无 |
| hideRequiredMark | 隐藏所有表单项的必选标记 | Boolean | true |
| onSubmit | 数据验证成功后回调事件 | Function(e:Event) |  |

##### **Form.create(options)**

使用方式如下：

```jsx static
class CustomizedForm extends React.Component {}

CustomizedForm = Form.create({})(CustomizedForm);
```

`options` 的配置项如下。

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| mapPropsToFields | 把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 [`Form.createFormField`](#Form.createFormField) 标记 | (props) => Object{ fieldName: FormField { value } } |
| validateMessages | 默认校验信息，可用于把默认错误信息改为中文等，格式与 [newMessages](https://github.com/yiminghe/async-validator/blob/master/src/messages.js) 返回值一致 | Object {nested.path: String } |
| onFieldsChange | 当 `Form.Item` 子节点的值发生改变时触发，可以把对应的值转存到 Redux store | Function(props, fields) |
| onValuesChange | 任一表单域的值发生改变时的回调 | (props, values) => void |

经过 `Form.create` 之后如果要拿到 `ref`，可以使用 `rc-form` 提供的 `wrappedComponentRef`
```jsx static
class CustomizedForm extends React.Component { ... }

// use wrappedComponentRef
const EnhancedForm =  Form.create()(CustomizedForm);
<EnhancedForm wrappedComponentRef={(form) => this.form = form} />
this.form // => The instance of CustomizedForm
```
经过 `Form.create` 包装的组件将会自带 `this.props.form` 属性，`this.props.form` 提供的 API 如下：

注意：使用 `getFieldsValue` `getFieldValue` `setFieldsValue` 等时，应确保对应的 field 已经用 `getFieldDecorator` 注册过了。

| 方法      | 说明                                     | 类型       |
| ------- | -------------------------------------- | -------- |
| getFieldDecorator | 用于和表单进行双向绑定，详见下方描述 |  |
| getFieldError | 获取某个输入控件的 Error | Function(name) |
| getFieldsError | 获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error | Function(\[names: string\[]]) |
| getFieldsValue | 获取一组输入控件的值，如不传入参数，则获取全部组件的值 | Function(\[fieldNames: string\[]]) |
| getFieldValue | 获取一个输入控件的值 | Function(fieldName: string) |
| isFieldsTouched | 判断是否任一输入控件经历过 `getFieldDecorator` 的值收集时机 `options.trigger` | (names?: string\[]) => boolean |
| isFieldTouched | 判断一个输入控件是否经历过 `getFieldDecorator` 的值收集时机 `options.trigger` | (name: string) => boolean |
| isFieldValidating | 判断一个输入控件是否在校验状态 | Function(name) |
| resetFields | 重置一组输入控件的值（为 `initialValue`）与状态，如不传入参数，则重置所有组件 | Function(\[names: string\[]]) |
| setFields | 设置一组输入控件的值与 Error。| ({ \[fieldName]:{ value: any, errors: [Error] } }) => void|
| setFieldsValue | 设置一组输入控件的值（注意：不要在 `componentWillReceiveProps` 内使用，否则会导致死循环） | ({ \[fieldName]:value }) => void |
| validateFields | 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件 | (\[fieldNames: string\[]], [options: object], callback: Function(errors, values)) => void |
| validateFieldsAndScroll | 与 `validateFields` 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围 | 参考 `validateFields` |

##### **validateFields/validateFieldsAndScroll**

```jsx static
const { form: { validateFields } } = this.props;
validateFields((errors, values) => {
  // ...
});
validateFields(['field1', 'field2'], (errors, values) => {
  // ...
});
validateFields(['field1', 'field2'], options, (errors, values) => {
  // ...
});
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options.first | 若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验 | boolean | false |
| options.firstFields | 指定表单域会在碰到第一个失败了的校验规则后停止校验 | String\[] | \[] |
| options.force | 对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验 | boolean | false |
| options.scroll | 定义 validateFieldsAndScroll 的滚动行为 | Object | {} |

##### ** validateFields 的 callback 参数示例**

- `errors`:

   ```jsx static
   {
     "userName": {
       "errors": [
         {
           "message": "Please input your username!",
           "field": "userName"
         }
       ]
     },
     "password": {
       "errors": [
         {
           "message": "Please input your Password!",
           "field": "password"
         }
       ]
     }
   }
   ```

- `values`:

   ```jsx static
   {
     "userName": "username",
     "password": "password",
   }
   ```

##### **  Form.createFormField **

用于标记 `mapPropsToFields` 返回的表单域数据。

##### ** this.props.form.getFieldDecorator(id, options) **

经过 `getFieldDecorator` 包装的控件，表单控件会自动添加 `value`（或 `valuePropName` 指定的其他属性） `onChange`（或 `trigger` 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：

1. 你**不再需要也不应该**用 `onChange` 来做同步，但还是可以继续监听 `onChange` 等事件。
2. 你不能用控件的 `value` `defaultValue` 等属性来设置表单域的值，默认值可以用 `getFieldDecorator` 里的 `initialValue`。
3. 你不应该用 `setState`，可以使用 `this.props.form.setFieldsValue` 来动态改变表单值。

##### ** 特别注意 **

1. `getFieldDecorator` 不能用于装饰纯函数组件。
2. 如果使用的是 `react@<15.3.0`，则 `getFieldDecorator` 调用不能位于纯函数组件中: <https://github.com/facebook/react/pull/6534>

##### ** getFieldDecorator(id, options) 参数 **

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | 必填输入控件唯一标志。支持嵌套式的[写法](https://github.com/react-component/form/pull/48)。 | string |  |
| options.getValueFromEvent | 可以把 onChange 的参数（如 event）转化为控件的值 | function(..args) | [reference](https://github.com/react-component/form#option-object) |
| options.initialValue | 子节点的初始值，类型、可选值均由子节点决定(注意：由于内部校验时使用 `===` 判断是否变化，建议使用变量缓存所需设置的值而非直接使用字面量)) |  |  |
| options.normalize | 转换默认的 value 给控件| function(value, prevValue, allValues): any | - |
| options.rules | 校验规则，参考下方文档 | object\[] |  |
| options.trigger | 收集子节点的值的时机 | string | 'onChange' |
| options.validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验 | boolean | false |
| options.validateTrigger | 校验子节点值的时机 | string/string\[] | 'onChange' |
| options.valuePropName | 子节点的值的属性，如 Switch 的是 'checked' | string | 'value' |

更多参数请查看 [rc-form option](https://github.com/react-component/form#option-object)。

##### ** Form.Item  **

注意：

- 一个 Form.Item 建议只放一个被 getFieldDecorator 装饰过的 child，当有多个被装饰过的 child 时，`help` `required` `validateStatus` 无法自动生成。
- `2.2.0` 之前，只有当表单域为 Form.Item 的子元素时，才会自动生成 `help` `required` `validateStatus`，嵌套情况需要自行设置。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | boolean | true |
| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | string/ReactNode |  |
| formType | 表单类型，目前有紧凑型和默认型，紧凑型设置为 `compact`  | string |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | false |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string/ReactNode |  |
| label | label 标签的文本 | string/ReactNode |  |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | [object] |  |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | false |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | string |  |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | [object] |  |

##### **校验规则**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enum | 枚举类型 | string | - |
| len | 字段长度 | number | - |
| max | 最大长度 | number | - |
| message | 校验文案 | string | - |
| min | 最小长度 | number | - |
| pattern | 正则表达式校验 | RegExp | - |
| required | 是否必选 | boolean | `false` |
| transform | 校验前转换字段值 | function(value) => transformedValue:any | - |
| type | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | 'string' |
| validator | 自定义校验（注意，[callback 必须被调用]） | function(rule, value, callback) | - |
| whitespace | 必选时，空格是否会被视为错误 | boolean | `false` |

更多高级用法可研究 [async-validator](https://github.com/yiminghe/async-validator)。


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
