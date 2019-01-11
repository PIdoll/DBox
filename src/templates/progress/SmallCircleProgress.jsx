import React from 'react';
import Progress from 'components/progress';

export default class SmallCircleProgress extends React.Component {
  render() {
    return (
      <div >
        <Progress type='circle' width={80} percent={50} />
        <Progress type='circle' width={80} percent={70} status='exception' />
        <Progress type='circle' width={80} percent={100} />
      </div>
    )
  }
}
