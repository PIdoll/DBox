import React from 'react';
import BasicTimeline from './BasicTimeline';
import SortTimeline from './SortTimeline';
import IconTimeline from './IconTimeline';

export default class Timeline extends React.Component {
  handleOnClick = () => {
    console.log('click');
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本用法</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）测试时间轴显示是否正常
        </h2>
        <BasicTimeline />

        <h1 className='h1'>2.排序及进行中</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置pending属性，测试最后一个节点是否存在内容
          2）设置reverse属性，测试是否能进行节点排序
        </h2>
        <SortTimeline />

        <h1 className='h1'>3.自定义图标</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置color属性，测试圆圈颜色是否可以改变
          2) 设置dot属性，测试时间轴点的否可以改变
        </h2>
        <IconTimeline />
      </div>
    )
  }
}
