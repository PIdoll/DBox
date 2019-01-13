import React from 'react';
import BasicDividerDemo from './BasicDividerDemo';
import VerticalDividerDemo from './VerticalDividerDemo';
import CustomStyleDividerDemo from './CustomStyleDividerDemo';
export default class Divider extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、水平分割线</h1>
          <h2 className='h2'>默认为水平分割线，可定义为虚线</h2>
          <BasicDividerDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>二、竖分割线</h1>
          <h2 className='h2'>可通过type属性，来设置分割线的展示类型</h2>
          <VerticalDividerDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>三、自定义分割线样式,也可通过样式类改变</h1>
          <CustomStyleDividerDemo />
        </div>
      </div>
    )
  }
}
