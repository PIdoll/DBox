import React from 'react';
import Timeline from 'components/timeline/index';
import Icon from '../../components/icon/index';

export default class TimeLineView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>
          基本的时间轴
        </h1>
        <Timeline>
          <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
          <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
          <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
          <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
        </Timeline>

        <h1 className='h1'>
          圆圈颜色
        </h1>
        <Timeline>
          <Timeline.Item color='green'>创建服务现场 2015-09-01</Timeline.Item>
          <Timeline.Item color='green'>创建服务现场 2015-09-01</Timeline.Item>
          <Timeline.Item color='red'>
            <p>初步排除网络异常1</p>
            <p>初步排除网络异常2</p>
            <p>初步排除网络异常3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>技术测试异常1</p>
            <p>技术测试异常2</p>
            <p>技术测试异常3 2015-09-01</p>
          </Timeline.Item>
        </Timeline>

        <h1 className='h1'>
          自定义时间轴点
        </h1>
        <Timeline>
          <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
          <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type='check-circle-o' style={{ fontSize: '16px' }} />} color='red'>技术测试异常 2015-09-01</Timeline.Item>
          <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
        </Timeline>

        <h1 className='h1'>
          最后一个
        </h1>
        <Timeline pending={<a href='#'>查看更多</a>}>
          <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
          <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
          <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
