import React from 'react';
import AccordionCollapse from './AccordionCollapse';
import BasicCollapse from './BasicCollapse';
import ConciseCollapse from './ConciseCollapse';
import NestedCollapse from './NestedCollapse';
import ShadingCollapse from './ShadingCollapse';
import CurrentCollapse from './CurrentCollapse';


export default () => (
  <div id='main-container'>
    <h1 className='h1'>折叠面板</h1>
    <h2 className='h2'>
    测试场景: <br />
      1）测试API defaultActiveKey默认展开的面板 (array)<br />
      2）测试API onChange面板折叠后的回调函数 (function)<br />
      3）测试API header面板头部内容 (string)<br />
      4）测试API key面板的唯一值 (string)<br />
      5）测试API disabled禁用面板 (bool)<br />
    </h2>
    <BasicCollapse />
    <br />
    <h1 className='h1'>演示冲突</h1>
    <h2 className='h2'>
    测试场景: <br />
      1）测试API defaultActiveKey默认展开的面板 (array)<br />
      3）测试API header面板头部内容 (string)<br />
      4）测试API key面板的唯一值 (string)<br />
      6）测试API activeKey默认展开的面板和defaultActiveKey同时存在的情况下activeKey的权重高,会发生不可点击的情况 (array)<br />
    </h2>
    <CurrentCollapse />
    <br />
    <h1 className='h1'>手风琴</h1>
    <h2 className='h2'>
    测试场景: <br />
      1）测试API defaultActiveKey默认展开的面板 (array)<br />
      2）测试API onChange面板折叠后的回调函数 (function)<br />
      3）测试API header面板头部内容 (string)<br />
      4）测试API key面板的唯一值 (string)<br />
      5）测试API accordion添加手风琴效果 (bool)<br />
    </h2>
    <AccordionCollapse />
    <br />
    <h1 className='h1'>嵌套面板</h1>
    <h2 className='h2'>
    测试场景: <br />
      1）测试API defaultActiveKey默认展开的面板 (array)<br />
      2）测试API onChange面板折叠后的回调函数 (function)<br />
      3）测试API header面板头部内容 (string)<br />
      4）测试API key面板的唯一值 (string)<br />
      5）测试API accordion添加手风琴效果 (bool)<br />
      6）测试API forceRender隐藏时不渲染DOM结构 (bool)<br />
    </h2>
    <NestedCollapse />
    <br />
    <h1 className='h1'>简洁风格</h1>
    <h2 className='h2'>
    测试场景: <br />
      1）测试API defaultActiveKey默认展开的面板 (array)<br />
      2）测试API onChange面板折叠后的回调函数 (function)<br />
      3）测试API header面板头部内容 (string)<br />
      4）测试API key面板的唯一值 (string)<br />
      5）测试API accordion添加手风琴效果 (bool)<br />
      6）测试API bordered去除外边框 (bool)<br />
    </h2>
    <ConciseCollapse />
    <br />
    <h1 className='h1'>底纹样式</h1>
    <h2 className='h2'>
    测试场景: <br />
      1）测试API defaultActiveKey默认展开的面板 (array)<br />
      2）测试API onChange面板折叠后的回调函数 (function)<br />
      3）测试API header面板头部内容 (string)<br />
      4）测试API key面板的唯一值 (string)<br />
      5）测试API bgColor底纹效果 (bool)<br />
    </h2>
    <ShadingCollapse />
    <br />
  </div>
	)
