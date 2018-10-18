import React from 'react';

import Steps from 'components/steps';
const Step = Steps.Step;

export default class StepsView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用步骤条</h1>
        <Steps current={0}>
          <Step title='Finished' description='this is a description' />
          <Step title='In Progress' description='this is a description' />
          <Step title='Waiting' description='this is a description' />
        </Steps>
        <h1 className='h1'>点状步骤条</h1>
        <Steps progressDot current={1}>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
        <h1 className='h1'>小尺寸步骤条</h1>
        <Steps size='small' >
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
        <h1 className='h1'>步骤运行错误</h1>
        <Steps current={1} status='error'>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
        <h1 className='h1'>竖直方向步骤条</h1>
        <Steps direction='vertical' current={0} >
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
        <h1 className='h1'>竖直方向小尺寸步骤条</h1>
        <Steps direction='vertical' current={0} size='small'>
          <Step title='Finished' description='This is a description' />
          <Step title='In Progress' description='This is a description' />
          <Step title='Waiting' description='This is a description' />
        </Steps>
      </div>
    )
  }
}
