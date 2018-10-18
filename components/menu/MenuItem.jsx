import React from 'react'
import { Item } from 'rc-menu'
import Tooltip from 'components/tooltip';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
  static contextTypes = {
    inlineCollapsed: PropTypes.bool,
  }
  static isMenuItem = 1;
  onKeyDown = (e) => {
    this.menuItem.onKeyDown(e);
  }
  saveMenuItem = (node) => {
    this.menuItem = node;
  }
  render() {
    const { inlineCollapsed } = this.context;
    const { level, rootPrefixCls, children } = this.props;
    return (
      <Tooltip
        title={inlineCollapsed && level === 1 ? children : ''}
        placement='right'
        overlayClassName={`${rootPrefixCls}-inline-collapsed-tooltip`}
      >
        <Item {...this.props} ref={this.saveMenuItem} />
      </Tooltip>
    )
  }
}
