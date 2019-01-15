import React from 'react';
import {Badge, Icon} from 'components';

export default class BasicBadge extends React.Component {
  render() {
    return (
      <div>
        <Badge>
          <Icon type='phone' />
        </Badge>
        <Badge dot status='error'>
          <Icon type='phone' />
        </Badge>
        <Badge dot status='processing'>
          <a href='https://www.baidu.com' style={{marginLeft: '60px'}} target='_blank'>一些通知</a>
        </Badge>
      </div>
    )
  }
}
