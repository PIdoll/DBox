import React from 'react';
import {Tabs} from 'components';
const TabPane = Tabs.TabPane;
function callBack () {
  console.log('onChange切换面板')
}
export default class BasicTabs extends React.Component {
  render() {
    return (
      <div>
        <Tabs animated={false} defaultActiveKey='1' forceRender onChange={callBack}>
          <TabPane tab='选项一' key='1'>选项一</TabPane>
          <TabPane disabled tab='选项二' key='2'>选项二</TabPane>
          <TabPane tab='选项三' key='3'>选项三</TabPane>
        </Tabs>
      </div>
    )
  }
}
