import React from 'react';
import { Form, Input, Select, Button } from 'components';
const {Option} = Select;
const FormItem = Form.Item;
class FormDemo extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('表单提交内容: ', values);
      }
    });
  }

  handleSelectChange(value) {
    console.log(value);
    this.props.form.setFieldsValue({
      email: `123456789${value === '@qq.com' ? '@qq.com' : '@163.com'}`,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label='邮箱号'
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
          label='邮箱类型'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('emailType', {
            rules: [{ required: true, message: '不能为空' }],
          })(
            <Select
              placeholder='请选择邮箱类型'
              onChange={this.handleSelectChange}
            >
              <Option value='@qq.com'>@qq.com</Option>
              <Option value='@163.com'>@163.com</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type='primary' htmlType='submit'>
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}
const LinkForm = Form.create()(FormDemo);
export default LinkForm
