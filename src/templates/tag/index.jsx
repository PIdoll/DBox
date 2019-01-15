import React from 'react';
import BasicTag from './BasicTag';
import ColorTag from './ColorTag';
import RemoveTag from './RemoveTag';
import HotTag from './HotTag';
import DynTag from './DynTag';

export default class SwitchView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API href链接跳转路径(string)<br />
          2）测试API target链接跳转方式必须和href同时设置(string)<br />
        </h2>
        <BasicTag />
        <br />
        <h1 className='h1'>多彩标签</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API color标签色(string)<br />
        </h2>
        <ColorTag />
        <br />
        <h1 className='h1'>可移除标签</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API color标签色(string)<br />
          2）测试API closable标签是否可以移除(bool)<br />
          2）测试API onClose关闭时的回调(function)<br />
        </h2>
        <RemoveTag />
        <br />
        <h1 className='h1'>热门标签</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API hot设置为热门标签(bool)<br />
          2）测试API checked设置标签的选中状态仅适用于hot和基本状态下(bool)<br />
        </h2>
        <HotTag />
        <br />
        <h1 className='h1'>动态添加和删除标签</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API tags热门话题的默认文本(array)<br />
          1）测试API id默认不可移除的标签的下标值(number)<br />
          1）测试API text动态增加标签的文本内容(string)<br />
          1）测试API iconType动态增加标签的Icon(string)<br />
        </h2>
        <DynTag />
        <br />
      </div>
        )
  }
}
