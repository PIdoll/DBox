 #### **何时使用**
 当需要获取标准数值时。

 ##### **基本使用**
 ```jsx
<InputNumber min={1} defaultValue={3} max={10} />
 ```

 ##### **三种尺寸**
 ```jsx
<InputNumber size='small' min={1} defaultValue={3} max={10} />
<InputNumber min={1} defaultValue={3} max={10} />
<InputNumber size='large' min={1} defaultValue={3} max={10} />
 ```

 ##### **不可用切换**
```jsx
class InputNumberView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      disabled: !this.state.disabled
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
<InputNumber min={0} max={10} defaultValue={1} step={0.1} />
```

##### **格式化展示**
```jsx
<InputNumber min={0} max={100} defaultValue={100} formatter={value => `${value}%`} parser={value => value.repalce('%', '')} />
<InputNumber min={0} defaultValue={2600}
formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
parser={value => value.repalce(/\$\s?|(,*)/g, '')} />
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
