import React from 'react';
import Badge from 'components/badge/index';
import Icon from '../../components/icon/index';

export default class BadgeView extends React.Component {
  render() {
    const content = {
      width: 42,
      height: 42,
      borderRadius: 6,
      background: '#eee',
      display: 'inline-block',
      marginLeft: 20
    }
    return (
      <div id='main-container'>
        <h1 className='h1'>
          简单的徽标展示
        </h1>
        <Badge count={5}>
          <a href='#' style={content} />
        </Badge>
        <h1 className='h1'>
          独立使用
        </h1>
        <Badge count={25} style={{ marginRight: '10px' }} />
        <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
        <Badge count={109} style={{ backgroundColor: '#87d068', marginLeft: '10px' }} />
        <h1 className='h1'>
          大数字
        </h1>
        <Badge count={99}>
          <a href='#' style={content} />
        </Badge>
        <Badge count={200}>
          <a href='#' style={content} />
        </Badge>
        <h1 className='h1'>
          讨嫌的小红点
        </h1>
        <Badge dot>
          <Icon type='delete' />
        </Badge>
        <Badge dot>
          <a href='#'>一个链接</a>
        </Badge>
      </div>
    )
  }
 }
