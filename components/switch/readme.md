表示开关状态/两种状态之间的切换

##### **基本用法**
切换开关状态
```jsx
import {Switch} from 'dbox-ui';
<Switch defaultChecked></Switch>
```

##### **按钮操作**
通过按钮控制开关状态
```jsx
import {Switch, Button} from 'dbox-ui';
class SwitchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    disabled: true,
    defaultChecked: true
    }
    this.toggle = this.toggle.bind(this)
  };
  toggle () {
    this.setState({
      disabled: !this.state.disabled
    })
  };
  render() {
  return (
	<div>
		<Switch disabled={this.state.disabled}></Switch>		<Button onClick={this.toggle} >改变禁用状态</Button>
	</div>
  )
}
}
<SwitchView />
```

##### **两种大小**
通过size是否设置small来控制开关的大小
```jsx
import {Switch} from 'dbox-ui';
<div>
	<Switch defaultChecked />
	<br />
	<Switch size='small' />
</div>
```


##### **带有文字的按钮**
在开关内添加描述，一目了然开关的状态
```jsx
import {Switch} from 'dbox-ui';
<Switch checkedChildren={'1'} unCheckedChildren={'0'} />
```

##### **执行中**
多于其他操作搭配，表示开关的执行过程
```jsx
import {Switch} from 'dbox-ui';
<div>
	<Switch disabled loading defaultChecked />
    <br />
    <Switch disabled size='small' loading />
</div>
```


##### **Switch**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | string/ReactNode | - |
| defaultChecked | 初始是否选中 | boolean | false |
| size | 开关大小，可选值：`default` `small` | string | default |
| unCheckedChildren | 非选中时的内容 | string/ReactNode | - |
| onChange | 变化时回调函数 | Function(checked:Boolean) | - |
| onClick | 点击时回调函数 | Function | - |
| loading | 加载中的开关 | boolean | false |
| disabled | 失效状态 | boolean | false |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import SwitchView from '../prevPage/switch';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <SwitchView />
</div>
```
