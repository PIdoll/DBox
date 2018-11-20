import React from 'react';

import Steps from 'components/steps';
import Popover from 'components/popover';
import Button from 'components/button';
import Message from 'components/message';


const Step = Steps.Step;
const steps = [
  {title: '提交完成', content: '这里是一段描述文字，最多不超过两行'},
  {title: '正在处理', content: '这里是一段描述文字，最多不超过两行'},
  {title: '等待处理', content: '这里是一段描述文字，最多不超过两行'},
]
const customDot = (dot, {status, index}) => (
  <Popover content={<span>步骤： {index} 状态: {status}</span>}>{dot}</Popover>
);

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

export default class StepsView extends React.Component {
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
      <div id='main-container'>
        <h1 className='h1'>1.通用步骤条</h1>
        <Steps current={1} >
          <Step title='提交完成' description='这里是一段描述文字，最多不超过两行' />
          <Step title='正在处理' description='这里是一段描述文字，最多不超过两行' />
          <Step title='等待处理' description='这里是一段描述文字，最多不超过两行' />
          <Step title='完成' description='这里是一段描述文字，最多不超过两行' />
        </Steps>

        <h1 className='h1'>2.小尺寸步骤条</h1>
        <Steps size='small' current={2}>
          <Step title='示例文字' />
          <Step title='示例文字' />
          <Step title='等待处理' />
          <Step title='完成' />
        </Steps>

        <h1 className='h1'>3.点状步骤条</h1>
        <Steps progressDot current={1}>
          <Step title='步骤一' description='这是一段描述文字' />
          <Step title='步骤二' description='这是一段描述文字' />
          <Step title='步骤三' description='这是一段描述文字' />
          <Step title='步骤四' description='这是一段描述文字' />
        </Steps>

        <h1 className='h1'>4.自定义点状步骤条</h1>
        <Steps current={1} progressDot={customDot}>
          <Step title='步骤一' description='这里是一段描述性文字' />
          <Step title='步骤二' description='这里是一段描述性文字' />
          <Step title='步骤三' description='这里是一段描述性文字' />
          <Step title='步骤四' description='这里是一段描述性文字' />
        </Steps>

        <h1 className='h1'>5.步骤切换</h1>
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

        <h1 className='h1'>6.步骤运行错误</h1>
        <Steps current={1} status='error'>
          <Step title='步骤一' description='这里是一段描述性文字' />
          <Step title='步骤二' description='这里是一段描述性文字' />
          <Step title='步骤三' description='这里是一段描述性文字' />
        </Steps>

        <h1 className='h1'>7.竖直方向步骤条</h1>
        <Steps direction='vertical' current={1} >
          <Step title='步骤一' description='这里是一段描述性文字' />
          <Step title='步骤二' description='这里是一段描述性文字' />
          <Step title='步骤三' description='这里是一段描述性文字' />
        </Steps>

        <h1 className='h1'>8.竖直方向小型步骤条</h1>
        <Steps direction='vertical' size='small' current={0} >
          <Step title='步骤一' description='这里是一段描述性文字' />
          <Step title='步骤二' description='这里是一段描述性文字' />
          <Step title='步骤三' description='这里是一段描述性文字' />
        </Steps>
      </div>
    )
  }
}
