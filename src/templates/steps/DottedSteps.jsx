import React from 'react';
import Steps from 'components/steps';

const Step = Steps.Step;
const DottedSteps = () => {
  return (
    <Steps progressDot current={2}>
      <Step title='示例文字' />
      <Step title='示例文字' />
      <Step title='等待处理' />
      <Step title='完成' />
    </Steps>
    )
  }
export default DottedSteps;
