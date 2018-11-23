#### **何时使用**
当用户需要在数值区间/自定义区间进行选择时，可为连续或离散值

#### **基本使用**
```jsx

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
| icon | 步骤图标的类型，可选 | string | ReactNode |

