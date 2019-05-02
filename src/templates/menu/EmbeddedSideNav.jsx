import React from 'react';
import {Menu, Switch, Icon} from 'components';
const SubMenu = Menu.SubMenu;
export default class EmbeddedSideNav extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
      current: 'home',
      mode: 'inline',
	  }
	  this.handleClick = this.handleClick.bind(this)
	  this.changeMode = this.changeMode.bind(this)
  };
  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeMode (value) {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }
  render() {
  return (
    <div>
      <Switch
        onChange={this.changeMode}
        type='primary'
        checkedChildren='折叠'
        unCheckedChildren='展开'
      />
      <br />
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['5']}
        mode={this.state.mode}
      >
        <Menu.Item key='5'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
        <SubMenu key='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
          <Menu.Item key='6'>子菜单一</Menu.Item>
          <Menu.Item key='7'>子菜单二</Menu.Item>
          <Menu.Item key='8'>子菜单三</Menu.Item>
          <Menu.Item key='9'>子菜单四</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
          <Menu.Item key='10'>子菜单五</Menu.Item>
          <Menu.Item key='11'>子菜单六</Menu.Item>
          <Menu.Item key='12'>子菜单七</Menu.Item>
          <Menu.Item key='13'>子菜单八</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
          <Menu.Item key='14'>子菜单九</Menu.Item>
          <Menu.Item key='15'>子菜单十</Menu.Item>
          <Menu.Item key='16'>子菜单十一</Menu.Item>
          <Menu.Item key='17'>子菜单十二</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}
}

