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
    theme: 'light',
    collapsed: false,
    mode: 'inline'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'light' : 'dark',
    })
  }
  changeMode = (value) => {
    this.setState({
      // collapsed: value,
      mode: value ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <div id='main-container'>
        {/* <h1 className='h1'>顶部导航</h1>
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
        </Menu> */}
        <h1 className='h1'>内嵌菜单</h1>
        <Switch onChange={this.changeMode} type='primary'>缩起菜单</Switch>
        <br />
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          inlineCollapsed={this.state.collapsed}
          mode={this.state.mode}
        >
          <SubMenu key='sub1' title={<div><Icon type='tool' /><span>导航一</span></div>}>
            <MenuItemGroup title='条目一'>
              <Menu.Item key='setting:1'>选项 1</Menu.Item>
              <Menu.Item key='setting:2'>选项 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='条目二'>
              <Menu.Item key='setting:3'>选项 3</Menu.Item>
              <Menu.Item key='setting:4'>选项 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<div><Icon type='platform' /><span>导航二</span></div>}>
            <Menu.Item>选项 5</Menu.Item>
            <Menu.Item>选项 6</Menu.Item>
            <SubMenu title='子菜单'>
              <Menu.Item>选项7</Menu.Item>
              <Menu.Item>选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu title={<div><Icon type='appstore-o' /><span>导航三</span></div>}>
            <Menu.Item>选项9</Menu.Item>
            <Menu.Item>选项10</Menu.Item>
            <Menu.Item>选项11</Menu.Item>
            <Menu.Item>选项12</Menu.Item>
          </SubMenu>
        </Menu>
        <h1 className='h1'>浅色背景</h1>
        <div>
          <br />
          <br />
          <Switch
            checked={this.state.theme === 'light'}
            onChange={this.changeTheme}
            checkedChildren='浅色'
            unCheckedChildren='深色'
          />
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode='inline'
          >
            <SubMenu key='sub1' title={<div><Icon type='tool' /><span>导航一</span></div>}>
              <Menu.Item key='1'>选项1</Menu.Item>
              <Menu.Item key='2'>选项2</Menu.Item>
              <Menu.Item key='3'>选项3</Menu.Item>
              <Menu.Item key='4'>选项4</Menu.Item>
            </SubMenu>
            <SubMenu title={<div><Icon type='platform' /><span>导航二</span></div>}>
              <Menu.Item key='5'>选项5</Menu.Item>
              <Menu.Item key='6'>选项6</Menu.Item>
              <Menu.Item key='7'>选项7</Menu.Item>
              <Menu.Item key='8'>选项8</Menu.Item>
            </SubMenu>
            <SubMenu title={<div><Icon type='appstore-o' /><span>导航三</span></div>}>
              <Menu.Item key='9'>选项9</Menu.Item>
              <Menu.Item key='10'>选项10</Menu.Item>
              <Menu.Item key='11'>选项11</Menu.Item>
              <Menu.Item key='12'>选项12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <h1 className='h1'>动态转换</h1>
        <Switch onChange={this.changeMode} type='primary'>缩起菜单</Switch>
        <Switch
          checked={this.state.theme === 'light'}
          onChange={this.changeTheme}
          checkedChildren='浅色'
          unCheckedChildren='深色'
          />
        <br />
        <Menu
          onClick={this.handleClick}
          theme={this.state.theme}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          inlineCollapsed={this.state.collapsed}
          mode={this.state.mode}
        >
          <SubMenu key='sub1' title={<div><Icon type='tool' /><span>导航一</span></div>}>
            <MenuItemGroup title='条目一'>
              <Menu.Item key='setting:1'>选项 1</Menu.Item>
              <Menu.Item key='setting:2'>选项 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='条目二'>
              <Menu.Item key='setting:3'>选项 3</Menu.Item>
              <Menu.Item key='setting:4'>选项 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<div><Icon type='platform' /><span>导航二</span></div>}>
            <Menu.Item>选项 5</Menu.Item>
            <Menu.Item>选项 6</Menu.Item>
            <SubMenu title='子菜单'>
              <Menu.Item>选项7</Menu.Item>
              <Menu.Item>选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu title={<div><Icon type='appstore-o' /><span>导航三</span></div>}>
            <Menu.Item>选项9</Menu.Item>
            <Menu.Item>选项10</Menu.Item>
            <Menu.Item>选项11</Menu.Item>
            <Menu.Item>选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  };
}
