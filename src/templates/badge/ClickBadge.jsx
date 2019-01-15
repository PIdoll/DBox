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
      <a href='https://www.baidu.com'>
        <Badge count={8}>
          <span style={content} />
        </Badge>
      </a>
    )
  }
}
