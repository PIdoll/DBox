import React from 'react';
import BasicBreadcrumb from './BasicBreadcrumb';
import CustomizeBreadcrumb from './CustomizeBreadcrumb';
import IconBreadcrumb from './IconBreadcrumb';
import RouterBreadcrumb from './RouterBreadcrumb';

export default class Breadcrumb extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本面板屑</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <BasicBreadcrumb />
        <h1 className='h1'>自定义分隔符面包屑</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <CustomizeBreadcrumb />
        <h1 className='h1'>带图标的面包屑</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <IconBreadcrumb />
        <h1 className='h1'>React-Router4.0路由</h1>
        <h2 className='h2'>
          测试场景:<br />
        </h2>
        <RouterBreadcrumb />
      </div>
    )
  }
}
