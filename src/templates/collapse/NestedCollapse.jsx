import React from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;
const text5 = `这里是嵌套折叠面板。`
function callback(key) {
  console.log(key);
}
export default class NestedCollapse extends React.Component {
  render() {
    return (
      <Collapse defaultActiveKey={['3']} onChange={callback}>
        <Panel header='标题一' key='1' >
          <Collapse accordion>
            <Panel header='次标题一' key='2' >
              <p>{text5}</p>
            </Panel>
            <Panel header='次标题二' key='22' >
              <p>{text5}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header='标题二' key='3'>
          <Collapse accordion defaultActiveKey={['4']}>
            <Panel header='次标题一' key='4' >
              <p>{text5}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header='标题三' key='5'>
          <Collapse accordion>
            <Panel header='次标题一' key='6' >
              <p>{text5}</p>
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
    )
  }
}
