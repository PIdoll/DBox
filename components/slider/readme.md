<<<<<<< HEAD
#### **何时使用**
当用户需要在数值区间/自定义区间进行选择时，可为连续或离散值

#### **基本使用**
```jsx
class SliderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    }
    this.handleDisabledChange = this.handleDisabledChange.bind(this);
  }
  handleDisabledChange(disabled) {
    this.setState({disabled});
  }
  render() {
    const {disabled} = this.state;
    return (
      <div>
        <Slider defaultValue={30} disabled={disabled} />
        Disabled: <Switch size='small' checked={disabled} onClick={this.handleDisabledChange} />
      </div>
    )
  }
}
```


#### **带输入框的滑块**
```jsx

```

#### **自定义提示**
```jsx
class sliderView extends React.Component {
  render() {
    return (
      <div>
        <slider tipFormatter={(value) => `${value}%`} />
        <slider tipFormatter={null} />
      </div>
    )
  }
}
```

#### **Slider**
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 步骤的详情描述，可选 | string | ReactNode |
=======

##### **何时使用**
当用户需要在数值区间／自定义区间进行选择时，可为连续或离散值。

#### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 设置初始值 | number/number[] | 0 or 0, 0 |
| disabled | 值为true时，滑块为禁用状态| boolean | false |
| dots | 是否只能拖拽在刻度上| boolean | false |
| included | marks不为空对象时有效,值为true时表示值为包含关系，false表示并列 | boolean | true |
| marks | 刻度标记 | key的类型必须为number，且取值在闭区间min，max内，每个标签可以单独设置样式 | object|
| max | 最大值 | number | 100 |
| min | 最小值 | number | 0 |
| range | 双滑块模式 | boolean| false |
| step | 步长，取值必须大于0，并且可以被（max-min)整除| number/null| 1 |
| tipFormatter | Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip。	| function／null ||
| value | 设置当前值。当range为false时，使用number | number |  |
| onChange | 当slider的值发生改变时，会触发onChange事件，并把改变后的值作为参数传入 | function（value） | NOOP|



>>>>>>> 0f4f22a09dacf95a7cb395a6cff778788e45834a

