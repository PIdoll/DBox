import React from 'react';
import Divider from 'components/divider';

import './style/index.less';

const dividerObj = {
  background: '#13B886',
}

export default () => (
  <div>
    <p>自定义水平分割线样式</p>
    <Divider
      className='divider-color'
      style={dividerObj} />
  </div>
)
