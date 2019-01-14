import React from 'react';
import Timeline from 'components/timeline'


export default class BasicTimeline extends React.Component {
    render() {
        return (
          <Timeline>
            <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
            <Timeline.Item>开发 2018-12-01</Timeline.Item>
            <Timeline.Item>测试 2018-12-15</Timeline.Item>
            <Timeline.Item>上线 2018-12-21</Timeline.Item>
          </Timeline>
        )
    }
}
