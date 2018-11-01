import React from 'react';
import Badge from 'components/badge/index';
import Icon from '../../components/icon/index';

export default class BadgeView extends React.Component {
  render() {
    const content = {
      width: 64,
      height: 64,
      borderRadius: 4,
      background: '#eee',
      display: 'inline-block',
    }
    return (
      <div id='main-container'>
        <h1 className='h1'>
          简单的徽标展示
        </h1>
        <p>当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。</p>
        <Badge count={5} offset={[50, 50]}>
          <a href='#' style={content} />
        </Badge>
        <Badge showZero count={0}>
          <a href='#' style={content} />
        </Badge>
        <h1 className='h1'>
          独立使用
        </h1>
        <p>不包裹任何元素即是独立使用，可自定样式展现。</p>
        <Badge count={25} style={{ marginRight: '10px' }} />
        <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9', marginLeft: '30px' }} />
        <Badge count={109} style={{ backgroundColor: '#87d068', marginLeft: '30px' }} />
        <h1 className='h1'>
          封顶数字
        </h1>
        <p>超过 overflowCount 的会显示为overflowCount+，默认的 overflowCount 为 99。</p>
        <Badge count={99} overflowCount='10'>
          <a href='#' style={content} />
        </Badge>
        <Badge count={200}>
          <a href='#' style={content} />
        </Badge>
        <Badge count={1000} overflowCount='999'>
          <a href='#' style={content} />
        </Badge>
        <h1 className='h1'>
          讨嫌的小红点
        </h1>
        <p>没有具体的数字。</p>
        <Badge>
          <Icon type='phone' />
        </Badge>
        <Badge dot>
          <Icon type='phone' />
        </Badge>
        <Badge dot>
          <a href='#'>一些通知</a>
        </Badge>
        <h1>可点击</h1>
        <p>用a标签包裹即可</p>
        <a href='#'>
          <Badge count={5}>
            <span className='example' />
          </Badge>
        </a>
        <h1>自定义标题</h1>
        <p>设置鼠标放在状态点上时显示的</p>
        <Badge title='DBox hover text' count={5}>
          <a href='#' style={content} />
        </Badge>
        <h1>状态点</h1>
        <span>用于表示状态的小圆点。</span>
        <div style={{ position: 'relative', marginTop: '20px' }}>
          <Badge dot status='success' style={{ marginLeft: '15px' }} />
          <Badge dot status='error' style={{ marginLeft: '75px' }} />
          <Badge dot status='default' style={{ marginLeft: '170px' }} />
          <Badge dot status='processing' style={{ marginLeft: '300px' }} />
          <Badge dot status='warning' style={{ marginLeft: '455px' }} />
        </div>
      </div>
    )
  }
 }
