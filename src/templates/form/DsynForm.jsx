import React from 'react';
import { Form, Input, Checkbox, Button } from 'components';
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class FormDemo extends React.Component {
  constructor() {
    super();
    this.check = this.check.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      phone: false,
    }
  }

  check() {
    this.props.form.validateFields((err, values) => {
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

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label='姓名'>
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '不能为空',
            }],
          })(
            <Input placeholder='请输入' />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label='手机号'>
          {getFieldDecorator(this.state.phone ? 'phone' : 'input', {
            rules: [{
              required: this.state.phone,
              message: '不能为空',
            }],
          })(
            <Input placeholder={this.state.phone ? '请输入' : '选填'} />
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
          <Button type='primary' onClick={this.check}>
            提交
          </Button>
        </FormItem>
      </div>
    )
  }
}
const DsynForm = Form.create()(FormDemo);
export default DsynForm;

