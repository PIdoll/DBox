import React from 'react';
import Button from 'components/button';
import message from 'components/message/index';
import Icon from 'components/icon/index';

// message.config({
//   top: 100,
//   duration: 10,
//   maxCount: 3,
// });
const success = () => {
  message.success('This is a message of success', () => console.log(1111));
};

const error = () => {
  message.error('This is a message of error');
}

const warning = () => {
  message.warning('This is message of warning');
};

const warn = () => {
  message.warn('This is message of warn', 3);
};

const info = () => {
  message.info('This is a normal message', 10, () => console.log('关闭回调'));
};

const backgroundInfo = () => {
  message.info('This is a normal message', 10, () => console.log('关闭回调'), true);
}

const DelayInfo = () => {
  message.info('This is a prompt message for success, and it will disappear in 10 seconds', 30);
};

const LoadingSuccess = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

const PromiseSuccess = () => {
  message.loading('Action in progress..', 2.5)
  message.open({
    content: 'open触发了',
    normal: false,
    icon: <Icon type='down-circle' />,
  })
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};
export default class messageView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <div>
          <div>
            <h1 className='h1'>其他类型的提示</h1>
            <Button style={{ marginRight: 10 }} onClick={success}>Success</Button>
            <Button type='danger' style={{ marginRight: 10 }} onClick={error}>Error</Button>
            <Button style={{ marginRight: 10 }} onClick={warning}>Warning</Button>
            <Button onClick={warn}>Warn</Button>
            <h1 className='h1'>普通信息提示</h1>
            <Button type='primary' onClick={info}>Info</Button>
            <h1 className='h1'>通过背景色展示提示信息</h1>
            <Button type='primary' onClick={backgroundInfo}>backgroundShow</Button>
            <h1 className='h1'>修改延时</h1>
            <Button onClick={DelayInfo}>10s后关闭</Button>
            <h1 className='h1'>加载中...</h1>
            <Button onClick={LoadingSuccess}>加载中</Button>
            <h1 className='h1'>Promise接口</h1>
            <Button onClick={PromiseSuccess}>Promise</Button>
          </div>
        </div>
      </div>
    )
  }
}
