import React from 'react';
import Form from 'components/form';
import Icon from 'components/icon';
import Input from 'components/input';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import './form.css';
const FormItem = Form.Item;
class FormView extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id='main-container'>
        <h1 className='h1'>
          普通登录框
        </h1>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <FormItem>
            {getFieldDecorator('userName', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
          )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type='unlock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
          )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
            <a className='login-form-forgot' href=''>忘记密码</a>
            <Button type='primary' htmlType='submit' className='login-form-button'>
            登录
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedHorizontalLoginForm = Form.create()(FormView);
export default WrappedHorizontalLoginForm;
