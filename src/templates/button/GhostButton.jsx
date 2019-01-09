import React from 'react';

import Button from 'components/button';

export default class GhostButton extends React.Component {
  render() {
    return (
      <div className='youling'>
        <Button ghost>默认</Button>&nbsp;&nbsp;
        <Button type='primary' ghost>重要</Button>&nbsp;&nbsp;
        <Button type='dashed' ghost>虚线</Button>&nbsp;&nbsp;
        <Button type='danger' ghost>危险</Button>&nbsp;&nbsp;
        <Button disabled ghost>禁用</Button>
      </div>
    )
  }
}
