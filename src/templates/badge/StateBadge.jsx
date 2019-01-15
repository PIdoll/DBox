import React from 'react';
import {Badge} from 'components';

export default class BasicBadge extends React.Component {
  render() {
    return (
      <div>
        <div className='state' style={{ marginLeft: '10px' }}>
          <Badge dot status='success' />
          <Badge dot status='error' style={{ marginLeft: '20px' }} />
          <Badge dot status='default' style={{ marginLeft: '40px' }} />
          <Badge dot status='processing' style={{ marginLeft: '60px' }} />
          <Badge dot status='warning' style={{ marginLeft: '80px' }} />
        </div>
        <div className='state' style={{ marginLeft: '10px' }}>
          <Badge dot status='success' text='成功' /><br />
          <Badge dot status='error' text='错误' /><br />
          <Badge dot status='default' text='默认' /><br />
          <Badge dot status='processing' text='进行中' /><br />
          <Badge dot status='warning' text='警告' /><br />
        </div>
      </div>
    )
  }
}
