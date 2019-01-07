import React from 'react'
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { findDOMNode } from 'react-dom';

import Icon from '../icon'

import './style/index.js'


export default class Button extends React.Component {
	static defaultProps = {
	    prefixCls: 'idoll-btn',
	    onClick() {},
	    ghost: false,
	    loading: false,
		text: false,
		block: false
  	}
	static propTypes = {
	    type: PropTypes.string,
	    shape: PropTypes.oneOf(['circle', 'circle-outline', 'square']),
	    size: PropTypes.oneOf(['large', 'default', 'small']),
	    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
	    onClick: PropTypes.func,
	    loading: PropTypes.bool,
	    className: PropTypes.string,
		icon: PropTypes.string,
		block: PropTypes.bool,
		iconLocation: PropTypes.string,
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

	isNeedInserted() {
		const { icon, children, size } = this.props;
		const sizeCls = ({large: 'lg', small: 'sm'})[size] || '';
		return React.Children.count(children) === 1 && !icon && sizeCls !== 'sm';
	  }
	render() {
		const { type, text, shape, size, className, htmlType, children, icon, loading, ghost, prefixCls, block, iconLocation, ...others } = this.props;
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
			[`${prefixCls}-block`]: block,
			[className]: className
		})
	const iconType = loading ? 'loading' : icon;
	const kids = (children || children === 0)
      ? React.Children.map(children, child => insertSpace(child, this.isNeedInserted())) : null;
	const iconNode = iconType ? <Icon type={iconType} /> : null;
	if ('href' in others) {
		return (
  <a {...others}
    className={classes}
    onClick={this.handleClick}>
    {iconNode}{kids}
  </a>
			);
	} else {
		//	如果是下拉框图标，则icon放右边
		if (iconLocation === 'right') {
			return (
  <button {...others} type={htmlType || 'button'} className={classes} onClick={this.handleClick}>
    {kids}{iconNode}
  </button>

		);
		} else {
			return (

  <button {...others} type={htmlType || 'button'} className={classes} onClick={this.handleClick}>
    {iconNode}{kids}
  </button>

			);
		}
	}
	}
}

// ----------------如果是两个中文字符，则在两个中文字符中自动插入一个空格--------------------------------
function insertSpace(child, needInserted) {
	if (child == null) {
		return;
	  }
	const SPACE = needInserted ? ' ' : '';
	if (isString(child.type && isTwoCNChar(child.props.children))) {
		return React.cloneElement(child, {}, child.props.split('').join(SPACE));
	}
	if (isString(child)) {
		 if (isTwoCNChar(child)) { child = child.split('').join(SPACE) }
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
