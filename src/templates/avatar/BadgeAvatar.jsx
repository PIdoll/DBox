import React from 'react';

import {Avatar, Badge} from 'components';

export default class BadgeAvatar extends React.Component {
  render() {
    return (
      <div>
        <span style={{ marginRight: 47 }}>
          <Badge count={2}><Avatar shape='square' icon='user' /></Badge>
        </span>
        <span>
          <Badge dot><Avatar size='large' icon='user' /></Badge>
        </span>
      </div>
    )
  }
}
