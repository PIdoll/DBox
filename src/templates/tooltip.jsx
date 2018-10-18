import React from 'react';

import Tooltip from 'components/tooltip';
import Button from 'components/button';

const text = <span>提示文字</span>;
const buttonWidth = 70;

export default () => (
  <div id='main-container' className='demo-tooltip'>
    <h1 className='h1'>基本用法</h1>
    <Tooltip title='提示文字'>
      <span>当鼠标移入时会出现文字提示</span>
    </Tooltip>
    <h1 className='h1'>12个方向</h1>
    <div className='placement'>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }} >
        <Tooltip placement='topLeft' title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement='top' title={text} >
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement='topRight' title={text}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Tooltip placement='leftTop' title={text}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement='left' title={text} >
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement='leftBottom' title={text}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
        <Tooltip placement='rightTop' title={text}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement='right' title={text} >
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement='rightBottom' title={text}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Tooltip placement='bottomLeft' title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement='bottom' title={text} >
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement='bottomRight' title={text}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </div>
    <div className='arrow'>
      <h1 className='h1'>箭头指向</h1>
      <Tooltip placement='topLeft' title={text} >
        <Button>边缘对齐</Button>
      </Tooltip>
      <Tooltip placement='topLeft' title={text} arrowPointAtCenter>
        <Button>箭头指向中心 </Button>
      </Tooltip>
    </div>
  </div>
)

