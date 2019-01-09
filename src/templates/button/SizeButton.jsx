import React from 'react';

import Button from 'components/button';

export default class SizeButton extends React.Component {
  render() {
    return (
      <div>
        <Button type='primary' size='small'>按钮</Button>&nbsp;&nbsp;
        <Button type='primary'>按钮</Button>&nbsp;&nbsp;
        <Button type='primary' size='large'>按钮</Button>
      </div>
    )
  }
}
