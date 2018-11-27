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
      mode: value ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>顶部导航</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal'
          theme='dark'
        >
          <Menu.Item key='platform'>首页</Menu.Item>
          <Menu.Item key='app' disabled>工作台</Menu.Item>
          <SubMenu title={<span>订单中心</span>}>
            <MenuItemGroup title='菜单组一'>
              <Menu.Item key='setting:1'>子菜单一</Menu.Item>
              <Menu.Item key='setting:2'>子菜单二</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='菜单组二'>
              <Menu.Item key='setting:3'>子菜单三</Menu.Item>
              <Menu.Item key='setting:4'>子菜单四</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key='alipay'>
            <a href='#' target='_blank' rel='noopener noreferrer'>配置管理</a>
          </Menu.Item>
        </Menu>
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
          <SubMenu key='sub1' title={<div><Icon type='tool' /><span>首页</span></div>} />
          <SubMenu key='sub2' title={<div><Icon type='tool' /><span>工作台</span></div>}>
            <Menu.Item key='setting:1'>子菜单一</Menu.Item>
            <Menu.Item key='setting:2'>子菜单二</Menu.Item>
            <Menu.Item key='setting:3'>子菜单三</Menu.Item>
            <Menu.Item key='setting:4'>子菜单四</Menu.Item>
          </SubMenu>
          <SubMenu title={<div><Icon type='platform' /><span>订单中心</span></div>}>
            <MenuItemGroup title='菜单组一'>
              <Menu.Item>子菜单五</Menu.Item>
              <Menu.Item>子菜单六</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='菜单组二'>
              <Menu.Item>子菜单七</Menu.Item>
              <Menu.Item>子菜单八</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<div><Icon type='appstore-o' /><span>配置管理</span></div>}>
            <Menu.Item>子菜单九</Menu.Item>
            <Menu.Item>子菜单十</Menu.Item>
            <Menu.Item>子菜单十一</Menu.Item>
            <Menu.Item>子菜单十二</Menu.Item>
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
              <Menu.Item key='1'>子菜单一</Menu.Item>
              <Menu.Item key='2'>子菜单二</Menu.Item>
              <Menu.Item key='3'>子菜单三</Menu.Item>
              <Menu.Item key='4'>子菜单四</Menu.Item>
            </SubMenu>
            <SubMenu title={<div><Icon type='platform' /><span>导航二</span></div>}>
              <Menu.Item key='5'>子菜单五</Menu.Item>
              <Menu.Item key='6'>子菜单六</Menu.Item>
              <Menu.Item key='7'>子菜单七</Menu.Item>
              <Menu.Item key='8'>子菜单八</Menu.Item>
            </SubMenu>
            <SubMenu title={<div><Icon type='appstore-o' /><span>导航三</span></div>}>
              <Menu.Item key='9'>子菜单九</Menu.Item>
              <Menu.Item key='10'>子菜单十</Menu.Item>
              <Menu.Item key='11'>子菜单十一</Menu.Item>
              <Menu.Item key='12'>子菜单十二</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  };
}
