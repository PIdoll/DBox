
import React from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;
const text3 = `一套没有边框的简洁样式。`
function callback(key) {
  console.log(key);
}
export default class ConciseCollapse extends React.Component {
  render() {
    return (
      <Collapse defaultActiveKey={['2']} bordered={false} onChange={callback}>
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
    )
  }
}
