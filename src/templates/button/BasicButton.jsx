import React from 'react';

import Button from 'components/button';

export default class BasicButton extends React.Component {
  handleClick = () => {
    console.log('handleClick')
  }
  render() {
    return (
      <div>
        <Button type='default' onClick={this.handleClick}>默认</Button>&nbsp;&nbsp;
        <Button type='primary'>主要</Button>&nbsp;&nbsp;
        <Button type='secondary'>次要</Button>&nbsp;&nbsp;
        <Button disabled>禁止</Button>&nbsp;&nbsp;
        <Button type='dashed'>虚线</Button>&nbsp;&nbsp;
        <Button type='danger'>危险</Button>&nbsp;&nbsp;
      </div>
    )
  }
}
