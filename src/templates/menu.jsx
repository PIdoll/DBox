import React from 'react'
// import Button from 'components/button'
import Menu from 'components/menu'
import Icon from 'components/icon'
import Switch from 'components/switch';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MenuDemo extends React.Component {
  state = {
    current: 'platform',
    theme: 'dark',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>顶部导航</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal'
        >
          <Menu.Item key='platform'>
            <Icon type='platform' />导航一
          </Menu.Item>
          <Menu.Item key='app' disabled>
            <Icon type='appstore-o' />导航二
          </Menu.Item>
          <SubMenu title={<span><Icon type='tool' />导航三 - 子菜单</span>}>
            <MenuItemGroup title='条目一'>
              <Menu.Item key='setting:1'>选项 1</Menu.Item>
              <Menu.Item key='setting:2'>选项 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='条目二'>
              <Menu.Item key='setting:3'>选项 3</Menu.Item>
              <Menu.Item key='setting:4'>选项 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key='alipay'>
            <a href='#' target='_blank' rel='noopener noreferrer'>导航四 - 链接</a>
          </Menu.Item>
        </Menu>
        <h1 className='h1'>内嵌菜单</h1>
        <Menu
          onClick={this.handleClick}
          style={{width: 256}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
        >
          <SubMenu key='sub1' title={<span>导航一</span>}>
            <MenuItemGroup title='条目一'>
              <Menu.Item key='setting:1'>选项 1</Menu.Item>
              <Menu.Item key='setting:2'>选项 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='条目二'>
              <Menu.Item key='setting:3'>选项 3</Menu.Item>
              <Menu.Item key='setting:4'>选项 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<span>导航二</span>}>
            <Menu.Item>选项 5</Menu.Item>
            <Menu.Item>选项 6</Menu.Item>
            <SubMenu title='子菜单'>
              <Menu.Item>选项7</Menu.Item>
              <Menu.Item>选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu title='导航三'>
            <Menu.Item>选项9</Menu.Item>
            <Menu.Item>选项10</Menu.Item>
            <Menu.Item>选项11</Menu.Item>
            <Menu.Item>选项12</Menu.Item>
          </SubMenu>
        </Menu>
        <h1 className='h1'>深色背景</h1>
        <div>
          <Switch
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren='深色'
            unCheckedChildren='浅色'
          />
          <br />
          <br />
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode='inline'
          >
            <SubMenu key='sub1' title={<span>导航1</span>}>
              <Menu.Item key='1'>选项1</Menu.Item>
              <Menu.Item key='2'>选项2</Menu.Item>
              <Menu.Item key='3'>选项3</Menu.Item>
              <Menu.Item key='4'>选项4</Menu.Item>
            </SubMenu>
            <SubMenu title={<span>导航2</span>}>
              <Menu.Item key='5'>选项5</Menu.Item>
              <Menu.Item key='6'>选项6</Menu.Item>
              <Menu.Item key='7'>选项7</Menu.Item>
              <Menu.Item key='8'>选项8</Menu.Item>
            </SubMenu>
            <SubMenu title={<span>导航3</span>}>
              <Menu.Item key='9'>选项9</Menu.Item>
              <Menu.Item key='10'>选项10</Menu.Item>
              <Menu.Item key='11'>选项11</Menu.Item>
              <Menu.Item key='12'>选项12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  };
}
