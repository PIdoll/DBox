import React from 'react';
import {Popover, Button} from 'components';


const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
const text = <span>标题</span>;
export default class ArrowPopover extends React.Component {
  render () {
    return (
      <div className='arrow'>
        <Popover placement='topLeft' title={text} content={content} trigger='click'>
          <Button>边缘对齐</Button>
        </Popover>
        <Popover placement='topLeft' title={text} content={content} arrowPointAtCenter>
          <Button style={{marginLeft: 25}}>箭头指向中心</Button>
        </Popover>
      </div>
    )
  }
}
