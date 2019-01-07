 当需要获取标准数值时。

 ##### **基本使用**
 ```jsx
import { InputNumber } from 'dbox-ui';

const InputNumberView = () => {
  return (
    <InputNumber min={1} defaultValue={3} max={10} />
  )
}
<InputNumberView />
 ```

 ##### **三种尺寸**
 ```jsx
import { InputNumber } from 'dbox-ui';

const InputNumberView = () => {
  return (
    <div>
      <InputNumber size='small' min={1} defaultValue={3} max={10} />
      <InputNumber min={1} defaultValue={3} max={10} />
      <InputNumber size='large' min={1} defaultValue={3} max={10} />
    </div>
  )
}
<InputNumberView />
 ```

 ##### **不可用切换**
```jsx
import { Button, InputNumber } from 'dbox-ui';

class InputNumberView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      disabled: !this.state.disabled,
    })
  }
  render() {
    return (
      <div>
        <InputNumber min={1} max={100} defaultValue={5} disabled={this.state.disabled} />
        <div style={{marginTop: '20px'}} >
          <Button type='primary' onClick={this.handleToggle}>切换按钮</Button>
        </div>
      </div>
    )
  }
}
<InputNumberView />
```

##### **小数**
```jsx
import { InputNumber } from 'dbox-ui';

const InputNumberView = () => {
  return (
    <InputNumber min={1} step={0.2} defaultValue={3} max={10} />
  )
}
<InputNumberView />
```

##### **格式化展示**
```jsx
import { InputNumber } from 'dbox-ui';

const InputNumberView = () => {
  return (
    <div>
      <InputNumber min={0} max={100} defaultValue={100} formatter={value => `${value}%`} parser={value => value.replace('%', '')} />
      <InputNumber min={0} defaultValue={2600}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')} />
    </div>
  )
}
<InputNumberView />

```

##### **InputNumber**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue |  初始值 | number |  |
| disabled | 禁用 | boolean | false |
| formatter | 指定输入框展示值的格式 | function(value: number \| string):string | - |
| max | 最大值 | number | infinity |
| min | 最小值 | number | infinity|
| parser | 指定从formatter里转换会数字的方式，和formatter搭配使用 | function | - |
| precision  | 数值精度 | number  | - |
| decimalSeparator | 小数点 | string | - |
| size | 输入框大小 | string | - |
| step | 每次改变步数，可以为小数 | number | 1 |
| value | 当前值 | number |  |
| onChange | 变化回调 | Function(value: number | string)|  |

#### **方法**

| 民称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus()| 获取焦点 |

<style>.idoll-input-number{margin-right:10px}</style>


```jsx noeditor
import {BackTop} from 'dbox-ui';
import InputNumberView from '../prevPage/inputNumber';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <InputNumberView />
</div>
```
