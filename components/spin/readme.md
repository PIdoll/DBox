
页面局部处于等待异步数据或正在渲染过程时，可以适当的缓解用户因为等待页面渲染而带来的焦虑。

##### **简单的加载中**

```jsx
import { Spin } from 'dbox-ui';

<div style={{ marginTop: 51, marginLeft: 100 }}><Spin /></div>
```

##### **三种不同大小的加载中**

```jsx
import { Spin } from 'dbox-ui';

<div style={{ width: 300, display: 'flex', justifyContent: 'space-between', marginTop: 50 }}>
  <Spin size='small' />
  <Spin />
  <Spin size='large' />
</div>
```

##### **放在容器中**

```jsx
import { Spin } from 'dbox-ui';

const style = {
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
  marginBottom: 20,
  paddingTop: 30,
  paddingBottom: 30,
  paddingLeft: 50,
  paddingRight: 50,
  marginTop: 20,
  marginBotton: 20
}
class SpinView extends React.Component {
  render () {
    return (
      <div style={style}>
        <Spin />
      </div>
    )
  }
}
<SpinView />
```

##### **自定义描述文案**

```jsx
import { Spin, Alert } from 'dbox-ui';

<Spin tip='Loading...'>
  <Alert
    message='Alert信息标题'
    description='关于此警报上下文的详细信息.'
    type='info'
  />
</Spin>
```

##### **卡片加载中**

```jsx
import { Alert, Spin, Switch } from 'dbox-ui';

const container = (
  <Alert
    message='Alert message title'
    description='Further details about the context of this alert.'
    type='info'
  />
);
class SpinViewLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    loading: false
  }
  this.toggle = this.toggle.bind(this);
}
  toggle(value) {
    this.setState({ loading: value });
  }
  render() {
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch onChange={this.toggle} />
        </div>
      </div>
    )
  }
}
<SpinViewLoading />
```

##### **自定义颜色**

```jsx
const style = {
  textAlign: 'center',
  background: '#13B886',
  borderRadius: 4,
  marginBottom: 20,
  paddingTop: 30,
  paddingBottom: 30,
  paddingLeft: 50,
  paddingRight: 50,
  marginTop: 20,
  marginBotton: 20
}
class SpinView extends React.Component {
  render () {
    return (
      <div style={style}>
        <Spin color={['#fff', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.05)']} />
      </div>
    )
  }
}
<SpinView />
```

##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| size | 组件大小，可选值为 `small` `default` `large` | string | 'default' |
| spinning | 是否旋转 | boolean | true |
| tip | 当作为包裹元素时，可以自定义描述文案 | string | - |
| wrapperClassName | 包装器的类属性 | string | - |
| color | 在深色背景下，spin的四个边框颜色自定义 | Array |  |



```jsx noeditor
import {BackTop} from 'dbox-ui';
import SpinView from '../prevPage/spin';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <SpinView />
</div>
```
