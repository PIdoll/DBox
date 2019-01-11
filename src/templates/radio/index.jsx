import React from 'react';
import BasicRadio from './BasicRadio'
import ButtonRadio from './ButtonRadio'
import DisableRadio from './DisableRadio'
import GroupRadio from './GroupRadio'
import MutexRadio from './MutexRadio'
import NameRadio from './NameRadio'
import ShadingRadio from './ShadingRadio'
import SizeRadio from './SizeRadio'
import VerticalRadio from './VerticalRadio'

export default class RadioView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用单选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API checked指定当前是否选中(bool)<br />
          2）测试API defaultChecked初始是否选中(bool)<br />
        </h2>
        <BasicRadio />
        <br />
        <h1 className='h1'>禁用单选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API disabled禁用(bool)<br />
          2）测试API defaultChecked初始是否选中(bool)<br />
        </h2>
        <DisableRadio />
        <br />
        <h1 className='h1'>互斥单选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API disabled禁用(bool)<br />
          2）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          3）测试API defaultValue默认选中的值(string)<br />
          4）测试API onchange选项变化时的回调函数(function)<br />
        </h2>
        <MutexRadio />
        <br />
        <h1 className='h1'>垂直组合单选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API direction组合的垂直(vertical)与水平排列方式(默认无传参)(string)<br />
          2）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          3）测试API defaultValue默认选中的值(string)<br />
          4）测试API onchange选项变化时的回调函数(function)<br />
        </h2>
        <VerticalRadio />
        <br />
        <h1 className='h1'>分组单选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          2）测试API defaultValue默认选中的值(string)<br />
          3）测试API onchange选项变化时的回调函数(function)<br />
        </h2>
        <GroupRadio />
        <br />
        <h1 className='h1'>name单选框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          2）测试API defaultValue默认选中的值(string)<br />
          3）测试API onchange选项变化时的回调函数(function)<br />
          3）测试API nameRadioGroup 下所有 input[type="radio"] 的 name 属性(string)<br />
        </h2>
        <NameRadio />
        <br />
        <h1 className='h1'>按钮样式</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          2）测试API defaultValue默认选中的值(string)<br />
          3）测试API disabled禁用(bool)<br />
        </h2>
        <ButtonRadio />
        <br />
        <h1 className='h1'>大小按钮</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          2）测试API defaultValue默认选中的值(string)<br />
          3）测试API size大小，只对按钮样式生效(bool)<br />
          4）测试API disabled禁用(bool)<br />
        </h2>
        <SizeRadio />
        <br />
        <h1 className='h1'>按钮底纹</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API buttonStylRadioButton 的风格样式，目前有描边和填色两种风格(string)<br />
          1）测试API Value根据 value 进行比较，判断是否选中(bool)<br />
          2）测试API defaultValue默认选中的值(string)<br />
          3）测试API size大小，只对按钮样式生效(bool)<br />
          4）测试API disabled禁用(bool)<br />
        </h2>
        <ShadingRadio />
        <br />
      </div>
    )
  }
}
