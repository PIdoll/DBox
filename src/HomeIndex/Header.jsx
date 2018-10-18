import React, { Component } from 'react';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Popover } from 'antd';

export class Header extends Component {
	static prop
	state = {
		menuVisibel: false
	};
	handleShowMenu = () => {
		this.setState({menuVisibel: true});
	};
	onMenuVisibleChange = (visible) => {
		this.setState({menuVisibel: visible});
	}
	render() {
		const { isFirstScreen, isMobile } = this.props;
		const { menuVisibel } = this.state;
		const menuMode = isMobile ? 'inline' : 'horizontal';
		const headerClassName = classNames({
			clearfix: true,
			'home-nav-white': !isFirstScreen
		});
		const menu = (
  <Menu mode={menuMode} defaultSelectedKeys={['home']} id='nav' key='nav' >
    <Menu.Item key='/home'>首页</Menu.Item>
    <Menu.Item key='docs/home'>组件</Menu.Item>
    <Menu.Item key='docs/resource'>资源</Menu.Item>
    <Menu.Item key='docs/chat'>社区 </Menu.Item>
  </Menu>
		)
		return (
  <header id='header' className={headerClassName}>
    { menuMode === 'inline' ? (
      <Popover
        overlayClassName='popover-menu'
        placement='bottomRight'
        content={menu}
        trigger='click'
        visible={menuVisibel}
        arrowPointAtCenter
        onVisibleChange={this.onMenuVisibleChange}
      >
        <Icon className='nav-phone-icon' type='menu' onClick={this.handleShowMenu} />
      </Popover>
       ) : null }
    <Row>

      <Col lg={24} md={24} sm={0} xs={0}>
        {menuMode === 'horizontal' ? menu : null}
      </Col>
    </Row>
  </header>
		);
	}
}
