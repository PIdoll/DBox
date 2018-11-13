import React from 'react';

import Steps from 'components/steps';
import Popover from 'components/popover';
import Button from 'components/button';
import Message from 'components/message';


const Step = Steps.Step;
const steps = [
  {title: 'first', content: 'first content'},
  {title: 'second', content: 'Second content'},
  {title: 'third', content: 'third content'},
]
const customDot = (dot, {status, index}) => (
  <Popover content={<span>step {index} status: {status}</span>}>{dot}</Popover>
);

const stepsContent = {
  margintop: '16px',
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
          <Step title='Finished' description='this is a description' />
          <Step title='In Progress' description='this is a description' />
          <Step title='Waiting' description='this is a description' />
        </Steps>

        <h1 className='h1'>2.小尺寸步骤条</h1>
        <Steps size='small' current={2}>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>

        <h1 className='h1'>3.点状步骤条</h1>
        <Steps progressDot current={1}>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>

        <h1 className='h1'>4.自定义点状步骤条</h1>
        <Steps current={1} progressDot={customDot}>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
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
            current === steps.length - 1 && <Button type='primary' onClick={() => Message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0 && <Button style={{ marginLeft: 8 }} onClick={() => this.prev()} >上一步</Button>
          }
        </div>

        <h1 className='h1'>6.步骤运行错误</h1>
        <Steps current={1} status='error'>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>

        <h1 className='h1'>7.竖直方向步骤条</h1>
        <Steps direction='vertical' current={1} >
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>

        <h1 className='h1'>8.竖直方向小型步骤条</h1>
        <Steps direction='vertical' size='small' current={0} >
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
      </div>
    )
  }
}
