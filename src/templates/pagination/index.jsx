import React from 'react';
import BasicPagination from './BasicPagination';
import ConcisePagination from './ConcisePagination';
import JumpPagination from './JumpPagination';
import MiniPagination from './MiniPagination';
import MorePagination from './MorePagination';
import PagePagination from './PagePagination';
import TotalPagination from './TotalPagination';

export default class PaginationView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基础分页</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API total数据总数(number)<br />
          2）测试API showLessItems显示较少的页码项(bool)<br />
          3）测试API defaultCurrent默认的当前页数(bumber)<br />
          4）测试API current当前页数与defaultCurrent同时存在会覆盖defaultCurrent(bumber)<br />
          注意:current和defaultCurrent同时使用会无法切换分页！！！！！
        </h2>
        <BasicPagination />
        <br />
        <h1 className='h1'>2.更多分页</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultCurrent默认的当前页数(bumber)<br />
          2）测试API total数据总数(number)<br />
        </h2>
        <MorePagination />
        <br />
        <h1 className='h1'>3.改变每页显示条数目</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultCurrent默认的当前页数(bumber)<br />
          2）测试API total数据总数(number)<br />
          3）测试API showSizeChanger为布尔值可控制显示改变每页显示条数目(bool)<br />
          4）测试API pageSizeOptions改变showSizeChanger的默认值搭配defaultPageSize使用(array)<br />
          5）测试API onChange页码改变的回调，参数是改变后的页码及每页条数(function)<br />
          6）测试API onShowSizeChange	pageSize 变化的回调(function)<br />
        </h2>
        <PagePagination />
        <br />
        <h1 className='h1'>4.跳转分页</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultCurrent默认的当前页数(bumber)<br />
          2）测试API total数据总数(number)<br />
          3）测试API showQuickJumper为布尔值可控制跳转分页显示(bool)<br />
        </h2>
        <JumpPagination />
        <br />
        <h1 className='h1'>5.迷你分页</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultCurrent默认的当前页数不传参默认选中第一个(bumber)<br />
          2）测试API total数据总数(number)<br />
          3）测试API showQuickJumper为布尔值可控制跳转分页显示(bool)<br />
          4）测试API size设置为small控制迷你版不设置默认大小(string)<br />
          5）测试API showTotal传参total来显示总条数(function)<br />
        </h2>
        <MiniPagination />
        <br />
        <h1 className='h1'>6.简洁翻页</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API total数据总数(number)<br />
          2）测试API simple为布尔值可控制简洁模式(bool)<br />
          3）测试API defaultPageSize默认的每页条数(bumber)<br />
          4）测试API defaultCurrent默认的当前页数不传参默认选中第一个(bumber)<br />
        </h2>
        <ConcisePagination />
        <br />
        <h1 className='h1'>7.包含总数</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultCurrent默认的当前页数不传参默认选中第一个(bumber)<br />
          2）测试API total数据总数(number)<br />
          3）测试API pageSize每页条数与defaultPageSize同时存在会覆盖defaultPageSize(bumber)<br />
          4）测试API showTotal传参total来显示总条数(function)<br />
        </h2>
        <TotalPagination />
        <br />
      </div>
    )
  }
}
