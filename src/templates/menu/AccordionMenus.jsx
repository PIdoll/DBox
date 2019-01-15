import React from 'react';
import {Menu, Icon} from 'components';
const SubMenu = Menu.SubMenu;
export default class AccordionMenus extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
      openKeys: ['sub_1'],
	    current: 'home'
	  }
	  this.onOpenChange = this.onOpenChange.bind(this)
  };
  onOpenChange (value) {
    const latestOpenKey = value.find(key => this.state.openKeys.indexOf(key) === -1);
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
  }
  render() {
  return (
    <Menu
      onClick={this.handleClick}
      defaultSelectedKeys={['55']}
      openKeys={this.state.openKeys}
      onOpenChange={this.onOpenChange}
      mode='inline'
        >
      <Menu.Item key='55'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
      <SubMenu key='sub_1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
        <Menu.Item key='56'>子菜单一</Menu.Item>
        <Menu.Item key='57'>子菜单二</Menu.Item>
        <Menu.Item key='58'>子菜单三</Menu.Item>
        <Menu.Item key='59'>子菜单四</Menu.Item>
      </SubMenu>
      <SubMenu key='sub_2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
        <Menu.Item key='60'>子菜单五</Menu.Item>
        <Menu.Item key='61'>子菜单六</Menu.Item>
        <Menu.Item key='62'>子菜单七</Menu.Item>
        <Menu.Item key='63'>子菜单八</Menu.Item>
      </SubMenu>
      <SubMenu key='sub_3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
        <Menu.Item key='64'>子菜单九</Menu.Item>
        <Menu.Item key='65'>子菜单十</Menu.Item>
        <Menu.Item key='66'>子菜单十一</Menu.Item>
        <Menu.Item key='67'>子菜单十二</Menu.Item>
      </SubMenu>
    </Menu>
  )
}
}

