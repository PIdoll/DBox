import React from 'react';
import {Popover, Button} from 'components';
const content = (
  <div>
    <p>这是是内容文本内容文本</p>
  </div>
);
const buttonWidth = 70;
const text = <span>标题</span>;
export default class PositionPopover extends React.Component {
  render () {
    return (
      <div className='placement'>
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <Popover placement='topLeft' title={text} content={content} trigger='click'>
            <Button> T L </Button>
          </Popover>
          <Popover placement='top' title={text} content={content} trigger='click'>
            <Button style={{marginLeft: 25, marginRight: 25}}>Top</Button>
          </Popover>
          <Popover placement='topRight' title={text} content={content} trigger='click'>
            <Button>T R</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Popover placement='leftTop' title={text} content={content} trigger='click'>
            <Button>L  T</Button>
          </Popover>
          <Popover placement='left' title={text} content={content} trigger='click'>
            <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Left</Button>
          </Popover>
          <Popover placement='leftBottom' title={text} content={content} trigger='click'>
            <Button>L  B</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
          <Popover placement='rightTop' title={text} content={content} trigger='click'>
            <Button>R T</Button>
          </Popover>
          <Popover placement='right' title={text} content={content} trigger='click'>
            <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Right</Button>
          </Popover>
          <Popover placement='rightBottom' title={text} content={content} trigger='click'>
            <Button>R B</Button>
          </Popover>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Popover placement='bottomLeft' title={text} content={content} trigger='click'>
            <Button>B L</Button>
          </Popover>
          <Popover placement='bottom' title={text} content={content} trigger='click'>
            <Button style={{marginLeft: 15, marginRight: 15}}>Bottom</Button>
          </Popover>
          <Popover placement='bottomRight' title={text} content={content} trigger='click'>
            <Button> B R </Button>
          </Popover>
        </div>
      </div>
    )
  }
}
