import React from 'react';
import Progress from 'components/progress';

export default class CustomizeProgress extends React.Component {
  render() {
    return (
      <div>
        <Progress type='circle' percent={50} format={(percent) => `${percent}Day`} />
        <Progress type='circle' percent={100} format={() => 'Finish'} />
      </div>
    )
  }
}
