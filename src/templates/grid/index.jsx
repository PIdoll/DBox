import React from 'react';
import BasicGrid from './BasicGrid';
import CustomizeGrid from './CustomizeGrid';
import FlexOrderGrid from './FlexOrderGrid';
import GutterGrid from './GutterGrid';
import HorizontalGrid from './HorizontalGrid';
import OffsetGrid from './OffsetGrid';
import OrderGrid from './OrderGrid';
import VerticalGrid from './VerticalGrid';

export default class Grid extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用Row和Col创建一个基本的栅格系统，所有的Col必须放在Row中。
        </h2>
        <BasicGrid />

        <h1 className='h1'>响应式栅格布局</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.预设四种响应式尺寸：xl，lg，md，sm，xs
        </h2>
        <CustomizeGrid />

        <h1 className='h1'>Flex排序</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.通过Flex布局中的Order来改变元素的排序
        </h2>
        <FlexOrderGrid />

        <h1 className='h1'>拥有间隔的栅格</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用Row的Gutter属性实现Col之间有间隔
        </h2>
        <GutterGrid />

        <h1 className='h1'>Flex水平对齐</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.在Row中设置type=‘flex’实现flex布局，使用justify实现水平对齐方式，
        </h2>
        <HorizontalGrid />

        <h1 className='h1'>可以左右偏移的栅格</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.在Col中使用offset可以移动当前作用的Col
        </h2>
        <OffsetGrid />

        <h1 className='h1'>可排序的栅格</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.在Col中使用pull和push来实现排序
        </h2>
        <OrderGrid />
        <h1 className='h1'>垂直对齐</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.在Row中设置type=‘flex’实现flex布局，使用Align实现垂直对齐方式，
        </h2>
        <VerticalGrid />
      </div>
    )
  }
}
