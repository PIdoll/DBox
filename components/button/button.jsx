import React from 'react'
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { findDOMNode } from 'react-dom'

import Icon from 'components/icon'

import './style/index.js'

export default class Button extends React.Component {
	static defaultProps = {
	    prefixCls: 'idoll-btn',
	    onClick() {},
	    ghost: false,
	    loading: false,
	    text: false
  	}
	static propTypes = {
	    type: PropTypes.string,
	    shape: PropTypes.oneOf(['circle', 'circle-outline']),
	    size: PropTypes.oneOf(['large', 'default', 'small']),
	    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
	    onClick: PropTypes.func,
	    loading: PropTypes.bool,
	    className: PropTypes.string,
	    icon: PropTypes.string
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
	}
	render() {
		const { type, text, shape, size, className, htmlType, children, icon, loading, ghost, prefixCls, ...others } = this.props;
		const sizeCls = ({large: 'lg', small: 'sm'})[size] || '';
		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-${type}`]: type,
			[`${prefixCls}-${shape}`]: shape,
			[`${prefixCls}-${sizeCls}`]: sizeCls,
			[`${prefixCls}-icon-only`]: !children && icon,
			[`${prefixCls}-loading`]: loading,
			[`${prefixCls}-background-ghost`]: ghost,
			[`${prefixCls}-text`]: text,
			[className]: className

		})
    const iconType = icon;
    const kids = React.Children.map(children, insertSpace);
    const iconNode = iconType ? <Icon type={icon} /> : null;
		return (
  <button {...others} type={htmlType || 'button'} className={classes} onClick={this.handleClick}>
    {iconNode}{ kids }
  </button>
			)
	}
}

// ----------------如果是两个中文字符，则在两个中文字符中自动插入一个空格--------------------------------
function insertSpace(child) {
	if (isString(child.type && isTwoCNChar(child.props.children))) {
		return React.cloneElement(child, {}, child.props.split('').join(' '));
	}
	if (isString(child)) {
		if (isTwoCNChar(child)) { child = child.split('').join(' ') }
		return <span>{child}</span>
  }
  return child;
}
// 判断字符串类型
function isString(str) {
	return typeof str === 'string';
}
// 判断是否是两个中文字符
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
// -------------------------------insertSpace End-----------------------------------------------------
