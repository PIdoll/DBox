import React from 'react';
import Alert from 'components/alert/index';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

export default class AlertView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>带有关闭按钮的警告提示</h1>
        <Alert
          message='警告文字警告文字警告文字警告文字警告文字警告文字警告文字警告文字警告文字警告文字警告文字警告文字警告文字'
          type='warning'
          closable
          onClose={onClose}
        />
        <Alert
          message='错误文字'
          description='错误描述错误描述错误描述错误描述错误描述错误描述错误描述错误描述错误描述错误描述错误描述错误描述错误描述'
          type='error'
          closable
          onClose={onClose}
        />
        <h1 className='h1'>带有图标的警告提示</h1>
        <Alert
          message='警告'
          description='这是警告文字.'
          type='warning'
          showIcon
        />
        <Alert
          message='信息文字'
          description='关于文案的附加描述和信息.'
          type='info'
          showIcon
        />
        <Alert
          message='错误'
          description='关于文案的错误信息.'
          type='error'
          showIcon
        />
        <h1 className='h1'>含有輔助性文字的警告提示</h1>
        <Alert
          message='信息文字'
          description='信息描述信息描述信息描述信息描述信息描述信息描述'
          type='info'
        />
        <Alert
          message='警告文字'
          description='警告描述警告描述警告描述警告描述警告描述警告描述警告描述警告描述'
          type='warning'
        />
      </div>
    )
  }
}
