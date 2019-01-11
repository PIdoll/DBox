import React from 'react';
import {Popover, Button} from 'components';

const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
export default class BasicPopover extends React.Component {
  render () {
    return (
      <div>
        <Popover content={content} title='标题' trigger='hover'>
          <Button>鼠标移入</Button>
        </Popover>
        <Popover content={content} title='标题' trigger='click'>
          <Button>鼠标点击</Button>
        </Popover>
      </div>

    )
  }
}

