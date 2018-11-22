

#### **何时使用**

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

DBox 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- RadioButton 可作为更次级的页签来使用。

#### **基本用法和禁用**
```jsx
const TabPane = Tabs.TabPane;    
<Tabs defaultActiveKey='5' onChange={this.callBack}>
  <TabPane tab='选项一' key='5'>选项一</TabPane>
  <TabPane disabled tab='选项二' key='4'>选项二</TabPane>
  <TabPane tab='选项三' key='3'>选项三</TabPane>
</Tabs>   
```
#### **有图标的标签**
```jsx
const TabPane = Tabs.TabPane;    
<Tabs defaultActiveKey='7'>
  <TabPane tab={<span><Icon type='bars' />选项一</span>} key='7'>
  选项一
  </TabPane>
  <TabPane disabled tab={<span><Icon type='appstore-o' />选项二</span>} key='8'>
  选项二
  </TabPane>
  <TabPane tab={<span><Icon type='detail' />选项三</span>} key='9'>
  选项三
  </TabPane>
</Tabs>   
```
#### **tabs页水平，垂直滑动**
```jsx
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
class ModalExample extends React.Component {
  constructor() {
    super()
    this.state = {
      mode: 'top'
    };
this.handleModeChange = this.handleModeChange.bind(this)
handleModeChange = (e) => {
const mode = e.target.value;
	this.setState({ mode })
};
  render() {
    return (
		<div>    
			<RadioGroup onChange={this.handleModeChange} value={mode} style={{marginBottom: 8}}>
			  <RadioButton value='top'>水平</RadioButton>
			  <RadioButton value='left'>垂直</RadioButton>
			</RadioGroup>
			<Tabs defaultActiveKey='11' tabPosition={mode} style={{height: 247}}>
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
<ModalExample />

```



#### **API**

#### **Tabs**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | 无 |
| animated | 是否使用动画切换 Tabs，在 `tabPosition=top/bottom` 时有效 | boolean/{inkBar:boolean, tabPane:boolean} | true, 当 type="card" 时为 false |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | 第一个面板 |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |
| size | 大小，提供 `default` 和 `small` 两种大小，仅当 `type="line"` 时生效。 | string |`default` |
| tabBarExtraContent | tab bar 上额外的元素 | React.ReactNode | 无 |
| tabBarStyle | tab bar 的样式对象 | object | - |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |
| type | 页签的基本样式，可选 `line`、`card` `editable-card``cardTabs` 类型 | string | `line` |
| onChange | 切换面板的回调 | Function | 无 |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | 无 |
| onNextClick | next 按钮被点击的回调 | Function | 无 |
| onPrevClick | prev 按钮被点击的回调 | Function | 无 |
| onTabClick | tab 被点击的回调 | Function | 无 |

#### **Tabs.TabPane**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| key | 对应 activeKey | string | 无 |
| closable | 在type="editable-card"模式下使用阻止卡片关闭 | boolean | `true` |
| tab | 选项卡头显示文字 | string / ReactNode | 无 |
