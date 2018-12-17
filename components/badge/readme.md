#### **何时使用**

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

#### **基本徽标展示**
```jsx
import {Badge} from 'components';
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

#### **独立使用**
```jsx
import {Badge} from 'components';
const content = {
  width: 64,
  height: 64,
  borderRadius: 3,
  background: '#E2E2E2',
  display: 'inline-block',
};
<div>
	<Badge count={55}></Badge>
    <Badge count={8} style={{ backgroundColor: '#13B886' }}></Badge>
    <Badge count={999} style={{ backgroundColor: '#87d068' }}></Badge>
</div>
```

#### **封顶数字**
```jsx
import {Badge} from 'components';
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
    <Badge count={200}>
      <a href='javascript:;' style={content} />
    </Badge>
    <Badge count={1000} overflowCount='999'>
      <a href='javascript:;' style={content} />
    </Badge>
</div>
```


#### **讨嫌的小红点**
```jsx
import {Badge, Icon} from 'components';
<div>
	<Badge>
	  <Icon type='phone' />
	</Badge>
	<Badge dot>
	  <Icon type='phone' />
	</Badge>
	<Badge dot>
	  <a href='https://www.baidu.com' target='_blank'>一些通知</a>
	</Badge>
</div>
```

#### **a标签包裹可点击**
```jsx
import {Badge} from 'components';
<a href='https://www.baidu.com'>
  <Badge count={8}>
    <span className='example' />
  </Badge>
</a>
```

#### **用于表示状态的小圆点**
```jsx
import {Badge} from 'components';
<div>
	<div style={{ position: 'relative', marginLeft: '10px' }}>
      <Badge dot status='success' />
      <Badge dot status='error' style={{ marginLeft: '20px' }} />
      <Badge dot status='default' style={{ marginLeft: '40px' }} />
      <Badge dot status='processing' style={{ marginLeft: '60px' }} />
      <Badge dot status='warning' style={{ marginLeft: '80px' }} />
    </div>
    <br />
    <div style={{ position: 'relative', marginLeft: '10px' }}>
      <Badge dot status='success' text='成功' /><br />
      <Badge dot status='error' text='错误'  /><br />
      <Badge dot status='default' text='默认'  /><br />
      <Badge dot status='processing' text='进行中'  /><br />
      <Badge dot status='warning' text='警告'  /><br />
    </div>
</div>
```

#### **动态变化** 
```jsx
import {Badge, Button, Switch, Icon} from 'components';
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
        <div style={{ marginBottom: '10px' }}>
            <Badge count={this.state.count}>
              <a href='javascript:;' style={content} />
            </Badge>
            <ButtonGroup>
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
          <Switch checked={this.state.show} onChange={this.onChange} />
          </div>
        </div>
    )
  }
}
<BadgeView />
```

#### **Badge**

| 参数           | 说明                             | 类型 |默认值 |
|----------------|--------------------------------|---------|--------|
| overflowCount  | 展示封顶的数字值                 | Number | 99     |
| showZero            | 当数值为0时，是否展示Badge       | boolean    |false  |
| dot            | 不展示数字，只有一个小红点       | boolean    |false  |
| status            | 和dot搭配使用，在设置dot的前提下有效，设置Badge的状态点       | string(`success`,`processing`,`default`,`error`,`warning`)   |''  |
| offset            | 设置状态点的位置偏移，格式为 [x, y]      | `[number, number]`   | - |


