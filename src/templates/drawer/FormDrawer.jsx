import React from 'react';
import {Button, Drawer, Row, Col, DatePicker, Form, Input, Select} from 'components';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const {Option} = Select;
const Textarea = Input.Textarea
class DrawerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  };
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  }
  render() {
  const { getFieldDecorator } = this.props.form;
  return (
    <div>
      <Button type='primary' onClick={this.showDrawer}>
          创建表单抽屉
      </Button>
      <Drawer
        title='创建'
        width={720}
        placement='right'
        onClose={this.onClose}
        visible={this.state.visible}
        style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
        <Form layout='vertical' hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label='姓名'>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(<Input placeholder='请输入用户名' />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label='URL'>
                {getFieldDecorator('url', {
                    rules: [{ required: true, message: '请输入 url' }],
                  })(
                    <Input
                      style={{ width: '100%' }}
                      addonBefore='http://'
                      addonAfter='.com'
                      placeholder='请输入 url'
                    />
                  )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label='选择'>
                {getFieldDecorator('owner', {
                    rules: [{ required: true, message: '请选择' }],
                  })(
                    <Select placeholder='请选择'>
                      <Option value='liu'>刘岳然</Option>
                      <Option value='li'>李欣桐</Option>
                    </Select>
                  )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label='类型'>
                {getFieldDecorator('type', {
                    rules: [{ required: true, message: '请选择类型' }],
                  })(
                    <Select placeholder='请选择类型'>
                      <Option value='private'>私密</Option>
                      <Option value='public'>公开</Option>
                    </Select>
                  )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem label='批复'>
                {getFieldDecorator('approver', {
                    rules: [{ required: true, message: '请选择批复人' }],
                  })(
                    <Select placeholder='请选择批复人'>
                      <Option value='jack'>杰瑞</Option>
                      <Option value='tom'>汤姆</Option>
                    </Select>
                  )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label='时间'>
                {getFieldDecorator('dateTime', {
                    rules: [{ required: true, message: '请选择日期时间' }],
                  })(
                    <RangePicker
                      style={{width: '100%'}}
                      showTime={{ format: 'HH:mm' }}
                      format='YYYY-MM-DD HH:mm'
                      placeholder={['开始时间', '结束时间']}
                    />
                  )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <FormItem label='描述'>
                {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: '请输入描述',
                      },
                    ],
                  })(<Textarea rows={23} placeholder='请输入描述' />)}
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div
          style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
          <Button
            style={{
                marginRight: 8,
              }}
            onClick={this.onClose}
            >
              取消
          </Button>
          <Button onClick={this.onClose} type='primary'>提交</Button>
        </div>
      </Drawer>
    </div>
      )
  }
}
const FormDrawer = Form.create()(DrawerDemo);
export default FormDrawer
