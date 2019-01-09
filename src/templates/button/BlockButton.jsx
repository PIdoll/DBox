import React from 'react';

import Button from 'components/button';

export default class BlockButton extends React.Component {
  render() {
    return (
      <div style={{ width: 600 }}>
        <Button type='primary' block>主要</Button>
        <br />
        <br />
        <Button block>默认</Button>
      </div>
    )
  }
}
