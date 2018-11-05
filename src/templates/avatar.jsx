import React from 'react';
import Avatar from 'components/avatar';
import Badge from 'components/badge';
import Button from 'components/button';


const UserList = ['U', 'Lucy', 'Tom', 'DBox']; export default class AvatarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0]
    };
  }
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
    });
  }
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本</h1>
        <span>头像有三种尺寸，两种形状可选</span>
        <div>
          <div>
            <Avatar style={{ marginRight: 47 }} size='large' icon='user' />
            <Avatar style={{ marginRight: 47 }} icon='user' />
            <Avatar style={{ marginRight: 47 }} size='small' icon='user' />
          </div>
          <br />
          <div>
            <Avatar style={{ marginRight: 47 }} shape='square' size='large' icon='user' />
            <Avatar style={{ marginRight: 47 }} shape='square' icon='user' />
            <Avatar style={{ marginRight: 47 }} shape='square' size='small' icon='user' />
          </div>
        </div>
        <br />
        <h1 className='h1'>类型</h1>
        <span>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</span>
        <div>
          <Avatar style={{ marginRight: 47 }} icon='user' />
          <Avatar style={{ marginRight: 47 }}>U</Avatar>
          <Avatar style={{ marginRight: 47 }}>USER</Avatar>
          <Avatar style={{ marginRight: 47 }} src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' alt='DBox' />
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: 47 }}>U</Avatar>
          <Avatar style={{ backgroundColor: '#87d068', marginRight: 47 }} icon='user' />
        </div>
        <br />
        <h1 className='h1'>带徽标的头像</h1>
        <span>通常用于消息提示。</span>
        <br />
        <div>
          <span style={{ marginRight: 47 }}>
            <Badge count={2}><Avatar shape='square' icon='user' /></Badge>
          </span>
          <span>
            <Badge dot><Avatar shape='square' icon='user' /></Badge>
          </span>
        </div>
        <h1 className='h1'>自动调整字符大小</h1>
        <span>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整</span>
        <br />
        <Avatar style={{ marginRight: 47 }}>U</Avatar>
        <Avatar style={{ marginRight: 47 }}>Tom</Avatar>
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: 47 }}>hello</Avatar>
        <Avatar style={{ marginRight: 47 }}>lucy</Avatar>
        <Avatar style={{ marginRight: 47 }}>react</Avatar>
        <h1 className='h1'>按钮调整字符大小</h1>
        <span>对于字符型的头像，点击按钮顺序切换字符，当字符串较长时，字体大小可以根据头像宽度自动调整。</span>
        <div>
          <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }}>
            {this.state.user}
          </Avatar>
          <Button type='primary' style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
          Change
          </Button>
        </div>
      </div>
    )
  }
}


