import React from 'react';
import BasicBackTopDemo from './BasicBackTopDemo';
import CustonStyleDemo from './CustomStyleDemo';
import SetScrollContainer from './SetScrollContainer';
import CallbackDemo from './CallbackDemo';

import './style/index.less';

export default class BackTop extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、基本用法</h1>
          <h2 className='h2'>页面滚动到一定距离时，出现返回顶部按钮</h2>

          <BasicBackTopDemo />
        </div>
        <div style={styleObj} id='components-back-top-demo-custom'>
          <h1 className='h1'>二、自定义样式</h1>
          <h2 className='h2'>如果默认样式不能满足UI，可以自定义</h2>

          <CustonStyleDemo />
        </div>

        <div style={styleObj} id='components-back-top-demo-custom'>
          <h1 className='h1'>三、指定滚动容器</h1>
          <h2 className='h2'>自定义需要出现此按钮的容器</h2>

          <SetScrollContainer />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>四、指定滚动容器</h1>
          <h2 className='h2'>提供回调函数</h2>

          <CallbackDemo />
        </div>
      </div>
    )
  }
}
