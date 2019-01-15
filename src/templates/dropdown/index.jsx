import React from 'react';
import BasicDropdown from './BasicDropdown';
import EventDropdown from './EventDropdown';
import GroupDropdown from './GroupDropdown';
import PositionDropdown from './PositionDropdown';
import SizeDropdown from './SizeDropdown';
import TriggerDropdown from './TriggerDropdown';
import TypeDropdown from './TypeDropdown';
import MutilDropdown from './MutilDropdown';


export default class DropView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          2）测试API type下拉图标 (string)<br />
          3）测试API trigger触发方式 (array)<br />
          4）测试API onClick点击回调函数 (function)<br />
          5）测试API visible下拉菜单是否可见 (bool)<br />
        </h2>
        <BasicDropdown />
        <br />
        <h1 className='h1'>常用类型</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          2）测试API type下拉图标 (string)<br />
          3）测试API trigger触发方式 (array)<br />
          4）测试API onClick点击回调函数 (function)<br />
          5）测试API visible下拉菜单是否可见 (bool)<br />
          6）测试API disabled用在按钮身上禁用菜单 (bool)<br />
        </h2>
        <TypeDropdown />
        <br />
        <h1 className='h1'>组合使用</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          2）测试API trigger触发方式 (array)<br />
          3）测试API onClick点击回调函数 (function)<br />
          4）测试API visible下拉菜单是否可见 (bool)<br />
        </h2>
        <GroupDropdown />
        <br />
        <h1 className='h1'>三种尺寸</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          3）测试API trigger触发方式 (array)<br />
          4）测试API onClick点击回调函数 (function)<br />
          5）测试API visible下拉菜单是否可见 (bool)<br />
          6）测试API size下拉菜单大小 (string)<br />
        </h2>
        <SizeDropdown />
        <br />
        <h1 className='h1'>弹出位置</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          3）测试API trigger触发方式 (array)<br />
          4）测试API onClick点击回调函数 (function)<br />
          5）测试API visible下拉菜单是否可见 (bool)<br />
          6）测试API placement下拉菜单的弹出位置 (string)<br />
        </h2>
        <PositionDropdown />
        <br />
        <h1 className='h1'>触发方式</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          2）测试API type下拉图标 (string)<br />
          3）测试API trigger触发方式 (array)<br />
          4）测试API onClick点击回调函数 (function)<br />
          5）测试API visible下拉菜单是否可见 (bool)<br />
          6）测试API disabled用在按钮身上禁用菜单 (bool)<br />
          6）测试API placement下拉菜单的弹出位置 (string)<br />
          7）测试API onVisibleChange菜单显示状态改变时回调函数 (function)<br />
        </h2>
        <TriggerDropdown />
        <br />
        <h1 className='h1'>触发事件</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          2）测试API trigger触发方式 (array)<br />
          3）测试API onClick点击回调函数 (function)<br />
          4）测试API onVisibleChange菜单显示状态改变时回调函数 (function)<br />
        </h2>
        <EventDropdown />
        <br />
        <h1 className='h1'>多级菜单</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API overlay下拉菜单 (menu)<br />
          2）测试API placement下拉菜单的弹出位置 (string)<br />
          3）测试API trigger触发方式 (array)<br />
        </h2>
        <MutilDropdown />
        <br />
      </div>
    )
  }
}
