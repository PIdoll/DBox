import React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'components';
const FormItem = Form.Item;

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
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
      <Form onSubmit={this.handleSubmit} style={{width: '300px', margin: '0 auto'}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
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
          {
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )
          }
          <a href='' style={{float: 'right'}}>忘记密码</a> <br />
        </FormItem>
        <Button type='primary' htmlType='submit' style={{width: '100%', margin: 0}}>
            登录
        </Button>
        <br />
        或者 <a href=''>注册</a>
      </Form>
    );
  }
}

const LoginForm = Form.create()(Login);
export default LoginForm;
