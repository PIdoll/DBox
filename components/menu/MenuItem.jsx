import React from 'react'
import { Item } from 'rc-menu'
import Popover from '../../components/popover';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class MenuItem extends React.Component {
  static contextTypes = {
    mode: PropTypes.string,
    idollMenuTheme: PropTypes.string,
  }
  static isMenuItem = 1;
  onKeyDown = (e) => {
    this.menuItem.onKeyDown(e);
  }
  saveMenuItem = (node) => {
    this.menuItem = node;
  }
  render() {
    const { mode, idollMenuTheme } = this.context;
    const { level, rootPrefixCls, children } = this.props;
    const menuClassName = classNames({
      [`${rootPrefixCls}-inline-collapsed-tooltip`]: mode === 'vertical',
      [`${rootPrefixCls}-theme-${idollMenuTheme}`]: idollMenuTheme,
    })
    return (
      mode === 'vertical' && level === 1 ? (
        <Popover
          content={children}
          placement='right'
          overlayClassName={menuClassName}
      >
          <Item {...this.props} ref={this.saveMenuItem} />
        </Popover>
      ) : <Item {...this.props} ref={this.saveMenuItem} />
    )
  }
}
