import React, { Component } from 'react'
import Layout, { Sider, Footer, Header, Content } from 'components/layout'
import Menu, {SubMenu, MenuItem} from 'components/menu'
import Icon from 'components/icon'
import Avatar from 'components/avatar'
import Breadcrumb from 'components/breadcrumb'
import Dropdown from 'components/dropdown'
import Tabs from 'components/tabs'

const TabPane = Tabs.TabPane;
const DropdownNormal = Dropdown.DropdownNormal;
const menu = (
  <Menu theme='light'>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>Alvin</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>Dbox</a></MenuItem>
    <MenuItem key='4'><a href='https://www.baidu.com' target='_blank'>Idoll</a></MenuItem>
  </Menu>
);

class MainLayout extends Component {
  rootSubmenuKeys = ['item_1', 'item_2', 'item_3', 'sub1', 'sub2', 'sub3'];
  constructor(props) {
    super(props)
    const panes = [
      { title: <Icon type='home' />, content: '首页', key: '7' }
    ];
    this.state = {
      openKeys: ['item_1'],
      flag: false,
      flag2: false,
      current: 'platform',
      modeMenu: 'inline',
      modeMenu2: 'inline',
      mode: 'top',
      panes,
      activeKey: panes[0].key
    }
  }
  handleClickBread = (e) => {
    this.setState({
      current: e.key,
    })
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }
  handleClickTabs = (e) => {
    this.setState({
      current: e.key,
      activeKey: e.key
    });
    if (this.state.panes.findIndex(i => i.key === e.key) !== -1) {
      return false
    } else {
      this.add(e.key, e.item.props.title)
    }
  }
  changeModel2 = () => {
    this.setState({
      modeMenu2: !this.state.flag2 ? 'vertical' : 'inline',
      flag2: !this.state.flag2,
    })
  }
  changeModel = () => {
    this.setState({
      modeMenu: !this.state.flag ? 'vertical' : 'inline',
      flag: !this.state.flag,
    })
  }
  onChange = (activeKey) => {
    this.setState({activeKey});
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = (key, title) => {
    const panes = this.state.panes;
    const activeKey = key;
    panes.push({ title: title, content: title, key: activeKey });
    this.setState({panes, activeKey});
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({panes, activeKey});
  }
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基础布局</h1>
        <div className='layout_temp'>
          <Layout>
            <Header>头部</Header>
            <Content>内容</Content>
            <Footer>底部</Footer>
          </Layout>
        </div>
        <br />
        <div className='layout_temp'>
          <Layout>
            <Header>头部</Header>
            <Layout>
              <Sider style={{ lineHight: '20vh' }}>侧边栏</Sider>
              <Content>内容</Content>
            </Layout>
            <Footer>底部</Footer>
          </Layout>
        </div>
        <br />
        <div className='layout_temp'>
          <Layout>
            <Sider>侧边栏</Sider>
            <Layout>
              <Header>头部</Header>
              <Content style={{ height: '100%' }}>内容</Content>
              <Footer>底部</Footer>
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
            <div className='content'>内容</div>
          </Content>
        </Layout>
        <h1 className='h1'>侧边导航01</h1>
        <div className='layout-inlineNav'>
          <Layout>
            <Sider >
              <div className={this.state.flag2 ? 'miniLogo' : 'logo'}><div>LOGO</div></div>
              <Menu
                onClick={this.handleClickBread}
                defaultSelectedKeys={['8']}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                mode={this.state.modeMenu2}
        >
                <Menu.Item indexkey='7'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
                <SubMenu indexkey='item_1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
                  <Menu.Item indexkey='8'>子菜单一</Menu.Item>
                  <Menu.Item indexkey='9'>子菜单二</Menu.Item>
                  <Menu.Item indexkey='10'>子菜单三</Menu.Item>
                  <Menu.Item indexkey='11'>子菜单四</Menu.Item>
                </SubMenu>
                <SubMenu indexkey='item_2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
                  <Menu.Item indexkey='12'>子菜单五</Menu.Item>
                  <Menu.Item indexkey='13'>子菜单六</Menu.Item>
                  <Menu.Item indexkey='14'>子菜单七</Menu.Item>
                  <Menu.Item indexkey='15'>子菜单八</Menu.Item>
                </SubMenu>
                <SubMenu indexkey='item_3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
                  <Menu.Item indexkey='16'>子菜单九</Menu.Item>
                  <Menu.Item indexkey='17'>子菜单十</Menu.Item>
                  <Menu.Item indexkey='18'>子菜单十一</Menu.Item>
                  <Menu.Item indexkey='19'>子菜单十二</Menu.Item>
                </SubMenu>
              </Menu>
              <Icon type={this.state.flag2 ? 'right-circle-o' : 'left-circle-o'} onClick={this.changeModel2} />
            </Sider>
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
                <div className='content'>内容</div>
              </Content>
            </Layout>
          </Layout>
        </div>
        <h1 className='h1'>侧边导航02</h1>
        <div className='layout-inlineNav inlineTabs'>
          <Layout>
            <Sider >
              <div className={this.state.flag ? 'miniLogo' : 'logo'}><div>LOGO</div></div>
              <Menu
                onClick={this.handleClickTabs}
                defaultSelectedKeys={['7']}
                selectedKeys={[this.state.activeKey]}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                mode={this.state.modeMenu}
        >
                <Menu.Item title='首页' indexkey='7'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
                <SubMenu key='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
                  <Menu.Item title='子菜单一' indexkey='8'>子菜单一</Menu.Item>
                  <Menu.Item title='子菜单二' indexkey='9'>子菜单二</Menu.Item>
                  <Menu.Item title='子菜单三' indexkey='10'>子菜单三</Menu.Item>
                  <Menu.Item title='子菜单四' indexkey='11'>子菜单四</Menu.Item>
                </SubMenu>
                <SubMenu indexkey='sub2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
                  <Menu.Item title='子菜单五' indexkey='12'>子菜单五</Menu.Item>
                  <Menu.Item title='子菜单六' indexkey='13'>子菜单六</Menu.Item>
                  <Menu.Item title='子菜单七' indexkey='14'>子菜单七</Menu.Item>
                  <Menu.Item title='子菜单八' indexkey='15'>子菜单八</Menu.Item>
                </SubMenu>
                <SubMenu indexkey='sub3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
                  <Menu.Item title='子菜单九' indexkey='16'>子菜单九</Menu.Item>
                  <Menu.Item title='子菜单十' indexkey='17'>子菜单十</Menu.Item>
                  <Menu.Item title='子菜单十一' indexkey='18'>子菜单十一</Menu.Item>
                  <Menu.Item title='子菜单十二' indexkey='19'>子菜单十二</Menu.Item>
                </SubMenu>
              </Menu>
              <Icon type={this.state.flag ? 'right-circle-o' : 'left-circle-o'} onClick={this.changeModel} />
            </Sider>
            <Layout>
              <Header style={{height: '56px'}} >
                <Icon type='message' />
                <Avatar size='small' src='https://images.pexels.com/users/avatars/26735/lisa-fotios-223.jpeg?w=60&h=60&fit=crop&crop=faces' alt='DBox' />
                <DropdownNormal overlay={menu} type='caret-down' trigger={['hover']} >
                  Alvin
                </DropdownNormal>
              </Header>
              <Content>
                <Tabs hideAdd onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
                  {this.state.panes.map(pane => <TabPane closable={pane.key === '7' ? false : 'true'} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                </Tabs>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    )
  }
}

export default MainLayout;
