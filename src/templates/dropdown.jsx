import React from 'react';
import Dropdown from 'components/dropdown';
import Menu, { MenuItem, SubMenu } from 'components/menu';
import Button from 'components/button'
import Icon from 'components/icon'
const ButtonGroup = Button.Group;
const DropdownButton = Dropdown.DropdownButton;
const DropdownNormal = Dropdown.DropdownNormal;

function handleButtonClick(e) {
  console.info('click left button', e);
}
function handleMenu1Click(e) {
  console.info('click', e);
}

const menu = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
)
const menu4 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
  </Menu>
)
export default class DropView extends React.Component {
  state = {
    visible: false,
  };
  handleMenuClick = (e) => {
    if (e.key === '2.3') {
      this.setState({
        visible: false
      });
    }
  };
  onVisibleChangeBtn = (visible) => {
    console.log(`按钮菜单发生了变化====>${visible}`)
  };
  handleVisibleChange = (flag) => {
    this.setState({
      visible: flag
    });
  };
  render() {
    const menu1 = (
      <Menu theme='light' onClick={handleMenu1Click}>
        <MenuItem key='1.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        <MenuItem key='1.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        <SubMenu title='子菜单'>
          <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
          <MenuItem key='2.4'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        </SubMenu>
      </Menu>
    )
    const menu2 = (
      <Menu theme='light' onClick={handleMenu1Click}>
        <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
      </Menu>
    );
    return (
      <div id='main-container' className='dropdown'>
        <h1 className='h1'>1.基本用法</h1>
        <h3>测试用到的API overlay type trigger visible onClick</h3>
        <DropdownNormal visible overlay={menu2} type='caret-down' trigger={['hover']} >
          下拉菜单
        </DropdownNormal>
        <Dropdown visible overlay={menu} trigger={['hover']} onClick={handleButtonClick}>
          <Button>
          默认菜单
          </Button>
        </Dropdown>
        <h1 className='h1'>2.常用类型</h1>
        <h3>测试用到的API overlay type trigger  disabled visible onClick</h3>
        <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
          <Button>
            默认菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
          <Button type='primary'>
            主要菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
          <Button type='secondary'>
            次要菜单
          </Button>
        </Dropdown>
        <DropdownButton disabled overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
          禁用菜单
        </DropdownButton>
        <DropdownNormal visible overlay={menu2} type='caret-down' trigger={['hover']} >
          文本菜单
        </DropdownNormal>
        <h1 className='h1'>3.组合使用</h1>
        <h3>测试用到的API overlay trigger visible onClick</h3>
        <ButtonGroup className='buttonGroup'>
          <Button>
            操作一
          </Button>
          <Button>
            操作二
          </Button>
          <DropdownButton visible overlay={menu1} onClick={handleButtonClick} trigger={['hover']}>
          操作三
          </DropdownButton>
        </ButtonGroup>
        <h1 className='h1'>4.三种尺寸</h1>
        <h3>测试用到的API size overlay trigger visible onClick</h3>
        <DropdownButton size='small' overlay={menu2} trigger={['hover']}>
          默认菜单
        </DropdownButton>
        <DropdownButton overlay={menu2} trigger={['hover']} onClick={handleButtonClick}>
          默认菜单
        </DropdownButton>
        <DropdownButton visible size='large' overlay={menu2} trigger={['hover']}>
          默认菜单
        </DropdownButton>
        <h1 className='h1'>5.弹出位置</h1>
        <h3>测试用到的API size overlay placement trigger visible onClick</h3>
        <Dropdown overlay={menu} placement='topLeft'>
          <Button>上左</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topCenter'>
          <Button>上中</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topRight'>
          <Button>上右</Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button>下左</Button>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']} onClick={handleButtonClick} placement='bottomCenter'>
          <Button>下中</Button>
        </Dropdown>
        <Dropdown overlay={menu} visible placement='bottomRight'>
          <Button>下右</Button>
        </Dropdown>
        <h1 className='h1'>6.触发方式</h1>
        <h3>测试用到的API overlay type trigger onClick onVisibleChange</h3>
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          点击下拉菜单
        </DropdownNormal>
        <Dropdown overlay={menu} trigger={['hover']} onVisibleChange={this.onVisibleChangeBtn} onClick={handleButtonClick}>
          <Button>
          hover默认菜单
          </Button>
        </Dropdown>
        <h1 className='h1'>7.触发事件</h1>
        <h3>测试用到的API overlay type trigger onClick onVisibleChange</h3>
        <Dropdown overlay={menu} trigger={['hover']} onVisibleChange={this.onVisibleChangeBtn} onClick={handleButtonClick}>
          <Button>
          hover默认菜单
          </Button>
        </Dropdown>
        <h1 className='h1'>8.多级菜单</h1>
        <DropdownButton placement='bottomLeft' overlay={menu1} trigger={['hover']}>
          默认菜单
        </DropdownButton>
      </div>
    )
  }
}
