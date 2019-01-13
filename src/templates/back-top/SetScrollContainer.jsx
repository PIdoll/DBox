import React from 'react';
import BackTop from 'components/back-top/index';

export default class SetScrollContainer extends React.Component {
  handleSetContainer() {
    return document.getElementById('scrollContainer');
  }
  render() {
    return (
      <div id='scrollContainer' style={{ width: 300, height: 100, background: '#E2E2E2', overflow: 'auto' }}>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        <BackTop
          target={() => document.getElementById('scrollContainer')}
          visibilityHeight={10} />
      </div>
    )
  }
}
