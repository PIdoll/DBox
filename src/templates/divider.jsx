import React from 'react';
import Divider from 'components/divider';

const text = ``;

export default () => (
  <div id='main-container'>
    <h1 className='h1'>水平分割线</h1>
    <div>
      <p>默认为水平分割线(实线)</p>
      <Divider />
      <p>默认为水平分割线(虚线)</p>
      <Divider dashed />
    </div>
    <h1 className='h1'>竖分割线</h1>
    <div>
    测试
      <Divider type='vertical' />
      <a href='#'>链接</a>
      <Divider type='vertical' />
      <a href='#'>链接</a>
    </div>
  </div>
)

