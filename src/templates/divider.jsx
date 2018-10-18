import React from 'react';
import Divider from 'components/divider';

const text = `默认为水平分割线，可在中间加入文字。`;

export default () => (
  <div id='main-container'>
    <h1 className='h1'>水平分割线</h1>
    <div>
      <p>{text}</p>
      <Divider />
      <p>{text}</p>
      <Divider>水平分割线</Divider>
      <p>{text}</p>
      <Divider dashed />
      <p>{text}</p>
    </div>
    <h1 className='h1'>垂直分割线</h1>
    <div>
      垂直分割线
      <Divider type='vertical' />
      <a href='#'>链接</a>
      <Divider type='vertical' />
      <a href='#'>链接</a>
    </div>
  </div>
)

