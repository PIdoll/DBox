import React from 'react';
import Steps from 'components/steps';
import Message from 'components/message';
import Button from 'components/button';

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
class ChangeSteps extends React.Component {
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
export default ChangeSteps;
