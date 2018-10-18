import React from 'react'

import Pagination from '../../components/pagination'

export default () => (
  <div id='main-container'>
    <h1 className='h1'>基础分页</h1>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
    <h1 className='h1'>更多分页</h1>
    <Pagination defaultCurrent={6} total={500} />
    <h1 className='h1'>跳转分页</h1>
    <Pagination defaultCurrent={2} total={500} showQuickJumper onChange={onChangeHandler} />
    <h1 className='h1'>迷你分页</h1>
    <Pagination size='small' total={50} /><br />
    <Pagination size='small' total={50} showSizeChanger showQuickJumper /><br />
    <Pagination size='small' total={50} showTotal={showTotal} /><br />
    <h1 className='h1'>简洁翻页</h1>
    <Pagination simple defaultCurrent={2} total={500} showQuickJumper />
    <h1 className='h1'>包含总数</h1>
    <Pagination showTotal={(total, range) => (`总共${total}条数据,${range[0]}-${range[1]}`)} defaultCurrent={2} total={5000} pageSize={50} showQuickJumper />
    <h1 className='h1'>上一页和下一页</h1>
    <Pagination defaultCurrent={2} total={5000} itemRender={itemRender} />

  </div>
  )

  // --------------------------------------自定义函数-----------------------------------------------
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>上一页</a>
    } else if (type === 'next') {
      return <a>下一页</a>
    }
    return originalElement;
  }
  function onChangeHandler(pageNumber) {
    console.log(`第${pageNumber}页`)
  }
function showTotal(total) {
  return `总共 ${total} 条数据`;
}
