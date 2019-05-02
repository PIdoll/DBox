import React from 'react';
import ArrowPopover from './ArrowPopover';
import BasicPopover from './BasicPopover';
import ClickPopover from './ClickPopover';
import FloatPopover from './FloatPopover';
import PositionPopver from './PositionPopver';
import TriggerPopover from './TriggerPopover';

export default class PopoverDemo extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-popover'>
        <h1 className='h1' id='demoPopover'>基本用法</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API content卡片内容(string\ReactNode)<br />
          2）测试API title卡片内容标题(string)<br />
          3）测试API trigger触发方式(string)<br />
        </h2>
        <BasicPopover />
        <br />
        <h1 className='h1' id='demoPopover'>三种触发方式</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API content卡片内容(string\ReactNode)<br />
          2）测试API title卡片内容标题(string)<br />
          3）测试API trigger触发方式(string)<br />
        </h2>
        <TriggerPopover />
        <br />
        <h1 className='h1' id='demoPopover'>12个方向</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API content卡片内容(string\ReactNode)<br />
          2）测试API title卡片内容标题(string)<br />
          3）测试API trigger触发方式(string)<br />
          4）测试API placement触发出现的位置(string)<br />
        </h2>
        <PositionPopver />
        <br />
        <h1 className='h1' id='demoPopover'>箭头指向</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API content卡片内容(string\ReactNode)<br />
          2）测试API title卡片内容标题(string)<br />
          3）测试API trigger触发方式(string)<br />
          4）测试API placement触发出现的位置(string)<br />
          5）测试API arrowPointAtCenter控制箭头指向中心位置(bool)<br />
        </h2>
        <ArrowPopover />
        <br />
        <h1 className='h1' id='demoPopover'>从浮层内关闭</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API content卡片内容(string\ReactNode)<br />
          2）测试API title卡片内容标题(string)<br />
          3）测试API trigger触发方式(string)<br />
        </h2>
        <FloatPopover />
        <br />
        <h1 className='h1' id='demoPopover'>悬停点击弹出层</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API content卡片内容(string\ReactNode)<br />
          2）测试API title卡片内容标题(string)<br />
          3）测试API trigger触发方式(string)<br />
        </h2>
        <ClickPopover />
        <br />
      </div>
    )
  }
}
