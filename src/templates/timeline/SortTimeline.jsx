import React from 'react';
import Timeline from 'components/timeline';
import Button from 'components/button';
export default class SortTimeline extends React.Component {
    constructor() {
        super();
        this.state = {
          reverse: false,
        }
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({ reverse: !this.state.reverse });
      }

      render() {
        return (
          <div>
            <Timeline pending='上线...' reverse={this.state.reverse} >
              <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
              <Timeline.Item>开发 2018-12-01</Timeline.Item>
              <Timeline.Item>测试 2018-12-15</Timeline.Item>
            </Timeline>
            <Button type='primary' style={{ marginTop: 16 }} onClick={this.handleClick}>转换顺序</Button>
          </div>
        )
      }
}
