import React from 'react';
import Button from 'components/button';
import Message from 'components/message/index';
import Icon from 'components/icon/index';

export default class PromiseMessageDemo extends React.Component {
  render() {
    const PromiseSuccess = () => {
      Message.loading('活动加载中..', 2.5)
      Message.open({
        content: 'open触发了',
        icon: <Icon type='check-circle' />,
      })
        .then(() => Message.success('加载结束', 2.5))
        .then(() => Message.info('加载中的加载结束', 2.5));
    };
    return (
      <div>
        <Button onClick={PromiseSuccess}>Promise</Button>
      </div>
    )
  }
}
