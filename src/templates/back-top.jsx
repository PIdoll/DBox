import React from 'react';
import BackTop from 'components/back-top/index';
import './back-top.less';

export default class BackTopView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <div>
          <BackTop />
          向下滚动以查看右下方的灰色
          <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          按钮。
        </div>
        <h1 className='h1'>自定义样式</h1>
        <div id='components-back-top-demo-custom'>
          <BackTop>
            <div className='idoll-back-top-inner' style={{ fontSize: 14 }}>返回</div>
          </BackTop>
          向下滚动以查看右下方的文字按钮
        </div>
      </div>
    )
  }
}
