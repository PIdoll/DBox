import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style';

function noop() {
    // console.log('change')
    // 组件change && click 挂载到noop上
}

export default class Switch extends Component {
  constructor(props) {
    super(props);

    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = { checked };
  }
  static PropTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChange: PropTypes.func,
    onMouseUp: PropTypes.func,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    autoFocus: PropTypes.bool,
    size: PropTypes.string
  }

  static defaultProps = {
    prefixCls: 'dbox-switch',
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop,
    onClick: noop
  };
  componentDidMount() {
    const { autoFocus, disabled } = this.props;
    if (autoFocus && !disabled) {
      this.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  }

  setChecked(checked) {
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked
      });
    }
    this.props.onChange(checked);
  }

  toggle = () => {
    const { onClick } = this.props;
    const checked = !this.state.checked;
    this.setChecked(checked);
    onClick(checked);
  }

  // handleKeyDown = (e) => {
  //   if (e.keyCode === 37) { // Left
  //     this.setChecked(false);
  //   } else if (e.keyCode === 39) { // Right
  //     this.setChecked(true);
  //   } else if (e.keyCode === 32 || e.keyCode === 13) { // Space, Enter
  //     this.toggle();
  //   }
  // }

  // Handle auto focus when click switch in Chrome
  // handleMouseUp = (e) => {
  //   if (this.node) {
  //     this.node.blur();
  //   }
  //   if (this.props.onMouseUp) {
  //     this.props.onMouseUp(e);
  //   }
  // }

  focus() {
    this.node.focus();
  }

  blur() {
    this.node.blur();
  }

  saveNode = (node) => {
    this.node = node;
  }

  render() {
    const { className, prefixCls, disabled, loading,
      checkedChildren, tabIndex, unCheckedChildren, size, ...restProps } = this.props;
    const checked = this.state.checked;
    const switchTabIndex = disabled ? -1 : (tabIndex || 0);
    const switchClassName = classNames('dbox-switch', {
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-loading`]: loading
    });
    return (
      <span
        {...restProps}
        className={switchClassName}
        tabIndex={switchTabIndex}
        ref={this.saveNode}
        onClick={this.toggle}
      >
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
    );
  }
}

