import React from 'react';
import Badge from 'components/badge/index';
import Icon from '../../components/icon/index';
import Button from '../../components/button/button';
import Switch from '../../components/switch/switch';
const ButtonGroup = Button.Group;

export default class BadgeView extends React.Component {
  state = {
    show: true,
    count: 5,
  }
  decline = () => {
    const count = this.state.count - 1;
    if (count < 0) {
      this.setState({ count: 0 })
    } else {
      this.setState({count})
    }
  }
  increase = () => {
    const count = this.state.count + 1;
    this.setState({count})
  }
  onChange = (show) => {
    this.setState({show})
  }
  render() {
    const content = {
      width: 64,
      height: 64,
      borderRadius: 3,
      background: '#E2E2E2',
      display: 'inline-block',
    }
    return (
      <div id='main-container'>
        <h1>
          基本徽标展示
        </h1>
        <p style={{ marginBottom: '10px' }}>基本功能展示</p>
        <Badge count={8}>
          <a href='javascript:;' style={content} />
        </Badge>
        <h1>独立使用</h1>
        <p style={{ marginBottom: '10px' }}>不包裹任何元素即是独立使用，可自定样式展现。</p>
        <Badge count={55} />
        <Badge count={8} style={{ backgroundColor: '#13B886' }} />
        <Badge count={999} style={{ backgroundColor: '#87d068' }} />
        <h1>
          封顶数字
        </h1>
        <p style={{ marginBottom: '10px' }}>超过 overflowCount 的会显示为overflowCount+，默认的 overflowCount 为 99。</p>
        <Badge count={9} overflowCount='10'>
          <a href='javascript:;' style={content} />
        </Badge>
        <Badge count={200}>
          <a href='javascript:;' style={content} />
        </Badge>
        <Badge count={1000} overflowCount='999'>
          <a href='javascript:;' style={content} />
        </Badge>
        <h1>
          讨嫌的小红点
        </h1>
        <p style={{ marginBottom: '10px' }}>没有具体的数字。</p>
        <Badge>
          <Icon type='phone' />
        </Badge>
        <Badge dot>
          <Icon type='phone' />
        </Badge>
        <Badge dot>
          <a href='www.baidu.com' target='_blank'>一些通知</a>
        </Badge>
        <h1>可点击</h1>
        <p style={{ marginBottom: '10px' }}>用a标签包裹即可</p>
        <a href='javascript:;'>
          <Badge count={8}>
            <span className='example' />
          </Badge>
        </a>
        <h1>状态点</h1>
        <span>用于表示状态的小圆点。</span>
        <div style={{ position: 'relative', marginLeft: '10px' }}>
          <Badge dot status='success' />
          <Badge dot status='error' style={{ marginLeft: '20px' }} />
          <Badge dot status='default' style={{ marginLeft: '40px' }} />
          <Badge dot status='processing' style={{ marginLeft: '60px' }} />
          <Badge dot status='warning' style={{ marginLeft: '80px' }} />
        </div>
        <div style={{ position: 'relative', marginTop: '20px', marginLeft: '10px' }}>
          <Badge dot status='success' text='成功' /><br />
          <Badge dot status='error' text='错误' style={{ top: '28px' }} /><br />
          <Badge dot status='default' text='默认' style={{ top: '48px' }} /><br />
          <Badge dot status='processing' text='进行中' style={{ top: '68px' }} /><br />
          <Badge dot status='warning' text='警告' style={{ top: '88px' }} /><br />
        </div>
        <h1>动态</h1>
        <p style={{ marginBottom: '10px' }}>展示动态变化</p>
        <div style={{ marginBottom: '10px' }}>
          <Badge count={this.state.count}>
            <a href='javascript:;' style={content} />
          </Badge>
          <ButtonGroup>
            <Button onClick={this.decline}>
              <Icon type='remove' />
            </Button>
            <Button onClick={this.increase}>
              <Icon type='plus' />
            </Button>
          </ButtonGroup>
          <br />
        </div>
        <div>
          <Badge dot={this.state.show}>
            <a href='javascript:;' style={content} />
          </Badge>
          <Switch checked={this.state.show} onChange={this.onChange} />
        </div>
      </div>
    )
  }
 }
