import React from 'react';

import Button from 'components/button';

export default class IconButton extends React.Component {
  render() {
    return (
      <div>
        <Button icon='delete' size='small'>图标</Button>&nbsp;&nbsp;
        <Button icon='delete'>图标</Button>&nbsp;&nbsp;
        <Button icon='delete' size='large'>图标</Button>&nbsp;&nbsp;
        <br /><br />

        <Button icon='down' size='small'>图标</Button>&nbsp;&nbsp;
        <Button icon='down' >图标</Button>&nbsp;&nbsp;
        <Button icon='down' size='large'>图标</Button>&nbsp;&nbsp;
        <br /><br />

        <Button icon='delete' size='small' shape='circle' />&nbsp;&nbsp;
        <Button icon='delete' shape='circle' />&nbsp;&nbsp;
        <Button icon='delete' size='large' shape='circle' />&nbsp;&nbsp;
        <br /><br />

        <Button icon='delete' shape='square' size='small' />&nbsp;&nbsp;
        <Button icon='delete' shape='square' />&nbsp;&nbsp;
        <Button icon='delete' shape='square' size='large' />&nbsp;&nbsp;

        <br /><br />
        <Button icon='down' iconLocation='right' size='small'>图标</Button>&nbsp;&nbsp;
        <Button icon='down' iconLocation='right' >图标</Button>&nbsp;&nbsp;
        <Button icon='down' iconLocation='right' size='large'>图标</Button>&nbsp;&nbsp;
        <br /><br />

        <Button loading iconLocation='right' size='small' >加载中</Button>&nbsp;&nbsp;
        <Button loading iconLocation='right' >加载中</Button>&nbsp;&nbsp;
        <Button loading iconLocation='right' size='large' >加载中</Button>&nbsp;&nbsp;
      </div>
    )
  }
}
