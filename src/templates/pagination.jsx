import React from 'react'
import Pagination from 'components/pagination'

export default class PaginationView extends React.Component {
  render () {
    function showTotal(total) {
      return `总 ${total} 条`;
    }
    // function itemRender(current, type, originalElement) {
    //     if (type === 'prev') {
    //       return <a>上一页</a>
    //     } else if (type === 'next') {
    //       return <a>下一页</a>
    //     }
    //     return originalElement;
    //   }
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基础分页</h1>
        <p>依据默认选中页defaultCurrent和总条数total来控制,其值均为number类型</p>
        <Pagination defaultCurrent={1} total={50} />
        <h1 className='h1'>2.更多分页</h1>
        <p>依据默认选中页defaultCurrent和总条数total来控制,其值均为number类型</p>
        <Pagination defaultCurrent={6} total={500} />
        <h1 className='h1'>3.改变每页显示条数目</h1>
        <p>依据默认选中页defaultCurrent和总条数total来控制,其值均为number类型showSizeChanger为布尔值可控制显示改变每页显示条数目</p>
        <Pagination defaultCurrent={1} defaultPageSize={11} pageSizeOptions={['11', '21', '31', '41']} total={50} showSizeChanger />
        <h1 className='h1'>4.跳转分页</h1>
        <p>依据默认选中页defaultCurrent和总条数total来控制,其值均为number类型，showQuickJumper为布尔值可控制跳转分页显示</p>
        <Pagination defaultCurrent={2} total={500} showQuickJumper />
        <h1 className='h1'>5.迷你分页</h1>
        <p>依据默认选中页defaultCurrent和总条数total来控制,其值均为number类型，defaultCurrent不传参默认选中第一个，total为必写，通过size='small'控制迷你版；通过设置函数showTotal传参total来显示总条数其他参数同上</p>
        <Pagination size='small' total={50} /><br />
        <Pagination size='small' total={50} showSizeChanger showQuickJumper /><br />
        <Pagination size='small' total={50} showTotal={showTotal} /><br />
        <h1 className='h1'>6.简洁翻页</h1>
        <p>依据默认选中页defaultCurrent和总条数total来控制,其值均为number类型;通过设置simple布尔值来控制简洁模式</p>
        <Pagination simple defaultCurrent={2} total={500} />
        <h1 className='h1'>7.包含总数</h1>
        <p>依据默认选中页defaultCurrent，总条数total和每页数pageSize来控制,其值均为number类型；通过设置函数showTotal传参total来显示总条数</p>
        <Pagination showTotal={(total) => (`总 ${total} 条`)} defaultCurrent={2} total={5000} pageSize={50} showQuickJumper />











        {/* <Pagination showTotal={(total, range) => (`总共${total}条数据,${range[0]}-${range[1]}`)} defaultCurrent={2} total={5000} pageSize={50} showQuickJumper /> */}
        {/* <h1 className='h1'>上一页和下一页</h1>
        <Pagination defaultCurrent={2} total={5000} itemRender={itemRender} /> */}
      </div>
    )
  }
}
