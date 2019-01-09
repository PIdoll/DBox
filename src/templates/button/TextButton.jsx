import React from 'react';

import Button from 'components/button';

export default class TextButton extends React.Component {
  render() {
    return (
      <div>
        <Button type='default' text>默认</Button>&nbsp;&nbsp;
        <Button type='secondary' text>主要</Button>&nbsp;&nbsp;
      </div>
    )
  }
}
