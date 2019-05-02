import React from 'react';
import {Menu, Switch, Icon} from 'components';
const SubMenu = Menu.SubMenu;
export default class DynamicSiderNav extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
	  	current: 'platform',
      theme: 'light',
	    mode: 'inline',
	  }
	  this.handleClick = this.handleClick.bind(this)
	  this.changeMode = this.changeMode.bind(this)
	  this.changeTheme = this.changeTheme.bind(this)
  };
   handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeTheme (value) {
    this.setState({
      theme: value ? 'light' : 'dark',
    })
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
        checked={this.state.theme === 'light'}
        onChange={this.changeTheme}
        checkedChildren='浅色'
        unCheckedChildren='深色'
      />
      <Switch
        onChange={this.changeMode}
        type='primary'
        checkedChildren='折叠'
        unCheckedChildren='展开'
      	/>
      <br />
      <Menu
        theme={this.state.theme}
        onClick={this.handleClick}
        mode={this.state.mode}
        defaultSelectedKeys={['21']}
        defaultOpenKeys={['sub11']}
      >
        <Menu.Item key='21'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
        <SubMenu key='sub11' title={<div><Icon type='platform' /><span>工作台</span></div>}>
          <Menu.Item key='22'>子菜单五</Menu.Item>
          <Menu.Item key='23'>子菜单六</Menu.Item>
          <Menu.Item key='24'>子菜单七</Menu.Item>
          <Menu.Item key='25'>子菜单八</Menu.Item>
        </SubMenu>
        <SubMenu key='sub12' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
          <Menu.Item key='26'>子菜单九</Menu.Item>
          <Menu.Item key='27'>子菜单十</Menu.Item>
          <Menu.Item key='28'>子菜单十一</Menu.Item>
          <Menu.Item key='29'>子菜单十二</Menu.Item>
        </SubMenu>
        <SubMenu key='sub13' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
          <Menu.Item key='30'>子菜单九</Menu.Item>
          <Menu.Item key='31'>子菜单十</Menu.Item>
          <Menu.Item key='32'>子菜单十一</Menu.Item>
          <Menu.Item key='33'>子菜单十二</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}
}

