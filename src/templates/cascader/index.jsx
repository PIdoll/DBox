import React from 'react';
import BasicCascader from './BasicCascader';
import DefaultCascader from './DefaultCascader';
import ExpandHoverCascader from './ExpandHoverCascader';
import LoadingCascader from './LoadingCascader';
import SearchCascader from './SearchCascader';
import SizeCascader from './SizeCascader';

export default class InputNumber extends React.Component {
  render () {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>
          测试场景:<br />
          1) 使用options添加可选项数据源<br />
          2）onChange当输入框数据改变的时候触发<br />
          3) onFocus自动获取焦点<br />
          4) changeOnSelect字段实现选择一个节点就将其显示在选择框中
        </h2>
        <BasicCascader />

        <h1 className='h1'>默认值</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用defaultValue显示默认的显示值<br />
          2) 使用popupVisible将下拉选项一直显示<br />
          3) 使用popupClassName指定popup的类名<br />
          4）使用onPopupvisibleChange指定popup状态的回调<br />
          5）使用diabled在数据中指定需要禁用的数据
        </h2>
        <DefaultCascader />

        <h1 className='h1'>移入展开</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用expandTrigger指定popup是点击还是悬浮出现下一级数据
        </h2>
        <ExpandHoverCascader />

        <h1 className='h1'>三种尺寸</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用Size字段指定输入框的大小，可选large、default、small
        </h2>
        <SizeCascader />

        <h1 className='h1'>动态加载选项</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）loadData字段实现动态加载数据选项
        </h2>
        <LoadingCascader />

        <h1 className='h1'>搜索</h1>
        <h2 className='h2'>
          测试场景:<br />
          1) 使用showSearch直接搜索选项并选择
        </h2>
        <SearchCascader />
      </div>
    )
  }
}
