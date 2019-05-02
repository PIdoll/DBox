import React from 'react';
import Progress from 'components/progress';
import Button from 'components/button';



export default class AutoProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div style={{ width: '800px' }}>
        <Progress type='line' percent={this.state.percent} />
        <Progress type='circle' percent={this.state.percent} />
        <Button onClick={this.decrease} icon='remove' />
        <Button onClick={this.increase} icon='plus' />
      </div>
    )
  }
}

