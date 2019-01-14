import React from 'react';
import BasicAnchorDemo from './BasicAnchorDemo';
import SkewingAnchorDemo from './SkewingAnchorDemo';

export default class Anchor extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、基本用法</h1>
          <h2 className='h2'>getContainer:该属性可以指定锚点滚动的容器</h2>
          <h2 className='h2'>onClick:该属性可以在点击锚点时触发</h2>
          <h2 className='h2'>Link中的href和title属性分别指的是锚点链接和锚点内容</h2>

          <BasicAnchorDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>二、自定义偏移量</h1>
          <h2 className='h2'>offsetBottom：距离窗口底部达到指定偏移量后触发</h2>
          <h2 className='h2'>offsetTop：距离窗口顶部达到指定偏移量后触发</h2>
          <h2 className='h2'>bounds：该属性可设置锚点区域边界</h2>

          <SkewingAnchorDemo />
        </div>
      </div>
    )
  }
}
