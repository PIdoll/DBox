import React from 'react';
import {Menu, Avatar, Tabs, Icon, Dropdown, Layout} from 'components';
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
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
const array = [];
export default class TabLayout extends React.Component {
  constructor(props) {
    super(props);
    const panes = [
      { title: <Icon type='home' />, content: '首页', key: '27' }
    ];
    this.state = {
      openKeys: ['sub1'],
      flag: false,
      current: 'platform',
      modeMenu: 'inline',
      mode: 'top',
      panes,
      activeKey: panes[0].key
    }
    this.handleClickTabs = this.handleClickTabs.bind(this)
    this.changeModel = this.changeModel.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.inlineMenu = this.inlineMenu.bind(this)
  };
  onOpenChange (openKeys) {
    const latestOpenKey = openKeys.find(i => this.state.openKeys.indexOf(i) === -1);
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
  }
  handleClickTabs (e) {
    array.push(...e.keyPath)
    this.setState({
      current: e.key,
      activeKey: e.key
    });
    if (this.state.panes.findIndex(i => i.key === e.key) !== -1) {
      return false
    } else {
      this.add(e.key, e.item.props.title)
    }
    console.log(array)
  }
  changeModel () {
    this.setState({
      modeMenu: !this.state.flag ? 'vertical' : 'inline',
      flag: !this.state.flag,
      openKeys: [],
    })
  }
  onChange (activeKey) {
    const id = array.indexOf(activeKey) + 1
    this.setState({ activeKey, openKeys: [array[id]] });
  }
  onEdit (targetKey, action) {
    this[action](targetKey);
  }
  add (key, title) {
    const panes = this.state.panes;
    const activeKey = key;
    panes.push({ title: title, content: title, key: activeKey });
    this.setState({panes, activeKey});
  }
  remove (targetKey) {
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
    const id = array.indexOf(activeKey) + 1
    this.setState({
      panes,
      activeKey,
      openKeys: [array[id]]});
  }
  inlineMenu () {
    if (this.state.flag) {
      return <Menu
        onClick={this.handleClickTabs}
        defaultSelectedKeys={['27']}
        selectedKeys={[this.state.activeKey]}
        mode={this.state.modeMenu}
>
        <Menu.Item title='首页' key='27'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
        <SubMenu key='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
          <Menu.Item title='子菜单一' key='28'>子菜单一</Menu.Item>
          <Menu.Item title='子菜单二' key='29'>子菜单二</Menu.Item>
          <Menu.Item title='子菜单三' key='30'>子菜单三</Menu.Item>
          <Menu.Item title='子菜单四' key='31'>子菜单四</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
          <Menu.Item title='子菜单五' key='32'>子菜单五</Menu.Item>
          <Menu.Item title='子菜单六' key='33'>子菜单六</Menu.Item>
          <Menu.Item title='子菜单七' key='34'>子菜单七</Menu.Item>
          <Menu.Item title='子菜单八' key='35'>子菜单八</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
          <Menu.Item title='子菜单九' key='36'>子菜单九</Menu.Item>
          <Menu.Item title='子菜单十' key='37'>子菜单十</Menu.Item>
          <Menu.Item title='子菜单十一' key='38'>子菜单十一</Menu.Item>
          <Menu.Item title='子菜单十二' key='39'>子菜单十二</Menu.Item>
        </SubMenu>
      </Menu>
    } else {
      return <Menu
        onClick={this.handleClickTabs}
        defaultSelectedKeys={['27']}
        selectedKeys={[this.state.activeKey]}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        mode={this.state.modeMenu}
>
        <Menu.Item title='首页' key='27'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
        <SubMenu key='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
          <Menu.Item title='子菜单一' key='28'>子菜单一</Menu.Item>
          <Menu.Item title='子菜单二' key='29'>子菜单二</Menu.Item>
          <Menu.Item title='子菜单三' key='30'>子菜单三</Menu.Item>
          <Menu.Item title='子菜单四' key='31'>子菜单四</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
          <Menu.Item title='子菜单五' key='32'>子菜单五</Menu.Item>
          <Menu.Item title='子菜单六' key='33'>子菜单六</Menu.Item>
          <Menu.Item title='子菜单七' key='34'>子菜单七</Menu.Item>
          <Menu.Item title='子菜单八' key='35'>子菜单八</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
          <Menu.Item title='子菜单九' key='36'>子菜单九</Menu.Item>
          <Menu.Item title='子菜单十' key='37'>子菜单十</Menu.Item>
          <Menu.Item title='子菜单十一' key='38'>子菜单十一</Menu.Item>
          <Menu.Item title='子菜单十二' key='39'>子菜单十二</Menu.Item>
        </SubMenu>
      </Menu>
    }
  }
  render() {
  return (
    <div className='layout-inlineNav inlineTabs'>
      <Layout>
        <Sider >
          <div className={this.state.flag ? 'miniLogo' : 'logo'}><div>LOGO</div></div>
          {this.inlineMenu()}
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
              {this.state.panes.map(pane => <TabPane closable={pane.key === '27' ? false : 'true'} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
}
