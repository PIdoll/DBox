import React from 'react';
import {Tabs} from 'components';
const TabPane = Tabs.TabPane;
export default class CardTabs extends React.Component {
  render() {
    return (
      <div>
        <Tabs type='card'>
          <TabPane tab='分页一' key='25'>
            <p>分页内容一</p>
            <p>分页内容一</p>
            <p>分页内容一</p>
          </TabPane>
          <TabPane tab='分页二' key='26'>
            <p>分页内容二</p>
            <p>分页内容二</p>
            <p>分页内容二</p>
          </TabPane>
          <TabPane tab='分页三' key='27'>
            <p>分页内容三</p>
            <p>分页内容三</p>
            <p>分页内容三</p>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
