

#### **何时使用**

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。


#### **线条型进度条**
```jsx
import { Progress } from 'components';

class ProgressView  extends React.Component {
  render() {
    return (
      <div style={{ width: '700px' }}>
        <Progress type='line' />
        <Progress type='line' percent={50} status='active' />
        <Progress type='line' percent={70} status='exception' />
        <Progress type='line' percent={100} />
        <Progress type='line' percent={30} showInfo={false} />
      </div>
    )
  }
}
<ProgressView />
```

#### **迷你线条进度条**
```jsx
import { Progress } from 'components';

class ProgressView extends React.Component {
  render() {
    return (
      <div style={{ width: '600px' }}>
        <Progress size='small' type='line' />
        <Progress size='small' type='line' percent={50} status='active' />
        <Progress size='small' type='line' percent={70} status='exception' />
        <Progress size='small' type='line' percent={100} />
        <Progress size='small' type='line' percent={30} showInfo={false} />
      </div>
    )
  }
}
<ProgressView />
```

#### **圆形进度条**
```jsx
import { Progress } from 'components';

const ProgressView = () => {
  return (
    <div >
      <Progress type='circle' percent={50} />
      <Progress type='circle' percent={70} status='exception' />
      <Progress type='circle' percent={100} />
    </div>
  )
}
<ProgressView />
```

#### **迷你圆形进度条**
```jsx
import { Progress } from 'components';

const ProgressView = () => {
  return (
    <div >
      <Progress type='circle' width={80} percent={50} />
      <Progress type='circle' width={80} percent={70} status='exception' />
      <Progress type='circle' width={80} percent={100} />
    </div>
  )
}
<ProgressView />
```

#### **动态进度条**
```jsx
import { Progress, Button } from 'components';

const ButtonGroup = Button.Group;
class ProgressView  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({percent});
  }
  decrease() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({percent});
  }
  render() {
    return (
      <div style={{ width: '800px' }}>
        <Progress type='line' percent={this.state.percent} />
        <Progress type='circle' percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decrease} icon='remove' />
          <Button onClick={this.increase} icon='plus' />
        </ButtonGroup>
      </div>
    )
  }
}
<ProgressView />
```
#### **自定义圆形进度条**
```jsx
import { Progress } from 'components';

const ProgressView = () => {
  return (
      <div>
        <Progress type='circle' percent={50} format={(percent) => `${percent}Day`} />
        <Progress type='circle' percent={100} format={() => 'Finish'} />
      </div>
    )
}
<ProgressView />
```

#### **API**

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| format | 内容的模板函数 | function(percent) | `percent => percent + '%'` |
| percent | 百分比 | number | 0 |
| showInfo | 是否显示进度数值或状态图标 | boolean | true |
| status | 状态，可选：`success` `exception` `active` | string | - |
| strokeWidth `(type=line)` | 进度条线的宽度，单位 px | number | 8 |
| strokeWidth `(type=circle)` | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 8 |
| type | 类型，可选 `line` `circle` | string | line |
| width `(type=circle)` | 圆形进度条画布宽度，单位 px | number | 132 |
<style>.idoll-progress{margin:0 10px 10px 0}</style>
