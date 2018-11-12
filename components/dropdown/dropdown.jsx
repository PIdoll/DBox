import React from 'react';
import Animate from 'rc-animate';
import RcDropdown from 'rc-dropdown';
import './style/index.jsx'

export default class Dropdown extends React.Component {
  static defaultProps = {
    transitionName: 'slide-up',
    prefixCls: 'idoll-dropdown',
    mouseEnterDelay: 0.5,
    mouseLeaveDelay: 0.1,
  }

  render() {
    return (
      <Animate
        component=''
        showProp='idoll-dropdown-menu-submenu-hidden'
        transitionName='slide-up'
      >
        <RcDropdown {...this.props} />
      </Animate>
    )
  }
}
