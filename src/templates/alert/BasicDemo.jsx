import React from 'react';
import Alert from 'components/alert/index';

export default class BasicDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert
          message='成功提示'
          type='success' />
      </div>
    )
  }
}
