import React from 'react';
import Steps from 'components/steps';
import Popover from 'components/popover';


const customDot = (dot, {status, index}) => (
  <Popover content={<span>步骤： {index} 状态: {status}</span>}>{dot}</Popover>
);
const Step = Steps.Step;
const CustomizeSteps = () => {
  return (
    <Steps progressDot={customDot} current={1}>
      <Step title='步骤一' description='这是一段描述文字' />
      <Step title='步骤二' description='这是一段描述文字' />
      <Step title='步骤三' description='这是一段描述文字' />
      <Step title='步骤四' description='这是一段描述文字' />
    </Steps>
    )
  }
export default CustomizeSteps;
