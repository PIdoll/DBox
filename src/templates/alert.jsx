import React from 'react';
import Alert from 'components/alert/index';
import Icon from 'components/icon/index'

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
        <h2 className='h2'>一、最简单的用法，适用于简短的警告提示</h2>
        <div>
          <Alert
            message='成功提示'
            type='success' />
        </div>
        <h1 className='h1'>平滑的卸载</h1>
        <h2 className='h2'>二、如果在关闭提示后需要做些什么</h2>
        <div>
          {
            this.state.visible ? (
              <Alert
                message='Alert Message Text'
                tyle='success'
                closable
                afterClose={this.handleClose} />
            ) : null
          }
        </div>
        <h1 className='h1'>顶部公告</h1>
        <h2 className='h2'>三、页面顶部公告形式，默认有图表且type为'warning'</h2>
        <div>
          <Alert message='警告文本' banner />
          <Alert message='非常长的警告文本非常长的警告文本' banner closable />
          <Alert showIcon={false} message='没有图标的警告文本' banner />
          <Alert type='error' message='错误文本' banner />
        </div>
        <h1 className='h1'>可关闭的提示框</h1>
        <h2 className='h2'>四、默认是不会显示关闭的图标，如果你需要，可添加</h2>
        <div>
          <Alert
            message='成功提示'
            type='success'
            closable />
        </div>
        <h1 className='h1'>自定义关闭按钮</h1>
        <h2 className='h2'>四、默认关闭按钮时 x 按钮，支持自定义关闭按钮</h2>
        <div>
          <Alert
            message='成功提示'
            type='success'
            closable
            closeText='关闭' />
        </div>
        <h1 className='h1'>含有辅助性文字介绍</h1>
        <h2 className='h2'>五、含有辅助性文字介绍的警告提示。</h2>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='成功文本'
            description='成功描述成功描述成功描述成功描述成功描述'
            type='success' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='提示文本'
            description='提示描述提示描述提示描述提示描述提示描述'
            type='info' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Alert
            message='警告文本'
            description='警告描述警告描述警告描述警告描述警告描述'
            type='warning' />
        </div>
        <div>
          <Alert
            message='错误文本'
            description='错误描述错误描述错误描述错误描述错误描述'
            type='error' />
        </div>
        <h1 className='h1'>自定义图标</h1>
        <h2 className='h2'>六、默认显示的图标若是不满足你的UI，你可以自定义图标</h2>
        <div>
          <div style={{ marginBottom: 15 }}>
            <Alert message='信息提示' type='info' showIcon icon={<Icon type='history' />} />
          </div>
        </div>
        <h1 className='h1'>四种样式</h1>
        <h2 className='h2'>七、共有四种样式 success、info、warning、error</h2>
        <div>
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
        </div>
        <h1 className='h1'>带图标的提示</h1>
        <h2 className='h2'>八、可口的图标让信息类型更加醒目。</h2>
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
        <h1 className='h1'>关闭提示时触发的函数</h1>
        <h2 className='h2'>九、当提示信息关闭时触发。</h2>
        <Alert
          message='Alert Message Text'
          tyle='success'
          closable
          onClose={this.handleClose} />
      </div>
    )
  }
}
