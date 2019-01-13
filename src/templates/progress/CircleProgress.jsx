import React from 'react';
import Progress from 'components/progress';

export default class CircleProgress extends React.Component {
  render() {
    return (
      <div >
        <Progress type='circle' percent={50} strokeWidth={12} />
        <Progress type='circle' percent={70} status='exception' />
        <Progress type='circle' percent={100} />
      </div>
    )
  }
}
