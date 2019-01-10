import React from 'react';
import BackTop from 'components/back-top/index';
import Message from 'components/message/index';

export default class CallbackDemo extends React.Component {
  handleClick() {
    Message.info('返回顶部');
  }
  render() {
    return (
      <div>
        <BackTop
          visibilityHeight={200}
          onClick={this.handleClick} />
      </div>
    )
  }
}
