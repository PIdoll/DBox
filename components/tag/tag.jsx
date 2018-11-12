import React, { Component } from 'react';
import Animate from 'rc-animate';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom'
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
    static propTypes = {
        prefixCls: PropTypes.string,
        checked: PropTypes.bool,
        closable: PropTypes.bool
    }
    static defaultProps = {
        prefixCls: 'idoll-tag',
        onClick() {},
        closable: false,
        hover: false
    }
    componentWillUnmount() {
		if (this.clickedTimeout) {
			clearTimeout(this.clickedTimeout);
		}
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}
    clearButton = (button) => {
		button.className = button.className.replace(`${this.props.prefixCls}-clicked`, '');
    }
    // 添加单击效果
	handleClick = (...args) => {
		const buttonNode = findDOMNode(this);
		this.clearButton(buttonNode);
		this.clickedTimeout = setTimeout(() => (buttonNode.className += ` ${this.props.prefixCls}-clicked`), 10);
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => this.clearButton(buttonNode), 500)
        this.props.onClick(...args);
        this.setState({checked: !this.state.checked})
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
     render () {
        const {children, prefixCls, color, hot, closable} = this.props;
        let isChecked = this.state.checked;
        let iconStyle = {
            marginLeft: 8
        }
        const closeIcon = closable ? <Icon style={iconStyle} type='close' onClick={this.close} /> : null;
        const cls = classNames(prefixCls, {
            [`${prefixCls}-hot`]: hot,
            [`${prefixCls}-hot-checked`]: isChecked && hot,
            [`${prefixCls}-checkable-checked`]: isChecked
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
              style={{ backgroundColor: /blue|red|green|yellow/.test(color) ? null : color }}
              key={children}
              className={cls}
              onClick={this.handleClick}>
              <span>{children}</span>
            </div>)}
          </Animate>
        )
    }
}
