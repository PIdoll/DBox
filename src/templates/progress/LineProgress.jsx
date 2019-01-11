import React from 'react';
import Progress from 'components/progress';

export default class LineProgress extends React.Component {
  render() {
    return (
      <div style={{ width: '700px' }}>
        <Progress type='line' />
        <Progress type='line' percent={50} status='active' />
        <Progress type='line' percent={70} status='exception' />
        <Progress type='line' percent={100} />
        <Progress type='line' percent={30} showInfo={false} />
      </div>
    )
  }
}
