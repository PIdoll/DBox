import React from 'react';

import Button from 'components/button';
import Icon from 'components/icon';

const ButtonGroup = Button.Group;

export default class ButtonView extends React.Component {
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
        <Button type='default'>默认</Button>&nbsp;&nbsp;
        <Button type='primary'>主要</Button>&nbsp;&nbsp;
        <Button type='secondary'>次要</Button>&nbsp;&nbsp;
        <Button disabled>禁止</Button>&nbsp;&nbsp;
        <Button type='dashed'>虚线</Button>&nbsp;&nbsp;
        <Button type='danger'>危险</Button>&nbsp;&nbsp;
        <br />

        <h1 className='h1'>2.文字按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1) 设置text属性，测试是否为文字按钮，并且测试hover、pressed、active场景下的样式
        </h2>
        <Button type='default' text>默认</Button>&nbsp;&nbsp;
        <Button type='secondary' text>主要</Button>&nbsp;&nbsp;
        <br />

        <h1 className='h1'>3.按钮尺寸</h1>
        <h2 className='h2'>
          测试场景: <br />
          1) 更改size属性为small、不传、large,对比font-size,padding,按钮高度等
        </h2>
        <Button type='primary' size='small'>按钮</Button>&nbsp;&nbsp;
        <Button type='primary'>按钮</Button>&nbsp;&nbsp;
        <Button type='primary' size='large'>按钮</Button>
        <br /><br />

        <h1 className='h1'>4.跳转按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置href为链接地址，测试点击是否能跳转<br />
          2) 更改target属性为 _blank 或者 _self 分别跳转新页面和本页面
        </h2>
        <Button type='secondary' href='http://www.baidu.com' >默认本页面</Button>&nbsp;&nbsp;
        <Button type='secondary' href='http://www.baidu.com' target='_blank'>新页面</Button>
        &nbsp;&nbsp;
        <Button type='secondary' href='http://www.baidu.com' target='_self'>本页面</Button>&nbsp;&nbsp;

        <h1 className='h1'>5.图标按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)更改size属性为small、不传、large,对比font-size,padding,icon高度,按钮高度等<br />
          2)按钮hover下查看icon颜色是否变化<br />
          3)更改shape属性为circle、square看按钮形状是否变化<br />
          4)更改iconLocation为right和其它情形，测试图标位置是否更改
        </h2>
        <Button icon='delete' size='small'>图标</Button>&nbsp;&nbsp;
        <Button icon='delete'>图标</Button>&nbsp;&nbsp;
        <Button icon='delete' size='large'>图标</Button>&nbsp;&nbsp;
        <br /><br />

        <Button icon='down' size='small'>图标</Button>&nbsp;&nbsp;
        <Button icon='down' >图标</Button>&nbsp;&nbsp;
        <Button icon='down' size='large'>图标</Button>&nbsp;&nbsp;
        <br /><br />

        <Button icon='delete' size='small' shape='circle' />&nbsp;&nbsp;
        <Button icon='delete' shape='circle' />&nbsp;&nbsp;
        <Button icon='delete' size='large' shape='circle' />&nbsp;&nbsp;
        <br /><br />

        <Button icon='delete' shape='square' size='small' />&nbsp;&nbsp;
        <Button icon='delete' shape='square' />&nbsp;&nbsp;
        <Button icon='delete' shape='square' size='large' />&nbsp;&nbsp;

        <br /><br />
        <Button icon='down' iconLocation='right' size='small'>图标</Button>&nbsp;&nbsp;
        <Button icon='down' iconLocation='right' >图标</Button>&nbsp;&nbsp;
        <Button icon='down' iconLocation='right' size='large'>图标</Button>&nbsp;&nbsp;
        <br /><br />

        <Button loading iconLocation='right' size='small' >加载中</Button>&nbsp;&nbsp;
        <Button loading iconLocation='right' >加载中</Button>&nbsp;&nbsp;
        <Button loading iconLocation='right' size='large' >加载中</Button>&nbsp;&nbsp;

        <h1 className='h1'>6.幽灵按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置ghost属性，测试是否为幽灵按钮<br />
          2)设置ghost属性，并且设置type为primary、dashed、danger，测试幽灵按钮是否正常<br />
          3)设置ghost属性，并且设置disabled，测试幽灵按钮是否正常
        </h2>
        <div className='youling'>
          <Button ghost>默认</Button>&nbsp;&nbsp;
          <Button type='primary' ghost>重要</Button>&nbsp;&nbsp;
          <Button type='dashed' ghost>虚线</Button>&nbsp;&nbsp;
          <Button type='danger' ghost>危险</Button>&nbsp;&nbsp;
          <Button disabled ghost>禁用</Button>
        </div>
        <br />
        <br />

        <h1 className='h1'>7.block按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置block属性，测试按钮是否为其为其父宽度
        </h2>
        <div style={{ width: 600 }}>
          <Button type='primary' block>主要</Button>
          <br />
          <br />
          <Button block>默认</Button>
        </div>

        <h1 className='h1'>8.组合按钮</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)多个Button按钮被ButtonGroup包裹，测试按钮是否正确组合，注意想接处的不要有border-radius
        </h2>
        <ButtonGroup>
          <Button>取消</Button>
          <Button>确定</Button>
        </ButtonGroup>
        <br />
        <br />

        <ButtonGroup>
          <Button >选择1</Button>
          <Button >选择2</Button>
          <Button >选择3</Button>
        </ButtonGroup>
        <br />
        <br />

        <ButtonGroup>
          <Button>
            <Icon type='left-circle-o' />向后
          </Button>
          <Button>
            向前<Icon type='right-circle-o' />
          </Button>
        </ButtonGroup>


        <h1 className='h1'>9.onclick事件</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）点击按钮测试是否能监听onClick事件
        </h2>

        <Button type='primary' onClick={this.handleOnClick}>默认</Button>
        <br />
      </div>
    )
  }
}
