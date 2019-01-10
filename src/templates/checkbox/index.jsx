import React from 'react';
import AllCheckbox from './AllCheckbox';
import BasicCheckbox from './BasicCheckbox';
import CombinationCheckbox from './CombinationCheckbox';
import ControlCheckbox from './ControlCheckbox';
import DisableCheckbox from './DisableCheckbox';

export default class BadgeView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用多选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API autoFocus自动获取焦点和disabled同时使用无效(bool)<br />
        </h2>
        <BasicCheckbox />
        <br />
        <h1 className='h1'>受控多选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API checked选中功能(bool)<br />
          2）测试API disabled禁用功能(bool)<br />
          3）测试API onChange切换选择的回调函数功能(function)<br />
          4）测试API onClick点击选择的回调函数功能(function)<br />
        </h2>
        <ControlCheckbox />
        <br />
        <h1 className='h1'>多选框组</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API checked选中功能(bool)<br />
          2）测试API disabled禁用功能(bool)<br />
          3）测试API options选择框的功能组(array)<br />
          4）测试API defaultValue选择框的默认绑定值(array)<br />
        </h2>
        <CombinationCheckbox />
        <br />
        <h1 className='h1'>多选框全选</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API options选择框的功能组(array)<br />
          2）测试API indeterminate切换选中的样式(bool)<br />
          3）测试API checked选中功能(bool)<br />
          4）测试API disabled禁用功能(bool)<br />
          5）测试API value选择框的绑定值(array)<br />
          6）测试API onChange切换选择的回调函数功能(function)<br />
        </h2>
        <AllCheckbox />
        <br />
        <h1 className='h1'>多选框不可用</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API disabled禁用选择框(bool)<br />
          2）测试API defaultValue选择框的默认绑定值(array)<br />
        </h2>
        <DisableCheckbox />
        <br />
      </div>
    )
  }
 }
