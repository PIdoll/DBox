import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { findDOMNode } from 'react-dom';
import RcMenu, { Divider, ItemGroup } from 'rc-menu';

// import { SliderContext } from 'components/layout/sider';
import Item from './MenuItem';
import SubMenu from './Submenu';

// import animation from '../_util/openAnimation';
import warning from '../_util/warning';

import './style/index.jsx';

export default class Menu extends React.Component {
    static Divider = Divider;
    static ItemGroup = ItemGroup;
    static Item = Item;
    static SubMenu = SubMenu;
    static defaultProps = {
      prefixCls: 'idoll-menu',
      className: '',
      theme: 'light', // or dark
    }
    static childContextTypes = {
      inlineCollapsed: PropTypes.bool,
      idollMenuTheme: PropTypes.string,
    };
    static contextTypes = {
      siderCollapsed: PropTypes.bool,
      collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }

    constructor(props) {
      super(props);
      warning(!('onOpen' in props || 'onClose' in props), `'onOpen'和‘onClose'已经被移除，请用'onOpenChange'代替`);
      warning(!('inlineCollapsed' in props && props.mode !== 'inline'), `'inlineCollapsed'只能在Menu的'mode'是'inline'的时候使用`);
      let openKeys;
      if ('defaultOpenKeys' in props) {
        openKeys = props.defaultOpenKeys;
      } else if ('openKeys' in props) {
        openKeys = props.openKeys;
      }
      this.state = {
        openKeys: openKeys || [],
      };
    }
    componentWillReceiveProps(nextProps, nextContext) {
      const {prefixCls} = this.props;
      if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
        this.switchModeFromInline = true;
      }
      if ('openKeys' in nextProps) {
        this.setState({
          openKeys: nextProps.openKeys
        });
        return;
      }
      if ((nextProps.inlineCollapsed && !this.props.inlineCollapsed) || (nextContext.siderCollapsed && !this.context.siderCollapsed)) {
        this.switchModeFromInline = !!this.state.openKeys.length && !!findDOMNode(this)
          .querySelectorAll(`.${prefixCls}-submenu-open`)
          .length;
        this.inlineOpenKeys = this.state.openKeys;
        this.setState({openKeys: []});
      }
      if ((!nextProps.inlineCollapsed && this.props.inlineCollapsed) || (!nextContext.siderCollapsed && this.context.siderCollapsed)) {
        this.setState({openKeys: this.inlineOpenKeys});
        this.inlineOpenKeys = [];
      }
    }
    handleOpenChange = (openKeys) => {
      this.setOpenKeys(openKeys);
      const { onOpenChange } = this.props;
      if (onOpenChange) {
        onOpenChange(openKeys);
      }
    }
    setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({ openKeys });
      }
    }
    getRealMenuMode() {
      const inlineCollapsed = this.getInlineCollapsed();
      if (this.switchModeFromInline && inlineCollapsed) {
         return 'inline';
      }
      const { mode } = this.props;
      return inlineCollapsed ? 'vertical' : mode;
    }
    // 水平折叠
    getInlineCollapsed() {
      const { inlineCollapsed } = this.props;
      if (this.context.siderCollapsed !== undefined) {
        return this.context.siderCollapsed;
      }
      return inlineCollapsed;
    }
    render() {
      const { prefixCls, className, theme } = this.props;
      const menuMode = this.getRealMenuMode();
      const menuClassName = classNames(className, `${prefixCls}-${theme}`, {
        [`${prefixCls}-inline-collapsed`]: this.getInlineCollapsed(),
      })
      const menuProps = {
        openKeys: this.state.openKeys,
        onOpenChange: this.handleOpenChange,
        className: menuClassName,
        mode: menuMode,

      }
      return (
        <RcMenu {...this.props} {...menuProps} />
      )
    }
}
