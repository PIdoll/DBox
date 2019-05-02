import React from 'react';
import { Form, Select, Input, Cascader, Checkbox, Button } from 'components';
const {Option} = Select;
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
const text = '两次密码输入不一致!';
class Registration extends React.Component {
  constructor() {
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


  validateToNextPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback(text);
    } else {
      callback();
    }
  }

  handleConfirmBlur(e) {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('提交表单内容: ', values);
      }
    });
  }

  render() {
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
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
        <FormItem
          {...formItemLayout}
          label='邮箱'
        >
          {getFieldDecorator('Email', {
            rules: [{
              type: 'email', message: '输入项不符合邮箱格式!',
            }, {
              required: true, message: '请输入你的邮箱账号!',
            }],
          })(
            <Input placeholder='请输入邮箱账号' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='密码'
        >
          {getFieldDecorator('Password', {
            rules: [{
              required: true, message: '请输入您的密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type='password' placeholder='请输入密码' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='确认密码'
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请输入您的确认密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type='password' onBlur={this.handleConfirmBlur} placeholder='请输入确认密码' />
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
            <Input placeholder='选填' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='地址'
        >
          {getFieldDecorator('residences', {
            defaultValue: ['shanghai', 'pudongxinqu', 'dongfangminzhu'],
            rules: [{ type: 'array', required: true, message: '请选择地址!' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='手机号码'
        >
          {getFieldDecorator('Tel', {
            rules: [{ required: true, message: '请输入您的手机号码!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href=''>agreement</a></Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>注册</Button>
        </FormItem>
      </Form>
    )
  }
}
const RegistrationForm = Form.create()(Registration);
export default RegistrationForm;
