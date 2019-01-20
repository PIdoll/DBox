

##### **概述**

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

DBox 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- RadioButton 可作为更次级的页签来使用。

##### **基本用法和禁用**
水平展示tab栏
```jsx
import {Tabs} from 'dbox-ui';
const TabPane = Tabs.TabPane;
class TabsView extends React.Component {
  render() {
    return(
    <div>
      <Tabs defaultActiveKey='5'>
        <TabPane tab='选项一' key='5'>选项一</TabPane>
        <TabPane disabled tab='选项二' key='4'>选项二</TabPane>
        <TabPane tab='选项三' key='3'>选项三</TabPane>
      </Tabs>
    </div>
    )
  }
}
<TabsView />

```
##### **有图标的标签**
在tab栏内添加图标
```jsx
import {Tabs, Icon} from 'dbox-ui';
const TabPane = Tabs.TabPane;
class TabsView extends React.Component {
  render() {
    return(
    	<Tabs defaultActiveKey='7'>
	      <TabPane tab={<span><Icon type='bars' />选项一</span>} key='7'>
	      选项一
	      </TabPane>
	      <TabPane disabled tab={<span><Icon type='appstore-o' />选项二</span>} key='8'>
	      选项二
	      </TabPane>
	      <TabPane tab={<span><Icon type='user' />选项三</span>} key='9'>
	      选项三
	      </TabPane>
	    </Tabs>
    )
  }
}
<TabsView />

```

##### **tab页水平，垂直滑动**
通过设置tabPosition为top和left来水平和垂直模式展示
```jsx
import {Tabs, Radio} from 'dbox-ui';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
class TabsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    }
    this.handleModeChange = this.handleModeChange.bind(this)
  };
  handleModeChange (e) {
    const mode = e.target.value;
    this.setState({ mode });
  };
  render() {
  return (
    <div>
      <RadioGroup onChange={this.handleModeChange} value={this.state.mode} style={{marginBottom: 8}}>
          <RadioButton value='top'>水平</RadioButton>
          <RadioButton value='left'>垂直</RadioButton>
        </RadioGroup>
        <Tabs defaultActiveKey='11' tabPosition={this.state.mode} style={{height: 247}}>
          <TabPane tab='选项一' key='11'>选项一</TabPane>
          <TabPane tab='选项二' key='12'>选项二</TabPane>
          <TabPane tab='选项三' key='13'>选项三</TabPane>
          <TabPane tab='选项四' key='14'>选项四</TabPane>
          <TabPane tab='选项五' key='15'>选项五</TabPane>
          <TabPane tab='选项六' key='16'>选项六</TabPane>
          <TabPane tab='选项七' key='17'>选项七</TabPane>
          <TabPane tab='选项八' key='18'>选项八</TabPane>
          <TabPane tab='选项九' key='19'>选项九</TabPane>
          <TabPane tab='选项十' key='20'>选项十</TabPane>
          <TabPane tab='选项十一' key='21'>选项十一</TabPane>
          <TabPane tab='选项十二' key='22'>选项十二</TabPane>
          <TabPane tab='选项十三' key='23'>选项十三</TabPane>
          <TabPane tab='选项十四' key='24'>选项十四</TabPane>
        </Tabs>
    </div>
  )
}
}
<TabsView />
```

##### **卡片式标签页容器**
设置type='card'来仿卡片式的tabs
```jsx
import {Tabs} from 'dbox-ui';
const TabPane = Tabs.TabPane;
class TabsView extends React.Component {
  render() {
    return(
    	<Tabs type='card'>
	      <TabPane tab='分页一' key='25'>
	        <p>分页内容一</p>
	        <p>分页内容一</p>
	        <p>分页内容一</p>
	      </TabPane>
	      <TabPane tab='分页二' key='26'>
	        <p>分页内容二</p>
	        <p>分页内容二</p>
	        <p>分页内容二</p>
	      </TabPane>
	      <TabPane tab='分页三' key='27'>
	        <p>分页内容三</p>
	        <p>分页内容三</p>
	        <p>分页内容三</p>
	      </TabPane>
	    </Tabs>
    )
  }
}
<TabsView />
```

