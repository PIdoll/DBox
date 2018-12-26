#### **何时使用**
当用户需要在数值区间/自定义区间进行选择时，可为连续或离散值

#### **基本使用**
```jsx
import { Slider, Switch } from 'dbox-ui';

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
        <Slider defaultValue={30}  />
        <Slider defaultValue={20} disabled={disabled} />
        <Slider range disabled={disabled} defaultValue={[10, 30]} />
        Disabled: <Switch size='small' checked={disabled} onClick={this.handleDisabledChange} />
      </div>
    )
  }
}
<SliderView />
```

#### **带输入框的滑块**
```jsx
import { Slider, InputNumber, Row, Col } from 'dbox-ui';
class SliderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1,
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({
      inputValue: value
    });
  }
  render() {
    const {inputValue} = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={ typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4} offset={1}>
          <InputNumber
            min={1}
            max={20}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    )
  }
}
<SliderView />

```

#### **自定义提示**
```jsx
import { Slider, Switch } from 'dbox-ui';

const SliderView = () => {
    return (
      <div>
        <Slider tipFormatter={(value) => `${value}%`}  defaultValue={20}/>
        <Slider tipFormatter={null} defaultValue={10} />
      </div>
    )
  }
<SliderView />
```

#### **Slider**
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 支持初始取值。当range为false时，使用number，否则用[number, number] | number\number[] | 0 or 0, 0 |
| disabled | 值为true时，滑块为禁用状态 | boolean | false |
| dots | 是否只能拖拽到刻度上 | boolean | false |
| max | 最大值 | number | 100 |
| min | 最小值 | number | 0 |
| range | 双滑块模式 | boolean | false |
| step | 步长，取值必须大于0，并且可被（max - min）整除。 | number\null | 1 |
| tipFormatter | Slider会将当前值传给tipFormatter,并在Tooltip中显示tipFormatter的返回值 | Function\null | IDENTITY |
| value | 设置当前取值。当range为false时，使用number，否则使用[number, number] | number\number[] |  |
| onChange | 当slider的值发生改变时，会触发onChange事件，并把改变的值作为参数传入 | Function(value) | NOOP |

#### **方法**
| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
