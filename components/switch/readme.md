#### **何时使用**

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。


##### **基本用法**
```jsx
<Switch defaultChecked></Switch>
```

##### **按钮操作**
```jsx
initialState = {
    disabled: true,
    defaultChecked: true
  }
  toggle = () => {
    setState({
      disabled: !state.disabled
    });
  }
<div>
	<Switch disabled={state.disabled}></Switch><Button onClick={this.toggle} >改变禁用状态</Button>
</div>
```

##### **两种大小**
```jsx
<div>
	<Switch defaultChecked />
	<br />
	<Switch size='small' />
</div>
```


##### **带有文字的按钮**
```jsx
<Switch checkedChildren={'1'} unCheckedChildren={'0'} />
```

##### **执行中**
```jsx
<div>
	<Switch disabled loading defaultChecked />
    <br />
    <Switch disabled size='small' loading />
</div>
```


## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | string\|ReactNode |  |
| defaultChecked | 初始是否选中 | boolean | false |
| size | 开关大小，可选值：`default` `small` | string | default |
| unCheckedChildren | 非选中时的内容 | string\|ReactNode |  |
| onChange | 变化时回调函数 | Function(checked:Boolean) |  |
| onClick | 点击时回调函数 | Function |  |
| loading | 加载中的开关 | boolean | false |
| disabled | 失效状态 | boolean | false |

##方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |