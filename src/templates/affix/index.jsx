import React from 'react';
import BottomAffix from './BottomAffix';
import TopAffix from './TopAffix';
import ContainerAffix from './ContainerAffix';
import FeedbackAffix from './FeedbackAffix';

export default class Affix extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>固定在头部</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）添加API中的offsetTop参数，将子元素固定在顶部。默认情况就是该场景
        </h2>
        <TopAffix />
        <h1 className='h1'>固定到底部</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）添加API中的offsetBottom参数，将子元素固定在底部
        </h2>
        <BottomAffix />
        <h1 className='h1'>在容器中固定</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）测试target字段，给定固定容器，让其在顶部固定。
        </h2>
        <ContainerAffix />
        <h1 className='h1'>触发回调函数</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）添加API中的onChange参数，到达触发点自动调用回调函数
        </h2>
        <FeedbackAffix />
      </div>
    )
  }
}
