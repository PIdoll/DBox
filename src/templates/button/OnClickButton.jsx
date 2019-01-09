import React from 'react';

import Button from 'components/button';

export default class BasicButton extends React.Component {
  handleOnClick = () => {
    console.log('click');
  }
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.handleOnClick}>默认</Button>
      </div>
    )
  }
}
