import React from 'react';
import {Menu, Breadcrumb, Avatar, Icon, Dropdown, Layout} from 'components';
const SubMenu = Menu.SubMenu;
const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;
const DropdownNormal = Dropdown.DropdownNormal;
const menu = (
  <Menu theme='light'>
    <Menu.Item key='2'><a href='javascript:;' target='_blank'>Alvin</a></Menu.Item>
    <Menu.Item key='3'><a href='javascript:;' target='_blank'>Dbox</a></Menu.Item>
    <Menu.Item key='4'><a href='javascript:;' target='_blank'>Idoll</a></Menu.Item>
  </Menu>
)
export default class BreadLayout extends React.Component {
  constructor(props) {
    super(props);
    const panes = [
      { title: <Icon type='home' />, content: '首页', key: '7' }
    ];
    this.state = {
      current: 'home',
      flag: false,
      openKeys: ['item_1'],
      modeMenu: 'inline',
      mode: 'top',
      panes,
      activeKey: panes[0].key
    }
    this.handleClickBread = this.handleClickBread.bind(this)
    this.changeModel = this.changeModel.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.inlineMenu = this.inlineMenu.bind(this)
  };
  handleClickBread (e) {
    this.setState({
      current: e.key,
    })
  }
  changeModel () {
    this.setState({
      modeMenu: !this.state.flag ? 'vertical' : 'inline',
      flag: !this.state.flag,
      openKeys: [],
    })
  }
  onOpenChange (openKeys) {
    const latestOpenKey = openKeys.find(i => this.state.openKeys.indexOf(i) === -1);
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
  }
  inlineMenu () {
    if (this.state.flag) {
      return <Sider className='miniSlider'>
        <div className={this.state.flag ? 'miniLogo' : 'logo'}><div>LOGO</div></div>
        <Menu
          onClick={this.handleClickBread}
          defaultSelectedKeys={['7']}
          mode={this.state.modeMenu}
>
          <Menu.Item key='7'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
          <SubMenu key='item_1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
            <Menu.Item key='8'>子菜单一</Menu.Item>
            <Menu.Item key='9'>子菜单二</Menu.Item>
            <Menu.Item key='10'>子菜单三</Menu.Item>
            <Menu.Item key='11'>子菜单四</Menu.Item>
          </SubMenu>
          <SubMenu key='item_2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
            <Menu.Item key='12'>子菜单五</Menu.Item>
            <Menu.Item key='13'>子菜单六</Menu.Item>
            <Menu.Item key='14'>子菜单七</Menu.Item>
            <Menu.Item key='15'>子菜单八</Menu.Item>
          </SubMenu>
          <SubMenu key='item_3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
            <Menu.Item key='16'>子菜单九</Menu.Item>
            <Menu.Item key='17'>子菜单十</Menu.Item>
            <Menu.Item key='18'>子菜单十一</Menu.Item>
            <Menu.Item key='19'>子菜单十二</Menu.Item>
          </SubMenu>
        </Menu>
        <Icon type={this.state.flag ? 'right-circle-o' : 'left-circle-o'} onClick={this.changeModel} />
      </Sider>
    } else {
      return <Sider className='normalSlider'>
        <div className={this.state.flag ? 'miniLogo' : 'logo'}><div>LOGO</div></div>
        <Menu
          onClick={this.handleClickBread}
          defaultSelectedKeys={['7']}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          mode={this.state.modeMenu}
>
          <Menu.Item key='7'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
          <SubMenu key='item_1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
            <Menu.Item key='8'>子菜单一</Menu.Item>
            <Menu.Item key='9'>子菜单二</Menu.Item>
            <Menu.Item key='10'>子菜单三</Menu.Item>
            <Menu.Item key='11'>子菜单四</Menu.Item>
          </SubMenu>
          <SubMenu key='item_2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
            <Menu.Item key='12'>子菜单五</Menu.Item>
            <Menu.Item key='13'>子菜单六</Menu.Item>
            <Menu.Item key='14'>子菜单七</Menu.Item>
            <Menu.Item key='15'>子菜单八</Menu.Item>
          </SubMenu>
          <SubMenu key='item_3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
            <Menu.Item key='16'>子菜单九</Menu.Item>
            <Menu.Item key='17'>子菜单十</Menu.Item>
            <Menu.Item key='18'>子菜单十一</Menu.Item>
            <Menu.Item key='19'>子菜单十二</Menu.Item>
          </SubMenu>
        </Menu>
        <Icon type={this.state.flag ? 'right-circle-o' : 'left-circle-o'} onClick={this.changeModel} />
      </Sider>
    }
  }
  render() {
  return (
    <div className='layout-inlineNav'>
      <Layout>
        {this.inlineMenu()}
        <Layout>
          <Header style={{height: '56px'}} >
            <Icon type='message' />
            <Avatar size='small' style={{ marginRight: 47 }} src='https://images.pexels.com/users/avatars/26735/lisa-fotios-223.jpeg?w=60&h=60&fit=crop&crop=faces' alt='DBox' />
            <DropdownNormal overlay={menu} type='caret-down' trigger={['hover']} >
              Alvin
            </DropdownNormal>
          </Header>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item><a href='javascript:void(0);'>订单中心</a></Breadcrumb.Item>
            <Breadcrumb.Item>子菜单</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <div className='content'>首页
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
}
