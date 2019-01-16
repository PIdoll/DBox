import React from 'react';
import {Menu} from 'components';
const SubMenu = Menu.SubMenu;
export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
	    current: 'home'
	  }
	  this.handleClick = this.handleClick.bind(this)
  };
  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
  return (
    <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode='horizontal'
      theme='dark'
    >
      <Menu.Item key='home'>首页</Menu.Item>
      <Menu.Item key='platform' disabled>工作台</Menu.Item>
      <SubMenu key='bars' title={<span>订单中心</span>}>
        <Menu.Item key='1'>子菜单一</Menu.Item>
        <Menu.Item key='2'>子菜单二</Menu.Item>
        <Menu.Item key='3'>子菜单三</Menu.Item>
        <Menu.Item key='4'>子菜单四</Menu.Item>
      </SubMenu>
      <Menu.Item key='tool'>
        <a href='javascript:;' target='_blank' rel='noopener noreferrer'>配置管理</a>
      </Menu.Item>
    </Menu>
  )
}
}
