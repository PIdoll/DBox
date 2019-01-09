import React from 'react';
import Steps from 'components/steps';

const Step = Steps.Step;
const GeneralSteps = () => {
  return (
    <Steps current={1} >
      <Step title='提交完成' description='这里是一段描述文字，最多不超过两行' />
      <Step title='正在处理' description='这里是一段描述文字，最多不超过两行' />
      <Step title='等待处理' description='这里是一段描述文字，最多不超过两行' />
      <Step title='完成' description='这里是一段描述文字，最多不超过两行' />
    </Steps>
    )
}
export default GeneralSteps;
