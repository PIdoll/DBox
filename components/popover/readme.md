#### **何时使用**

- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

- 和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

#### **基本用法**
```jsx
const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
<Popover content={content} title='标题' trigger='hover'>
  <Button>鼠标移入</Button>
</Popover>
```

#### **三种触发方式**
```jsx
const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
<div className='arrow'>
  <Popover content={content} title='标题' trigger='hover'>
    <Button>鼠标移入</Button>
  </Popover>
  <Popover content={content} title='标题' trigger='focus'>
    <Button>鼠标聚焦</Button>
  </Popover>
  <Popover content={content} title='标题' trigger='click'>
    <Button>单击鼠标</Button>
  </Popover>
</div>
```

#### **12个方向**
```jsx
const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
const buttonWidth = 70;
const text = <span>标题</span>;
<div className='placement'>
  <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
    <Popover placement='topLeft' title={text} content={content} trigger='click'>
      <Button> T L </Button>
    </Popover>
    <Popover placement='top' title={text} content={content} trigger='click'>
      <Button>Top</Button>
    </Popover>
    <Popover placement='topRight' title={text} content={content} trigger='click'>
      <Button>T R</Button>
    </Popover>
  </div>
  <div style={{ width: buttonWidth, float: 'left' }}>
    <Popover placement='leftTop' title={text} content={content} trigger='click'>
      <Button>L  T</Button>
    </Popover>
    <Popover placement='left' title={text} content={content} trigger='click'>
      <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Left</Button>
    </Popover>
    <Popover placement='leftBottom' title={text} content={content} trigger='click'>
      <Button>L  B</Button>
    </Popover>
  </div>
  <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
    <Popover placement='rightTop' title={text} content={content} trigger='click'>
      <Button>R T</Button>
    </Popover>
    <Popover placement='right' title={text} content={content} trigger='click'>
      <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Right</Button>
    </Popover>
    <Popover placement='rightBottom' title={text} content={content} trigger='click'>
      <Button>R B</Button>
    </Popover>
  </div>
  <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
    <Popover placement='bottomLeft' title={text} content={content} trigger='click'>
      <Button>B L</Button>
    </Popover>
    <Popover placement='bottom' title={text} content={content} trigger='click'>
      <Button>Bottom</Button>
    </Popover>
    <Popover placement='bottomRight' title={text} content={content} trigger='click'>
      <Button> B R </Button>
    </Popover>
  </div>
</div>
```

#### **箭头指向**
```jsx
const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
const text = <span>标题</span>;
<div className='arrow'>
  <Popover placement='topLeft' title={text} content={content}>
    <Button>边缘对齐</Button>
  </Popover>
  <Popover placement='topLeft' title={text} content={content} arrowPointAtCenter>
    <Button>箭头指向中心</Button>
  </Popover>
</div>
```

#### **从浮层内关闭**
```jsx
const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
class PopoverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		visible: false
    }
    this.hide = this.hide.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  };
	hide () {
		this.setState({
		  visible: false
		});
	};
	handleVisibleChange (visible) {
		this.setState({ visible });
	};
  render() {
  return (
	<Popover
	  content={<a onClick={this.hide}>关闭</a>}
	  title='标题'
	  trigger='click'
	  visible={this.state.visible}
	  onVisibleChange={this.handleVisibleChange}
	>
	  <Button>单击鼠标</Button>
	</Popover>
  )
}
}
<PopoverView />
```


#### **悬停点击弹出层**
```jsx
const clickContent = (
  <div>
    这是点击内容
  </div>
);
const hoverContent = (
  <div>
    这是悬停内容
  </div>
);
class PopoverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		visible: false
    }
    this.hide = this.hide.bind(this);
    this.hidele = this.hidele.bind(this);
    this.handleHoveredChange = this.handleHoveredChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
  };
	hide () {
		this.setState({
		  visible: false,
		  hovered: false,
		  clicked: false
		});
	};
	hidele () {
	    this.setState({
	      clicked: false,
	      hovered: false
	    });
	  };
	handleHoveredChange (visible) {
		this.setState({ clicked: false, hovered: visible });
	};
	handleClickChange (visible) {
		this.setState({ clicked: visible, hovered: false });
	};
  render() {
	  return (
			<Popover
  trigger='hover'
  title='悬停标题'
  content={hoverContent}
  visible={this.state.hovered}
  onVisibleChange={this.handleHoveredChange}
>
  <Popover
    content={(
      <div>
        {clickContent}
        <a onClick={this.hidele}>关闭</a>
      </div>
    )}
    title='点击标题'
    trigger='click'
    visible={this.state.clicked}
    onVisibleChange={this.handleClickChange}
  >
    <Button>悬停并点击</Button>
  </Popover>
</Popover>
	  )
	}
}
<PopoverView />





```


#### **Popover**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 卡片内容 | string\ReactNode | 无 |
| overlayClassName | 卡片类名 | string | 无 |
更多属性请参考 [Tooltip]

#### **Action**

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
