import React from 'react';

import Button from 'components/button';
import Icon from 'components/icon';

const ButtonGroup = Button.Group;

export default () => (
  <div id='main-container'>
    <h1 className='h1'>基本按钮类型</h1>
    <Button type='default'>default</Button>&nbsp;&nbsp;
    <Button type='primary'>primary</Button>&nbsp;&nbsp;
    <Button type='secondary'>secondary</Button>&nbsp;&nbsp;
    <Button disabled>disabled</Button>&nbsp;&nbsp;
    <Button type='dashed'>dashed</Button>&nbsp;&nbsp;
    <Button type='danger'>danger</Button>&nbsp;&nbsp;
    <br />
    <h1 className='h1'>按钮尺寸</h1>
    <Button type='primary' size='small'>按钮</Button>&nbsp;&nbsp;
    <Button type='primary'>按钮</Button>&nbsp;&nbsp;
    <Button type='primary' size='large'>按钮</Button>
    <br />
    <h1 className='h1'>特殊场景按钮</h1>
    <Button type='normal' href='www.baidu.com'>跳转</Button>&nbsp;&nbsp;
    <Button type='create' icon='plus' />&nbsp;&nbsp;
    <Button type='quit' icon='logout' />&nbsp;&nbsp;
    <h1 className='h1'>图标按钮</h1>
    <Button icon='delete' size='small'>图标</Button>&nbsp;&nbsp;
    <Button icon='delete'>图标</Button>&nbsp;&nbsp;
    <Button icon='delete' size='large'>图标</Button>&nbsp;&nbsp;
    <br /><br />
    <Button icon='down' size='small'>图标</Button>&nbsp;&nbsp;
    <Button icon='down' >图标</Button>&nbsp;&nbsp;
    <Button icon='down' size='large'>图标</Button>&nbsp;&nbsp;
    <br /><br />
    <Button icon='delete' size='small' shape='square' />&nbsp;&nbsp;
    <Button icon='delete' shape='square' />&nbsp;&nbsp;
    <Button icon='delete' size='large' shape='square' />&nbsp;&nbsp;
    <br /><br />
    <Button icon='delete' size='small' shape='circle' />&nbsp;&nbsp;
    <Button icon='delete' shape='circle' />&nbsp;&nbsp;
    <Button icon='delete' size='large' shape='circle' />&nbsp;&nbsp;
    <h1 className='h1'>幽灵按钮</h1>
    <div className='youling'>
      <Button ghost>默认</Button>&nbsp;&nbsp;
      <Button type='primary' ghost>重要</Button>&nbsp;&nbsp;
      <Button type='dashed' ghost>虚线</Button>&nbsp;&nbsp;
      <Button type='danger' ghost>危险</Button>&nbsp;&nbsp;
      <Button type='disabled' ghost>disabled</Button>
    </div>
    <h1 className='h1'>组合按钮</h1>
    <ButtonGroup>
      <Button>取消</Button>
      <Button type='primary'>确定</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup>
      <Button type='primary'>Option1</Button>
      <Button type='primary'>Option2</Button>
      <Button type='primary'>Option3</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonGroup>
      <Button type='secondary'>Option1</Button>
      <Button type='secondary'>Option2</Button>
      <Button type='secondary'>Option3</Button>
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
