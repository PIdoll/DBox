import React from 'react';
import {Modal, Button} from 'components';
export default class InfoModal extends React.Component {
  info () {
    Modal.info({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息',
      onOk: function() {},
    });
  }

  success () {
    Modal.success({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息'
    });
  }

  error () {
    Modal.error({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息'
    });
  }
  render() {
  return (
    <div>
      <Button onClick={this.info}>信息提示</Button>
      <Button style={{marginLeft: 20, marginRight: 20}} onClick={this.success}>成功提示</Button>
      <Button onClick={this.error}>失败提示</Button>
    </div>
  )
}
}
