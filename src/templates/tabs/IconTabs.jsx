import React from 'react';
import {Tabs, Icon} from 'components';
const TabPane = Tabs.TabPane;
export default class IconTabs extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey='7'>
          <TabPane tab={<span><Icon type='bars' />选项一</span>} key='7'>
          选项一
          </TabPane>
          <TabPane disabled tab={<span><Icon type='appstore-o' />选项二</span>} key='8'>
          选项二
          </TabPane>
          <TabPane tab={<span><Icon type='detail' />选项三</span>} key='9'>
          选项三
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
