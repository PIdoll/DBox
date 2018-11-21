import React from 'react';
import Button from 'components/button';
import notification from 'components/notification/index';
// import Icon from 'components/icon/index';

notification.config({
  // top: 100,
  duration: 3,
  maxCount: 3,
});
const success = () => {
  notification.success('悬浮出现在页面角落，显示全局的提醒通知消息，悬浮出现在页面角落，显示全局的提醒通知消息', () => console.log(1111));
};

// const error = () => {
//   notification.error('This is a message of error');
// }

// const warning = () => {
//   notification.warning('This is message of warning');
// };

// const warn = () => {
//   notification.warn('This is message of warn', 3);
// };

// const info = () => {
//   notification.info('This is a normal message', 10, () => console.log('关闭回调'));
// };

// const backgroundInfo = () => {
//   notification.info('This is a normal message', 10, () => console.log('关闭回调'), true);
// }

// const DelayInfo = () => {
//   notification.info('This is a prompt message for success, and it will disappear in 10 seconds', 30);
// };

// const LoadingSuccess = () => {
//   const hide = notification.loading('Action in progress..', 0);
//   // Dismiss manually and asynchronously
//   setTimeout(hide, 2500);
// };

export default class messageView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <div>
          <div>
            <h1 className='h1'>其他类型的提示</h1>
            <Button style={{ marginRight: 10 }} onClick={success}>Success</Button>
          </div>
        </div>
      </div>
    )
  }
}
