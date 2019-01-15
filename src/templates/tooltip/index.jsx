import React from 'react';
import BasicTooltip from './BasicTooltip';
import TwelveDirectionTooltip from './TwelveDirectionTooltip';
import ArrowPointTooltip from './ArrowPointTooltip';

export default class Tooltip extends React.Component {
    render() {
        return (
          <div id='main-container' style={{paddingLeft: '200px'}}>
            <h1 className='h1'>1.基本用法</h1>
            <h2 className='h2'>
                测试场景: <br />
                1）设置title属性，测试鼠标移入后时否会提示相应文字
                2）设置mouseEnterDelay、mouseLeaveDelay属性，控制鼠标移入和移出时提示框显示和隐藏
                3）设置trigger属性，控制触发行为
                4）设置鼠标移入移出的触发函数onVisibleChange，测试鼠标移入移出时是否调用
            </h2>
            <BasicTooltip />

            <h1 className='h1'>2.12个方向</h1>
            <h2 className='h2'>
                测试场景: <br />
                1）设置placement属性，测试提示文字方向是否会改变
            </h2>
            <TwelveDirectionTooltip />

            <h1 className='h1'>3.箭头指向</h1>
            <h2 className='h2'>
                测试场景: <br />
                1）设置arrowPointAtCenter属性，测试提示文字方向是否指向中心
            </h2>
            <ArrowPointTooltip />
          </div>
        )
    }
}
