在多个备选项中选中单个状态。

##### **基本样式展示**
点击文字或按钮选中对应状态
```jsx
import {Radio} from 'dbox-ui';
<div>
	<Radio>A</Radio>
	<Radio checked style={{margin: '0 8px 0 8px'}}>B</Radio>
	<Radio defaultChecked>C</Radio>
</div>
```

##### **禁用单选框**
通过增加按钮来控制时候允许操作
```jsx
import {Radio, Button} from 'dbox-ui';
class RadioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
    this.toggleDisabled = this.toggleDisabled.bind(this)
  };
  toggleDisabled () {
    this.setState({
      disabled: !this.state.disabled
    });
	}
  render() {
		return (
			<div>
				<Radio defaultChecked={false} disabled >不能操作</Radio>
				<Radio disabled={this.state.disabled} style={{margin: '0 8px 0 8px'}}>不允许操作</Radio>
				<Button type='primary' onClick={this.toggleDisabled}>控制能否操作</Button>
			</div>
		)
	}
}
<RadioView />
```

##### **互斥单选框**
一组单选框只允许选中一个
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
class RadioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }
    this.onChange = this.onChange.bind(this)
  };
	onChange (e) {
		this.setState({
			value: e.target.value
		})
	}
  render() {
		return (
			<RadioGroup onChange={this.onChange} defaultValue={this.state.value}>
				<Radio value='1'>A</Radio>
				<Radio disabled value='2' style={{margin: '0 8px 0 8px'}}>B</Radio>
				<Radio value='3'>C</Radio>
				<Radio value='4' style={{margin: '0 0 0 8px'}}>D</Radio>
			</RadioGroup>
		)
	}
}
<RadioView />
```

##### **垂直组合单选框**
适用于垂直组合样式
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
class RadioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }
    this.onChange = this.onChange.bind(this)
  };
	onChange (e) {
		this.setState({
			value: e.target.value
		})
	}
  render() {
		return (
			<RadioGroup direction='vertical' onChange={this.onChange} defaultValue='3'>
				<Radio value='1'>A</Radio>
				<Radio value='2' style={{margin: '8px 0 8px 0'}}>B</Radio>
				<Radio value='3'>C</Radio>
				<Radio value='4' style={{margin: '8px 0 0 0'}}>D</Radio>
			</RadioGroup>
		)
	}
}
<RadioView />
```

##### **分组单选框**
通过RadioGroup包裹多个单选组合
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
class RadioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }
    this.onChange = this.onChange.bind(this)
  };
	onChange (e) {
		this.setState({
			value: e.target.value
		})
	};
  render() {
		return (
			<div>
				<RadioGroup onChange={this.onChange} defaultValue='6'>
					<Radio value='5'>A</Radio>
					<Radio value='6' style={{margin: '0 8px 0 8px'}}>B</Radio>
					<Radio value='7'>C</Radio>
					<Radio value='8' style={{margin: '0 8px 0 8px'}}>D</Radio>
				</RadioGroup>
				<br />
				<br />
				<RadioGroup onChange={this.onChange} defaultValue='11'>
					<Radio value='10'>A</Radio>
					<Radio value='9' style={{margin: '0 8px 0 8px'}}>B</Radio>
					<Radio value='11'>C</Radio>
					<Radio value='12' style={{margin: '0 8px 0 8px'}}>D</Radio>
				</RadioGroup>
			</div>
		)
	}
}
<RadioView />
```

##### **name单选框**
通过给RadioGroup添加name属性给予值让所有的单选框拥有统一的类名方便统一操作
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
class RadioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }
    this.onChange = this.onChange.bind(this)
  };
	onChange (e) {
		this.setState({
			value: e.target.value
		})
	};
  render() {
		return (
			<RadioGroup name='radioGroup' onChange={this.onChange} defaultValue={this.state.value}>
				<Radio value='1'>A</Radio>
				<Radio value='2' style={{margin: '0 8px 0 8px'}}>B</Radio>
				<Radio value='3'>C</Radio>
				<Radio value='4' style={{margin: '0 8px 0 8px'}}>D</Radio>
			</RadioGroup>
		)
	}
}
<RadioView />
```

##### **按钮样式**
仿按钮样式的单选框
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
<div>
	<RadioGroup defaultValue='a'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
	<br />
	<br />
	<RadioGroup defaultValue='a'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton disabled value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
	<br />
	<br />
	<RadioGroup defaultValue='c' disabled>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
</div>
```

##### **大小按钮**
通过size属性设置large,small和不设置属性改变单选框的大小
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
<div>
	<RadioGroup disabled defaultValue='a' size='large'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
	<br />
	<br />
	<RadioGroup defaultValue='a'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
	<br />
	<br />
	<RadioGroup defaultValue='a' size='small'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
</div>
```

##### **按钮底纹**
拥有底纹的仿按钮样式的单选框
```jsx
import {Radio} from 'dbox-ui';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
<div>
	<RadioGroup disabled defaultValue='b' buttonStyle='solid'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
	<br />
	<RadioGroup size='large' defaultValue='c' buttonStyle='solid'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
	<br />
	<RadioGroup size='small' defaultValue='d' buttonStyle='solid'>
		<RadioButton value='a'>杭州</RadioButton>
		<RadioButton value='b'>上海</RadioButton>
		<RadioButton disabled value='c'>北京</RadioButton>
		<RadioButton value='d'>成都</RadioButton>
	</RadioGroup>
</div>
```

#### **Radio**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| disabled | 禁用 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | 无 |

#### **RadioGroup**

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 |  默认值 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的值 | string | 无 |
| direction | 组合的垂直(vertical)与水平排列方式(默认无传参) | string | 无 |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | 无 |
| size | 大小，只对按钮样式生效 | `large` \ `default` \ `small` |`default`|
| value | 用于设置当前选中的值 | any | 1 |
| onChange | 选项变化时的回调函数 | Function(e:Event) | 无 |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | 默认描边 \ `solid`填充 | 无 |



<style>.idoll-steps{margin-bottom: 10px}</style>

```jsx noeditor
import {BackTop} from 'dbox-ui';
import RadioView from '../prevPage/radio';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <RadioView />
</div>
```
