import React from 'react';
import Timeline from '../timeline';
import './style';

/**
 * @visibleName 版本更新
 */
class Version extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reverse: true,
    }
  }
  render() {
    return (
      <div >
        <Timeline >
          <Timeline.Item >
            <h2>1.0.0</h2>
            <p >2018-10-12</p>
            <p>🐞 修复 Avatar 图标不能垂直居中的问题。</p>
            <p>🐞 修复会导致 Button 中的图标显示变小的问题。</p>
          </Timeline.Item>
          <Timeline.Item>
            <h2>主要变化</h2>
            <p>全新的色彩系统，组件主色由『#108EE9』改为『#1890FF』，新主色我们称之为『拂晓蓝』。</p>
            <p>全新的视觉样式和组件尺寸，更现代更美观。</p>
            <p>基础字体大小由 12px 增大到 14px。</p>
            <p>默认语言由中文改为英文。</p>
            <p>全面支持 React 16。</p>
            <p> 新的 Divider 组件。</p>
            <p>新增 30 个图标。</p>
          </Timeline.Item>
          <Timeline.Item>
            <h2>1.0.0</h2>
            <p >2018-10-12</p>
            <p>🐞 修复 Avatar 图标不能垂直居中的问题。</p>
            <p>🐞 修复会导致 Button 中的图标显示变小的问题。</p></Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
export default Version;
