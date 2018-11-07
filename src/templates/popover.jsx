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
    hovered: false,
    clicked: false
  }
  hidele = () => {
    this.setState({
      clicked: false,
      hovered: false
    });
  }
  hide = () => {
    this.setState({
      visible: false
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  handleHoveredChange = (visible) => {
    this.setState({ clicked: false, hovered: visible });
  }
  handleClickChange = (visible) => {
    this.setState({ clicked: visible, hovered: false });
  }
  render() {
    const hoverContent = (
      <div>
        这是悬停内容
      </div>
    )
    const clickContent = (
      <div>
        这是点击内容
      </div>
    )
    return (
      <div id='main-container' className='demo-popover'>
        <h1 className='h1'>基本用法</h1>
        <p>弹出层的大小由内容区域决定</p>
        <Popover placement='top' content={content} title='标题' trigger='hover'>
          <Button>鼠标移入</Button>
        </Popover>
        <h1 className='h1'>三种触发方式</h1>
        <p>通过trigger控制鼠标移入hover，聚焦focus，点击click触发方式</p>
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
        <p>通过placement值为topLeft,top,topRight,leftTop,left,leftBottom,rightTop,right,rightBottom,bottomLeft,bottom,bottomRight控制位置</p>
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
        <p>默认是边缘对齐，可通过arrowPointAtCenter控制箭头指向中心位置</p>
        <div className='arrow'>
          <Popover placement='topLeft' title={text} content={content}>
            <Button>边缘对齐</Button>
          </Popover>
          <Popover placement='topLeft' title={text} content={content} arrowPointAtCenter>
            <Button>箭头指向中心</Button>
          </Popover>
        </div>
        <h1 className='h1'>从浮层内关闭</h1>
        <p>通过content填入弹出层内文本显示，通过visible属性控制弹出层显示</p>
        <Popover
          content={<a onClick={this.hide}>关闭</a>}
          title='标题'
          trigger='click'
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
      >
          <Button>单击鼠标</Button>
        </Popover>
        <h1 className='h1'>悬停点击弹出层</h1>
        <p>创建可悬停和点击的弹出层</p>
        <Popover
          trigger='hover'
          title='悬停标题'
          content={hoverContent}
          visible={this.state.hovered}
          onVisibleChange={this.handleHoveredChange}
        >
          <Popover
            content={(
              <div>
                {clickContent}
                <a onClick={this.hidele}>关闭</a>
              </div>
            )}
            title='点击标题'
            trigger='click'
            visible={this.state.clicked}
            onVisibleChange={this.handleClickChange}
          >
            <Button>悬停并点击</Button>
          </Popover>
        </Popover>
      </div>
    )
  };
}


