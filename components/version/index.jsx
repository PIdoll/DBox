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
            <p>🐞 移除 Form <code>hideRequiredMark。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/477'>#477</a></code></p>
            <p>🐞 修复 Calendar禁用文字样式看不清。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/475'>#475</a></p>
            <p>🐞 修复 Cascader禁用文字样式看不清。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/476'>#476</a></p>
            <p>🐞 移除 Modal头部，底部多余的margin。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/470'>#470</a></p>
            <p>🛠 新增Table columns的显隐API <code>hidden</code>。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/485'>#485</a></p>
            <p>🐞 修复 table带选择框选中所在行背景无变化。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/484'>#484</a></p>
            <p>🐞 修复 API <code>allowEmpty</code> 无清除效果的问题。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/476'>#486</a></p>
            <p>🐞 修复 Badge必须在最顶层添加state，类名才能生效。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/474'>#474</a></p>
            <p>🐞 修复 Select disabled 为true 时字体颜色和背景颜色一致 。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/490'>#490</a></p>
            <p>🐞 修复 设置format设为<code>HH:mm</code> 时，时间面板秒的一列会空白一列。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/487'>#487</a></p>
            <p>🐞 修复 DatePicker组件中format属性为数组时，PropType数组校验报错。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/478'>#478</a></p>
            <p>🐞 修复 menu在禁用条件下<code>hover</code>状态不正确、顶部导航高度写死问题。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/482'>#482</a></p>
          </Timeline.Item>
          <Timeline.Item >
            <h2>0.2.9</h2>
            <p >2020-01-16</p>
            <p>📢 更新 组件官网首页。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/506'>#506</a></p>
            <p>🐞 修复 Table组件排序图标过小。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/497'>#497</a></p>
            <p>🐞 修复 Tag组件cursor: pointer场景。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/507'>#507</a></p>
            <p>🐞 修复 Affix组件无法固定在容器顶部。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/517'>#517</a></p>
            <p>🐞 修复 Dropdown组件<code>disabled</code>属性。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/510'>#510</a></p>
            <p>🐞 修复 Badge组件设置和显示数字不一致。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/498'>#498</a></p>
            <p>🐞 修复 Steps组件竖直场景下步骤图标距离。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/511'>#511</a></p>
            <p>🐞 修复 Calendar日历组件切换日期箭头颜色。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/500'>#500</a></p>
            <p>💄 优化 Modal组件 confirm场景下组件样式统一。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/496'>#496</a></p>
            <p>🛠 新增 Radio组件只读API readOnly <code>hidden</code>。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/516'>#516</a></p>
            <p>🛠 新增 Checkbox组件只读API readOnly <code>hidden</code>。<a target='_blank' href='https://github.com/PIdoll/DBox/pull/505'>#505</a></p>
          </Timeline.Item>
        </Timeline>
      </div>
    )
  }
}
export default Version;
