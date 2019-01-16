import React from 'react';
import { Form, Button, Modal, Input, Icon } from 'components';
const FormItem = Form.Item;
const text = '两次密码输入不一致!';
class modalForm extends React.Component {
  constructor() {
    super();
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback(text);
    } else {
      callback();
    }
  }
  render() {
    const { visible, onCancel, onCreate, form, } = this.props;
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
        title='注册信息'
        okText='注册'
        onCancel={onCancel}
        onOk={onCreate}
      >

        <Form onSubmit={this.handleSubmit} style={{width: '300px'}}>
          <FormItem label='账号' {...formItemLayout}>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '不能为空!' }],
            })(
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='账号' />
            )}
          </FormItem>
          <FormItem label='密码' {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '不能为空!' }],
            })(
              <Input prefix={<Icon type='unlock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
            )}
          </FormItem>

          <FormItem label='确认密码' {...formItemLayout}>
            {getFieldDecorator('confirmPassword', {
              rules: [{ required: true, message: '不能为空!'
              }, {validator: this.compareToFirstPassword,
                }],
            })(
              <Input prefix={<Icon type='unlock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='确认密码' />
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

export default class ModalNewForm extends React.Component {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.saveFormRef = this.saveFormRef.bind(this);
    this.state = {
      visible: false,
    }
  }

  showModal() {
    this.setState({ visible: true });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  handleCreate() {
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

  saveFormRef(formRef) {
    this.formRef = formRef;
  }


  render() {
      return (
        <div>
          <Button type='primary' onClick={this.showModal}>注册</Button>
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

