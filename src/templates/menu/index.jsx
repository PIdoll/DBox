import React from 'react';
import AccordionMenus from './AccordionMenus';
import DynamicSiderNav from './DynamicSiderNav';
import EmbeddedSideNav from './EmbeddedSideNav';
import TopMenu from './TopMenu';


export default class MenuDemo extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>顶部导航</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API theme主题(string)<br />
          2）测试API mode菜单类型(string)<br />
          3）测试API key子菜单的唯一值(string)<br />
          4）测试API disabled子菜单禁用(bool)<br />
          5）测试API onSelect选中时调用(function)<br />
          6）测试API onClick点击子菜单调用的函数(function)<br />
          7）测试API selectedKeys选中的菜单项key数组(array)<br />
          8）测试API subMenuCloseDelay用户鼠标离开子菜单后关闭延时(num)<br />
          9）测试API subMenuCloseDelay用户鼠标离开子菜单后关闭延时(num)<br />
          10）测试API forceSubMenuRender在子菜单展示之前就渲染进DOM(bool)<br />
        </h2>
        <TopMenu />
        <br />
        <h1 className='h1'>手风琴菜单</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API multiple多选(bool)<br />
          2）测试API theme主题(string)<br />
          3）测试API mode菜单类型(string)<br />
          4）测试API key子菜单的唯一值(string)<br />
          5）测试API disabled子菜单禁用(bool)<br />
          6）测试API onSelect选中时调用(function)<br />
          7）测试API onDeselect取消选中时调用(function)<br />
          8）测试API onClick点击子菜单调用的函数(function)<br />
          9）测试API defaultSelectedKeys默认选中菜单的key值(array)<br />
          10）测试API subMenuCloseDelay用户鼠标离开子菜单后关闭延时(num)<br />
          11）测试API subMenuCloseDelay用户鼠标离开子菜单后关闭延时(num)<br />
          12）测试API forceSubMenuRender在子菜单展示之前就渲染进DOM(bool)<br />
        </h2>
        <AccordionMenus />
        <br />
        <h1 className='h1'>内嵌菜单</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API theme主题(string)<br />
          2）测试API mode菜单类型(string)<br />
          3）测试API key子菜单的唯一值(string)<br />
          4）测试API selectable是否允许选中(bool)<br />
          5）测试API onSelect选中时调用(function)<br />
          6）测试API onClick点击子菜单调用的函数(function)<br />
          7）测试API defaultOpenKeys初始展开的SubMenu菜单项key数组(array)<br />
        </h2>
        <EmbeddedSideNav />
        <br />
        <h1 className='h1'>动态侧栏导航</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API theme主题(string)<br />
          2）测试API mode菜单类型(string)<br />
          3）测试API key子菜单的唯一值(string)<br />
          4）测试API onClick点击子菜单调用的函数(function)<br />
          5）测试API defaultSelectedKeys默认选中菜单的key值(array)<br />
        </h2>
        <DynamicSiderNav />
        <br />
      </div>
    )
  }
}
