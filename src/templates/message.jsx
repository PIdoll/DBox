import React from 'react';
import Button from 'components/button';
import message from 'components/message/index';

const success = () => {
  message.success('This is a message of success');
};

const warning = () => {
  message.warning('This is a message of warning');
};

const error = () => {
  const hide = message.error('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default class messageView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>
         成功信息
        </h1>
        <Button type='default' onClick={success}>Success</Button>
        <h1 className='h1'>
          警告信息
        </h1>
        <Button type='dashed' onClick={warning}>Warning</Button>
        <h1 className='h1'>
          失败信息
        </h1>
        <Button type='danger' onClick={error}>Error</Button>
      </div>
    )
  }
}
