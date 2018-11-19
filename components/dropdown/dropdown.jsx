import React from 'react';
import RcDropdown from 'rc-dropdown';
import './style/index.jsx'

export default class Dropdown extends React.Component {
  static defaultProps = {
    transitionName: 'idollSlideUpIn',
    prefixCls: 'idoll-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
  }

  render() {
    return (
      <RcDropdown {...this.props} />
    )
  }
}
