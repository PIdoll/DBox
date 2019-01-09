import React from 'react';
import BasicDemo from './BasicDemo';
import CustomClass from './CustomClass';
import LazyDemo from './LazyDemo';
import CustomTransferStyle from './CustomTransferStyle';

export default class Transfer extends React.Component {
  render() {
    const styleObj = {
      marginBottom: 40
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>基本使用</h1>
          <h2 className='h2'>最基本的用法，展示了disabled、titles、 dataSource、targetKeys、每行的渲染函数 render 以及回调函数 onChange onSelectChange onScroll 的用法。</h2>

          <BasicDemo />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>自定义类</h1>
          <h2 className='h2'>可自定义类，控制容器的样式</h2>

          <CustomClass />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>自定义两个穿梭框的样式</h1>
          <h2 className='h2'>如果默认的穿梭框的样式不能满足UI，则通过listStyle配置</h2>

          <CustomTransferStyle />
        </div>
        <div style={styleObj}>
          <h1 className='h1'>懒加载</h1>
          <h2 className='h2'>Transfer 使用了 react-lazy-load 优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。</h2>

          <LazyDemo />
        </div>

      </div>
    )
  }
}
