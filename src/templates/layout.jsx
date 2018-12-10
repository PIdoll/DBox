import React, { Component } from 'react'
import Layout, { Sider, Footer, Header, Content } from 'components/layout'
import Menu, {SubMenu, MenuItem} from 'components/menu'
import Icon from 'components/icon'
import Avatar from 'components/avatar'
import Breadcrumb from 'components/breadcrumb'
import Dropdown from 'components/dropdown'

const DropdownNormal = Dropdown.DropdownNormal;
const menu2 = (
  <Menu>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);

class MainLayout extends Component {
  state = {
    flag: false,
    current: 'platform',
    mode: 'inline',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  changeModel = () => {
    this.setState({
      flag: !this.state.flag,
      mode: this.state.flag ? 'vertical' : 'inline',
    });
  }
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基础布局</h1>
        <div className='layout_temp'>
          <Layout>
            <Header >Header</Header>
            <Content >Content</Content>
            <Footer >Footer</Footer>
          </Layout>
        </div>
        <br />
        <div className='layout_temp'>
          <Layout>
            <Header >Header</Header>
            <Layout>
              <Sider style={{ lineHight: '20vh' }} >Sider</Sider>
              <Content >Content
              </Content>
            </Layout>
            <Footer >Footer</Footer>
          </Layout>
        </div>
        <br />
        <div className='layout_temp'>
          <Layout>
            <Sider >Sider</Sider>
            <Layout>
              <Header >Header</Header>
              <Content style={{ height: '100%' }} >Content</Content>
              <Footer >Footer</Footer>
            </Layout>
          </Layout>
        </div>
        <br />
        <h1 className='h1'>顶部导航</h1>
        <Layout className='layout-horizontal'>
          <Header>
            <div className='logo'><div>LOGO</div></div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={['sub1']}
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
              <Menu.Item key='tool'>
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
            <div>Content</div>
          </Content>
        </Layout>
        <h1 className='h1'>侧边导航01</h1>
        <div className='layout-inlineNav'>
          <Layout>
            <Sider >
              <div className='logo'><div>LOGO</div></div>
              <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={['8']}
                defaultOpenKeys={['sub1']}
                mode={this.state.mode}
        >
                <Menu.Item key='7'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
                <SubMenu key='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
                  <Menu.Item key='8'>子菜单一</Menu.Item>
                  <Menu.Item key='9'>子菜单二</Menu.Item>
                  <Menu.Item key='10'>子菜单三</Menu.Item>
                  <Menu.Item key='11'>子菜单四</Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
                  <Menu.Item key='12'>子菜单五</Menu.Item>
                  <Menu.Item key='13'>子菜单六</Menu.Item>
                  <Menu.Item key='14'>子菜单七</Menu.Item>
                  <Menu.Item key='15'>子菜单八</Menu.Item>
                </SubMenu>
                <SubMenu key='sub3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
                  <Menu.Item key='16'>子菜单九</Menu.Item>
                  <Menu.Item key='17'>子菜单十</Menu.Item>
                  <Menu.Item key='18'>子菜单十一</Menu.Item>
                  <Menu.Item key='19'>子菜单十二</Menu.Item>
                </SubMenu>
              </Menu>
              <Icon type={this.state.flag ? 'left-circle-o' : 'right-circle-o'} onClick={this.changeModel} />
            </Sider>
            <Layout>
              <Header style={{height: '56px'}} >
                <Icon type='message' />
                <Avatar size='small' style={{ marginRight: 47 }} src='https://images.pexels.com/users/avatars/26735/lisa-fotios-223.jpeg?w=60&h=60&fit=crop&crop=faces' alt='DBox' />
                <DropdownNormal overlay={menu2} type='caret-down' trigger={['hover']} >
                  下拉菜单
                </DropdownNormal>
              </Header>
              <Content >Content</Content>
            </Layout>
          </Layout>
        </div>
      </div>
    )
  }
}

export default MainLayout;
