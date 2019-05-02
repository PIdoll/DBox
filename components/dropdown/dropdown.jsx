import React from 'react';
import { PropTypes } from 'prop-types';
import RcDropdown from 'rc-dropdown';
import './style/index'

export default class Dropdown extends React.Component {
  static defaultProps = {
    transitionName: 'slide-up',
    prefixCls: 'idoll-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
  }
  static propTypes = {
    placement: PropTypes.string,
    trigger: PropTypes.array,
    overlay: PropTypes.any,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    icon: PropTypes.string,
    block: PropTypes.bool
}

  render() {
    return (
      <RcDropdown {...this.props} />
    )
  }
}
