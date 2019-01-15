import React from 'react';

import Tooltip from 'components/tooltip';
import Button from 'components/button';
const buttonWidth = 70;
const text = <span>提示文字</span>;
export default class TwelveDirectionTooltip extends React.Component {
    render() {
    return (
      <div>
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }} >
          <Tooltip placement='topLeft' title={text}>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement='top' title={text} >
            <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Top</Button>
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
            <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Left</Button>
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
            <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Right</Button>
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
            <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Bottom</Button>
          </Tooltip>
          <Tooltip placement='bottomRight' title={text}>
            <Button>BR</Button>
          </Tooltip>
        </div>
      </div>
    )
 }
}
