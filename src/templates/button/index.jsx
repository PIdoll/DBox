import React from 'react';
import BasicButton from './BasicButton';
import TextButton from './TextButton';
import SizeButton from './SizeButton';
import JumpButton from './JumpButton';
import IconButton from './IconButton';
import GhostButton from './GhostButton';
import BlockButton from './BlockButton';
import GroupButton from './GroupButton';
import OnClickButton from './OnClickButton';

export default class Button extends React.Component {
  handleOnClick = () => {
    console.log('click');
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本按钮类型</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）修改type属性为default、primary、secondary、dashed和danger，并且测试hover、pressed、active场景下的样式 <br />
          2) 设置disabled属性
        </h2>
        <BasicButton />

        <h1 className='h1'>2.文字按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1) 设置text属性，测试是否为文字按钮，并且测试hover、pressed、active场景下的样式
        </h2>
        <TextButton />

        <h1 className='h1'>3.按钮尺寸</h1>
        <h2 className='h2'>
          测试场景: <br />
          1) 更改size属性为small、不传、large,对比font-size,padding,按钮高度等
        </h2>
        <SizeButton />

        <h1 className='h1'>4.跳转按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置href为链接地址，测试点击是否能跳转<br />
          2) 更改target属性为 _blank 或者 _self 分别跳转新页面和本页面
        </h2>
        <JumpButton />

        <h1 className='h1'>5.图标按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)更改size属性为small、不传、large,对比font-size,padding,icon高度,按钮高度等<br />
          2)按钮hover下查看icon颜色是否变化<br />
          3)更改shape属性为circle、square看按钮形状是否变化<br />
          4)更改iconLocation为right和其它情形，测试图标位置是否更改
        </h2>
        <IconButton />

        <h1 className='h1'>6.幽灵按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置ghost属性，测试是否为幽灵按钮<br />
          2)设置ghost属性，并且设置type为primary、dashed、danger，测试幽灵按钮是否正常<br />
          3)设置ghost属性，并且设置disabled，测试幽灵按钮是否正常
        </h2>
        <GhostButton />

        <h1 className='h1'>7.block按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置block属性，测试按钮是否为其为其父宽度
        </h2>
        <BlockButton />

        <h1 className='h1'>8.组合按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)多个Button按钮被ButtonGroup包裹，测试按钮是否正确组合，注意想接处的不要有border-radius
        </h2>
        <GroupButton />

        <h1 className='h1'>9.onclick事件</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）点击按钮测试是否能监听onClick事件
        </h2>
        <OnClickButton />
      </div>
    )
  }
}
