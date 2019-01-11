import React from 'react';
import BasicSpinDemo from './BasicSpinDemo';
import DifferentSizeSpinDemo from './DifferentSizeSpinDemo';
import DelaySpinDemo from './DelaySpinDemo';
import CustomColorSpinDemo from './CustomColorSpinDemo';
import CustomDescriptSpinDemo from './CustomDescriptSpinDemo';
export default class Spin extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、简单的加载中</h1>
          <BasicSpinDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>二、三种不同大小的加载中</h1>
          <DifferentSizeSpinDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>三、延迟显示加载效果的时间（防止闪烁）、可通过spinning属性，控制是否为加载中状态</h1>
          <DelaySpinDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>四、自定义颜色</h1>
          <h2 className='h2'>如果背景色是深色，则可以自定义颜色</h2>
          <CustomColorSpinDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>五、自定义描述文案</h1>
          <CustomDescriptSpinDemo />
        </div>
      </div>
    )
  }
}
