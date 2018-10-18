import React, { Component } from 'react';
import Animate from 'rc-animate';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';

import './style';

export default class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            closable: this.props.closable
        }
        this.handleClick = this.handleClick.bind(this);
        this.close = this.close.bind(this);
      }
    static PropTypes = {
        className: PropTypes.string,
        prefixCls: PropTypes.string,
        checked: PropTypes.bool,
        hover: PropTypes.bool,
        close: PropTypes.func,
        handleClick: PropTypes.func,
        closable: PropTypes.bool
    }
    static defaultProps = {
        prefixCls: 'idoll-tag',
        closable: false,
        hover: false
    }
    close = (e) => {
        const onClose = this.props.onClose;
        if (onClose) {
            onClose(e)
        }
        if (e.defaultPrevented) {
            return false;
        }

        this.setState({
            closable: false
        })
    }
    handleClick = (e) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(e)
        }
        this.setState({checked: !this.state.checked})
    }
     render () {
        const {children, prefixCls, color, closable, size, hover} = this.props;
        let isChecked = this.state.checked;
        let iconStyle = {
            marginLeft: 8
        }
        const closeIcon = closable ? <Icon style={iconStyle} type='close' onClick={this.close} /> : null;
        const cls = classNames(prefixCls, {
            [`${prefixCls}-${color}`]: color,
            [`${prefixCls}-checkable`]: hover,
            [`${prefixCls}-checkable-checked`]: (isChecked && hover) ? isChecked : '',
            [`${prefixCls}-close`]: size ? 'small' : ''
        })

        const deletableTag = <div
          data-show={this.state.closable}
          key={children}
          className={cls}
          onClick={this.handleClick}>
          <span>{children}</span>
          {closeIcon}
        </div>
        const tag = !this.state.closable ? null : (deletableTag);

        return (
          <Animate
            component=''
            showProp='data-show'
            >
            {closable ? tag : (<div
              data-show={this.state.closable}
              key={children}
              className={cls}
              onClick={this.handleClick}>
              <span>{children}</span>
            </div>)}
          </Animate>
        )
    }
}

