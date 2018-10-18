import React from 'react';
import Avatar from 'components/avatar';
import Badge from 'components/badge';



const avatar = () => (
  <div id='main-container'>
    <h1 className='h1'>基本</h1>
    <span>头像有三种尺寸，两种形状可选</span>
    <div>
      <div>
        <Avatar size='large' icon='user' />
        <Avatar icon='user' />
        <Avatar size='small' icon='user' />
      </div>
      <br />
      <div>
        <Avatar shape='square' size='large' icon='user' />
        <Avatar shape='square' icon='user' />
        <Avatar shape='square' size='small' icon='user' />
      </div>
    </div>
    <br />
    <h1 className='h1'>类型</h1>
    <span>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</span>
    <div>
      <Avatar icon='user' />
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon='user' />
    </div>
    <br />
    <h1 className='h1'>带徽标的头像</h1>
    <span>通常用于消息提示。</span>
    <br />
    <div>
      <span style={{ marginRight: 24 }}>
        <Badge count={1}><Avatar shape='square' icon='user' /></Badge>
      </span>
      <span>
        <Badge dot><Avatar shape='square' icon='user' /></Badge>
      </span>
    </div>
    <h1 className='h1'>自动调整字符大小</h1>
    <span>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整</span>
    <br />
    <Avatar>U</Avatar>
    <Avatar>Tom</Avatar>
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>hello</Avatar>
    <Avatar>lucy</Avatar>
    <Avatar>react</Avatar>
  </div>

)

export default avatar;
