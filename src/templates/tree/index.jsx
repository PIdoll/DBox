import React from 'react';
import BasicTree from './BasicTree';
import MultipleSelectTree from './MultipleSelectTree';
import DraggableTree from './DraggableTree';
import SyncDataTree from './SyncDataTree';
import ControlTree from './ControlTree';

export default class Tree extends React.Component {
  render() {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.默认展开项为key值是‘0-0-0-0-0’和‘0-0-1’；<br />
          2.默认选中项为key值是‘0-0-0-0-1’；<br />
          3.onSelect是选项被选中调用的回调函数；<br />
          4.onCheck是复选框被选中后触发；<br />
          5.添加selectable设置树节点是否可以被选中
        </h2>
        <BasicTree />

        <h1 className='h1'>多选树</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.默认展开项为key值是‘0-0-0-0-0’和‘0-0-1’；<br />
          2.默认选中项为key值是‘0-0-0-0-1’；<br />
          3.onSelect是选项被选中调用的回调函数；<br />
          4.onCheck是复选框被选中后触发；<br />
          5.设置disabled可禁用整个节点和选择框；<br />
          6.设置checkabled可以选中多选框；<br />
          7.设置disabledCheckbox可禁用多选框；
        </h2>
        <MultipleSelectTree />

        <h1 className='h1'>可拖动树</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.dragable设置节点可拖动；<br />
          2.autoExpandParent设置是否展开父节点，设置默认展开的key值<br />
          3.onDragStart设置拖动开始的回调；<br />
          4.onDragEnter设置拖动触发时的回调；<br />
          5.onDrop设置在放开鼠标时触发的回调；<br />
          6.onDropOver设置拖拽进入目标区域触发的回调；<br />
          7.onDropEnds设置拖拽离开目标区域时会出发的回调；<br />
        </h2>
        <DraggableTree />

        <h1 className='h1'>可拖动树</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.使用loadData接口，返回一个Promise对象。使用定时器1秒刷新一次数据<br />
          2.使用renderTreeNode函数循环渲染出树节点，并返回。
        </h2>
        <SyncDataTree />

        <h1 className='h1'>受控操作示例</h1>
        <h2 className='h2'>
          测试场景:<br />
          1.onExpand接口是在我们展开或者关闭节点时触发<br />
          2.onCheck接口是我们点击复选框之后触发;<br />
          3.checkKey是默认勾选的复选框;<br />
          4.onSelect是点击树节点时触发;<br />
          5.selectKey是选中高亮的节点名称;
        </h2>
        <ControlTree />
      </div>
    )
  }
}
