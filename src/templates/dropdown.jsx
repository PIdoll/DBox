import React from 'react';
import Dropdown from 'components/dropdown';
import Menu, { MenuItem, SubMenu } from 'rc-menu';
import Button from 'components/button'
import Icon from 'components/icon'
import './dropdown.less'
const ButtonGroup = Button.Group;
const DropdownButton = Dropdown.Button;
const DropdownNormal = Dropdown.Normal;

function handleButtonClick(e) {
  console.info('click left button', e);
}

function handleMenu1Click(e) {
  console.info('click', e);
}

const menu = (
  <Menu onClick={handleMenu1Click}>
    <MenuItem key='1'>第一个选项111111</MenuItem>
    <MenuItem key='2'>第二个选项222222</MenuItem>
    <MenuItem key='3'>第三个选项333333</MenuItem>
  </Menu>
)
const menu4 = (
  <Menu onClick={handleMenu1Click}>
    <MenuItem key='1'><Icon type='bars' />  第一个选项111111</MenuItem>
    <MenuItem key='2'><Icon type='bars' />  第二个选项222222</MenuItem>
    <MenuItem key='3'><Icon type='bars' />  第三个选项333333</MenuItem>
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
  onVisibleChange = (visible) => {
    console.log(`nor菜单发生了变化====>${visible}`)
  };
  handleVisibleChange = (flag) => {
    this.setState({
      visible: flag
    });
  };
  render() {
    const menu1 = (
      <Menu onClick={handleMenu1Click}>
        <MenuItem key='1.1'>第一个选项</MenuItem>
        <MenuItem key='1.2'>第二个选项</MenuItem>
        <SubMenu title='子菜单'>
          <MenuItem key='2.3'>第三个选项</MenuItem>
          <MenuItem key='2.4'>第四个选项</MenuItem>
        </SubMenu>
      </Menu>
    )
    const menu2 = (
      <Menu onClick={this.handleMenuClick}>
        <MenuItem key='2.1'>点我会展现菜单2.1.</MenuItem>
        <MenuItem key='2.2'>点我会展现菜单2.2.</MenuItem>
        <MenuItem key='2.3'>点我会展现菜单2.3.</MenuItem>
      </Menu>
    );
    return (
      <div id='main-container' className='dropdown'>
        <h1 className='h1'>1.基本用法</h1>
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          下拉菜单
        </DropdownNormal>
        <Dropdown overlay={menu} trigger={['click']} onClick={handleButtonClick}>
          <Button>
          默认菜单
          </Button>
        </Dropdown>
        <h1 className='h1'>2.常用类型</h1>
        <Dropdown overlay={menu4} trigger={['click']} onClick={handleButtonClick}>
          <Button>
            默认菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu4} trigger={['click']} onClick={handleButtonClick}>
          <Button type='primary'>
            主要菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu4} trigger={['click']} onClick={handleButtonClick}>
          <Button type='secondary'>
            次要菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu1} trigger={['click']} onClick={handleButtonClick}>
          <Button disabled>
            禁用菜单
          </Button>
        </Dropdown>
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          文本菜单
        </DropdownNormal>
        <h1 className='h1'>3.组合使用</h1>
        <ButtonGroup className='buttonGroup'>
          <Button>
            操作一
          </Button>
          <Button>
            操作二
          </Button>
          <DropdownButton overlay={menu1} trigger={['click']}>
          操作三
          </DropdownButton>
        </ButtonGroup>
        <h1 className='h1'>4.三种尺寸</h1>
        <DropdownButton size='small' overlay={menu2} trigger={['click']}>
          默认菜单
        </DropdownButton>
        <DropdownButton overlay={menu2} trigger={['click']}>
          默认菜单
        </DropdownButton>
        <DropdownButton size='large' overlay={menu2} trigger={['click']}>
          默认菜单
        </DropdownButton>
        <h1 className='h1'>5.弹出位置</h1>
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
        <Dropdown overlay={menu} placement='bottomCenter'>
          <Button>下中</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='bottomRight'>
          <Button>下右</Button>
        </Dropdown>
        <h1 className='h1'>6.触发方式</h1>
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          点击下拉菜单
        </DropdownNormal>
        <Dropdown overlay={menu} trigger={['hover']} onClick={handleButtonClick}>
          <Button>
          hover默认菜单
          </Button>
        </Dropdown>
        <h1 className='h1'>7.触发事件</h1>
        <Dropdown overlay={menu} trigger={['hover']} onVisibleChange={this.onVisibleChangeBtn} onClick={handleButtonClick}>
          <Button>
          hover默认菜单
          </Button>
        </Dropdown>
        <h1 className='h1'>8.多级菜单</h1>
        <DropdownButton overlay={menu1} trigger={['click']}>
          默认菜单
        </DropdownButton>
      </div>
    )
  }
}
