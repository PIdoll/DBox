#### **如何使用**

-用于页面的整体布局

- 使用Sider时，如果需要配合其他Header, Content, Footer使用其他类型组件外层需要在包个Layout

#### **基础布局**
```jsx
import Layout from 'components/layout';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;
<div className='layout_temp'>
	<Layout>
		<Header>头部</Header>
		<Content>内容</Content>
		<Footer>底部</Footer>
	</Layout>
	<br />
  <Layout>
    <Header>头部</Header>
    <Layout>
      <Sider style={{ lineHight: '20vh' }}>侧边栏</Sider>
      <Content>内容</Content>
    </Layout>
    <Footer>底部</Footer>
  </Layout>
	<br />
   <Layout>
    <Sider>侧边栏</Sider>
    <Layout>
      <Header>头部</Header>
      <Content style={{ height: '100%' }}>内容</Content>
      <Footer>底部</Footer>
    </Layout>
  </Layout>
</div>
```

#### **顶部导航**
```jsx
import Menu, {SubMenu, MenuItem} from 'components/menu';
import Breadcrumb from 'components/breadcrumb';
import Layout from 'components/layout';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;
class LayoutView extends React.Component {
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
	      <Menu.Item indexkey='1'><div>首页</div></Menu.Item>
	      <Menu.Item indexkey='2'><div>工作台</div></Menu.Item>
	      <SubMenu indexkey='sub1' title={<div>订单中心</div>}>
	        <Menu.Item indexkey='3'>子菜单一</Menu.Item>
	        <Menu.Item indexkey='4'>子菜单二</Menu.Item>
	        <Menu.Item indexkey='5'>子菜单三</Menu.Item>
	        <Menu.Item indexkey='6'>子菜单四</Menu.Item>
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
<LayoutView />
```

#### **侧边导航01**
```jsx
import Layout from 'components/layout';
import Avatar from 'components/avatar'
import Icon from 'components/icon'
import Dropdown from 'components/dropdown'
import Menu, {SubMenu, MenuItem} from 'components/menu';
import Breadcrumb from 'components/breadcrumb';
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;
const DropdownNormal = Dropdown.DropdownNormal;
const menu = (
  <Menu theme='light'>
    <Menu.Item indexkey='2'><a href='https://www.baidu.com' target='_blank'>Alvin</a></Menu.Item>
    <Menu.Item indexkey='3'><a href='https://www.baidu.com' target='_blank'>Dbox</a></Menu.Item>
    <Menu.Item indexkey='4'><a href='https://www.baidu.com' target='_blank'>Idoll</a></Menu.Item>
  </Menu>
)
class LayoutView extends React.Component {
  constructor(props) {
    super(props);
    const panes = [
      { title: <Icon type='home' />, content: '首页', key: '7' }
    ];
    rootSubmenuKeys = ['item_1', 'item_2', 'item_3'];
    this.state = {
      flag2: false,
      openKeys: ['item_1'],
      modeMenu2: 'inline',
      mode: 'top',
      panes,
      activeKey: panes[0].key
    }
    this.handleClickBread = this.handleClickBread.bind(this)
    this.changeModel2 = this.changeModel2.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
  };
  handleClickBread (e) {
    this.setState({
      current: e.key,
    })
  }
  changeModel2 () {
    this.setState({
      modeMenu2: !this.state.flag2 ? 'vertical' : 'inline',
      flag2: !this.state.flag2,
    })
  }
  onOpenChange (openKeys) {
    const latestOpenKey = openKeys.find(i => this.state.openKeys.indexOf(i) === -1);
    console.log(latestOpenKey)
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
  }
  render() {
  return (
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
          <Icon type={this.state.flag2 ? 'left-circle-o' : 'right-circle-o'} onClick={this.changeModel2} />
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
  )
}
}
<LayoutView />
```

#### **侧边导航02**
```jsx
import Layout from 'components/layout';
import Tabs from 'components/tabs'
import Avatar from 'components/avatar'
import Icon from 'components/icon'
import Dropdown from 'components/dropdown'
import Menu, {SubMenu, MenuItem} from 'components/menu';
const TabPane = Tabs.TabPane;
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = Layout.Sider;
const DropdownNormal = Dropdown.DropdownNormal;
const menu = (
  <Menu theme='light'>
    <Menu.Item indexkey='2'><a href='https://www.baidu.com' target='_blank'>Alvin</a></Menu.Item>
    <Menu.Item indexkey='3'><a href='https://www.baidu.com' target='_blank'>Dbox</a></Menu.Item>
    <Menu.Item indexkey='4'><a href='https://www.baidu.com' target='_blank'>Idoll</a></Menu.Item>
  </Menu>
)
class LayoutView extends React.Component {
  constructor(props) {
    super(props);
    const panes = [
      { title: <Icon type='home' />, content: '首页', key: '7' }
    ];
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
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
  };
  onOpenChange (openKeys) {
    const latestOpenKey = openKeys.find(i => this.state.openKeys.indexOf(i) === -1);
    console.log(latestOpenKey)
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
  }
  handleClickTabs (e) {
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
  changeModel () {
    this.setState({
      modeMenu: !this.state.flag ? 'vertical' : 'inline',
      flag: !this.state.flag,
    })
  }
  onChange (activeKey) {
    this.setState({activeKey});
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
    this.setState({panes, activeKey});
  }
  render() {
  return (
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
            <SubMenu indexkey='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
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
          <Icon type={this.state.flag ? 'left-circle-o' : 'right-circle-o'} onClick={this.changeModel} />
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
  )
}
}
<LayoutView />
```

#### **API**

Layout

| 参数       | 说明                   | 类型               | 默认值       |
|-----------|-------------------------------------|--------------------|-------------|
| className      | 容器 className | string | - |
| hasSider    | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动    | boolean             |  - |
| style    | 样式    | object             |  - |
-具体API可参考使用的组件API
