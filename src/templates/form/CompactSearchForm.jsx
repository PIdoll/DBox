import React from 'react';
import { Form, Row, Col, Select, DatePicker, Input, Button } from 'components';
const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;
class CompactSearch extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.handleOnOk = this.handleOnOk.bind(this);
  }

  onDateChange(date, dateString) {
    console.log('onDateChange', date, dateString);
  }

  handleOnOk() {
    console.log('OK')
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

  render() {
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
    // const beforeLength = '100px';

    return (
      <Form onSubmit={this.handleSearch}>
        <Row gutter={24}>
          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='姓名'
            >
              {getFieldDecorator('user', {
                rules: [{
                  required: true, message: '不能为空!',
                }],
              })(
                <Input placeholder='请输入' />
              )}
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='手机号码'
            >
              {getFieldDecorator('TelPhone', {
                rules: [{
                  required: true, message: '不能为空!',
                }],
              })(
                <Input placeholder='请输入' />
              )}
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              {...formItemLayout}
              formType='compact'
              label='邮箱'
            >
              {getFieldDecorator('e-mail', {
                rules: [{
                  type: 'email', message: '输入项不符合邮箱格式!',
                }, {
                  required: true, message: '不能为空!',
                }],
              })(
                <Input placeholder='请输入' />
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
            <Button type='primary' htmlType='submit'>查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清除
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

const CompactSearchForm = Form.create()(CompactSearch);
export default CompactSearchForm;
