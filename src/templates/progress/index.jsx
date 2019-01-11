import React from 'react';

import AutoProgress from './AutoProgress';
import CircleProgress from './CircleProgress';
import CustomizeCircle from './CustomizeCircle';
import LineCircle from './LineProgress';
import SmallCircleProgress from './SmallCircleProgress';
import SmallLineProgress from './SmallLineProgress';

export default class Progress extends React.Component {
  render() {
    return (
      <div id='main-container' >
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）调用type接口指定进度条的类型，可选参数有line、circle
          2）调用status接口可设置进度条的状态，可选值有normal、active、exception、success参数
        </h2>
        <LineCircle />

        <h1 className='h1'>迷你线条进度条</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）指定size接口可以实现迷你进度条
        </h2>
        <SmallLineProgress />

        <h1 className='h1'>圆形进度条</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）指定type接口为circle<br />
          2) 指定strokeWidth可以调整边框的宽度
        </h2>
        <CircleProgress />

        <h1 className='h1'>迷你圆形进度条</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）指定size接口为small，并设置width
        </h2>
        <SmallCircleProgress />

        <h1 className='h1'>动态进度条</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）点击按钮可以同步动态显示进度更新过程
        </h2>
        <AutoProgress />
        <h1 className='h1'>自定义圆形进度条</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）调用format接口并指定一个模板函数来实现自定义内容展示
        </h2>
        <CustomizeCircle />
      </div>
    )
  }
}
