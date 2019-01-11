import React from 'react';
import BackTop from 'components/back-top/index';

export default class CustonStyleDemo extends React.Component {
  render() {
    return (
      <div id='#components-back-top-demo-custom'>
        <BackTop>
          <div className='idoll-back-top-inner' style={{ fontSize: 14 }}>返回</div>
        </BackTop>
          向下滚动以查看右下方的文字按钮
      </div>
    )
  }
}
