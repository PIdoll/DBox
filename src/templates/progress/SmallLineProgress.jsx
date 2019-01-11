import React from 'react';
import Progress from 'components/progress';

export default class SmallLineProgress extends React.Component {
  render() {
    return (
      <div style={{ width: '600px' }}>
        <Progress size='small' type='line' />
        <Progress size='small' type='line' percent={50} status='active' />
        <Progress size='small' type='line' percent={70} status='exception' />
        <Progress size='small' type='line' percent={100} />
        <Progress size='small' type='line' percent={30} showInfo={false} />
      </div>
    )
  }
}
