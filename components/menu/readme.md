#### **何时使用**

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：[通用布局]。

#### **顶部导航**

```jsx
import {Menu} from 'components';
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
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
      current: e.indexkey,
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
      <Menu.Item indexkey='home'>首页</Menu.Item>
      <Menu.Item indexkey='platform' disabled>工作台</Menu.Item>
      <SubMenu indexkey='bars' title={<span>订单中心</span>}>
        <Menu.Item indexkey='1'>子菜单一</Menu.Item>
        <Menu.Item indexkey='2'>子菜单二</Menu.Item>
        <Menu.Item indexkey='3'>子菜单三</Menu.Item>
        <Menu.Item indexkey='4'>子菜单四</Menu.Item>
      </SubMenu>
      <Menu.Item indexkey='tool'>
        <a href='https://www.baidu.com' target='_blank' rel='noopener noreferrer'>配置管理</a>
      </Menu.Item>
    </Menu>
  )
}
}
<MenuView />
```

#### **手风琴菜单**
```jsx
import {Menu} from 'components';
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
	rootSubmenuKeys = ['sub_1', 'sub_2', 'sub3_'];
  constructor(props) {
    super(props);
	  this.state = {
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
<MenuView />
```


#### **内嵌侧栏导航**

```jsx
import {Menu, Switch, Icon} from 'components';
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
      current: 'home',
      mode: 'inline',
	  }
	  this.handleClick = this.handleClick.bind(this)
	  this.hangeMode = this.hangeMode.bind(this)
  };
  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.indexkey,
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
      <Menu.Item indexkey='5'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
      <SubMenu indexkey='sub1' title={<div><Icon type='platform' /><span>工作台</span></div>}>
        <Menu.Item indexkey='6'>子菜单一</Menu.Item>
        <Menu.Item indexkey='7'>子菜单二</Menu.Item>
        <Menu.Item indexkey='8'>子菜单三</Menu.Item>
        <Menu.Item indexkey='9'>子菜单四</Menu.Item>
      </SubMenu>
      <SubMenu indexkey='sub2' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
        <Menu.Item indexkey='10'>子菜单五</Menu.Item>
        <Menu.Item indexkey='11'>子菜单六</Menu.Item>
        <Menu.Item indexkey='12'>子菜单七</Menu.Item>
        <Menu.Item indexkey='13'>子菜单八</Menu.Item>
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
<MenuView />
```

#### **动态侧栏导航**

```jsx
import {Menu, Switch, Icon} from 'components';
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
	  	current: 'platform',
      theme: 'light',
	    mode: 'inline',
	  }
	  this.handleClick = this.handleClick.bind(this)
	  this.hangeMode = this.hangeMode.bind(this)
	  this.changeTheme = this.changeTheme.bind(this)
  };
   handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.indexkey,
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
<MenuView />
```


#### **Menu**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 |  |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string\[] |  |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: `vertical` `vertical-right` `horizontal` `inline` | `vertical` |
| multiple | 是否允许多选 | boolean | false |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string\[] |  |
| selectable | 是否允许选中 | boolean | true |
| selectedKeys | 当前选中的菜单项 key 数组 | string\[] |  |
| style | 根节点样式 | object |  |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |
| theme | 主题颜色 | string: `light` `dark` | `dark` |
| onClick | 点击 MenuItem 调用此函数 | function({ item, key, keyPath }) | - |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, selectedKeys }) | - |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string\[]) | noop |
| onSelect | 被选中时调用 | function({ item, key, selectedKeys }) | 无   |

> More options in [rc-menu](https://github.com/react-component/menu#api)

#### **Menu.Item**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| key | item 的唯一标志 | string |  |

#### **Menu.SubMenu**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子菜单的菜单项 | Array&lt;MenuItem/SubMenu> |  |
| disabled | 是否禁用 | boolean | false |
| key | 唯一标志 | string |  |
| title | 子菜单项值 | string/ReactNode |  |
| onTitleClick | 点击子菜单标题 | function({ key, domEvent }) |  |

#### **Menu.ItemGroup**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 分组的菜单项 | MenuItem\[] |  |
| title | 分组标题 | string/ReactNode |  |

#### **Menu.Divider**

菜单项分割线，只用在弹出菜单内。
