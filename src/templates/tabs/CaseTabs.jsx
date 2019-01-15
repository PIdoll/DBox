import React from 'react';
import {Tabs} from 'components';
const TabPane = Tabs.TabPane;
export default class CaseTabs extends React.Component {
  render() {
    return (
      <Tabs type='cardTabs'>
        <TabPane tab='分页一' key='28'>
          <p>分页内容一</p>
          <p>分页内容一</p>
          <p>分页内容一</p>
        </TabPane>
        <TabPane tab='分页二' key='29'>
          <p>分页内容二</p>
          <p>分页内容二</p>
          <p>分页内容二</p>
        </TabPane>
        <TabPane tab='分页三' key='30'>
          <p>分页内容三</p>
          <p>分页内容三</p>
          <p>分页内容三</p></TabPane>
      </Tabs>
    )
  }
}
