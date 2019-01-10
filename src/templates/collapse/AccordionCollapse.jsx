import React from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;
const text2 = `同时只能展开一个面板，这个例子默认展开了第二个。`
function callback(key) {
  console.log(key);
}
export default class AccordionCollapse extends React.Component {
  render() {
    return (
      <Collapse accordion activeKey={['1']} defaultActiveKey={['2']} onChange={callback}>
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
    )
  }
}
