import React from 'react';
import Button from 'components/button';
import Message from 'components/message/index';

export default class LoadingMessageDemo extends React.Component {
  render() {
    const LoadingSuccess = () => {
      const hide = Message.loading('活动加载中..', 0);
      // Dismiss manually and asynchronously
      setTimeout(hide, 2500);
    };
    return (
      <div>
        <Button onClick={LoadingSuccess}>加载中</Button>
      </div>
    )
  }
}
