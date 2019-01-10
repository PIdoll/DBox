import React from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;
const text4 = `一套拥有底纹的折叠样式。`
function callback(key) {
  console.log(key);
}
export default class ShadingCollapse extends React.Component {
  render() {
    return (
      <Collapse bgColor onChange={callback}>
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
    )
  }
}

