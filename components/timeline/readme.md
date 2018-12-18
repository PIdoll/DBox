#### **何时使用**

- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；



#### **基本用法**
基本的时间轴
```jsx
import { Timeline } from 'components';
<Timeline>
  <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
  <Timeline.Item>开发 2018-12-01</Timeline.Item>
  <Timeline.Item>测试 2018-12-15</Timeline.Item>
  <Timeline.Item>上线 2018-12-21</Timeline.Item>
</Timeline>
```

#### **进行中及排序**
当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。`reverse` 属性用于控制节点排序，为 `false` 时按正序排列，为 `true` 时按倒序排列。
```jsx
import { Timeline,Button } from 'components';
class TimelineExample extends React.Component {
  constructor(){
    super();
    this.state = {
      reverse: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ reverse: !this.state.reverse });
  }

  render(){
    return(
      <div>
        <Timeline pending='上线...' reverse={this.state.reverse} >
          <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
          <Timeline.Item>开发 2018-12-01</Timeline.Item>
          <Timeline.Item>测试 2018-12-15</Timeline.Item>
        </Timeline>
        <Button type='primary' style={{ marginTop: 16 }} onClick={this.handleClick}>转换顺序</Button>
      </div>
    )
  }
}
<TimelineExample />

```

#### **自定义图标**
可以设置为图标或其他自定义元素。
```jsx
import { Timeline,Icon } from 'components';
<Timeline>
  <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
  <Timeline.Item>开发 2018-12-01</Timeline.Item>
  <Timeline.Item dot={<Icon type='pro-sync' style={{ fontSize: '16px', color: 'red' }} />} >测试 2018-12-15</Timeline.Item>
  <Timeline.Item>上线 2018-12-21</Timeline.Item>
</Timeline>
```

#### **Timeline**
时间轴。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|----------------------------------------|------------|-------|
| pending  | 指定最后一个幽灵节点是否存在或内容 | boolean/string/ReactNode | false  |
| pendingDot | 当最后一个幽灵节点存在时，指定其时间图点 | string/ReactNode | `<Icon type="loading" />` |
| reverse | 节点排序 | boolean | false |

#### **Timeline.Item**

时间轴的每一个节点。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|------------------------------------------|------------|-------|
| color   | 指定圆圈颜色 `blue, red, green`，或自定义的色值 | string | blue  |
| dot   | 自定义时间轴点 | React.Element | -  |


```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
