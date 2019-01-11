import React from 'react';
import BasicBadge from './BasicBadge';
import ChangeBadge from './ChangeBadge';
import ClickBadge from './ClickBadge';
import DotBadge from './DotBadge';
import IndependentBadge from './IndependentBadge';
import OverflowBadge from './OverflowBadge';
import StateBadge from './StateBadge';

export default class BadgeView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1>基本徽标展示</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API count展示的数值和dot同时设置时无效(number)<br />
          2）测试API overflowCount展示封顶的数字或字符串(string)<br />
        </h2>
        <BasicBadge />
        <br />
        <h1>独立使用</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API count展示的数值和dot同时设置时无效(number)<br />
          2）测试API overflowCount展示封顶的数字或字符串(string)<br />
        </h2>
        <IndependentBadge />
        <br />
        <h1>封顶数字</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API count展示的数值和dot同时设置时无效(number)<br />
          2）测试API overflowCount展示封顶的数字或字符串(string)<br />
        </h2>
        <OverflowBadge />
        <br />
        <h1>
          讨嫌的小红点
        </h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API count展示的数值和dot同时设置时无效(number)<br />
          2）测试API type图标类型,设置后观察图标的变化(string)<br />
          3）测试API dot不展示数字，默认只有一个小红点(bool)<br />
          4）测试API status和dot搭配使用，在设置dot的前提下有效，设置Badge的状态点,观察小点的颜色(string(success,processing,default,error,warning))<br />
        </h2>
        <DotBadge />
        <br />
        <h1>可点击</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API count展示的数值和dot同时设置时无效(number)<br />
        </h2>
        <ClickBadge />
        <br />
        <h1>状态点</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API text状态点的文本内容(string)<br />
          2）测试API status和dot搭配使用，在设置dot的前提下有效，设置Badge的状态点，观察小点的颜色(string(success,processing,default,error,warning))<br />
        </h2>
        <StateBadge />
        <br />
        <h1>动态</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API count展示的数值和dot同时设置时无效(number)<br />
          2）测试API showZero当数值为0时，是否展示Badge(bool)<br />
          3）测试API offset设置状态点的位置偏移,设置后观察组件时候移动,格式为 [x, y](array)<br />
        </h2>
        <ChangeBadge />
        <br />
      </div>
    )
  }
 }
