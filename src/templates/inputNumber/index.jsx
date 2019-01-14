import React from 'react';
import BasicInputNumber from './BasicInputNumber';
import CustomizeInputNumber from './CustomizeInputNumber';
import DecimalInputNumber from './DecimalInputNumber';
import DisabledInputNumber from './DisabledInputNumber';
import SizeInputNumber from './SizeInputNumber';

export default class InputNumber extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <BasicInputNumber />

        <h1 className='h1'>自定义格式化内容</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <CustomizeInputNumber />

        <h1 className='h1'>小数</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <DecimalInputNumber />

        <h1 className='h1'>不可用切换</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <DisabledInputNumber />

        <h1 className='h1'>三种大小</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <SizeInputNumber />
      </div>
    )
  }
}
