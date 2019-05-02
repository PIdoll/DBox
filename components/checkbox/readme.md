
在一组可选项中进行多项选择时；

##### **通用多选框**
可在选中和非选中之间切换
```jsx
import {Checkbox} from 'dbox-ui';
<Checkbox >
  多选框
</Checkbox>
```

##### **受控多选框**
通过按钮控制多选框的属性
```jsx
import {Checkbox, Button} from 'dbox-ui';
class CheckboxView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false
    }
    this.toggleChecked = this.toggleChecked.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.onChangeState = this.onChangeState.bind(this)
  };
  toggleChecked (checked) {
    this.setState({ checked: !this.state.checked });
  }
  toggleDisabled (disabled) {
    this.setState({ disabled: !this.state.disabled });
  }
  onChangeState (e) {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <div>
        <Checkbox onChange={this.onChangeState} checked={this.state.checked} disabled={this.state.disabled}>{`${this.state.checked ? '选中' : '非选中'}-${this.state.disabled ? '禁用' : '非禁用'}`}</Checkbox>
        <br />
        <br />
        <Button onClick={this.toggleChecked}>选中切换</Button>
        <Button style={{marginLeft: 10}} onClick={this.toggleDisabled}>禁用切换</Button>
      </div>
    )
  }
}
<CheckboxView />

```

##### **多选框全选**
通过一个多选框来控制另一组多选框的选中状态
```jsx
import {Checkbox} from 'dbox-ui';
const CheckboxGroup = Checkbox.CheckboxGroup;
const plainOptions = ['苹果', '梨', '桔子'];
const defaultCheckedList = ['苹果', '桔子'];
const options = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子' },
];
class CheckboxView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    }
    this.onChange = this.onChange.bind(this)
    this.onCheckAllChange = this.onCheckAllChange.bind(this)
  };
  onChange (checkedList) {
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
        checkAll: checkedList.length === plainOptions.length
      })
    }
  onCheckAllChange (e) {
      this.setState({
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  render() {
    return (
      <div>
        <Checkbox indeterminate={this.state.indeterminate} checked={this.state.checkAll} onChange={this.onCheckAllChange}>
          选择所有选项
        </Checkbox>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    )
  }
}
<CheckboxView />
```

##### **多选框组**
多个多选框形成的多选框组合
```jsx
import {Checkbox} from 'dbox-ui';
const optionsWithDisabled = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子', disabled: false },
];
const options = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子' },
];
const plainOptions = ['苹果', '梨', '桔子'];
const CheckboxGroup = Checkbox.CheckboxGroup;
<div>
  <CheckboxGroup options={plainOptions} defaultValue={['苹果']} />
  <br />
  <CheckboxGroup options={options} defaultValue={['梨']} />
  <br />
  <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['梨']} />
</div>
```

##### **多选框不可用**
通过disabled控制多选框的可操作属性
```jsx
import {Checkbox} from 'dbox-ui';
<div>
  <Checkbox defaultChecked={false} disabled >不可操作</Checkbox>
  <Checkbox defaultChecked disabled >不允许操作</Checkbox>
</div>
```


##### **Checkbox**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点和disabled同时使用无效 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |
| onClick | 点击时回调函数 | Function(e:Event) | - |

#### **CheckboxGroup**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] |
| options | 指定可选项 | string\[] | \[] |
| value | 指定选中的选项 | string\[] | \[] |
| disabled | 整组失效 | boolean | false |
| onChange | 变化时回调函数 | Function(checkedValue) | - |

<style>.idoll-steps{margin-bottom: 10px}</style>


```jsx noeditor
import {BackTop} from 'dbox-ui';
import CheckboxView from '../prevPage/checkbox';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <CheckboxView />
</div>
```
