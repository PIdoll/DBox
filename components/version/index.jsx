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
            <h2>0.2.8</h2>
            <p >2019-12-26</p>
            <p>🐞 修复 设置format设为<code>HH:mm</code> 时，时间面板秒的一列会空白一列。</p>
            <p>🐞 修复 API <code>allowEmpty</code> 无清除效果的问题。</p>
            <p>🐞 修复 table带选择框选中所在行背景无变化</p>
            <p>🐞 修复 table带选择框选中所在行背景无变化</p>
            <p>🐞 移除 Form <code>hideRequiredMark</code></p>
            <p>🐞 修复 Cascader禁用文字样式看不清</p>
            <p>🐞 修复 Calendar禁用文字样式看不清</p>
            <p>🐞 移除 Modal头部，底部多余的margin</p>
            <p>🐞 修复 menu在禁用条件下<code>hover</code>状态不正确、顶部导航高度写死问题</p>

            <p>🐞 修复 DatePicker组件中format属性为数组时，PropType数组校验报错</p>
            <p>🛠 新增Table columns的显隐API <code>hidden</code></p>
            <p>🐞 修复 Badge必须在最顶层添加state，类名才能生效</p>
          </Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
export default Version;
