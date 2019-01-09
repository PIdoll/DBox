import React from 'react';
import BasicMessageDemo from './BasicMessageDemo';
import EditDelayDemo from './EditDelayDemo';
import LoadingMessageDemo from './LoadingMessageDemo';
import PromiseMessageDemo from './PromiseMessageDemo';

export default class Message extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、基本类型信息提示</h1>
          <h2 className='h2'>提供，成功、失败、警告、普通信息四种基本的信息提示，并且提供回调函数，用于关闭后触发<br />还提供了全局配置和全局销毁方法。</h2>

          <BasicMessageDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>二、修改延时</h1>
          <h2 className='h2'>自定义时长 10s，默认时长为 3s。</h2>

          <EditDelayDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>三、加载中...</h1>
          <h2 className='h2'>进行全局 loading，异步自行移除。</h2>

          <LoadingMessageDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>四、Promise接口</h1>
          <h2 className='h2'>可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。并且可以自定义图标</h2>

          <PromiseMessageDemo />
        </div>
      </div>
    )
  }
}
