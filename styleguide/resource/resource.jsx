import React from 'react';
import Header from '../header';
import HeaderNav from '../header-nav';
import sketchPath from '../../assets/images/Sketch.png';
import QRCODE from '../../assets/images/HAPPY PINGAN.png';
import Button from 'components/button';
import classNames from 'classnames';
import './style/index';

export default class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleOnMouseEnter = () => {
    this.setState({
      show: true
    }, () => {
      console.log(this.state.show)
    });
  }

  handleOnMouseLeave = () => {
    this.setState({
      show: false
    })
  }
  render() {
    const { show } = this.state;
    const cls = classNames('relation', {
      isShow: show
    });
    return (
      <section className='resource_container'>
        <div className='header'>
          <Header>
            <HeaderNav />
          </Header>
        </div>
        <div className='clearfix_fixed' />
        <div className='design_resource'>
          <h1>设计资源</h1>
          <p>DBox Sketch库包含于设计和构建Web产品的最新基础组件,下载以开始使用Sketch文档,如果初次使用课阅读<a href='https://www.sketchapp.com/'>如何使用Sketch Libraries</a></p>
          <div className='sketch_icon'>
            <img className='sketch' src={sketchPath} alt='sketch' />
            <p>DBox&nbsp; Library_V1.0</p>
            <div className='download_operation'>
              <div>
                <Button block>立即下载</Button>
              </div>
              <div>
                <Button
                  type='primary'
                  block
                  onMouseLeave={this.handleOnMouseLeave}
                  onMouseEnter={this.handleOnMouseEnter}>
                  获取链接
                </Button>
              </div>
            </div>
            <div className={cls}>
              <img className='qrcode' src={QRCODE} alt='快乐平安' />
              <div className='scamQR'>使用快乐平安扫码加群</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
