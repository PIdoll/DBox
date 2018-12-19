import React from 'react';
import Header from '../header';
import Button from 'components/button';
import classNames from 'classnames';
import QRCODE from '../../assets/images/HAPPY PINGAN.png';

import './style/index';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleMouseenter = () => {
    this.setState({ show: true });
  }

  handleMouseLeave = () => {
    this.setState({ show: false });
  }

  handleStartUse = () => {
  }

  render () {
    const { show } = this.state;

    const cls = classNames('QRCode', {
      happy_pinan: !show
    })
    return (
      <div className='homepage_pic'>
        <Header />
        <div className='description_container'>
          <div className='team'>@2018 DBox Team</div>
          <div className='component_name'>DBOX DESIGN</div>
          <div className='component_name2'>SYSTEM</div>
          <div className='purpose'>一套基于React实现的PC端UI组件库,致力于高效的创建简约美观的产品体验</div>
          <div className='operation'>
            <Button type='primary' onClick={this.handleStartUse} style={{ marginRight: 24 }}>开始使用</Button>
            <Button
              onMouseEnter={this.handleMouseenter}
              onMouseLeave={this.handleMouseLeave}>联系我们</Button>
            <div className={cls}>
              <img src={QRCODE} alt='快乐平安' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
