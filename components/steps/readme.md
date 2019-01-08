
用于指导用户完成跨多个屏幕的流程和操作，或引导用户按照流程完成任务的导航。

#### **基本用法**
```jsx
import { Steps } from 'components';

const StepsView = () => {
  return(
    <Steps current={1} >
      <Steps.Step title='提交完成' description='这里是一段描述文字，最多不超过两行' />
      <Steps.Step title='正在处理' description='这里是一段描述文字，最多不超过两行' />
      <Steps.Step title='等待处理' description='这里是一段描述文字，最多不超过两行' />
      <Steps.Step title='完成' description='这里是一段描述文字，最多不超过两行' />
    </Steps>
    )
}
<StepsView />
```

#### **小尺寸**
```jsx
import { Steps } from 'components';

const StepsView = () => {
  return (
    <Steps size='small' current={2}>
      <Steps.Step title='示例文字' />
      <Steps.Step title='示例文字' />
      <Steps.Step title='等待处理' />
      <Steps.Step title='完成' />
    </Steps>
  )
}
<StepsView />
```

#### **点状步骤条**
```jsx
import { Steps } from 'components';

const StepsView = () => {
  return (
    <Steps progressDot current={1}>
      <Steps.Step title='步骤一' description='这里是一段描述性文字' />
      <Steps.Step title='步骤二' description='这里是一段描述性文字' />
      <Steps.Step title='步骤三' description='这里是一段描述性文字' />
      <Steps.Step title='步骤四' description='这里是一段描述性文字' />
    </Steps>
  )
}
<StepsView />
```

#### **带popover点状步骤条**
```jsx
import { Steps, Popover } from 'components';

const customDot = (dot, {status, index}) => (
  <Popover content={<span>步骤： {index} 状态: {status}</span>}>{dot}</Popover>
);
class StepsView extends React.Component {
  render() {
    return (
      <div>
        <Steps progressDot={ customDot }  current={1}>
          <Steps.Step title='步骤一' description='这是一段描述文字' />
          <Steps.Step title='步骤二' description='这是一段描述文字' />
          <Steps.Step title='步骤三' description='这是一段描述文字' />
          <Steps.Step title='步骤四' description='这是一段描述文字' />
      </Steps>
      </div>
    )
  }
}
<StepsView />
```

#### **可步骤切换**
```jsx
import { Steps, Button, Message } from 'components';

const Step = Steps.Step;
const steps = [
  {title: '提交完成', content: '这里是一段描述文字，最多不超过两行'},
  {title: '正在处理', content: '这里是一段描述文字，最多不超过两行'},
  {title: '等待处理', content: '这里是一段描述文字，最多不超过两行'},
]
const stepsContent = {
  marginTop: '16px',
  border: '1px dashed #e9e9e9',
  borderRadius: '6px',
  backgroundColor: '#fafafa',
  minHeight: '200px',
  paddingTop: '80px',
  textAlign: 'center'
}
const stepsAction = {
  marginTop: '24px'
}
class StepsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
   next() {
    const current = this.state.current + 1;
    this.setState({current});
  }
   prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }
  render() {
  const {current} = this.state;
  return (
    <div>
      <Steps progressDot current={current}>
        {steps.map(item => <Step key={item.title} title={item.title} />)}
      </Steps>
      <div style={stepsContent} >{steps[current].content}</div>
      <div style={stepsAction} >
          {
            current < steps.length - 1 && <Button type='primary' onClick={() => this.next()} >下一步</Button>
          }
          {
            current === steps.length - 1 && <Button type='primary' onClick={() => Message.success('处理完成啦！')}>完成</Button>
          }
          {
            current > 0 && <Button style={{ marginLeft: 8 }} onClick={() => this.prev()} >上一步</Button>
          }
        </div>
    </div>
  )
}
}
<StepsView />

```

#### **步骤运行错误**
```jsx
import { Steps } from 'components';

const Step = Steps.Step;
class StepsView extends React.Component {
  render() {
    return (
      <Steps current={1} status='error'>
        <Step title='步骤一' description='这里是一段描述性文字' />
        <Step title='步骤二' description='这里是一段描述性文字' />
        <Step title='步骤三' description='这里是一段描述性文字' />
      </Steps>
    )
  }
}
<StepsView />

```

#### **竖直方向步骤条**
```jsx
import { Steps } from 'components';

const Step = Steps.Step;
class StepsView extends React.Component {
  render() {
    return (
      <Steps direction='vertical' current={1} >
        <Step title='步骤一' description='这里是一段描述性文字' />
        <Step title='步骤二' description='这里是一段描述性文字' />
        <Step title='步骤三' description='这里是一段描述性文字' />
      </Steps>
    )
  }
}
<StepsView />
```

#### **竖直方向小尺寸步骤条**
```jsx
import { Steps } from 'components';

const Step = Steps.Step;
class StepsView extends React.Component {
  render() {
    return (
      <Steps direction='vertical' current={1} size='small' >
        <Step title='步骤一' description='这里是一段描述性文字' />
        <Step title='步骤二' description='这里是一段描述性文字' />
        <Step title='步骤三' description='这里是一段描述性文字' />
      </Steps>
    )
  }
}
<StepsView />
```

#### **Steps**

整体步骤条

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤 | number|0 |
| direction | 指定步骤条方向(可选horizontal 、vertical) | string | horizontal |
| labelPlacement | 指定标签放置位置，可选（vertical）放图标放图标下面 | string | horizontal |
| progressDot |  |  |  |
| size | 指定大小，可选（default 、small）| string | default |
| status | 指定当前步骤的状态,可选wait、process、finish、error | string | process |
| initial | 起始序号，从0开始计数 | number| 0 |

#### **Steps.Step**

步骤条内的每一个步骤

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 步骤的详情描述，可选 | string | ReactNode |
| icon | 步骤图标的类型，可选 | string | ReactNode |
| title | 标题 | string | ReactNode |



```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
