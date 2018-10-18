import React from 'react';
import Progress from 'components/progress';

let interval

export default class ProgressView extends React.Component {
  constructor() {
    super();
    this.state = {
      percentValue: 0
    }
  }
  componentWillMount() {
    interval = setInterval(() => {
      let percentValue = this.state.percentValue + 1;
      if (percentValue < 100) {
        this.setState({percentValue: percentValue});
      } else {
        percentValue = 100;
        this.setState({percentValue: percentValue});
        clearInterval(this.state.interval);
      }
    }, 100)
  }
  componentWillUnmount() {
    clearInterval(interval);
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>线条型进度条</h1>
        <Progress type='line' percent={60} strokeWidth={16} />
        <br />
        <br />
        <br />
        <br />
        <Progress type='line' percent={50} status='active' />
        <br />
        <br />
        <br />
        <br />
        <Progress type='line' percent={70} status='exception' />
        <br />
        <br />
        <br />
        <br />
        <Progress type='line' percent={100} />
        <br />
        <br />
        <br />
        <br />
        <Progress type='line' percent={30} showInfo={false} />
        <h1 className='h1'>圆形进度条</h1>
        <Progress type='circle' percent={50} status='active' gapPosition='bottom' />
        <Progress type='circle' percent={70} status='active' gapPosition='bottom' strokeWidth={10} />
        <Progress type='circle' percent={100} gapPosition='left' width={150} />
        <Progress type='circle' percent={this.state.percentValue} gapPosition='left' />
        <h1 className='h1'>仪表盘型进度条</h1>
        <Progress type='dashboard' percent={100} status='active' gapPosition='top' />
        <Progress type='dashboard' percent={100} status='exception' gapPosition='bottom' />
        <Progress type='dashboard' percent={100} gapPosition='left' />
      </div>
    )
  }
}

