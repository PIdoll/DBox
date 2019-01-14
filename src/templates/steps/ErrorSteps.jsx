import React from 'react';
import Steps from 'components/steps';

const Step = Steps.Step;
class ErrorSteps extends React.Component {
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
export default ErrorSteps;
