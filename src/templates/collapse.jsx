import React from 'react';

import Collapse from 'components/collapse';


const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden'
};

function callback(key) {
  console.log(key);
}

const text1 = `可以同时展开多个面板，这个例子默认展开了第一个。`
const text2 = `同时只能展开一个面板，这个例子默认展开了第二个。`
const text3 = `一套没有边框的简洁样式。`
const text4 = `一套没有边框的简洁样式。`
const text5 = `这里是嵌套折叠面板。`
export default () => (
  <div id='main-container'>
    <h1 className='h1'>折叠面板</h1>
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
    <Collapse defaultActiveKey={['3']} onChange={callback}>
      <Panel header='标题一' key='1' >
        <p>{text5}</p>
      </Panel>
      <Panel header='标题二' key='2'>
        <p>{text5}</p>
      </Panel>
      <Panel header='标题三' key='3'>
        <Collapse accordion defaultActiveKey={['3']}>
          <Panel header='标题一' key='3' >
            <p>{text5}</p>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
    <h1 className='h1'>简洁风格</h1>
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
    <h1 className='h1'>自定义</h1>
    <Collapse bordered={false}>
      <Panel header='标题一' key='1' style={customPanelStyle}>
        <p>{text4}</p>
      </Panel>
      <Panel header='标题二' key='2' style={customPanelStyle}>
        <p>{text4}</p>
      </Panel>
      <Panel header='标题三' key='3' style={customPanelStyle}>
        <p>{text4}</p>
      </Panel>
    </Collapse>
  </div>
			)


