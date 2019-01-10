import React from 'react';

import {Avatar} from 'components';

export default class AutoAvatar extends React.Component {
  render() {
    return (
      <div>
        <Avatar style={{ marginRight: 47 }}>DBox</Avatar>
        <Avatar style={{ marginRight: 47 }}>Alvin</Avatar>
        <Avatar style={{ marginRight: 47 }}>react</Avatar>
      </div>
    )
  }
}
