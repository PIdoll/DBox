import React from 'react';

import {Avatar} from 'components';

export default class BasicAvatar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Avatar style={{ marginRight: 47 }} size='large' icon='user' />
          <Avatar style={{ marginRight: 47 }} icon='user' />
          <Avatar style={{ marginRight: 47 }} size='small' icon='user' />
        </div>
        <br />
        <div>
          <Avatar style={{ marginRight: 47 }} shape='square' size='large' icon='user' />
          <Avatar style={{ marginRight: 47 }} shape='square' icon='user' />
          <Avatar style={{ marginRight: 47 }} shape='square' size='small' icon='user' />
        </div>
      </div>
    )
  }
}
