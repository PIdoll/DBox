import React from 'react';
import Alert from 'components/alert/index';

export default class DifferentStyleDemo extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='成功文本' type='success' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='提示文本' type='info' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='警告文本' type='warning' />
        </div>
        <div>
          <Alert message='错误文本' type='error' />
        </div>
      </div>
    )
  }
}
