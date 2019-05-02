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
      <div>
        <Badge count={11} overflowCount={9}>
          <a href='javascript:;' style={content} />
        </Badge>
        <Badge count={200}>
          <a href='javascript:;' style={content} />
        </Badge>
        <Badge count={1000} overflowCount={999}>
          <a href='javascript:;' style={content} />
        </Badge>
      </div>
    )
  }
}
