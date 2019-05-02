import React from 'react';
import {Modal, Button} from 'components';
export default class ComfirmModal extends React.Component {
  showConfirm () {
    Modal.confirm({
      iconType: 'close-circle',
      title: '我是一个确认对话模态框',
      content: <div><p>这里是描述文字…</p><p>这里是描述文字…</p></div>,
      onOk: function() {
        console.log('确定');
      },
      onCancel: function() {}
    });
  }
  render() {
  return (
    <Button onClick={this.showConfirm}>确认对话框</Button>
  )
}
}
