import React from 'react';
import RcDropdown from 'rc-dropdown';
import './style/index.jsx'

export default class Dropdown extends React.Component {
  static defaultProps = {
    transitionName: 'antSlideUpIn',
    prefixCls: 'idoll-dropdown',
    mouseEnterDelay: 0.3,
    mouseLeaveDelay: 0.1,
  }

  render() {
    return (
      <RcDropdown transitionName='antSlideDownOut' {...this.props} />
    )
  }
}
