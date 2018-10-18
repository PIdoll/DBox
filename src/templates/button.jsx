import React from 'react';

import Button from 'components/button';
import Icon from 'components/icon';

const ButtonGroup = Button.Group;

export default () => (
  <div id='main-container'>
    <h1 className='h1'>通用按钮</h1>
    <Button type='normal'>通用</Button>
    <h1 className='h1'>特殊场景按钮</h1>
    <Button type='primary'>重要</Button>
    <Button>次要</Button>
    <Button disabled>不可用</Button>
    <Button type='dashed'>虚线</Button>
    <Button type='danger'>危险</Button>
    <Button icon='tag'>图标</Button>
    <Button icon='plus-circle-o' text>文字按钮</Button>
    <h1 className='h1'>特定按钮</h1>
    <Button type='create' icon='plus' />
    <Button type='quit' icon='logout' />
    <h1 className='h1'>幽灵按钮</h1>
    <div className='youling'>
      <Button ghost>默认</Button>
      <Button type='primary' ghost>重要</Button>
      <Button type='dashed' ghost>虚线</Button>
      <Button type='danger' ghost>危险</Button>
    </div>
    <h1 className='h1'>组合按钮</h1>
    <ButtonGroup>
      <Button>取消</Button>
      <Button type='primary'>确定</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup>
      <Button>
        <Icon type='left-circle-o' />向后
      </Button>
      <Button>
        向前<Icon type='right-circle-o' />
      </Button>
    </ButtonGroup>
  </div>
	)
