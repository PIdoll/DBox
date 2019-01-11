import React from 'react';
import BasicTabs from './BasicTabs';
import CardTabs from './CardTabs';
import CaseTabs from './CaseTabs';
import DynTabs from './DynTabs';
import IconTabs from './IconTabs';
import MountTabs from './MountTabs';
import PositionTabs from './PositionTabs';


export default class TabsView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本用法和禁用</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultActiveKey初始化选中面板的 key，如果没有设置 activeKey(string)<br />
          1）测试API animated是否使用动画切换 Tabs，在 tabPosition=top/bottom 时有效(bool)<br />
          1）测试API tab选项卡头显示文字(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
          1）测试API disabled禁用当前面板(bool)<br />
          1）测试API forceRender被隐藏时是否渲染 DOM 结构(bool)<br />
          1）测试API onChange切换面板的回调(function)<br />
        </h2>
        <BasicTabs />
        <br />
        <h1 className='h1'>2.有图标的标签</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultActiveKey初始化选中面板的 key，如果没有设置 activeKey(string)<br />
          1）测试API tab选项卡头显示文字(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
          1）测试API disabled禁用当前面板(bool)<br />
        </h2>
        <IconTabs />
        <br />
        <h1 className='h1'>3.tab页上下，左右滑动</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultActiveKey初始化选中面板的 key，如果没有设置 activeKey(string)<br />
          1）测试API tab选项卡头显示文字(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
          1）测试API disabled禁用当前面板(bool)<br />
          1）测试API forceRender tab bar 上额外的元素(any)<br />
          1）测试API tabBarStyle tab bar 的样式对(object)<br />
          1）测试API forceRender被隐藏时是否渲染 DOM 结构(bool)<br />
          1）测试API onNextClick next 按钮被点击的回调(function)<br />
          1）测试API onPrevClick pre 按钮被点击的回调(function)<br />
          1）测试API onTabClick tab 按钮被点击的回调(function)<br />
          1）测试API tabPosition页签位置，可选值有 top right bottom left(string)<br />
        </h2>
        <PositionTabs />
        <br />
        <h1 className='h1'>4.卡片式标签页容器</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API defaultActiveKey初始化选中面板的 key，如果没有设置 activeKey(string)<br />
          1）测试API tab选项卡头显示文字(string)<br />
          1）测试API type页签的基本样式，可选 line、card、editable-card、cardTabs 类型(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
        </h2>
        <CardTabs />
        <br />
        <h1 className='h1'>5.新增和关闭</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API activeKey当前激活 tab 面板的 key(string)<br />
          1）测试API tab选项卡头显示文字(string)<br />
          1）测试API hideAdd是否隐藏加号图标，在 type="editable-card" 时有效(bool)<br />
          1）测试API onEdit新增和删除页签的回调，在 type="editable-card" 时有效(function)<br />
          1）测试API type页签的基本样式，可选 line、card、editable-card、cardTabs 类型(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
        </h2>
        <DynTabs />
        <h1 className='h1'>6.卡片式容器</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API tab选项卡头显示文字(string)<br />
          1）测试API type页签的基本样式，可选 line、card、editable-card、cardTabs 类型(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
        </h2>
        <MountTabs />
        <h1 className='h1'>7.吸顶效果</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API tab选项卡头显示文字(string)<br />
          2）测试API key对应activeKey的唯一值(string)<br />
        </h2>
        <CaseTabs />
      </div>
    )
  }
}
