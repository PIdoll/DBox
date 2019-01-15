import React from 'react';
import {Modal, Button} from 'components';
export default class BasicModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false,
   }
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this)
  };
  showModal () {
    this.setState({
      visible: true
    });
  };
  handleOk (e) {
    this.setState({
      visible: false
    });
  }
  handleCancel (e) {
    this.setState({
      visible: false
    });
  };
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.showModal}>显示对话框</Button>
      <Modal title='我是标题' visible={this.state.visible}
        onOk={this.handleOk} onCancel={this.handleCancel}>
        <p>这里是一句话</p>
        <p>或者一段文字</p>
        <p>或者表格</p>
        <p>或者其他嵌套组件</p>
        <p>…………</p>
        <p>最后一行</p>
      </Modal>
    </div>
  )
}
}
