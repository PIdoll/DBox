import React from 'react';

import {Avatar} from 'components';

export default class TypeAvatar extends React.Component {
  render() {
    return (
      <div>
        <Avatar style={{ marginRight: 47 }} size='small' icon='user' />
        <Avatar style={{ marginRight: 47 }} shape='square' size='small'>USER</Avatar>
        <Avatar style={{ marginRight: 47 }} size='large' src='https://images.pexels.com/users/avatars/26735/lisa-fotios-223.jpeg?w=60&h=60&fit=crop&crop=faces' alt='DBox' />
        <Avatar style={{ backgroundColor: '#13B886', marginRight: 47 }} shape='square' icon='user' />
      </div>
    )
  }
}
