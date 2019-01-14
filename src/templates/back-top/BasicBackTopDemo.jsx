import React from 'react';
import BackTop from 'components/back-top/index';

export default class BasicBackTopDemo extends React.Component {
  render () {
    return (
      <div>
        <BackTop />
          向下滚动以查看右下方的灰色
        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          按钮。
      </div>
    )
  }
}
