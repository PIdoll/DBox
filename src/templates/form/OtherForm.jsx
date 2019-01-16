import React from 'react';
import { Form, Select, Radio, InputNumber, Switch, Slider, Button } from 'components';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
class FormDemo extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 9 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label='单选'
          hasFeedback
          >
          {getFieldDecorator('select', {
              rules: [
                { required: true, message: '不能为空!' },
              ],
            })(
              <Select placeholder='请选择'>
                <Option value='shanghai'>上海</Option>
                <Option value='beijing'>北京</Option>
              </Select>
            )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='多选'
          >
          {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: '不能为空', type: 'array' },
              ],
            })(
              <Select mode='multiple' placeholder='请选择'>
                <Option value='shanghai'>上海</Option>
                <Option value='beijing'>北京</Option>
                <Option value='gunagzhou'>广州</Option>
              </Select>
            )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='数字输入'
          >
          {getFieldDecorator('input-number', { initialValue: 3 })(
            <InputNumber min={1} max={10} />
            )}
          <span> 空位</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='开关'
          >
          {getFieldDecorator('switch')(
            <Switch />
            )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='滑动条'
            >
          {getFieldDecorator('slider', { initialValue: [10, 30] })(
            <Slider range />
            )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='单选组'
            >
          {getFieldDecorator('radio-group')(
            <RadioGroup>
              <Radio value='a'>A</Radio>
              <Radio value='b'>B</Radio>
              <Radio value='c'>C</Radio>
            </RadioGroup>
              )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='单选按钮'
            >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value='1'>按钮 1</RadioButton>
              <RadioButton value='2'>按钮 2</RadioButton>
              <RadioButton value='3'>按钮 3</RadioButton>
            </RadioGroup>
              )}
        </FormItem>


        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
           >
          <Button type='primary' htmlType='submit'>提交</Button>
        </FormItem>
      </Form>
    )
  }
}
const OtherForm = Form.create()(FormDemo);
export default OtherForm;
