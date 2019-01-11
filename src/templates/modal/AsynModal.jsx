import React from 'react';
import {Modal, Button} from 'components';
export default class AsynModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    asyncvisible: false,
    ModalText: '对话框的内容',
   }
    this.asyncshowModal = this.asyncshowModal.bind(this);
    this.asynchandleOk = this.asynchandleOk.bind(this);
    this.asynchandleCancel = this.asynchandleCancel.bind(this)
  };
  // 异步关闭弹出框
  asyncshowModal () {
    this.setState({
      asyncvisible: true
    });
  }
  asynchandleOk (e) {
    this.setState({
      ModalText: '选择确认后对话框将在 2 秒后关闭',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        asyncvisible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  asynchandleCancel (e) {
    console.log('点击了取消');
    this.setState({
      asyncvisible: false
    });
  }
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.asyncshowModal}>显示对话框</Button>
      <Modal confirmLoading={this.state.confirmLoading} title='我是标题' visible={this.state.asyncvisible}
        onOk={this.asynchandleOk} onCancel={this.asynchandleCancel}>
        <p>{this.state.ModalText}</p>
      </Modal>
    </div>
  )
}
}
