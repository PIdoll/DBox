import React from 'react';
import BasicPopconfirm from './BasicPopconfirm'
import TwelveDirectionPopconfirm from './TwelveDirectionPopconfirm';
import ConditionPopconfirm from './ConditionPopconfirm';

export default class Popconfirm extends React.Component {
    render() {
        return (
          <div id='main-container' style={{paddingLeft: '200px'}}>
            <h1 className='h1'>1.基本用法</h1>
            <h2 className='h2'>
                测试场景: <br />
                1）设置onConfirm、onCancel函数,title、okText和cancelText，测试是否正常
                2）设置okType为text,测试按钮是否正常显示
                3) 设置icon属性，测试提示框icon是否变化
            </h2>
            <div id='popconfirm' style={{marginLeft: '100px'}}>
              <BasicPopconfirm />
            </div>

            <h1 className='h1'>2.12个方向</h1>
            <h2 className='h2'>
                测试场景: <br />
                1）设置placement属性为12个方向，测试是否正常
            </h2>
            <div id='popconfirm' style={{marginLeft: '100px'}}>
              <TwelveDirectionPopconfirm />
            </div>

            <h1 className='h1'>3.条件删除</h1>
            <h2 className='h2'>
                测试场景: <br />
                1）设置visible和onVisibleChanget属性，测试是否能控制点击删除时是否显示提示信息
            </h2>
            <div id='popconfirm' style={{marginLeft: '100px'}}>
              <ConditionPopconfirm />
            </div>
          </div>
        )
    }
}
