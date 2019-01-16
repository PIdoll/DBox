import React from 'react';
import {Menu, Breadcrumb, Layout} from 'components';
const SubMenu = Menu.SubMenu;
const Header = Layout.Header;
const Content = Layout.Content;
export default class TopLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'platform'
    }
    this.handleClick = this.handleClick.bind(this)
  };
  handleClick (e) {
    this.setState({
      current: e.key,
    })
  }
  render() {
  return (
    <Layout className='layout-horizontal'>
      <Header>
        <div className='logo'><div>LOGO</div></div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='horizontal'
          theme='dark'
	>
          <Menu.Item key='1'><div>首页</div></Menu.Item>
          <Menu.Item key='2'><div>工作台</div></Menu.Item>
          <SubMenu key='sub1' title={<div>订单中心</div>}>
            <Menu.Item key='3'>子菜单一</Menu.Item>
            <Menu.Item key='4'>子菜单二</Menu.Item>
            <Menu.Item key='5'>子菜单三</Menu.Item>
            <Menu.Item key='6'>子菜单四</Menu.Item>
          </SubMenu>
          <Menu.Item indexkey='tool'>
            <a href='https://www.baidu.com' target='_blank'><div>配置管理</div></a>
          </Menu.Item>
        </Menu>
      </Header>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item><a href='javascript:void(0);'>订单中心</a></Breadcrumb.Item>
        <Breadcrumb.Item>子菜单</Breadcrumb.Item>
      </Breadcrumb>
      <Content>
        <div className='content'>内容</div>
      </Content>
    </Layout>
  )
}
}

