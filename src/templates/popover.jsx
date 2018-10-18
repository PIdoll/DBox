import React from 'react';
import Popover from 'components/popover';
import Button from 'components/button';

const content = (
  <div>
    <p>内容1</p>
    <p>内容2</p>
  </div>
);
const buttonWidth = 70;
const text = <span>标题</span>;
export default class PopoverDemo extends React.Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <div id='main-container' className='demo-popover'>
        <h1 className='h1'>基本用法</h1>
        <Popover content={content} title='标题'>
          <Button type='primary'>鼠标移入</Button>
        </Popover>
        <h1 className='h1'>三种触发方式</h1>
        <div className='arrow'>
          <Popover content={content} title='标题' trigger='hover'>
            <Button>鼠标移入</Button>
          </Popover>
          <Popover content={content} title='标题' trigger='focus'>
            <Button>鼠标聚焦</Button>
          </Popover>
          <Popover content={content} title='标题' trigger='click'>
            <Button>单击鼠标</Button>
          </Popover>
        </div>
        <h1 className='h1'>12个方向</h1>
        <div className='placement'>
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Popover placement='topLeft' title={text} content={content} trigger='click'>
              <Button>TL</Button>
            </Popover>
            <Popover placement='top' title={text} content={content} trigger='click'>
              <Button>Top</Button>
            </Popover>
            <Popover placement='topRight' title={text} content={content} trigger='click'>
              <Button>TR</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Popover placement='leftTop' title={text} content={content} trigger='click'>
              <Button>LT</Button>
            </Popover>
            <Popover placement='left' title={text} content={content} trigger='click'>
              <Button>Left</Button>
            </Popover>
            <Popover placement='leftBottom' title={text} content={content} trigger='click'>
              <Button>LB</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
            <Popover placement='rightTop' title={text} content={content} trigger='click'>
              <Button>RT</Button>
            </Popover>
            <Popover placement='right' title={text} content={content} trigger='click'>
              <Button>Right</Button>
            </Popover>
            <Popover placement='rightBottom' title={text} content={content} trigger='click'>
              <Button>RB</Button>
            </Popover>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover placement='bottomLeft' title={text} content={content} trigger='click'>
              <Button>BL</Button>
            </Popover>
            <Popover placement='bottom' title={text} content={content} trigger='click'>
              <Button>Bottom</Button>
            </Popover>
            <Popover placement='bottomRight' title={text} content={content} trigger='click'>
              <Button>BR</Button>
            </Popover>
          </div>
        </div>
        <h1 className='h1'>箭头指向</h1>
        <div className='arrow'>
          <Popover placement='topLeft' title={text} content={content}>
            <Button>边缘对齐</Button>
          </Popover>
          <Popover placement='topLeft' title={text} content={content} arrowPointAtCenter>
            <Button>箭头指向中心</Button>
          </Popover>
        </div>
        <h1 className='h1'>从浮层内关闭</h1>
        <Popover
          content={<a onClick={this.hide}>关闭</a>}
          title='标题'
          trigger='click'
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
      >
          <Button type='primary'>单击鼠标</Button>
        </Popover>
      </div>
    )
  };
}


