import React from 'react';
import BasicSlider from './BasicSlider';
import CustomizeSlider from './CustomizeSlider';
import DisabledSlider from './DisabledSlider';
import DoubleSliderHandle from './DoubleSliderHandle';
import InputNumberSlider from './InputNumberSlider';

export default class InputNumber extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用defaultValue设置滑动条的默认显示值
        </h2>
        <BasicSlider />

        <h1 className='h1'>自定义格式化内容</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用tipFormatter自定义tooltip的显示内容，给空值可以不显示tooltip。
        </h2>
        <CustomizeSlider />

        <h1 className='h1'>不可用状态</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用disabled可以禁止滑动
        </h2>
        <DisabledSlider />

        <h1 className='h1'>双滑块</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用range接口，给出一个defaultValue的数组值实现。
        </h2>
        <DoubleSliderHandle />

        <h1 className='h1'>带输入框的滑块</h1>
        <h2 className='h2'>
          测试场景:<br />
        1.调用onChange方法
        </h2>
        <InputNumberSlider />
      </div>
    )
  }
}
