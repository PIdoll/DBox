import React from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;
const text1 = `可以同时展开多个面板，这个例子默认展开了第一个。`

export default class CurrentCollapse extends React.Component {
  render() {
    return (
      <Collapse activeKey={['1']} defaultActiveKey={['2']}>
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
    )
  }
}
