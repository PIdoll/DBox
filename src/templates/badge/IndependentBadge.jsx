import React from 'react';
import {Badge} from 'components';

export default class IndependentBadge extends React.Component {
  render() {
    return (
      <div>
        <Badge count={55} overflowCount={9} />
        <Badge count={8} style={{ backgroundColor: '#13B886' }} />
        <Badge count={999} style={{ backgroundColor: '#87d068' }} />
      </div>
    )
  }
}
