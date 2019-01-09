import React from 'react';
import Alert from 'components/alert/index';

export default class IconInfoDemo extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='成功' type='success' showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='信息提示' type='info' showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='警告' type='warning' showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='错误' type='error' showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='成功'
            description='关于成功的文案写作的详细描述和建议.'
            type='success'
            showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='信息提示'
            description='关于文案写作的额外描述和信息.'
            type='info'
            showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='警告'
            description='这是一个关于文案写作的警告通知.'
            type='warning'
            showIcon />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='错误'
            description='这是一个关于文案写作的错误通知.'
            type='error'
            showIcon />
        </div>
      </div>
    )
  }
}
