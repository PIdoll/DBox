import React from 'react';
import { Form, Input, DatePicker, TimePicker, Cascader, InputNumber, Select } from 'components';
const FormItem = Form.Item;
const Option = Select.Option;
export default class CheckForm extends React.Component {
  render() {
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
          label='错误'
          validateStatus='error'
          help='输入数字和字母组合'
        >
          <Input placeholder='错误输入' id='error' />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='警告'
          validateStatus='warning'
        >
          <Input placeholder='警告' id='warning' />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='验证'
          hasFeedback
          validateStatus='validating'
          help='信息正在验证...'
        >
          <Input placeholder='验证输入' id='validating' />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='成功'
          hasFeedback
          validateStatus='success'
        >
          <Input placeholder='正确输入' id='success' />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='警告'
          hasFeedback
          validateStatus='warning'
        >
          <Input placeholder='警告' id='Warning' />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='错误'
          hasFeedback
          validateStatus='error'
          help='输入数字和字母组合'
        >
          <Input placeholder='错误输入' id='Error' />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='成功'
          hasFeedback
          validateStatus='success'
        >
          <DatePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='警告'
          hasFeedback
          validateStatus='warning'
        >
          <TimePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='错误'
          hasFeedback
          validateStatus='error'
        >
          <Select defaultValue='1'>
            <Option value='1'>北京</Option>
            <Option value='2'>上海</Option>
            <Option value='3'>广州</Option>
          </Select>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='验证'
          hasFeedback
          validateStatus='validating'
          help='信息正在验证...'
        >
          <Cascader defaultValue={['1']} options={[]} />
        </FormItem>

        <FormItem
          label='内联'
          {...formItemLayout}
        >
          <Form.Item
            validateStatus='error'
            help='请输入正确的日期'
            style={{ display: 'inline-block', }}
          >
            <DatePicker />
          </Form.Item>
          <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>
          -
          </span>
          <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <DatePicker />
          </Form.Item>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='成功'
          hasFeedback
          validateStatus='success'
        >
          <InputNumber style={{ width: '100%' }} />
        </FormItem>
      </Form>
    )
  }
}

