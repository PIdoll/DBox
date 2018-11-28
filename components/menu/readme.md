#### **何时使用**

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的使用可以参考：[通用布局]。

#### **顶部导航**

```jsx
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
	    current: 'platform'
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
        <a href='#' target='_blank' rel='noopener noreferrer'>配置管理</a>
      </Menu.Item>
    </Menu>
  )
}
}
<MenuView />
```
#### **内嵌侧栏导航**

```jsx
const SubMenu = Menu.SubMenu;
<Menu
  onClick={this.handleClick}
  defaultSelectedKeys={['1']}
  defaultOpenKeys={['sub1']}
  mode='inline'
>
  <Menu.Item key='sub1'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
  <SubMenu key='sub2' title={<div><Icon type='platform' /><span>工作台</span></div>}>
    <Menu.Item>子菜单一</Menu.Item>
    <Menu.Item>子菜单二</Menu.Item>
    <Menu.Item>子菜单三</Menu.Item>
    <Menu.Item>子菜单四</Menu.Item>
  </SubMenu>
  <SubMenu key='sub3' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
    <SubMenu title='菜单组一'>
      <Menu.Item>子菜单五</Menu.Item>
      <Menu.Item>子菜单六</Menu.Item>
    </SubMenu>
    <SubMenu title='菜单组二'>
      <Menu.Item>子菜单七</Menu.Item>
      <Menu.Item>子菜单八</Menu.Item>
    </SubMenu>
  </SubMenu>
  <SubMenu key='sub4' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
    <Menu.Item>子菜单九</Menu.Item>
    <Menu.Item>子菜单十</Menu.Item>
    <Menu.Item>子菜单十一</Menu.Item>
    <Menu.Item>子菜单十二</Menu.Item>
  </SubMenu>
</Menu>
```

#### **折叠侧栏导航**

```jsx
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
	    mode: 'vertical',
	  }
    this.changeMode = this.changeMode.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };
   handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeMode (value) {
    this.setState({
      mode: value ? 'inline' : 'vertical',
    });
  }
  render() {
  return (
	<div>
		<Switch
			onChange={this.changeMode}
			type='primary'
	       checkedChildren='展开'
	       unCheckedChildren='折叠'
	    />
        <br />
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
        >
          <Menu.Item key='sub1'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
          <SubMenu key='sub2' title={<div><Icon type='platform' /><span>工作台</span></div>}>
            <Menu.Item>子菜单一</Menu.Item>
            <Menu.Item>子菜单二</Menu.Item>
            <Menu.Item>子菜单三</Menu.Item>
            <Menu.Item>子菜单四</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
            <SubMenu title='菜单组一'>
              <Menu.Item>子菜单五</Menu.Item>
              <Menu.Item>子菜单六</Menu.Item>
            </SubMenu>
            <SubMenu title='菜单组二'>
              <Menu.Item>子菜单七</Menu.Item>
              <Menu.Item>子菜单八</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='sub4' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
            <Menu.Item>子菜单九</Menu.Item>
            <Menu.Item>子菜单十</Menu.Item>
            <Menu.Item>子菜单十一</Menu.Item>
            <Menu.Item>子菜单十二</Menu.Item>
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
const SubMenu = Menu.SubMenu;
class MenuView extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
	  	current: 'platform',
	    mode2: 'inline',
	  }
    this.changeMode2 = this.changeMode2.bind(this)
    this.handleClick = this.handleClick.bind(this)
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
  changeMode2 (value) {
    this.setState({
      mode2: value ? 'vertical' : 'inline',
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
      	onChange={this.changeMode2}
      	type='primary'
       checkedChildren='折叠'
       unCheckedChildren='展开'
      	/>
      <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode2}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key='sub1'><div><Icon type='home' /><span>首页</span></div></Menu.Item>
          <SubMenu key='sub2' title={<div><Icon type='platform' /><span>工作台</span></div>}>
            <Menu.Item>子菜单一</Menu.Item>
            <Menu.Item>子菜单二</Menu.Item>
            <Menu.Item>子菜单三</Menu.Item>
            <Menu.Item>子菜单四</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title={<div><Icon type='bars' /><span>订单中心</span></div>}>
            <SubMenu title='菜单组一'>
              <Menu.Item>子菜单五</Menu.Item>
              <Menu.Item>子菜单六</Menu.Item>
            </SubMenu>
            <SubMenu title='菜单组二'>
              <Menu.Item>子菜单七</Menu.Item>
              <Menu.Item>子菜单八</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='sub4' title={<div><Icon type='tool' /><span>配置管理</span></div>}>
            <Menu.Item>子菜单九</Menu.Item>
            <Menu.Item>子菜单十</Menu.Item>
            <Menu.Item>子菜单十一</Menu.Item>
            <Menu.Item>子菜单十二</Menu.Item>
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
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: `vertical` `vertical-right` `horizontal` `inline` | `vertical` |
| multiple | 是否允许多选 | boolean | false |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string\[] |  |
| selectable | 是否允许选中 | boolean | true |
| selectedKeys | 当前选中的菜单项 key 数组 | string\[] |  |
| style | 根节点样式 | object |  |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |
| theme | 主题颜色 | string: `light` `dark` | `light` |
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
