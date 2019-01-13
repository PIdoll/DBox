import React from 'react';
import Alert from 'components/alert/index';
import Icon from 'components/icon/index';

export default class CustomIconDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert message='信息提示' type='info' showIcon icon={<Icon type='history' />} />
      </div>
    )
  }
}
