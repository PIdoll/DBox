import React from 'react';
import Alert from 'components/alert/index';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

export default class AlertView extends React.Component {
  state = {
    visible: true,
  }

  handleClose = () => {
    console.log(1)
    this.setState({ visible: false });
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <div>
          <Alert
            message='成功提示'
            type='success' />
        </div>
        <h1 className='h1'>可关闭的警告提示</h1>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本'
            type='warning'
            closable
            onClose={onClose} />
        </div>
        <div>
          <Alert
            message='错误文本'
            description='错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本'
            type='error'
            closable
            onClose={onClose} />
        </div>
        <h1 className='h1'>带有图标的警告提示</h1>
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
            showIcon
        />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='信息提示'
            description='关于文案写作的额外描述和信息.'
            type='info'
            showIcon
        />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='警告'
            description='这是一个关于文案写作的警告通知.'
            type='warning'
            showIcon
        />
        </div>
        <div>
          <Alert
            message='错误'
            description='这是一个关于文案写作的错误通知.'
            type='error'
            showIcon
        />
        </div>
        <h1 className='h1'>四种样式</h1>
        <div style={{ marginBottom: 15 }}>
          <Alert message='成功文本' type='success' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='提示文本' type='info' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert message='警告文本' type='warning' />
        </div>
        <div>
          <Alert message='错误文本' type='error' />
        </div>
        <h1 className='h1'>含有辅助性文字的文本</h1>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='成功文本'
            description='成功描述成功描述成功描述成功描述成功描述'
            type='success'
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='提示文本'
            description='提示描述提示描述提示描述提示描述提示描述'
            type='info'
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='警告文本'
            description='警告描述警告描述警告描述警告描述警告描述'
            type='warning'
          />
        </div>
        <div>
          <Alert
            message='错误文本'
            description='错误描述错误描述错误描述错误描述错误描述'
            type='error'
          />
        </div>
        <h1 className='h1'>自定义关闭</h1>
        <Alert message='Info Text' type='info' closeText='Close Now' />
        <h1 className='h1'>平滑的卸载</h1>
        <div>
          {
          this.state.visible ? (
            <Alert
              message='Alert Message Text'
              type='success'
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
          <p>placeholder text here</p>
        </div>
        <h1 className='h1'>顶部公告</h1>
        <div>
          <Alert message='警告文本' banner />
          <br />
          <Alert message='非常长的警告文本非常长的警告文本' banner closable />
          <br />
          <Alert showIcon={false} message='没有图标的警告文本' banner />
          <br />
          <Alert type='error' message='错误文本' banner />
        </div>
      </div>
    )
  }
}
