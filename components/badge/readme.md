一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理数据。

##### **基本徽标展示**
通常配合avatar展示需要用户处理的数据量
```jsx
import {Badge} from 'dbox-ui';
const content = {
  width: 64,
  height: 64,
  borderRadius: 3,
  background: '#E2E2E2',
  display: 'inline-block',
};
<Badge count={5}>
  <a href="javascript:;" style={content}></a>
</Badge>
```

##### **独立使用**
将用户需要处理的数量单独抽离出来
```jsx
import {Badge} from 'dbox-ui';
const content = {
  width: 64,
  height: 64,
  borderRadius: 3,
  background: '#E2E2E2',
  display: 'inline-block',
};
<div>
  <Badge count={55} style={{marginRight: 60}} />
  <Badge count={8} style={{ marginRight: 60, backgroundColor: '#13B886' }} />
  <Badge count={999} style={{ marginRight: 60, backgroundColor: '#87d068' }} />
</div>
```

##### **封顶数字**
通过设置overflowCount来控制最大的消息数量值
```jsx
import {Badge} from 'dbox-ui';
const content = {
  width: 64,
  height: 64,
  borderRadius: 3,
  background: '#E2E2E2',
  display: 'inline-block',
};
<div>
  <Badge count={9} overflowCount='10'>
    <a href='javascript:;' style={content} />
  </Badge>
  <div style={{display: 'inline-block', margin: '0 60px 0 60px'}}>
    <Badge count={200} style={{marginRight: 60}}>
      <a href='javascript:;' style={content} />
    </Badge>
  </div>
  <Badge count={1000} overflowCount='999'>
    <a href='javascript:;' style={content} />
  </Badge>
</div>
```


##### **讨嫌的小红点**
通过dot设置不显示待处理的消息数量
```jsx
import {Badge, Icon} from 'dbox-ui';
<div>
  <Badge>
    <Icon type='phone' style={{marginRight: 60}} />
  </Badge>
  <Badge dot status='error'>
    <Icon type='phone' />
  </Badge>
  <Badge dot status='processing'>
    <a href='javascript:;' style={{marginLeft: 60}} target='_blank'>一些通知</a>
  </Badge>
</div>
```

##### **a标签包裹可点击**
通过a链接包裹badge来控制点击跳转
```jsx
import {Badge} from 'dbox-ui';
<a href='javascript:;'>
  <Badge count={8}>
    <span className='example' />
  </Badge>
</a>
```

##### **用于表示状态的小圆点**
用dot控制消息的状态
```jsx
import {Badge} from 'dbox-ui';
<div>
  <div style={{ marginLeft: '10px' }}>
    <Badge dot status='success' />
    <Badge dot status='error' style={{ marginLeft: '20px' }} />
    <Badge dot status='default' style={{ marginLeft: '40px' }} />
    <Badge dot status='processing' style={{ marginLeft: '60px' }} />
    <Badge dot status='warning' style={{ marginLeft: '80px' }} />
  </div>
  <div style={{ marginLeft: '10px' }}>
    <Badge dot status='success' text='成功' /><br />
    <Badge dot status='error' text='错误' /><br />
    <Badge dot status='default' text='默认' /><br />
    <Badge dot status='processing' text='进行中' /><br />
    <Badge dot status='warning' text='警告' /><br />
  </div>
</div>
```

##### **动态变化**
通过引入按钮或者开关控制消息的数量或者是否展示
```jsx
import {Badge, Button, Switch, Icon} from 'dbox-ui';
const ButtonGroup = Button.Group;
const content = {
  width: 64,
  height: 64,
  borderRadius: 3,
  background: '#E2E2E2',
  display: 'inline-block',
};
class BadgeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    show: true,
    count: 5,
    }
    this.decline = this.decline.bind(this);
    this.increase = this.increase.bind(this);
    this.onChange = this.onChange.bind(this);
  };
  decline () {
    const count =this.state.count - 1;
    if (count < 0) {
      this.setState({ count: 0 })
    } else {
      this.setState({count})
    }
  };
  increase () {
    const count = this.state.count + 1;
    this.setState({count})
  };
  onChange (show) {
    this.setState({show})
  };
  render() {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Badge count={this.state.count}>
            <a href='javascript:;' style={content} />
          </Badge>
          <ButtonGroup style={{marginLeft: 60}}>
            <Button onClick={this.decline}>
            <Icon type='remove' />
            </Button>
            <Button onClick={this.increase}>
              <Icon type='plus' />
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <div>
          <Badge dot={this.state.show}>
            <a href='javascript:;' style={content} />
          </Badge>
          <Switch style={{marginLeft: 60}} checked={this.state.show} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}
<BadgeView />
```

##### **Badge**

| 参数           | 说明                             | 类型 |默认值 |
|----------------|--------------------------------|---------|--------|
| overflowCount  | 展示封顶的数字值                 | Number/String | 99     |
| showZero            | 当数值为0时，是否展示Badge       | boolean    |false  |
| count            | 展示的数值和dot同时设置时无效       | Number    |  - |
| dot            | 不展示数字，只有一个小红点       | boolean    |false  |
| status            | 和dot搭配使用，在设置dot的前提下有效，设置Badge的状态点       | string(`success`,`processing`,`default`,`error`,`warning`)   |''  |
| offset            | 设置状态点的位置偏移，格式为 [x, y]      | `[number, number]`   | - |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import BadgeView from '../prevPage/badge';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <BadgeView />
</div>
```
