import React from 'react';

import Collapse from 'components/collapse';


const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text1 = `可以同时展开多个面板，这个例子默认展开了第一个。`
const text2 = `同时只能展开一个面板，这个例子默认展开了第二个。`
const text3 = `一套没有边框的简洁样式。`
const text4 = `一套拥有底纹的折叠样式。`
const text5 = `这里是嵌套折叠面板。`
export default () => (
  <div id='main-container'>
    <h1 className='h1'>折叠面板</h1>
    <h3>测试场景API defaultActiveKey默认展开的面板（数组） onChange面板折叠后的回调函数 header面板头部内容（字符串） key面板的唯一值（字符串） disabled禁用面板（布尔值）</h3>
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header='标题一' key='1' >
        <p>{text1}</p>
      </Panel>
      <Panel header='标题二' key='2'>
        <p>{text1}</p>
      </Panel>
      <Panel header='标题三' key='3' disabled>
        <p>{text1}</p>
      </Panel>
    </Collapse>
    <h1 className='h1'>手风琴</h1>
    <h3>测试场景API accordion添加手风琴效果（布尔值） defaultActiveKey默认展开的面板（数组） onChange面板折叠后的回调函数 header面板头部内容（字符串） key面板的唯一值（字符串）</h3>
    <Collapse accordion defaultActiveKey={['2']} onChange={callback}>
      <Panel header='标题一' key='1' >
        <p>{text2}</p>
      </Panel>
      <Panel header='标题二' key='2'>
        <p>{text2}</p>
      </Panel>
      <Panel header='标题三' key='3'>
        <p>{text2}</p>
      </Panel>
    </Collapse>
    <h1 className='h1'>嵌套面板</h1>
    <h3>测试场景API accordion添加手风琴效果（布尔值） forceRender隐藏时不渲染DOM结构（布尔值）defaultActiveKey默认展开的面板（数组） onChange面板折叠后的回调函数 header面板头部内容（字符串） key面板的唯一值（字符串）</h3>
    <Collapse defaultActiveKey={['3']} onChange={callback}>
      <Panel header='标题一' key='1' >
        <Collapse accordion>
          <Panel header='次标题一' key='1.1' >
            <p>{text5}</p>
          </Panel>
          <Panel header='次标题二' key='1.2' >
            <p>{text5}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header='标题二' key='2'>
        <Collapse accordion defaultActiveKey={['2.1']}>
          <Panel forceRender header='次标题一' key='2.1' >
            <p>{text5}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header='标题三' key='3'>
        <Collapse accordion>
          <Panel header='次标题一' key='3.1' >
            <p>{text5}</p>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
    <h1 className='h1'>简洁风格</h1>
    <h3>测试场景API defaultActiveKey默认展开的面板（数组） bordered去除外边框（布尔值） header面板头部内容（字符串） key面板的唯一值（字符串）</h3>
    <Collapse defaultActiveKey={['2']} bordered={false}>
      <Panel header='标题一' key='1'>
        {text3}
      </Panel>
      <Panel header='标题二' key='2'>
        {text3}
      </Panel>
      <Panel header='标题三' key='3'>
        {text3}
      </Panel>
    </Collapse>
    <h1 className='h1'>底纹样式</h1>
    <h3>测试场景API bgColor底纹效果（布尔值） defaultActiveKey默认展开的面板（数组） header面板头部内容（字符串） key面板的唯一值（字符串）</h3>
    <Collapse bgColor defaultActiveKey={['2']}>
      <Panel header='标题一' key='1'>
        <p>{text4}</p>
      </Panel>
      <Panel header='标题二' key='2'>
        <p>{text4}</p>
      </Panel>
      <Panel header='标题三' key='3'>
        <p>{text4}</p>
      </Panel>
    </Collapse>
  </div>
			)


