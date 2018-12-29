
按照时间顺序进行排列信息时使用。

##### **基本用法**
基本的时间轴
```jsx
import { Timeline } from 'dbox-ui';
<Timeline>
  <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
  <Timeline.Item>开发 2018-12-01</Timeline.Item>
  <Timeline.Item>测试 2018-12-15</Timeline.Item>
  <Timeline.Item>上线 2018-12-21</Timeline.Item>
</Timeline>
```

##### **进行中及排序**
可通过设置 `pending` 属性展示幽灵节点。
可通过设置`reverse` 属性用于控制节点排序，为 `false` 时按正序排列，为 `true` 时按倒序排列。
```jsx
import { Timeline,Button } from 'dbox-ui';
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

##### **自定义图标**
可通过设置 `dot` 属性为`Icon`时添加自定义图标。
```jsx
import { Timeline,Icon } from 'dbox-ui';
<Timeline>
  <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
  <Timeline.Item>开发 2018-12-01</Timeline.Item>
  <Timeline.Item dot={<Icon type='loading' style={{ fontSize: '16px', color: 'red' }} />} >测试 2018-12-15</Timeline.Item>
  <Timeline.Item>上线 2018-12-21</Timeline.Item>
</Timeline>
```

##### **Timeline**
时间轴。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|----------------------------------------|------------|-------|
| pending  | 指定最后一个幽灵节点是否存在或内容 | boolean/string/ReactNode | false  |
| pendingDot | 当最后一个幽灵节点存在时，指定其时间图点 | string/ReactNode | `<Icon type="loading" />` |
| reverse | 节点排序 | boolean | false |

##### **Timeline.Item**

时间轴的每一个节点。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|------------------------------------------|------------|-------|
| color   | 指定圆圈颜色 `blue, red, green`，或自定义的色值 | string | blue  |
| dot   | 自定义时间轴点 | React.Element | -  |


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
