import React from 'react';
import Alert from 'components/alert/index';

export default class AssistTextDemo extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='成功文本'
            description='成功描述成功描述成功描述成功描述成功描述'
            type='success' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='提示文本'
            description='提示描述提示描述提示描述提示描述提示描述'
            type='info' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='警告文本'
            description='警告描述警告描述警告描述警告描述警告描述'
            type='warning' />
        </div>
        <div>
          <Alert
            message='错误文本'
            description='错误描述错误描述错误描述错误描述错误描述'
            type='error' />
        </div>
      </div>
    )
  }
}
