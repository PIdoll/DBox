import React from 'react';
import Alert from 'components/alert/index';

export default class BannerDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert message='警告文本' banner />
        <Alert message='非常长的警告文本非常长的警告文本' banner closable />
        <Alert showIcon={false} message='没有图标的警告文本' banner />
        <Alert type='error' message='错误文本' banner />
      </div>
    )
  }
}
