import React from 'react'
import { SubMenu as RcSubMenu } from 'rc-menu'
import PropTypes from 'prop-types';
import classNames from 'classnames'

export default class SubMenu extends React.Component {
  static contextTypes = {
    idollMenuTheme: PropTypes.string,
  }
  onKeyDown = (e) => {
    this.subMenu.onKeyDown(e);
  }
  saveSubMenu = (node) => {
    this.subMenu = node;
  }
  render() {
    const { rootPrefixCls, className } = this.props;
    const theme = this.context.idollMenuTheme;
    return (
      <RcSubMenu
        {...this.props}
        ref={this.saveSubMenu}
        popupClassName={classNames(`${rootPrefixCls}-${theme}`, className)}
      />
    )
  }
}
