import React from 'react';
import {Popover, Button} from 'components';


const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
export default class TriggerPopover extends React.Component {
  render () {
    return (
      <div className='arrow'>
        <Popover content={content} title='标题' trigger='hover'>
          <Button>鼠标移入</Button>
        </Popover>
        <Popover content={content} title='标题' trigger='focus'>
          <Button style={{marginLeft: 25, marginRight: 25}}>鼠标聚焦</Button>
        </Popover>
        <Popover content={content} title='标题' trigger='click'>
          <Button>单击鼠标</Button>
        </Popover>
      </div>
    )
  }
}
