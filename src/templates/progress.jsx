import React from 'react';
import Progress from 'components/progress';
import Button from '../../components/button';

const ButtonGroup = Button.Group;
export default class ProgressView extends React.Component {
  constructor() {
    super();
    this.state = {
      percentValue: 0,
      percent: 0
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({percent});
  }
  decrease() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({percent});
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>线条型进度条</h1>
        <div style={{ width: '500px' }}>
          <Progress type='line' />
          <br />
          <br />
          <Progress type='line' percent={50} status='active' />
          <br />
          <br />
          <Progress type='line' percent={70} status='exception' />
          <br />
          <br />
          <Progress type='line' percent={100} />
          <br />
          <br />
          <Progress type='line' percent={30} showInfo={false} />
        </div>

        <h1 className='h1'>迷你线性进度条</h1>
        <div style={{ width: '500px' }}>
          <Progress size='small' type='line' />
          <br />
          <br />
          <Progress size='small' type='line' percent={50} status='active' />
          <br />
          <br />
          <Progress size='small' type='line' percent={70} status='exception' />
          <br />
          <br />
          <Progress size='small' type='line' percent={100} />
          <br />
          <br />
          <Progress size='small' type='line' percent={30} showInfo={false} />
        </div>

        <h1 className='h1'>圆形进度条</h1>
        <div style={{ width: '500px' }}>
          <Progress type='circle' percent={50} />
          <Progress type='circle' percent={70} status='exception' />
          <Progress type='circle' percent={100} />
        </div>

        <h1 className='h1'>迷你圆形进度条</h1>
        <div style={{ width: '500px' }}>
          <Progress type='circle' width={80} percent={50} />
          <Progress type='circle' width={80} percent={70} status='exception' />
          <Progress type='circle' width={80} percent={100} />
        </div>

        <h1 className='h1'>动态进度条</h1>
        <div style={{ width: '500px' }}>
          <Progress type='line' percent={this.state.percent} />
          <Progress type='circle' percent={this.state.percent} />
          <ButtonGroup>
            <Button onClick={this.decrease} icon='remove' />
            <Button onClick={this.increase} icon='plus' />
          </ButtonGroup>
        </div>
        <h1 className='h1'>自定义文字格式进度条</h1>
        <div style={{ width: '500px' }}>
          <Progress type='circle' percent={50} format={(percent) => `${percent}Day`} />
          <Progress type='circle' percent={100} format={() => 'Finish'} />
        </div>
      </div>
    )
  }
}
