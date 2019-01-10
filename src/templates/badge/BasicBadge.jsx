import React from 'react';
import {Badge} from 'components';

export default class BasicBadge extends React.Component {
  render() {
    const content = {
      width: 64,
      height: 64,
      borderRadius: 3,
      background: '#E2E2E2',
      display: 'inline-block',
    }
    return (
      <Badge count={8} overflowCount='10'>
        <a href='javascript:;' style={content} />
      </Badge>
    )
  }
}
