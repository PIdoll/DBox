import React from 'react';
import Timeline from 'components/timeline/index';
import Icon from '../../components/icon/index';
import Button from 'components/button';

export default class TimeLineView extends React.Component {
  state = {
    reverse: false,
  }

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  }

  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>
          基本的时间轴
        </h1>
        <Timeline>
          <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
          <Timeline.Item>开发 2018-12-01</Timeline.Item>
          <Timeline.Item>测试 2015-12-15</Timeline.Item>
          <Timeline.Item>上线 2015-12-21</Timeline.Item>
        </Timeline>

        <h1 className='h1'>
          进行中及排序
        </h1>
        <div>
          <Timeline pending='上线...' reverse={this.state.reverse} >
            <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
            <Timeline.Item>开发 2018-12-01</Timeline.Item>
            <Timeline.Item>测试 2015-12-15</Timeline.Item>
          </Timeline>
          <Button type='primary' style={{ marginTop: 16 }} onClick={this.handleClick}>转换顺序</Button>
        </div>


        <h1 className='h1'>
          自定义图标
        </h1>
        <Timeline>
          <Timeline.Item>需求评审 2018-11-21</Timeline.Item>
          <Timeline.Item>开发 2018-12-01</Timeline.Item>
          <Timeline.Item dot={<Icon type='pro-sync' style={{ fontSize: '16px', color: 'red' }} />} >测试 2015-12-15</Timeline.Item>
          <Timeline.Item>上线 2015-12-21</Timeline.Item>
        </Timeline>

        {/* <h1 className='h1'>
          最后一个
        </h1>
        <Timeline pending={<a href='#'>查看更多</a>}>
          <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
          <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
          <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
        </Timeline> */}
      </div>
    )
  }
}
