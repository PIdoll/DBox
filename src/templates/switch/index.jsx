import React from 'react';
import BasicSwitch from './BasicSwitch';
import ButtonSwitch from './ButtonSwitch';
import ExecuteSwitch from './ExecuteSwitch';
import SizeSwitch from './SizeSwitch';
import TextSwitch from './TextSwitch';

export default class SwitchView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API checked指定当前是否选中(bool)<br />
          2）测试API defaultChecked初始是否选中(bool)<br />
        </h2>
        <BasicSwitch />
        <br />
        <h1 className='h1'>按钮操作</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API disabled失效状态(bool)<br />
          2）测试API onChange变化时回调函数(function)<br />
        </h2>
        <ButtonSwitch />
        <br />
        <br />
        <h1 className='h1'>两种大小</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API size开关大小，可选值：default small(string)<br />
          2）测试API defaultChecked初始是否选中(bool)<br />
        </h2>
        <SizeSwitch />
        <br />
        <h1 className='h1'>带有文字的按钮</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API unCheckedChildren非选中时的内容(string)<br />
          2）测试API checkedChildren选中时的内容(string)<br />
          3）测试API onChange点击回调(function)<br />
        </h2>
        <TextSwitch />
        <br />
        <h1 className='h1'>执行中</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API disabled失效状态(bool)<br />
          1）测试API size开关大小，可选值：default small(string)<br />
          2）测试API defaultChecked初始是否选中(bool)<br />
          2）测试API loading加载中的开关(bool)<br />
        </h2>
        <ExecuteSwitch />
        <br />
      </div>
    )
  }
}

