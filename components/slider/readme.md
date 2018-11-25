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