##### **新增和关闭**
动态添加和删除tabs分页
```jsx
import {Tabs} from 'dbox-ui';
const TabPane = Tabs.TabPane;
const panes = [
  { title: '分页一', content: '分页内容一', key: '1' },
  { title: '分页二', content: '分页内容二', key: '2' }
];
class TabsView extends React.Component {
	constructor(props) {
	this.newTabIndex = 0;
    super(props);
    this.state = {
      panes,
      activeKey: panes[0].key
    }
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this)
  };
  add () {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: '新增分页', content: '新增分页内容', key: activeKey });
    this.setState({panes, activeKey});
  };
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
  };
  onChange (activeKey) {
    this.setState({activeKey});
  };
  onEdit (targetKey, action) {
    this[action](targetKey);
  };
  render() {
    return(
    	<Tabs onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
          {this.state.panes.map(pane => <TabPane closable={pane.key === '1' ? false : 'true'} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
     )
  }
}
<TabsView />

```

##### **卡片式容器**
对容器设置背景使其更像是一个容器
```jsx
import {Tabs} from 'dbox-ui';
const TabPane = Tabs.TabPane;
class TabsView extends React.Component {
  render() {
    return(
    	<Tabs type='cardTabs'>
          <TabPane tab='分页一' key='28'>
            <p>分页内容一</p>
            <p>分页内容一</p>
            <p>分页内容一</p>
          </TabPane>
          <TabPane tab='分页二' key='29'>
            <p>分页内容二</p>
            <p>分页内容二</p>
            <p>分页内容二</p>
          </TabPane>
          <TabPane tab='分页三' key='30'>
            <p>分页内容三</p>
            <p>分页内容三</p>
            <p>分页内容三</p></TabPane>
        </Tabs>
    )
  }
}
<TabsView />
```

##### **吸顶效果**
页面滑动到一定距离固定tabs栏
```jsx
import ReactDOM from 'react-dom';
import {Tabs} from 'dbox-ui';
const TabPane = Tabs.TabPane;
class TabsView extends React.Component {
	componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.box_table);
    const currentHeight = element.offsetTop - element.offsetHeight;
    const left = `${element.offsetLeft -21}px`;
    window.addEventListener('scroll', this.onScroll = () => {
      if (window.scrollY >= currentHeight && window.scrollY < element.offsetTop) {
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = left;
        element.style.width = '100%';
        element.style.padding = '20px 20px';
        element.style.backgroundColor = '#fff';
      } else if (window.scrollY < currentHeight || window.scrollY > currentHeight + element.offsetHeight) {
        element.style.position = 'relative';
        element.style.padding = '0';
        element.style.left = '0';
      }
    });
  }
  componentWillUnmount () {
      window.removeEventListener('scroll', this.onScroll);
  }
  render() {
    return(
    	<Tabs ref='box_table'>
          <TabPane tab='分页一' key='31'>分页内容一</TabPane>
          <TabPane tab='分页二' key='32'>分页内容二</TabPane>
          <TabPane tab='分页三' key='33'>分页内容三</TabPane>
        </Tabs>
    )
  }
}
<TabsView />
```



##### **Tabs**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | 无 |
| animated | 是否使用动画切换 Tabs，在 `tabPosition=top/bottom` 时有效 | boolean/{inkBar:boolean, tabPane:boolean} | true, 当 type="card" 时为 false |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | 第一个面板 |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |
| tabBarExtraContent | tab bar 上额外的元素 | React.ReactNode | 无 |
| tabBarStyle | tab bar 的样式对象 | object | - |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |
| type | 页签的基本样式，可选 `line`、`card`、`editable-card`、`cardTabs` 类型 | string | `line` |
| onChange | 切换面板的回调 | Function | 无 |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | 无 |
| onNextClick | next 按钮被点击的回调 | Function | 无 |
| onPrevClick | prev 按钮被点击的回调 | Function | 无 |
| onTabClick | tab 被点击的回调 | Function | 无 |

##### **Tabs.TabPane**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| key | 对应 activeKey | string | 无 |
| closable | 在type="editable-card"模式下使用阻止卡片关闭 | boolean | `true` |
| tab | 选项卡头显示文字 | string / ReactNode | 无 |
| disabled |  禁用当前面板 | bool | 无 |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import TabsView from '../prevPage/tabs';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <TabsView />
</div>
```
