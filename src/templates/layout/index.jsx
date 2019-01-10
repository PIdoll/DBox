import React from 'react';
import BasicLayout from './BasicLayout';
import BreadLayout from './BreadLayout';
import TabLayout from './TabLayout';
import TopLayout from './TopLayout';

export default class MainLayout extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基础布局</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API className容器类名 (string)<br />
        </h2>
        <BasicLayout />
        <br />
        <h1 className='h1'>顶部导航</h1>
        <h2 className='h2'>
        测试场景: <br />
          无<br />
        </h2>
        <TopLayout />
        <br />
        <h1 className='h1'>侧边导航-面包屑</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API className容器类名 (string)<br />
          2）测试API style样式 (object)<br />
        </h2>
        <BreadLayout />
        <br />
        <h1 className='h1'>侧边导航-Tab页</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API className容器类名 (string)<br />
          2）测试API style样式 (object)<br />
        </h2>
        <TabLayout />
        <br />
      </div>
    )
  }
}
