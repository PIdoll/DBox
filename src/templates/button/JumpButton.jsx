import React from 'react';

import Button from 'components/button';

export default class JumpButton extends React.Component {
  render() {
    return (
      <div>
        <Button type='secondary' href='http://www.baidu.com' >默认本页面</Button>&nbsp;&nbsp;
        <Button type='secondary' href='http://www.baidu.com' target='_blank'>新页面</Button>
        &nbsp;&nbsp;
        <Button type='secondary' href='http://www.baidu.com' target='_self'>本页面</Button>&nbsp;&nbsp;
      </div>
    )
  }
}
