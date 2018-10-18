import React from 'react';
import Title from 'components/title'

export default () => (
  <div id='main-container' className='demo-title'>
    <h1 className='h1'>通用标题</h1>
    <Title />
    <h1 className='h1'>三种大小</h1>
    <Title icon='user' title='大标题' size='large' />
    <Title icon='bars' title='默认标题' />
    <Title icon='bars' title='小标题' size='small' />
    <h1 className='h1'>ICON标题</h1>
    <Title icon='bars' title='标题' />
    <h1 className='h1'>深色背景</h1>
    <div className='darkbg'>
      <Title icon='bars' title='标题' ghost />
    </div>
  </div>
)
