import React from 'react';
import PropTypes from 'prop-types';
import RcMenu, { Divider, ItemGroup } from 'rc-menu';
import Item from './MenuItem';
import SubMenu from './SubMenu';
import warning from '../_util/warning';

import './style/index';

function noop() {
}
export default class Menu extends React.Component {
    static Divider = Divider;
    static ItemGroup = ItemGroup;
    static Item = Item;
    static SubMenu = SubMenu;
    static defaultProps = {
      prefixCls: 'idoll-menu',
      className: '',
      onClick: noop,
      onClose: noop,
      theme: 'dark', // or light
    }
    static childContextTypes = {
      inlineCollapsed: PropTypes.bool,
      idollMenuTheme: PropTypes.string,
      mode: PropTypes.string
    };
    static propTypes = {
	    defaultOpenKeys: PropTypes.any,
	    style: PropTypes.object,
	    defaultSelectedKeys: PropTypes.array,
	    openKeys: PropTypes.array,
	    selectedKeys: PropTypes.array,
      forceSubMenuRender: PropTypes.bool,
      selectable: PropTypes.bool,
      multiple: PropTypes.bool,
      subMenuCloseDelay: PropTypes.number,
      subMenuOpenDelay: PropTypes.number,
	    mode: PropTypes.oneOf(['vertical', 'vertical-right', 'horizontal', 'inline']),
	    theme: PropTypes.oneOf(['dark', 'light']),
	    onClick: PropTypes.func,
	    onDeselect: PropTypes.func,
	    onOpenChange: PropTypes.func,
	    onSelect: PropTypes.func,
	    className: PropTypes.string,
	}
    getChildContext () {
      return {
        idollMenuTheme: this.props.theme,
        mode: this.props.mode
      }
    }
    constructor(props) {
      super(props);
      warning(!('inlineCollapsed' in props && props.mode !== 'inline'), `'inlineCollapsed'只能在Menu的'mode'是'inline'的时候使用`);
      this.state = {
        openKeys: [],
      };
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
        this.switchModeFromInline = true;
      }
      if ('openKeys' in nextProps) {
        this.setOpenKeys(nextProps.openKeys)
      }
    }
    handleClick = (e) => {
      this.setOpenKeys([]);
      this.props.onClick(e);
    }
    handleCloseKeys = (e) => {
      const { openKeys } = e;
      this.setOpenKeys(openKeys);
      this.props.onClose(e);
    }
    handleOpenChange = (openKeys) => {
      this.setOpenKeys(openKeys);
      if (!('onOpenChange' in this.props)) {
        this.setOpenKeys(openKeys);
      }
    }
    setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({ openKeys });
      }
    }
    render() {
      let props = {}
      const className = `${this.props.className} ${this.props.prefixCls}-${this.props.theme}`;
      if (this.props.mode !== 'inline') {
        props = {
          openKeys: this.state.openKeys,
          onOpenChange: this.handleOpenChange,
          onClick: this.handleClick,
          onClose: this.handleCloseKeys,
          className,
        }
      } else {
        props = {
          className,
        }
      }
      return (
        <RcMenu {...this.props} {...props} />
      )
    }
}
